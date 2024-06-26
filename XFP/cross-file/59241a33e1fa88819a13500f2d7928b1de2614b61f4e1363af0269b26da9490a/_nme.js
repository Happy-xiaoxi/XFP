export function me(e) {
  return {
    detect(t, o) {
      if (e) return;
      const n = u(o, 1e3);
      var s;
      window.addEventListener("resize", n),
        t(
          ((s = n),
          function () {
            window.removeEventListener("resize", s);
          })
        );
    },
    encode: (e) => ({
      windowResize: { w: window.innerWidth, h: window.innerHeight },
    }),
  };
}