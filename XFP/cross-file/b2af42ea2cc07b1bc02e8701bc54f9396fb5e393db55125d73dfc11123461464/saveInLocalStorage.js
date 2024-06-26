export function saveInLocalStorage(a) {
  if (this.lsAvailable())
    for (var c in a)
      a.hasOwnProperty(c) && window.localStorage.setItem(c + "", a[c]);
}