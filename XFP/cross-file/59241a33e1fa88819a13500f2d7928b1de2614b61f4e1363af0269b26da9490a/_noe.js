export function oe(e) {
  return {
    detect(t, o) {
      e.addEventListener("play", o, !0),
        e.addEventListener("pause", o, !0),
        e.addEventListener("seeked", o, !0),
        e.addEventListener("ratechange", o, !0),
        e.addEventListener("volumechange", o, !0);
      const n = setInterval(() => {
        try {
          for (const t of e.querySelectorAll("video")) o({ target: t });
        } catch (e) {
          r("Error collecting videos (%o)", e), clearInterval(n);
        }
      }, 5e3);
      try {
        for (const t of e.querySelectorAll("video")) o({ target: t });
      } catch (e) {
        r("Error collecting videos (%o)", e);
      }
      var s;
      t(
        ((s = o),
        function () {
          e.removeEventListener("play", s, !0),
            e.removeEventListener("pause", s, !0),
            e.removeEventListener("seeked", s, !0),
            e.removeEventListener("ratechange", s, !0),
            e.removeEventListener("volumechange", s, !0),
            clearInterval(n);
        })
      );
    },
    encode(e) {
      const t = e.target;
      if (!R("video", t) || t.__upscopeMasked) return;
      if (t.dataset && "yes" === t.dataset.upscopeProxyStream) return;
      const o = N(t);
      return o
        ? {
            videoStatusChange: {
              elementId: o,
              time: t.currentTime,
              playing: !t.paused,
              playbackRate: t.playbackRate,
              muted: t.muted,
            },
          }
        : void 0;
    },
  };
}