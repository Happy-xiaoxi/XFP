export function sendData(c, a) {
  var b = window.DotMetricsSettings;
  switch (c) {
    case b.DataUrl:
      this.dataSendCount++;
      if (this.dataSendCount > this.callLimit) return;
      break;
    case b.PingUrl:
      if ((this.pingSendCount++, this.pingSendCount > this.callLimit))
        return;
  }
  a = this.encode(DotmetricsJSON.stringify(a));
  a = encodeURIComponent(a);
  b = new Date().getTime();
  c = c + "?v=" + a + "&r=" + b;
  a = document.createElement("script");
  a.setAttribute("src", c);
  (
    document.getElementsByTagName("head")[0] ||
    document.head ||
    document.body
  ).appendChild(a);
}