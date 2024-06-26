export function ee(e) {
  return {
    detect(t, o) {
      const n = e.defaultView.Animation.prototype.cancel;
      (e.defaultView.Animation.prototype.cancel = function (...e) {
        const t = n.call(this, ...e);
        return o(this), t;
      }),
        t(() => {
          e.defaultView && (e.defaultView.Animation.prototype.cancel = n);
        });
    },
    encode(e) {
      if (!e.effect?.target) return;
      const t = N(e.effect.target),
        { animationId: o } = U(e);
      return t
        ? { animationCancel: { elementId: t, animationId: o } }
        : void 0;
    },
  };
}