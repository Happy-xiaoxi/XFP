export function U(e) {
  const t = e.__upscopeAnimationId || p(),
    o = e.effect?.getTiming(),
    n = o
      ? {
          delay: o.delay,
          direction: o.direction,
          duration: o.duration,
          easing: o.easing,
          endDelay: o.endDelay,
          fill: o.fill,
          iterationStart: o.iterationStart,
          iterations:
            o.iterations === Number.POSITIVE_INFINITY
              ? "::infinity::"
              : o.iterations,
        }
      : void 0,
    s = e.effect?.getKeyframes();
  return (
    (e.__upscopeAnimationId = t), { animationId: t, options: n, keyframes: s }
  );
}