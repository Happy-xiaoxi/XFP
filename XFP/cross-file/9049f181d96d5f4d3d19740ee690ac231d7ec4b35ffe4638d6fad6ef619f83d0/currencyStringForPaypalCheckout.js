export function currencyStringForPaypalCheckout(value) {
  if (me.currencySymbol() == "&#36;") {
    return "$" + parseFloat(value).toFixed(2);
  } else {
    return "" + parseFloat(value).toFixed(2);
  }
}