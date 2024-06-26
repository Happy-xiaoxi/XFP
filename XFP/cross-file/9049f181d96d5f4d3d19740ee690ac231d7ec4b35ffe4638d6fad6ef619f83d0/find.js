export function find(criteria) {
  if (!criteria) {
    return null;
  }

  var results = [];

  me.each(function (item, x, next) {
    fits = true;

    me.each(criteria, function (value, j, name) {
      if (!item[name] || item[name] != value) {
        fits = false;
      }
    });

    if (fits) {
      results.push(item);
    }
  });
  return results.length === 0 ? null : results;
}