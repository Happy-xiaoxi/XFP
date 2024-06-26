export function bind(name, callback) {
  if (typeof callback !== "function") {
    return me;
  }

  if (me.events[name] === true) {
    callback.apply(me);
  } else if (typeof me.events[name] !== "undefined") {
    me.events[name].push(callback);
  } else {
    me.events[name] = [callback];
  }
  return me;
}