export function isIE() {
    return (
      "Microsoft Internet Explorer" === navigator.appName ||
      !(
        "Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent)
      )
    );
  }