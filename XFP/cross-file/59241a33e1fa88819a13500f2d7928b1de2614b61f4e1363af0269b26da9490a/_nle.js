export function le(e) {
  return {
    detect(t, o) {
      const n = {},
        s = function (t) {
          const s = t.target;
          if (!T(s) && !q(s)) return;
          const i = s === e.document ? "document" : N(s);
          i &&
            (void 0 === n[i] &&
              (n[i] = u((e) => {
                delete n[i], o(e);
              }, 100)),
            n[i](t));
        };
      var i;
      e.document.addEventListener("scroll", s, !0),
        t(
          ((i = s),
          function () {
            e.document.removeEventListener("scroll", i, !0);
          })
        );
    },
    encode(t) {
      const o = t.target;
      if (q(o)) return { scroll: { x: W(e), y: z(e) } };
      if (T(o) && !o.__upscopeMasked) {
        const e = N(o);
        if (!e) return;
        return { scroll: { elementId: e, x: o.scrollLeft, y: o.scrollTop } };
      }
    },
  };
}