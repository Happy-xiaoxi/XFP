export function makeFrame(e) {
    var t = document.createElement("iframe");
    t.setAttribute("id", e),
      t.setAttribute("sandbox", "allow-same-origin"),
      t.setAttribute("style", "display: none"),
      document.getElementsByTagName("body")[0].appendChild(t);
  }