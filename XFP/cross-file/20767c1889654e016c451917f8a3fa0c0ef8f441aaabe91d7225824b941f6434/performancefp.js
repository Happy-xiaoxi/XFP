
//performance
import { print_PerformanceEntries } from './print_PerformanceEntries.js'
import { value_push } from './value_push.js';

export function fingerprint_performance(){
    var per = window.performance;
    var per_arr = new Array();
    per_arr = value_push(per_arr,per)
    return per_arr;
}


// performanceObserverEntryList.GetEntries
function print_perf_entry(pe) {
  console.log("name: "        + pe.name      +
              "; entryType: " + pe.entryType +
              "; startTime: " + pe.startTime +
              "; duration: "  + pe.duration);
}
var observe = new PerformanceObserver(function(list, obs) {
  var perfEntries = list.getEntries();
  for (var i=0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }
});
// observe.observe({entryTypes: ['frame']});


print_PerformanceEntries()

