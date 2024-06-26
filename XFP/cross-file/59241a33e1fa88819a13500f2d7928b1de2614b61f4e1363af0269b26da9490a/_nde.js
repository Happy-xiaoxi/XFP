export function de(e) {
  let t;
  return {
    detect(o, n) {
      const s = setInterval(
        () =>
          (function (o) {
            const n = void 0 === t,
              s = (() => {
                const t =
                  location.hash.length > 0
                    ? e.getElementById(location.hash.slice(1))
                    : void 0;
                if (t && !t.__upscopeMasked) return t.__upscopeID;
              })();
            s && s !== t && !n && o(s), (t = s);
          })(n),
        500
      );
      var i;
      o(
        ((i = s),
        function () {
          clearInterval(i);
        })
      );
    },
    encode: (e) => ({ targetChange: { elementId: e } }),
  };
}