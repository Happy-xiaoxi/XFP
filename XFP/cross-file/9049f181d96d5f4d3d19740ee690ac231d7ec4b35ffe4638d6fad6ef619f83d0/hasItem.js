export function hasItem(item) {
  var current,
    matches,
    field,
    match = false;

  me.each(function (testItem) {
    matches = true;

    me.each(item, function (value, x, field) {
      if (
        field !== "quantity" &&
        field !== "id" &&
        item[field] !== testItem[field]
      ) {
        matches = false;
      }
    });

    if (matches) {
      match = testItem;
    }
  });
  return match;
}