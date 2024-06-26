export function G(e) {
  return "getElementsByTagName" in e
    ? [...e.getElementsByTagName("*")]
    : [...e.querySelectorAll("*")];
}