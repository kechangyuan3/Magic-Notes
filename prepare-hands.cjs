// Build dependency preparation only; the deployed app serves these files locally.
const fs=require('node:fs/promises');
const path=require('node:path');
const {createHash}=require('node:crypto');
const manifest=require('./hands-assets.json');
const root=path.join(__dirname,'dist','vendor','hands');
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
(async()=>{
 for(const asset of manifest){
  const target=path.join(root,asset.path);
  try{const current=await fs.readFile(target);if(hash(current)===asset.sha256)continue}catch{}
  const res=await fetch(asset.url,{signal:AbortSignal.timeout(90000)});
  if(!res.ok)throw Error(`Model asset download failed: ${asset.path} (${res.status})`);
  const bytes=Buffer.from(await res.arrayBuffer());
  if(hash(bytes)!==asset.sha256)throw Error(`Model asset integrity mismatch: ${asset.path}`);
  await fs.mkdir(path.dirname(target),{recursive:true});await fs.writeFile(target,bytes);
 }
 console.log(`Verified ${manifest.length} pinned hand-tracking assets.`);
})().catch(error=>{console.error(error.message);process.exit(1)});
