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