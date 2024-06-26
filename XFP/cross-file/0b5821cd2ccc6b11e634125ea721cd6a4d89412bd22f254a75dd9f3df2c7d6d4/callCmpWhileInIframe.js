export function callCmpWhileInIframe(n, t, e, o) {
    const a = 2 === cmpVersion ? "__tcfapi" : "__cmp",
      r = Math.random().toString(),
      c = `${a}Call`,
      i = { [c]: { command: n, parameter: null, callId: r } };
    1 !== cmpVersion && (i[c].version = cmpVersion),
      (sovrn.auction.cmpCallbacks[r] = e),
      t.postMessage(i, "*"),
      window.addEventListener(
        "message",
        function (n) {
          const t = `${a}Return`;
          let e = {};
          try {
            e = "string" == typeof n.data ? JSON.parse(n.data) : n.data;
          } catch (n) {}
          if (e[t] && e[t].callId) {
            const n = e[t];
            "function" == typeof sovrn.auction.cmpCallbacks[n.callId]
              ? sovrn.auction.cmpCallbacks[n.callId](n.returnValue, n.success)
              : o("Callback must be function type.");
          }
        },
        !1
      );
  }