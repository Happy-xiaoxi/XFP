export function getAudioKey(e, t) {
    return (function (e) {
      var t;
      try {
        if (
          !(t = new (window.OfflineAudioContext ||
            window.webkitOfflineAudioContext)(1, 44100, 44100))
        )
          return e();
        var n = t.createOscillator();
        (n.type = "triangle"), (n.frequency.value = 1e4);
        var i = t.createDynamicsCompressor();
        i.threshold && (i.threshold.value = -50),
          i.knee && (i.knee.value = 40),
          i.ratio && (i.ratio.value = 12),
          i.reduction && (i.reduction.value = -20),
          i.attack && (i.attack.value = 0),
          i.release && (i.release.value = 0.25),
          n.connect(i),
          i.connect(t.destination),
          n.start(0);
        var a = !1;
        (t.oncomplete = function (t) {
          a = !0;
          for (var n = [], o = 0; o < t.renderedBuffer.length; o++)
            n.push(t.renderedBuffer.getChannelData(0)[o].toString());
          return void 0 !== n && (n = n.toString(",")), i.disconnect(), e(n);
        }),
          setTimeout(function () {
            if (!a) return e();
          }, 750),
          setTimeout(function () {
            t.startRendering();
          }, 300);
      } catch (t) {
        return e();
      }
    })(function (n) {
      (n = n || ""), e.push({ key: "audio", value: n }), t(e);
    });
  }