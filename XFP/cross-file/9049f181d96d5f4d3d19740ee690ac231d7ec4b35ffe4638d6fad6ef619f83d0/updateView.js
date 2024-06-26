export function updateView() {
  me.updateViewTotals();
  if (me.cartDivs && me.cartDivs.length > 0) {
    me.updateCartView();
  }
}