export function x(n) {
    (position = new Object()), (position.x = 0), (position.y = 0);
    for (var o = n; o != null && o != document.body; )
      (position.x += o.offsetLeft),
        (position.y += o.offsetTop),
        (o = o.offsetParent);
    return position;
  }