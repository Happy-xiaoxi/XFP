export function set(simpleCart, field, value) {
  field = field.toLowerCase();
  if (typeof this[field] !== "function" && field !== "id") {
    value = "" + value;
    if (field == "quantity") {
      value = value.replace(/[^(\d|\.)]*/gi, "");
      value = value.replace(/,*/gi, "");
      value = parseInt(value, 10);
    } else if (field == "price") {
      value = value.replace(/[^(\d|\.)]*/gi, "");
      value = value.replace(/,*/gi, "");
      value = parseFloat(value);
    }
    if (typeof value == "number" && isNaN(value)) {
      error("Improperly formatted input.");
    } else {
      if (typeof value === "string") {
        if (value.match(/\~|\=/)) {
          error("Special character ~ or = not allowed: " + value);
        }
        value = value.replace(/\~|\=/g, "");
      }
      this[field] = value;
      this.checkQuantityAndPrice();
    }
  } else {
    error("Cannot change " + field + ", this is a reserved field.");
  }
  simpleCart.update();
}