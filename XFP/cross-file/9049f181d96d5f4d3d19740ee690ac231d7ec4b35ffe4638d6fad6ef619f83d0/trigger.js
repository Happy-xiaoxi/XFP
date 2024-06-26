export function trigger(name, options) {
  var returnval = true;
  if (
    typeof me.events[name] !== "undefined" &&
    typeof me.events[name][0] === "function"
  ) {
    for (var x = 0, xlen = me.events[name].length; x < xlen; x++) {
      returnval = me.events[name][x].apply(me, options ? options : []);
    }
  }
  if (returnval === false) {
    return false;
  } else {
    return true;
  }
}