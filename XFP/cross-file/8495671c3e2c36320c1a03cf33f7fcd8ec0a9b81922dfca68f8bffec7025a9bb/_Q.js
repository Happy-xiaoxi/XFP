export function Q(){
    if (K.length > 0) {
      var e =
          (null == (t = document.querySelector("#netlify-rum-container"))
            ? void 0
            : t.getAttribute("data-netlify-cwv-token")) || "",
        n = K[0];
      K.slice(1).forEach(function (e) {
        var t;
        (t = n.events).push.apply(t, e.events);
      }),
        fetch("https://ingesteer.services-prod.nsvcs.net/rum_collection", {
          method: "POST",
          keepalive: !0,
          mode: "cors",
          headers: {
            Authorization: "Bearer ".concat(e),
            "Content-Type": "application/json",
          },
          body: JSON.stringify(n),
        }),
        (K = []);
    }
    var t;
  }