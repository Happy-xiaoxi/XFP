export function sortByProperty(a, b, d) {
  return a.sort(function (a, c) {
    return a[b] < c[b]
      ? "asc" === d
        ? 1
        : -1
      : a[b] > [b]
      ? "asc" === d
        ? -1
        : 1
      : 0;
  });
}