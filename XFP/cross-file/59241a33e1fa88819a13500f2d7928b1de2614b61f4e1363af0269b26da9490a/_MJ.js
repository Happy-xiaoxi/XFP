export function J(e) {
  try {
    const t = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
    return t ? atob(t[2]) : null;
  } catch (e) {
    return null;
  }
}