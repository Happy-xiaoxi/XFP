export function _convertFunc() {
  function k(a) {
    return a < 10 ? "0" + a : a;
  }
  function o(a) {
    p.lastIndex = 0;
    return p.test(a)
      ? '"' +
          a.replace(p, function (a) {
            var c = r[a];
            return typeof c === "string"
              ? c
              : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
          }) +
          '"'
      : '"' + a + '"';
  }
  function l(a, j) {
    var c,
      d,
      h,
      m,
      g = e,
      f,
      b = j[a];
    b &&
      typeof b === "object" &&
      typeof b.toJSON === "function" &&
      (b = b.toJSON(a));
    typeof i === "function" && (b = i.call(j, a, b));
    switch (typeof b) {
      case "string":
        return o(b);
      case "number":
        return isFinite(b) ? String(b) : "null";
      case "boolean":
      case "null":
        return String(b);
      case "object":
        if (!b) return "null";
        e += n;
        f = [];
        if (Object.prototype.toString.apply(b) === "[object Array]") {
          m = b.length;
          for (c = 0; c < m; c += 1) f[c] = l(c, b) || "null";
          h =
            f.length === 0
              ? "[]"
              : e
              ? "[\n" + e + f.join(",\n" + e) + "\n" + g + "]"
              : "[" + f.join(",") + "]";
          e = g;
          return h;
        }
        if (i && typeof i === "object") {
          m = i.length;
          for (c = 0; c < m; c += 1)
            typeof i[c] === "string" &&
              ((d = i[c]),
              (h = l(d, b)) && f.push(o(d) + (e ? ": " : ":") + h));
        } else
          for (d in b)
            Object.prototype.hasOwnProperty.call(b, d) &&
              (h = l(d, b)) &&
              f.push(o(d) + (e ? ": " : ":") + h);
        h =
          f.length === 0
            ? "{}"
            : e
            ? "{\n" + e + f.join(",\n" + e) + "\n" + g + "}"
            : "{" + f.join(",") + "}";
        e = g;
        return h;
    }
  }
  if (typeof Date.prototype.toJSON !== "function")
    (Date.prototype.toJSON = function () {
      return isFinite(this.valueOf())
        ? this.getUTCFullYear() +
            "-" +
            k(this.getUTCMonth() + 1) +
            "-" +
            k(this.getUTCDate()) +
            "T" +
            k(this.getUTCHours()) +
            ":" +
            k(this.getUTCMinutes()) +
            ":" +
            k(this.getUTCSeconds()) +
            "Z"
        : null;
    }),
      (String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON =
          function () {
            return this.valueOf();
          });
  var q =
      /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    p =
      /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    e,
    n,
    r = {
      "\u0008": "\\b",
      "\t": "\\t",
      "\n": "\\n",
      "\u000c": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\",
    },
    i;
  if (typeof JSON.stringify !== "function")
    JSON.stringify = function (a, j, c) {
      var d;
      n = e = "";
      if (typeof c === "number") for (d = 0; d < c; d += 1) n += " ";
      else typeof c === "string" && (n = c);
      if (
        (i = j) &&
        typeof j !== "function" &&
        (typeof j !== "object" || typeof j.length !== "number")
      )
        throw Error("JSON.stringify");
      return l("", { "": a });
    };
  if (typeof JSON.parse !== "function")
    JSON.parse = function (a, e) {
      function c(a, d) {
        var g,
          f,
          b = a[d];
        if (b && typeof b === "object")
          for (g in b)
            Object.prototype.hasOwnProperty.call(b, g) &&
              ((f = c(b, g)), f !== void 0 ? (b[g] = f) : delete b[g]);
        return e.call(a, d, b);
      }
      var d,
        a = String(a);
      q.lastIndex = 0;
      q.test(a) &&
        (a = a.replace(q, function (a) {
          return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
        }));
      if (
        /^[\],:{}\s]*$/.test(
          a
            .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@")
            .replace(
              /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
              "]"
            )
            .replace(/(?:^|:|,)(?:\s*\[)+/g, "")
        )
      )
        return (
          (d = eval("(" + a + ")")),
          typeof e === "function" ? c({ "": d }, "") : d
        );
      throw new SyntaxError("JSON.parse");
    };
};