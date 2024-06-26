

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


export function value_push(per_arr,per){
    per_arr.push(per.now(), per.memory, per.timing, per.measure('finger'), per.timeOrigin, 
        per.timing.connectEnd, per.timing.domainLookupEnd, per.timing.fetchStart, 
        per.timing.loadEventStart, per.timing.navigationStart, per.timing.responseStart);
    return per_arr
}