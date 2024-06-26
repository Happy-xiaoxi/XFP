export function onunload(B) {
  if (typeof window.addEventListener != "undefined") {
    window.addEventListener("beforeunload", B, false);
  } else {
    if (typeof document.addEventListener != "undefined") {
      document.addEventListener("beforeunload", B, false);
    } else {
      if (typeof window.attachEvent != "undefined") {
        window.attachEvent("onbeforeunload", B);
      } else {
        let _callback = window.onbeforeunload;
        if (typeof window.onbeforeunload != "function") {
          window.onbeforeunload = B;
        } else {
          function onbeforeunload() {
            _callback();
            B();
          };
        }
      }
    }
  }
}