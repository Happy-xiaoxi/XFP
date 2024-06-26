export function decrement(simpleCart) {
  simpleCart.trigger("beforeDecrement", [this]);
  if (parseInt(this.quantity, 10) < 2) {
    this.remove();
  } else {
    this.quantity = parseInt(this.quantity, 10) - 1;
    simpleCart.update();
  }
}