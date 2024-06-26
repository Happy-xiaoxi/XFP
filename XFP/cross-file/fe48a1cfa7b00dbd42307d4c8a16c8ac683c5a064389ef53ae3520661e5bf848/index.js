import { fingerprint_battery } from './batteryfp.js';
import { fingerprint_canvas } from './canvasfp.js';
import { fingerprint_navigator } from './navigatorfp.js';
import { fingerprint_performance } from './performancefp.js';
import { fingerprint_seed } from './seedfp.js';
import { fingerprint_sensitive } from './sstvfp.js'
import { getWebglFp } from './webglfp.js';
// import { fingerprint_window } from './windowfp.js';




// async function displayMedia(){
//     const mediaInfo = await fingerprint_media();
//     console.log("mediaInfo : ", mediaInfo);
// };
// displayMedia()

const battery_hash = fingerprint_battery();
const canvas_hash = fingerprint_canvas();
const navigator_hash = fingerprint_navigator();
const performance_hash = fingerprint_performance();
const seed_hash = fingerprint_seed();
const sensitive_hash = fingerprint_sensitive();
// const window_hash = fingerprint_window();
const webgl_hash = getWebglFp();

console.log("battery hash: ",battery_hash)
console.log("canvas hash: ",canvas_hash)
console.log("navigator hash: ",navigator_hash)
console.log("performance hash: ",performance_hash)
console.log("seed hash: ",seed_hash)
console.log("sensitive hash: ",sensitive_hash)
// console.log("window_hash : ",window_hash)
console.log("webgl hash: ",webgl_hash)



