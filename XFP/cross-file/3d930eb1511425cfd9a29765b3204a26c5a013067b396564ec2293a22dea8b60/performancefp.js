
//performance
import { print_PerformanceEntries } from './print_PerformanceEntries.js'
import { value_push } from './sstvfp_sep.js';
import { print_perf_entry } from  './print_perf_entry.js';

export function fingerprint_performance(){
    var per = window.performance;
    var per_arr = new Array();
    per_arr = value_push(per_arr,per)
    return per_arr;
}


// performanceObserverEntryList.GetEntries

var observe = new PerformanceObserver(function(list, obs) {
  var perfEntries = list.getEntries();
  for (var i=0; i < perfEntries.length; i++) {
    print_perf_entry(perfEntries[i]);
  }
});
// observe.observe({entryTypes: ['frame']});


print_PerformanceEntries()


export function fingerprint_window(){
  var win_arr = new Array();
  win_arr.push(window.applicationCache,window.atob, window.btoa, window.clearInterval,  window.clearTimeout, window.clientInformation, window.closed, window.crypto,  window.defaultstatus, window.document, window.event, window.external, window.fetch, window.frames, window.getComputedStyle, window.history, window.innerHeight, window.innerWidth,  window.length, window.location,  window.locationbar, window.matchMedia, window.name, window.navigator, window.onerror,  window.ontouchstart, window.open, window.opener, window.orientation, window.outerHeight, window.outerWidth, window.pageXOffset,  window.pageYOffset,window.parent,  window.performance,  window.requestAnimationFrame, window.requestIdleCallback, window.screen, window.screenLeft, window.screenTop, window.screenX, window.screenY, window.self,  window.setInterval, window.setTimeout, window.speechSynthesis, window.top, window.visualViewport,  window.webkitRequestFileSystem,  window.window);
  return win_arr;
}