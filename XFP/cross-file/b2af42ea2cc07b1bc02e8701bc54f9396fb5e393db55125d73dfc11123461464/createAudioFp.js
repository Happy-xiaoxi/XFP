export function createAudioFp(a, b) {
  var c = !1,
    f = !0,
    e,
    g = setTimeout(function () {
      l.removeEventListener("complete", q);
      e && clearTimeout(e);
      m(-2);
    }, 4e3);
  try {
    var k = this,
      n,
      m = function (d) {
        c ||
          ((c = !0),
          k.experimentalFP.audioFpPropertyData ||
            (k.experimentalFP.audioFpPropertyData = {
              channelCount: l.destination.channelCount,
              channelCountMode: l.destination.channelCountMode,
              channelInterpretation: l.destination.channelInterpretation,
              maxChannelCount: l.destination.maxChannelCount,
              numberOfInputs: l.destination.numberOfInputs,
              numberOfOutputs: l.destination.numberOfOutputs,
            }),
          (k.experimentalFP["audioFp" + a] = d),
          (k.clientInfoTimingData["audioFp" + a] =
            new Date().getTime() - n),
          b());
      },
      r = function () {
        var a = 0;
        try {
          (n = new Date().getTime()),
            a++,
            3 < a && m(-1),
            l.startRendering(),
            f && ((f = !1), h());
        } catch (B) {
          b(), k.sendScriptError(B);
        }
      },
      h = function () {
        "suspended" === l.state &&
          (e = setTimeout(function () {
            r();
          }, 500));
      },
      q = function (a) {
        try {
          clearTimeout(g);
          var c = 0,
            d = a.renderedBuffer.getChannelData(0).subarray(4500);
          for (a = 0; a < d.length; ++a) c += Math.abs(d[a]);
          m(c);
        } catch (C) {
          b(), k.sendScriptError(C);
        }
      },
      p = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (p) {
      var l = new p(1, 5e3, 44100),
        t = l.createOscillator();
      t.type = a;
      t.frequency.value = 1e4;
      var u = l.createDynamicsCompressor();
      u.threshold.value = -50;
      u.knee.value = 40;
      u.ratio.value = 12;
      u.attack.value = 0;
      u.release.value = 0.25;
      t.connect(u);
      u.connect(l.destination);
      t.start(0);
      l.addEventListener("complete", q);
      r();
    } else m(-2);
  } catch (v) {
    b(), this.sendScriptError(v);
  }
}