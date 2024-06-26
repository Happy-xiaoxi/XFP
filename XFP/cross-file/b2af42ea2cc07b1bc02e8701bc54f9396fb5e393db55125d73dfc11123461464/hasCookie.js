export function hasCookie(c) {
  return new RegExp("(?:;\\s*|^)" + encodeURIComponent(c + "") + "=").test(
    document.cookie
  );
}