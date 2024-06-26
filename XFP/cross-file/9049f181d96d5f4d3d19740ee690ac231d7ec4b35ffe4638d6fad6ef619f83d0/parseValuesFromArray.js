export function parseValuesFromArray(simpleCart, array) {
  if (array && array.length && array.length > 0) {
    for (var x = 0, xlen = array.length; x < xlen; x++) {
      /* ensure the pair does not have key delimeters */
      array[x] = array[x].replace(/\|\|/g, "| |");
      array[x] = array[x].replace(/\+\+/g, "+ +");
      if (array[x].match(/\~/)) {
        error("Special character ~ not allowed: " + array[x]);
      }
      array[x] = array[x].replace(/\~/g, "");

      /* split the pair and save the unescaped values to the item */
      var value = array[x].split("=");
      if (value.length > 1) {
        if (value.length > 2) {
          for (var j = 2, jlen = value.length; j < jlen; j++) {
            value[1] = value[1] + "=" + value[j];
          }
        }
        this[unescape(value[0]).toLowerCase()] = unescape(value[1]);
      }
    }
    return true;
  } else {
    return false;
  }
}