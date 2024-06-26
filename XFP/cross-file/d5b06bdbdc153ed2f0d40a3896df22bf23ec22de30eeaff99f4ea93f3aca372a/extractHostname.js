export function extractHostname(e) {
    var t = document.createElement("a");
    return (t.href = e), t.hostname;
  }