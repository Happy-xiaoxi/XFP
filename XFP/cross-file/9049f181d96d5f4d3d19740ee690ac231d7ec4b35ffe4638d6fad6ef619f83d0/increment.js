export function increment(simpleCart) {
  if (simpleCart.trigger("beforeIncrement", [this]) === false) {
    return false;
  }
  this.quantity = parseInt(this.quantity, 10) + 1;
  simpleCart.update();
}