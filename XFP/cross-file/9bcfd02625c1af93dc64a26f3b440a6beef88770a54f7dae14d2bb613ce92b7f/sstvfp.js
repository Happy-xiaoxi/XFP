
import { success} from "./sstvfp_sep.js";
import { geo_info } from "./geo_info.js";
import { error } from "./error.js";

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

    const watch = geo.watchPosition(success, error, options);
    geo_arr.push(geo.getCurrentPosition(success, error, options),
        watch,
        geo.clearWatch(watch)
    );
    return geo_arr;
}