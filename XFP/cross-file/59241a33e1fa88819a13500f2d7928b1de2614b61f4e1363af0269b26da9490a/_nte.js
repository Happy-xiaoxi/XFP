export function te(e) {
  return {
    detect(t, o) {
      var n;
      e.addEventListener("focusout", o),
        t(
          ((n = o),
          function () {
            e.removeEventListener("focusout", n);
          })
        );
      const s = (e) => {
        R("select", e.target) && !e.target.multiple && e.target.blur();
      };
      e.addEventListener("change", s),
        t(
          ((t) =>
            function () {
              e.removeEventListener("change", t);
            })(s)
        );
    },
    encode(e) {
      if (!T(e.target) || e.target.__upscopeMasked) return;
      const t = N(e.target);
      return t ? { blur: { elementId: t } } : void 0;
    },
  };
}