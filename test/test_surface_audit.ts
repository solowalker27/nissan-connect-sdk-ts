import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {join} from 'node:path';
import * as sdk from '../src/index';
const provenance=JSON.parse(readFileSync(join(__dirname,'../../PROVENANCE.json'),'utf8'));
test('every upstream async client method is present in the native client',()=>{
 const client=new sdk.NissanClient();
 try {for(const name of provenance.asyncMethods) assert.equal(typeof (client as any)[name],'function',name);}finally{client.close();}
});
test('every upstream public export has a runtime value or an emitted TypeScript type',()=>{
 const declarations=readFileSync(join(__dirname,'../src/index.d.ts'),'utf8');
 for(const name of provenance.publicExports) assert.ok(name in sdk || declarations.includes(name),name);
});
