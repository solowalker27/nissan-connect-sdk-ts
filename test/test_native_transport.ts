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
  const response=await session.post(`http://127.0.0.1:${(server.address() as any).port}`,{timeout:{total:.03}});
  await assert.rejects(()=>response.json(),py.ClientError);
 }finally{session.close();server.closeAllConnections();await new Promise<void>(r=>server.close(()=>r()));}
});
test('native client defaults to a fetch session and remains read only',()=>{
 const client=new NissanClient({tokens:new Tokens('access','refresh'),country:Country.CA});
 assert.equal(client.country,Country.CA);assert.equal(client.read_only,true);assert.equal(client.tokens?.access_token,'access');
 client.close();
});
