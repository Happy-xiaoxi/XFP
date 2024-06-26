export function googleCheckout() {
  var me = this;

  if (me.currency !== USD && me.currency !== GBP) {
    error("Google Checkout only allows the USD and GBP for currency.");
    return;
  } else if (
    me.merchantId === "" ||
    me.merchantId === null ||
    !me.merchantId
  ) {
    error("No merchant Id for google checkout supplied.");
    return;
  }

  var form = document.createElement("form"),
    counter = 1,
    current,
    item,
    descriptionString;

  form.style.display = "none";
  form.method = "POST";
  form.action =
    "https://checkout.google.com/api/checkout/v2/checkoutForm/Merchant/" +
    me.merchantId;
  form.acceptCharset = "utf-8";

  me.each(function (item, iter) {
    counter = iter + 1;

    form.appendChild(
      me.createHiddenElement("item_name_" + counter, item.name)
    );
    form.appendChild(
      me.createHiddenElement("item_quantity_" + counter, item.quantity)
    );
    form.appendChild(
      me.createHiddenElement("item_price_" + counter, item.price)
    );
    form.appendChild(
      me.createHiddenElement("item_currency_" + counter, me.currency)
    );
    form.appendChild(
      me.createHiddenElement("item_tax_rate_" + counter, me.taxRate)
    );
    form.appendChild(me.createHiddenElement("_charset_", ""));

    descriptionString = "";

    me.each(item, function (value, x, field) {
      if (field !== "id" && field !== "quantity" && field !== "price") {
        descriptionString = descriptionString + ", " + field + ": " + value;
      }
    });

    descriptionString = descriptionString.substring(1);
    form.appendChild(
      me.createHiddenElement("item_description_" + counter, descriptionString)
    );
  });

  // hack for adding shipping
  if (me.shipping() !== 0) {
    form.appendChild(
      me.createHiddenElement("ship_method_name_1", "Shipping")
    );
    form.appendChild(
      me.createHiddenElement(
        "ship_method_price_1",
        parseFloat(me.shippingCost).toFixed(2)
      )
    );
    form.appendChild(
      me.createHiddenElement("ship_method_currency_1", me.currency)
    );
  }

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}