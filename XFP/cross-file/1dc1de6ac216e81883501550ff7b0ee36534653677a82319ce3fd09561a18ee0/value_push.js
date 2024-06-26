export function value_push(per_arr,per){
    per_arr.push(per.now(), per.memory, per.timing, per.measure('finger'), per.timeOrigin, 
        per.timing.connectEnd, per.timing.domainLookupEnd, per.timing.fetchStart, 
        per.timing.loadEventStart, per.timing.navigationStart, per.timing.responseStart);
    return per_arr
}