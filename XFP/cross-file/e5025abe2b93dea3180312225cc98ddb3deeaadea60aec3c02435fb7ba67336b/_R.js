export function R() {
  return (
    "Microsoft Internet Explorer" === navigator.appName ||
    !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
  );
}