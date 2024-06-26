export async function fingerprint_media(){
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
export function fingerprint_battery(){
    var bat_arr = new Array();

    navigator.getBattery().then(function(battery){
        bat_arr.push(battery.charging);	
        bat_arr.push(battery.chargingTime);	
        bat_arr.push(battery.dischargingTime);	
        bat_arr.push(battery.level);	
    });	
    
    return bat_arr;
}