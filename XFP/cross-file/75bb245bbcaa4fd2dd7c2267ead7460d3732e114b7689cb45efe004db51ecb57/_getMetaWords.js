export function getMetaWords() {
    try {
      for (
        var a,
          b = this.giveSelf(),
          c = "",
          d = b.document.getElementsByTagName("meta"),
          e = d.length,
          f = 0;
        f < e;

      )
        ("description" != this.getAttr(d[f], "name") &&
          "keywords" != this.getAttr(d[f], "name")) ||
          (c += this.getAttr(d[f], "content") + ","),
          f++;
      return (
        c.length ||
          ((c = b.location.pathname.split("/")),
          (a = c && c[c.length - 1]),
          (c =
            a &&
            a
              .replace(/(x?html?)$/gi, "")
              .match(/([a-zA-Z]+)/g)
              .join(","))),
        document.title && (c += "," + document.title),
        c
      );
    } catch (a) {
      return "";
    }
  }