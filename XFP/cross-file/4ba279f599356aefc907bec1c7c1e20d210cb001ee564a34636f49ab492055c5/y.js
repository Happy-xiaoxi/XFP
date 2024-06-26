export function y() {
    var n = window.innerWidth,
      o = window.innerHeight,
      _ = window.pageXOffset,
      f = window.pageYOffset,
      l =
        document.compatMode == "CSS1Compat"
          ? document.documentElement
          : document.body;
    typeof n != "number" && (n = l.clientWidth),
      typeof o != "number" && (o = l.clientHeight),
      typeof _ != "number" && (_ = l.scrollLeft),
      typeof f != "number" && (f = l.scrollTop);
    var p = {};
    return (
      (p.w = Math.round(n)),
      (p.h = Math.round(o)),
      (p.x = Math.round(_)),
      (p.y = Math.round(f)),
      p
    );
  }