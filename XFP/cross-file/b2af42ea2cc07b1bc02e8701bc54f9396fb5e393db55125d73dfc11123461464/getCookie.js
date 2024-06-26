export function getCookie(c) {
  return this.hasCookie(c) ? this.listCookie()[c + ""] : null;
}