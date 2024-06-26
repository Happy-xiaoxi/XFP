export function F() {
  try {
    return (
      window.localStorage.setItem(q, q), window.localStorage.removeItem(q), !0
    );
  } catch (t) {
    return !1;
  }
}
export function H() {
  try {
    return (
      window.sessionStorage.setItem(q, q),
      window.sessionStorage.removeItem(q),
      !0
    );
  } catch (t) {
    return !1;
  }
}