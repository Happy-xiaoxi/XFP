export function _getLocalStorage(a) {
  try {
    return d.localStorage ? d.localStorage.getItem(a) : "";
  } catch (b) {
    return "";
  }
}
