export function d(e, n, t){
    try {
      if (PerformanceObserver.supportedEntryTypes.includes(e)) {
        var r = new PerformanceObserver(function (e) {
          Promise.resolve().then(function () {
            n(e.getEntries());
          });
        });
        return (
          r.observe(Object.assign({ type: e, buffered: !0 }, t || {})), r
        );
      }
    } catch (e) {}
  }