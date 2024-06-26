import { fingerprint_canvas } from './canvasfp.js';
import { fingerprint_navigator } from './navigatorfp.js';
import { fingerprint_performance } from './performancefp.js';
import { fingerprint_seed } from './seedfp.js';
import { fingerprint_sensitive } from './sstvfp.js'
import { getWebglFp} from './webglfp.js';
import { getWebglVendorAndRenderer } from './getWebglVendorAndRenderer.js'
import { isWebGlSupported } from './isWebGlSupported.js';
import { fingerprint_window } from './windowfp.js';


async function fingerprint_media(){
    var media = navigator.mediaDevices;
    var med_arr = new Array();

    const devices = await media.enumerateDevices();
    const displayMedia = await media.getDisplayMedia({video: true});  


    med_arr.push(devices,
        displayMedia,
        media.getSupportedConstraints,
        media.getUserMedia,
        media.ondevicechange);
    return med_arr;
}

fingerprint_media()

function fingerprint_battery(){
    var bat_arr = new Array();

    navigator.getBattery().then(function(battery){
        bat_arr.push(battery.charging);	
        bat_arr.push(battery.chargingTime);	
        bat_arr.push(battery.dischargingTime);	
        bat_arr.push(battery.level);	
    });	
    
    return bat_arr;
}

const battery_hash = fingerprint_battery();
const canvas_hash = fingerprint_canvas();
const navigator_hash = fingerprint_navigator();
const performance_hash = fingerprint_performance();
const seed_hash = fingerprint_seed();
const sensitive_hash = fingerprint_sensitive();
const window_hash = fingerprint_window();
const webgl_hash = getWebglFp();
const getWebglVendor = getWebglVendorAndRenderer()
const isWebGlSupport = isWebGlSupported()

console.log("battery hash: ",battery_hash)
console.log("canvas hash: ",canvas_hash)
console.log("navigator hash: ",navigator_hash)
console.log("performance hash: ",performance_hash)
console.log("seed hash: ",seed_hash)
console.log("sensitive hash: ",sensitive_hash)
console.log("window_hash : ",window_hash)
console.log("webgl hash: ",webgl_hash)
console.log("getWebglVendor: ",getWebglVendor)
console.log("isWebGlSupported: ",isWebGlSupport)




