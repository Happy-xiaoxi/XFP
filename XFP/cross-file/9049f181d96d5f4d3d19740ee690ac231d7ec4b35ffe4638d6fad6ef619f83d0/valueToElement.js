export function valueToElement(type, value, html) {
  return "<" + type + " " + html + " > " + value + "</" + type + ">";
}