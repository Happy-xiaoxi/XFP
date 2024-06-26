export function ae(e) {
  return {
    detect(t, o) {
      const n = (e) => {
        e.isUpscopeBrowserInstruction || o(e);
      };
      var s;
      e.addEventListener("mouseover", n),
        t(
          ((s = n),
          function () {
            e.removeEventListener("mouseover", s);
          })
        );
    },
    encode(e) {
      if (!T(e.target) || e.target.__upscopeMasked) return;
      const t = N(e.target);
      return t ? { mouseEnter: { elementId: t } } : void 0;
    },
  };
}