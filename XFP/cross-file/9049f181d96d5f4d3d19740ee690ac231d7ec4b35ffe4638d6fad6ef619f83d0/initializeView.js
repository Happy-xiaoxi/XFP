export function initializeView() {
  var me = this;
  me.totalOutlets = getElementsByClassName("simpleCart_total");
  me.quantityOutlets = getElementsByClassName("simpleCart_quantity");
  me.cartDivs = getElementsByClassName("simpleCart_items");
  me.taxCostOutlets = getElementsByClassName("simpleCart_taxCost");
  me.taxRateOutlets = getElementsByClassName("simpleCart_taxRate");
  me.shippingCostOutlets = getElementsByClassName("simpleCart_shippingCost");
  me.finalTotalOutlets = getElementsByClassName("simpleCart_finalTotal");

  me.addEventToArray(
    getElementsByClassName("simpleCart_checkout"),
    simpleCart.checkout,
    "click"
  );
  me.addEventToArray(
    getElementsByClassName("simpleCart_empty"),
    simpleCart.empty,
    "click"
  );

  me.Shelf = new Shelf();
  me.Shelf.readPage();

  me.pageIsReady = true;
}