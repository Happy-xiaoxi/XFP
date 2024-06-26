export function Te(e) {
  var t = {};
  try {
    var n = document.createElement("canvas"),
      i = n.getContext && n.getContext("2d");
    i
      ? ((t.h = (function (t, n) {
          e.timing.cvStart = Date.now();
          try {
            (t.width = 200),
              (t.height = 200),
              (t.style.display = "inline"),
              (n.fillStyle = "#f60"),
              n.fillRect(95, 1, 75, 20);
            var i = "PayPal.com, <!@#$%>";
            (n.textBaseline = "alphabetic"),
              (n.font = "16px 'Arial'"),
              (n.fillStyle = "#069"),
              n.fillText(i, 2, 15),
              (n.fillStyle = "rgba(102, 204, 0, 0.7)"),
              n.fillText(i, 4, 17);
            var o = [
              {
                fillStyle: "rgb(0, 255, 255)",
                arc: [100, 50, 50, 0, 2 * Math.PI, !0],
              },
              {
                fillStyle: "rgb(255, 0, 255)",
                arc: [50, 50, 50, 0, 2 * Math.PI, !0],
              },
              {
                fillStyle: "rgb(255,255,0)",
                arc: [75, 100, 50, 0, 2 * Math.PI, !0],
              },
            ];
            (n.globalCompositeOperation = "multiply"),
              o.forEach(function (e) {
                (n.fillStyle = e.fillStyle),
                  n.beginPath(),
                  n.arc.apply(n, l(e.arc)),
                  n.closePath(),
                  n.fill();
              });
            var a = t.toDataURL();
            return (a = a.slice(-50)), (e.timing.cvEnd = Date.now()), a;
          } catch (t) {
            return (e.timing.cvEnd = Date.now()), "-1";
          }
        })(n, i)),
        (t.f = 1),
        (t.t = (e.timing.cvEnd - e.timing.cvStart).toFixed(2)))
      : ((t.h = "-1"), (t.f = 0), (t.t = "0"));
  } catch (e) {
    (t.h = "-1"), (t.f = 1), (t.t = "0");
  }
  return t;
}