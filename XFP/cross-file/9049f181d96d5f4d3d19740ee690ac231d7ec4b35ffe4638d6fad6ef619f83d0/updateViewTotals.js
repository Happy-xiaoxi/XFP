export function updateViewTotals() {
  var outlets = [
    ["quantity", "none"],
    ["total", "currency"],
    ["shippingCost", "currency"],
    ["taxCost", "currency"],
    ["taxRate", "percentage"],
    ["finalTotal", "currency"],
  ];

  for (var x = 0, xlen = outlets.length; x < xlen; x++) {
    var arrayName = outlets[x][0] + "Outlets",
      outputString,
      element;

    for (var y = 0, ylen = me[arrayName].length; y < ylen; y++) {
      switch (outlets[x][1]) {
        case "none":
          outputString = "" + me[outlets[x][0]];
          break;
        case "currency":
          outputString = me.valueToCurrencyString(me[outlets[x][0]]);
          break;
        case "percentage":
          outputString = me.valueToPercentageString(me[outlets[x][0]]);
          break;
        default:
          outputString = "" + me[outlets[x][0]];
          break;
      }
      me[arrayName][y].innerHTML = "" + outputString;
    }
  }
}