export function R(e){
    var n = H[H.length - 1],
      t = _[e.interactionId];
    if (t || H.length < 10 || e.duration > n.latency) {
      if (t) t.entries.push(e), (t.latency = Math.max(t.latency, e.duration));
      else {
        var r = { id: e.interactionId, latency: e.duration, entries: [e] };
        (_[r.id] = r), H.push(r);
      }
      H.sort(function (e, n) {
        return n.latency - e.latency;
      }),
        H.splice(10).forEach(function (e) {
          delete _[e.id];
        });
    }
  }