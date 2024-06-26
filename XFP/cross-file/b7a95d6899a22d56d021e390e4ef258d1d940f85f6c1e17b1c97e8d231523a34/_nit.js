export function it(e, t, n, i) {
  var o = (function (e, t, n) {
    var i = { ty: String(n) };
    return (
      n < 4 &&
        ((i.x = String(parseFloat(e.screenX.toFixed(7)))),
        (i.y = String(parseFloat(e.screenY.toFixed(7))))),
      e.radiusX > 0 && (i.r = String(parseFloat(e.radiusX.toFixed(7)))),
      e.force > 0 && (i.f = String(parseFloat(e.force.toFixed(7)))),
      t > 1 && (i.tc = String(t)),
      i
    );
  })(t.changedTouches[0], t.changedTouches.length, n);
  return i.push(o), e + 1;
}