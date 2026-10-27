import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {FetchSession} from '../src/http';
import {NissanClient, Tokens, Country} from '../src/index';
import {py} from '../src/_runtime';

test('native fetch encodes OAuth forms and GraphQL JSON and rejects non-JSON safely', async () => {
  const requests:any[]=[];
  const server=createServer(async(req,res)=>{let body='';for await(const b of req) body+=b;requests.push({headers:req.headers,body});res.writeHead(200,{'Content-Type':'application/json'});res.end(req.url==='/bad'?'not JSON':JSON.stringify({received:true}));});
  await new Promise<void>(r=>server.listen(0,'127.0.0.1',r));
  const url=`http://127.0.0.1:${(server.address() as any).port}`;
  const session=new FetchSession();
  try {
    const form=await session.post(url,{data:{username:'owner+tag@example.test',password:'a&b=c'},timeout:{total:1}});
    assert.deepEqual(await form.json(),{received:true});
    assert.equal(requests[0].body,'username=owner%2Btag%40example.test&password=a%26b%3Dc');
    const json=await session.post(url,{json:{variables:{country:Country.US}},timeout:{total:1}});
    await json.json();
    assert.deepEqual(JSON.parse(requests[1].body),{variables:{country:'US'}});
    const bad=await session.post(url+'/bad',{timeout:{total:1}});
    await assert.rejects(()=>bad.json(),py.ValueError);
  } finally {session.close();server.closeAllConnections();await new Promise<void>(r=>server.close(()=>r()));}
});
test('native fetch timeout cancels an unfinished response body',async()=>{
 const server=createServer((_,res)=>{res.writeHead(200);res.write('{');});
 await new Promise<void>(r=>server.listen(0,'127.0.0.1',r));
 const session=new FetchSession();
 try {
  const response=await session.post(`http://127.0.0.1:${(server.address() as any).port}`,{timeout:{total:.2}});
  await assert.rejects(()=>response.json(),py.ClientError);
 }finally{session.close();server.closeAllConnections();await new Promise<void>(r=>server.close(()=>r()));}
});
test('native client defaults to a fetch session and remains read only',()=>{
 const client=new NissanClient({tokens:new Tokens('access','refresh'),country:Country.CA});
 assert.equal(client.country,Country.CA);assert.equal(client.read_only,true);assert.equal(client.tokens?.access_token,'access');
 client.close();
});
test('concurrent rejected account tokens cause one refresh and both reads recover',async()=>{
 let refreshes=0;
 const session={async post(url:string,options:any){
  let payload:any;
  if(url.endsWith('/token')){refreshes++;await new Promise(r=>setTimeout(r,10));payload={access_token:'fresh',refresh_token:'rotated'};}
  else payload=options.headers.Authorization==='Bearer fresh'?{data:{vehicles:[]}}:{};
  return {status:options.headers.Authorization==='Bearer access'?401:200,async json(){return payload;}};
 }};
 const client=new NissanClient(session,{tokens:new Tokens('access','refresh')});
 const results=await Promise.all([client.async_get_vehicles(),client.async_get_vehicles()]);
 assert.deepEqual(results,[[],[]]);assert.equal(refreshes,1);assert.equal(client.tokens?.refresh_token,'rotated');client.close();
});
test('concurrent proof rejections coalesce verification refresh without retrying indefinitely',async()=>{
 let refreshed=0;let posts=0;
 const {RequestProof}=await import('../src/index');
 const session={async post(_url:string,options:any){posts++;return {status:options.headers['X-API-Attestation']==='fresh'?200:403,async json(){return {data:{vehicles:[]}};}};}};
 const client=new NissanClient(session,{tokens:new Tokens('access','refresh'),request_proof_provider:async force=>{if(force){refreshed++;await new Promise(r=>setTimeout(r,10));}return new RequestProof(force?'fresh':'old','status');}});
 await Promise.all([client.async_get_vehicles(),client.async_get_vehicles()]);assert.equal(refreshed,1);assert.equal(posts,4);client.close();
});
test('authentication and Ariya battery parsing run through the complete native fetch pipeline',async()=>{
 const calls:{url:string;options:RequestInit}[]=[];
 const fetchImpl:typeof fetch=async(input,options)=>{
  const url=String(input);calls.push({url,options:options!});
  const payload=url.endsWith('/token')?{access_token:'access',refresh_token:'refresh'}:{data:{vehicle:{__typename:'ElectricAVK2Vehicle',batteryStatus:{level:73,isPluggedIn:true,isCharging:false,remainingChargeTime:42,remainingMileage:{value:181,unit:'MILE'}}}}};
  return new Response(JSON.stringify(payload),{status:200});
 };
 const session=new FetchSession(fetchImpl);const client=new NissanClient(session,{oauth_device_id:'stable-device'});
 try{
  await client.async_authenticate(' Driver@Example.Test ','secret');
  const status=await client.async_get_vehicle_status('SYNTHETICVIN');
  assert.equal(status.battery?.level,73);assert.equal(status.battery?.is_charging,false);
  const form=new URLSearchParams(String(calls[0].options.body));assert.equal(form.get('username'),'NISNNAVCS/driver@example.test');assert.equal(form.get('password'),'secret');
  assert.equal(new Headers(calls[1].options.headers).get('Authorization'),'Bearer access');assert.equal(new Headers(calls[1].options.headers).get('Country'),'US');
  const operation=JSON.parse(String(calls[1].options.body));assert.equal(operation.operationName,'VehicleDynamicData');assert.equal(operation.variables.vin,'SYNTHETICVIN');
 }finally{client.close();session.close();}
});
