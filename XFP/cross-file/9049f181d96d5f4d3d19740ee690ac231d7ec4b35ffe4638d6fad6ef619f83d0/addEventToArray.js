export function addEventToArray(array, functionCall, theEvent) {
  var outlet, element;

  for (var x = 0, xlen = array.length; x < xlen; x++) {
    element = array[x];
    if (element.addEventListener) {
      element.addEventListener(theEvent, functionCall, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + theEvent, functionCall);
    }
  }
}