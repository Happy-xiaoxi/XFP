
import { success, error, geo_info  } from "./sstvfp_sep.js";
export function fingerprint_sensitive(){
    var geo_arr = new Array();

    // geo_arr.push('Geolocation.clearWatch', 'Geolocation.getCurrentPosition', 'Geolocation.watchPosition');
    geo_arr = geo_info(geo_arr)
    const geo = navigator.geolocation;
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    // function success(pos) {
    //     var crd = pos.coords;
        
    //     console.log('Your current position is:');
    //     console.log(`Latitude : ${crd.latitude}`);
    //     console.log(`Longitude: ${crd.longitude}`);
    //     console.log(`More or less ${crd.accuracy} meters.`);
    // }
      
    // function error(err) {
    //     console.warn(`ERROR(${err.code}): ${err.message}`);
    // }
    const watch = geo.watchPosition(success, error, options);
    geo_arr.push(geo.getCurrentPosition(success, error, options),
        watch,
        geo.clearWatch(watch)
    );
    return geo_arr;
}