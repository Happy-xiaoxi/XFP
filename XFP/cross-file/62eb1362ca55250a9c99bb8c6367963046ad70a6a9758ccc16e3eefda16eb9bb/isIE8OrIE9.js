export function isIE8OrIE9() {
  return (
    ~window.navigator.userAgent.indexOf("MSIE 8.0") ||
    ~window.navigator.userAgent.indexOf("MSIE 9.0")
  );
}