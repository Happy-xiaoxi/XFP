export function Z(e) {
  return {
    detect(t, o) {
      if (!e.getAnimations) return;
      const n = (e) => {
          e.__upscopeEventSent ||
            ("[object Animation]" === Object.prototype.toString.apply(e) &&
              ((e.__upscopeEventSent = !0), o(e)));
        },
        s = setInterval(() => {
          for (const t of e.getAnimations()) n(t);
        }, 1e3);
      let i = e.defaultView.Element.prototype.animate;
      var r;
      (e.defaultView.Element.prototype.animate = function (...e) {
        const t = i.call(this, ...e);
        return n(t), t;
      }),
        t(
          ((r = s),
          function () {
            e.defaultView && (e.defaultView.Element.prototype.animate = i),
              clearInterval(r);
          })
        );
    },
    encode(e) {
      if (!e.effect?.target) return;
      const t = N(e.effect.target),
        { keyframes: o, options: n, animationId: s } = U(e);
      return t
        ? {
            animationStart: {
              elementId: t,
              keyframes: o,
              options: n,
              animationId: s,
            },
          }
        : void 0;
    },
  };
}