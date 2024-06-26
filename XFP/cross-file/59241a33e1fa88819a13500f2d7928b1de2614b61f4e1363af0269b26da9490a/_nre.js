export function re(e) {
  return {
    detect(t, o) {
      const n = u((e) => {
        e.isUpscopeBrowserInstruction || o(e);
      }, 100);
      var s;
      e.addEventListener("mousemove", n),
        e.addEventListener("mouseleave", n),
        t(
          ((s = n),
          function () {
            e.removeEventListener("mousemove", s),
              e.removeEventListener("mouseleave", s);
          })
        );
    },
    encode(o) {
      if ("mouseleave" === o.type && !o.toElement && !o.relatedTarget)
        return { mouseMove: { x: -1, y: -1 } };
      let n,
        s = e.elementFromPoint(o.clientX, o.clientY);
      return (
        s && !s.__upscopeMasked && (n = t(N(s))),
        { mouseMove: { x: o.clientX, y: o.clientY, hoverElementId: n } }
      );
    },
  };
}