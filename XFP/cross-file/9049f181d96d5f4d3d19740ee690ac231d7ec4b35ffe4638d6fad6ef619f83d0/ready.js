export function ready(callback) {
  if (!callback) {
    me.trigger("ready");
    me.events["ready"] = true;
  } else {
    me.bind("ready", callback);
  }
  return me;
}