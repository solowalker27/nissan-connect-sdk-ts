/** Native Node.js entry point; accepts the original session argument or a single options object. */
import {NissanClient as GeneratedClient} from './client';
import {FetchSession, type HttpSession} from './http';
import {py} from './_runtime';
import {Country} from './countries';
import {Tokens} from './models';
import {RequestProof} from './request_proof';
export interface NissanClientOptions {
  country?:Country;
  tokens?:Tokens|null;
  token_listener?:(tokens:Tokens)=>void|Promise<void>;
  read_only?:boolean;
  oauth_device_id?:string|null;
  request_proof?:RequestProof|null;
  request_proof_provider?:((force_refresh:boolean)=>Promise<RequestProof>)|null;
}
export class NissanClient extends GeneratedClient {
  private readonly ownedSession:FetchSession|null;
  constructor(options?:NissanClientOptions);
  constructor(session:HttpSession,options?:NissanClientOptions);
  constructor(sessionOrOptions:HttpSession|NissanClientOptions={},options:NissanClientOptions={}) {
    const isSession=typeof (sessionOrOptions as HttpSession).post==='function';
    const session=isSession?sessionOrOptions as HttpSession:new FetchSession();
    // Translated tests and generated internal calls already carry a keyword marker.
    const opts=isSession?options:sessionOrOptions as NissanClientOptions;
    super(session,py.isKw(opts)?opts:py.kw(opts));
    this.ownedSession=isSession?null:session as FetchSession;
  }
  /** Abort requests made by the default session; supplied sessions remain caller-owned. */
  close():void {this.ownedSession?.close();}
}
