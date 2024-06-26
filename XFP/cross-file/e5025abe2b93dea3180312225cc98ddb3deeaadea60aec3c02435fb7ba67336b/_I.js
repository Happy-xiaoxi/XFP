export function I() {
  var e = document.createElement("canvas");
  return !(!e.getContext || !e.getContext("2d"));
}