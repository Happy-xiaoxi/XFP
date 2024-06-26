export function x(){
    if (n >= 0 && n < t - C) {
      var i = {
        entryType: "first-input",
        name: e.type,
        target: e.target,
        cancelable: e.cancelable,
        startTime: e.timeStamp,
        processingStart: e.timeStamp + n,
      };
      r.forEach(function (e) {
        e(i);
      }),
        (r = []);
    }
  }