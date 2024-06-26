
export function success(pos) {
    var crd = pos.coords;
    
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
}
  
export function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

export function geo_info(geo_arr){
    geo_arr.push('Geolocation.clearWatch', 'Geolocation.getCurrentPosition', 'Geolocation.watchPosition')
    return geo_arr

}