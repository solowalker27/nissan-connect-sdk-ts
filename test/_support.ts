// @ts-nocheck
import {test} from "node:test";
import {inspect as show} from "node:util";
import {py as native} from "../src/_runtime";
const {eq, truth, isinstance, AssertionError, iterable, asyncio} = native;
  function assertEqual(a:any,b:any,message:string) {if(!eq(a,b)) throw new AssertionError(message+'\nActual: '+show(a,{depth:8})+'\nExpected: '+show(b,{depth:8}));}
  function checkAssert(value: any, message = 'Assertion failed') { if (!truth(value)) throw new AssertionError(message); }
  function raises(cls: any, pattern: string | null, body: ()=>any): any {
    const check=(error: any) => { if (!isinstance(error,cls)) throw error; if(pattern && !new RegExp(pattern).test(error.message)) throw new AssertionError(`Error ${error.message} does not match ${pattern}`); return {value:error}; };
    try { const result=body(); if(result?.then) return result.then(()=>{throw new AssertionError('Expected exception was not raised');},check); }
    catch(error) {return check(error);}
    throw new AssertionError('Expected exception was not raised');
  }
  function register(name: string, fn: (...args:any[])=>any, parameters: any[]) {
    let cases: any[] = [[]];
    for(const [keys,values] of parameters) {
      const names=typeof keys==='string'?keys.split(',').map(k=>k.trim()):keys;
      cases=cases.flatMap(c=>[...iterable(values)].map(v=>[...c,...(names.length===1?[v]:v)]));
    }
    cases.forEach((args,i)=>test(name+(parameters.length?` [${i}]`:''),async()=>{ const undo:(()=>void)[]=[]; const patch={setattr:(path:string,value:any)=>{const key=path.split('.').at(-1)!;const old=(asyncio as any)[key];(asyncio as any)[key]=value;undo.push(()=>{(asyncio as any)[key]=old;});}}; try{return await fn(...args,...(String(fn).includes('\"monkeypatch\"')?[patch]:[]));}finally{undo.reverse().forEach(f=>f());}}));
  }
export const py = {...native, assertEqual, assert:checkAssert, raises, register};
