export function add(values) {
  var me = this;
  /* load cart values if not already loaded */
  if (!me.pageIsReady) {
    me.initializeView();
    me.update();
  }
  if (!me.isLoaded) {
    me.load();
    me.update();
  }

  var newItem = new CartItem();

  /* check to ensure arguments have been passed in */
  if (!arguments || arguments.length === 0) {
    error("No values passed for item.");
    return null;
  }
  var argumentArray = arguments;
  if (values && typeof values !== "string" && typeof values !== "number") {
    argumentArray = values;
  }

  newItem.parseValuesFromArray(argumentArray);
  newItem.checkQuantityAndPrice();

  if (me.trigger("beforeAdd", [newItem]) === false) {
    return false;
  }
  var isNew = true;

  /* if the item already exists, update the quantity */
  if (me.hasItem(newItem)) {
    var foundItem = me.hasItem(newItem);
    foundItem.quantity =
      parseInt(foundItem.quantity, 10) + parseInt(newItem.quantity, 10);
    newItem = foundItem;
    isNew = false;
  } else {
    me.items[newItem.id] = newItem;
  }

  me.update();
  me.trigger("afterAdd", [newItem, isNew]);

  return newItem;
}