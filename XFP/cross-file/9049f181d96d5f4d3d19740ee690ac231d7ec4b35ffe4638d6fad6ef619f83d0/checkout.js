export function checkout() {
  if (me.quantity === 0) {
    error("Cart is empty");
    return;
  }
  switch (me.checkoutTo) {
    case PayPal:
      me.paypalCheckout();
      break;
    case GoogleCheckout:
      me.googleCheckout();
      break;
    case Email:
      me.emailCheckout();
      break;
    default:
      me.customCheckout();
      break;
  }
}