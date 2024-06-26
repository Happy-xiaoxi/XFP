export function empty() {
  me.items = {};
  me.update();
  me.trigger("afterEmpty");
}