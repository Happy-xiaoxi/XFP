export function checkQuantityAndPrice(simpleCart) {
  if (
    !this.quantity ||
    this.quantity == null ||
    this.quantity == "undefined"
  ) {
    this.quantity = 1;
    error("No quantity for item.");
  } else {
    this.quantity = ("" + this.quantity).replace(/,*/gi, "");
    this.quantity = parseInt(
      ("" + this.quantity).replace(/[^(\d|\.)]*/gi, ""),
      10
    );
    if (isNaN(this.quantity)) {
      error("Quantity is not a number.");
      this.quantity = 1;
    }
  }

  if (!this.price || this.price == null || this.price == "undefined") {
    this.price = 0.0;
    error("No price for item or price not properly formatted.");
  } else {
    this.price = ("" + this.price).replace(/,*/gi, "");
    this.price = parseFloat(("" + this.price).replace(/[^(\d|\.)]*/gi, ""));
    if (isNaN(this.price)) {
      error("Price is not a number.");
      this.price = 0.0;
    }
  }
}