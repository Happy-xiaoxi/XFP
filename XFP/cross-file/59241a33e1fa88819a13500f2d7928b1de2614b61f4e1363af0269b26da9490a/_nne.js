export function ne(e) {
  return {
    detect(t, o) {
      const n = (e) => {
        e.isUpscopeBrowserInstruction || o(e);
      };
      var s;
      e.addEventListener("click", n),
        t(
          ((s = n),
          function () {
            e.removeEventListener("click", s);
          })
        );
    },
    encode(e) {
      let o;
      T(e.target) && !e.target.__upscopeMasked && (o = N(e.target));
      return { click: { x: e.clientX, y: e.clientY, elementId: t(o) } };
    },
  };
}