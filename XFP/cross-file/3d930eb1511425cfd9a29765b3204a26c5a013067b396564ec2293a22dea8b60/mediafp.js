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