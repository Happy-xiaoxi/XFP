export function onload(B) {
  if (typeof window.addEventListener != "undefined") {
    window.addEventListener("load", B, false);
  } else {
    if (typeof document.addEventListener != "undefined") {
      document.addEventListener("load", B, false);
    } else {
      if (typeof window.attachEvent != "undefined") {
        window.attachEvent("onload", B);
      } else {
        let _callback = window.onload;
        if (typeof window.onload != "function") {
          window.onload = B;
        } else {
          function onload() {
            _callback();
            B();
          };
        }
      }
    }
  }
}