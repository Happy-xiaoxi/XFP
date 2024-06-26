export function deepCopy(input) {
  var key, copy;
  if (typeof input === "object" && input !== null) {
    if (utag.ut.typeOf(input) === "array") {
      copy = [];
    } else {
      copy = {};
    }
    for (key in input) {
      if (typeof input[key] === "object") {
        copy[key] = u.deepCopy(input[key]);
      } else {
        copy[key] = input[key];
      }
    }
  } else {
    copy = input;
  }
  return copy;
}