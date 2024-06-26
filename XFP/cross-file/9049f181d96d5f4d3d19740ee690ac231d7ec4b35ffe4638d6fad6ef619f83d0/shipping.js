export function shipping() {
  if (parseInt(me.quantity, 10) === 0) return 0;
  var shipping =
      parseFloat(me.shippingFlatRate) +
      parseFloat(me.shippingTotalRate) * parseFloat(me.total) +
      parseFloat(me.shippingQuantityRate) * parseInt(me.quantity, 10),
    next;

  me.each(function (nextItem) {
    if (nextItem.shipping) {
      if (typeof nextItem.shipping == "function") {
        shipping += parseFloat(nextItem.shipping());
      } else {
        shipping += parseFloat(nextItem.shipping);
      }
    }
  });

  return shipping;
}