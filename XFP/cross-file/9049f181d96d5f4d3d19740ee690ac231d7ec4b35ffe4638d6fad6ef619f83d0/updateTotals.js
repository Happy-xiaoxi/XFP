export function updateTotals() {
  me.total = 0;
  me.quantity = 0;
  me.each(function (item) {
    if (item.quantity < 1) {
      item.remove();
    } else if (item.quantity !== null && item.quantity !== "undefined") {
      me.quantity = parseInt(me.quantity, 10) + parseInt(item.quantity, 10);
    }
    if (item.price) {
      me.total =
        parseFloat(me.total) +
        parseInt(item.quantity, 10) * parseFloat(item.price);
    }
  });
  me.shippingCost = me.shipping();
  me.taxCost = parseFloat(me.total) * me.taxRate;
  me.finalTotal = me.shippingCost + me.taxCost + me.total;
}