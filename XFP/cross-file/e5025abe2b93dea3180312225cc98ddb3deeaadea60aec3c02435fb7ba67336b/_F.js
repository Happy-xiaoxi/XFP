export function F() {
  var e = document.createElement("canvas"),
    t = null;
  try {
    t = e.getContext("webgl") || e.getContext("experimental-webgl");
  } catch (n) {}
  return (t = t || null);
}