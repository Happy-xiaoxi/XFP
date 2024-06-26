export function valueToCurrencyString(value) {
  var val = parseFloat(value);
  if (isNaN(val)) val = 0;

  return val.toCurrency(me.currencySymbol());
}