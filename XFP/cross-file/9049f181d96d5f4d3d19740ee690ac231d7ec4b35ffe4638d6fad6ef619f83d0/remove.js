export function remove(id) {
  var tempArray = {};
  var deletedItem;
  me.each(function (item) {
    if (item.id !== id) {
      tempArray[item.id] = item;
    } else {
      deletedItem = item;
    }
  });
  me.trigger("beforeRemove", [deletedItem]);
  this.items = tempArray;
  me.trigger("afterRemove");
}