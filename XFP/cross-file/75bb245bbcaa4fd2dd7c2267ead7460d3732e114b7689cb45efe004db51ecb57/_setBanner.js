export function setBanner(a) {
    var b, c, d;
    if (a.length)
      for (var e = 0; e < a.length; e++)
        a[e].loaded ||
          ((b = a[e].element),
          (c = a[e]),
          (d = document.createElement("iframe")),
          (d.width = c.width),
          (d.height = c.height),
          (d.frameBorder = 0),
          (d.marginheight = 0),
          (d.marginwidth = 0),
          (d.scrolling = "no"),
          !this.iFrameHasSandbox() &&
            (d.sandbox =
              "allow-same-origin allow-popups allow-forms allow-scripts"),
          (d.src =
            this.getDomain() +
            c.spot +
            ".html?" +
            this.formatURLParams(c) +
            "&adb=" +
            +window._tsAdBlockDetect +
            "&clientjs=1" +
            this.getScreenSize() +
            this.timeZone()),
          b.nextSibling
            ? b.parentNode.insertBefore(d, b.nextSibling)
            : b.parentNode.appendChild(d),
          this.postSetBanner(a[e], d));
  }