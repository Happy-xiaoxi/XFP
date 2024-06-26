export function paypalCheckout() {
  var form = document.createElement("form"),
    counter = 1,
    current,
    item,
    descriptionString;

  form.style.display = "none";
  form.method =
    me.paypalHTTPMethod == "GET" || me.paypalHTTPMethod == "POST"
      ? me.paypalHTTPMethod
      : "GET";
  form.action = me.sandbox
    ? "https://www.sandbox.paypal.com/cgi-bin/webscr"
    : "https://www.paypal.com/cgi-bin/webscr";
  form.acceptCharset = "utf-8";

  // setup hidden fields
  form.appendChild(me.createHiddenElement("cmd", "_cart"));
  form.appendChild(
    me.createHiddenElement("rm", me.paypalHTTPMethod == "POST" ? "2" : "0")
  );
  form.appendChild(me.createHiddenElement("upload", "1"));
  form.appendChild(me.createHiddenElement("business", me.email));
  form.appendChild(me.createHiddenElement("currency_code", me.currency));
  form.appendChild(me.createHiddenElement("charset", "utf-8"));

  if (me.invoice) {
    form.appendChild(me.createHiddenElement("invoice", me.invoice));
  }

  if (me.taxRate) {
    form.appendChild(
      me.createHiddenElement("tax_cart", parseFloat(me.taxCost).toFixed(2))
    );
  }

  if (me.shipping() !== 0) {
    form.appendChild(
      me.createHiddenElement("handling_cart", me.shippingCost)
    );
  }

  if (me.successUrl) {
    form.appendChild(me.createHiddenElement("return", me.successUrl));
  }

  if (me.cancelUrl) {
    form.appendChild(me.createHiddenElement("cancel_return", me.cancelUrl));
  }

  me.each(function (item, iter) {
    counter = iter + 1;

    form.appendChild(
      me.createHiddenElement("item_name_" + counter, item.name)
    );
    form.appendChild(
      me.createHiddenElement("quantity_" + counter, item.quantity)
    );
    form.appendChild(me.createHiddenElement("amount_" + counter, item.price));
    form.appendChild(
      me.createHiddenElement("item_number_" + counter, counter)
    );

    var option_count = 0;

    me.each(item, function (value, x, field) {
      if (
        field !== "id" &&
        field !== "price" &&
        field !== "quantity" &&
        field !== "name" &&
        field !== "shipping" &&
        option_count < 10
      ) {
        form.appendChild(
          me.createHiddenElement("on" + option_count + "_" + counter, field)
        );
        form.appendChild(
          me.createHiddenElement("os" + option_count + "_" + counter, value)
        );
        option_count++;
      }
    });

    form.appendChild(
      me.createHiddenElement("option_index_" + counter, option_count)
    );
  });

  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
}