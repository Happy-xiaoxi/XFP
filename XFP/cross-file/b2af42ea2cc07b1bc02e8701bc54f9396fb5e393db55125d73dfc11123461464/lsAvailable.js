export function lsAvailable() {
  try {
    var c = window.localStorage;
    c.setItem("__storage_test__", "__storage_test__");
    c.removeItem("__storage_test__");
    return !0;
  } catch (b) {
    return !1;
  }
}