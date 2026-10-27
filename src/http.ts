/** Native Node.js fetch transport. A session can be closed to abort all in-flight requests. */
import {py} from './_runtime';
export interface HttpRequestOptions {
  data?: Record<string,string> | null;
  json?: Record<string,unknown> | null;
  headers?: Record<string,string> | null;
  timeout?: {total?: number};
}
export interface HttpResponse {
  readonly status:number;
  json(options?:unknown):Promise<unknown>;
}
export interface HttpSession {
  post(url:string,options:HttpRequestOptions):HttpResponse|Promise<HttpResponse>;
}
export class FetchSession implements HttpSession {
  private readonly pending=new Set<AbortController>();
  private closed=false;
  constructor(private readonly fetchImpl:typeof fetch=globalThis.fetch) {}
  async post(url:string,options:HttpRequestOptions={}):Promise<HttpResponse> {
    if(this.closed) throw new py.ClientError('Session is closed');
    const controller=new AbortController();this.pending.add(controller);
    const external=py.currentSignal();
    const signal=external?AbortSignal.any([controller.signal,external]):controller.signal;
    const timer=setTimeout(()=>controller.abort(),(options.timeout?.total??30)*1000);
    const done=()=>{clearTimeout(timer);this.pending.delete(controller);};
    const headers=new Headers(options.headers??{});
    let body:string|undefined;
    if(options.data!=null){headers.set('Content-Type','application/x-www-form-urlencoded');body=new URLSearchParams(options.data).toString();}
    else if(options.json!=null){headers.set('Content-Type','application/json');body=JSON.stringify(options.json);}
    try {
      const response=await this.fetchImpl(url,{method:'POST',headers,body,signal,redirect:'error'});
      return {status:response.status,json:async()=>{
        try {
          let text:string;
          try{text=await response.text();}catch{throw new py.ClientError('Unable to read Nissan response');}
          try{return JSON.parse(text);}catch{throw new py.ValueError('Invalid JSON response');}
        }finally{done();}
      }};
    }catch{done();throw new py.ClientError('Unable to reach Nissan service');}
  }
  close():void {this.closed=true;for(const controller of this.pending) controller.abort();this.pending.clear();}
}
