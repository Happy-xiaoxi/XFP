export function f(e, n){
    var t = u(),
      r = "navigate";
    return (
      a >= 0
        ? (r = "back-forward-cache")
        : t &&
          (r =
            document.prerendering || s() > 0
              ? "prerender"
              : document.wasDiscarded
              ? "restore"
              : t.type.replace(/_/g, "-")),
      {
        name: e,
        value: void 0 === n ? -1 : n,
        rating: "good",
        delta: 0,
        entries: [],
        id: "v3-"
          .concat(Date.now(), "-")
          .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
        navigationType: r,
      }
    );
  }