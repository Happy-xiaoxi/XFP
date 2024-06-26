export function each(array, callback) {
  var next,
    x = 0,
    result;

  if (typeof array === "function") {
    var cb = array;
    items = me.items;
  } else if (typeof callback === "function") {
    var cb = callback,
      items = array;
  } else {
    return;
  }

  for (next in items) {
    if (typeof items[next] !== "function") {
      result = cb.call(me, items[next], x, next);
      if (result === false) {
        return;
      }
      x++;
    }
  }
}