export function formatURLParams(a) {
    for (
      var b,
        c = [
          "categories",
          "keywords",
          "param1",
          "param2",
          "param3",
          "subid",
          "xhid",
          "subid_1",
          "subid_2",
          "subid_3",
          "subid_4",
          "subid_5",
          "extid",
          "nb",
          "ccss",
        ],
        d = c.length,
        e = [],
        f = 0;
      f < d;
      f++
    )
      if (((b = c[f]), a.hasOwnProperty(b) && a[b])) {
        var g = encodeURIComponent(a[b]).substring(0, 900);
        e.push(b + "=" + g);
      }
    return e.join("&").substring(0, 3120);
  }