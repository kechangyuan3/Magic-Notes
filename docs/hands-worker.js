var exports={};
importScripts('./vendor/hands/vision_bundle.classic.js');
const {FilesetResolver,HandLandmarker}=exports;
let model;
self.onmessage=async e=>{const d=e.data;try{if(d.type==='init'){const files=await FilesetResolver.forVisionTasks(d.base+'wasm');model=await HandLandmarker.createFromOptions(files,{baseOptions:{modelAssetPath:d.base+'hand_landmarker.task',delegate:'CPU'},runningMode:'VIDEO',numHands:2,minHandDetectionConfidence:.55,minTrackingConfidence:.55});self.postMessage({type:'ready'})}else if(d.type==='frame'&&model){try{const result=model.detectForVideo(d.bitmap,d.time);self.postMessage({type:'result',landmarks:result.landmarks})}finally{d.bitmap.close()}}}catch(error){d.bitmap?.close();self.postMessage({type:'error',message:error.message})}};
