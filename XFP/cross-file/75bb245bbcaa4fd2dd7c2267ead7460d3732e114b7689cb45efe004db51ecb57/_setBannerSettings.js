export function setBannerSettings(a) {
    var b,
      c = a.attributes,
      d = {};
    for (var e in c)
      (b = "object" == typeof c[e] && c[e].name) &&
        b.indexOf("data-ts") >= 0 &&
        ((b = b.replace("data-ts-", "")), (d[b] = c[e].value));
    (d.element = a),
      (d.categories =
        d.categories || this.getHashUrl("context_categories") || ""),
      (d.keywords = [this.getMetaWords(), d.categories]
        .filter(Boolean)
        .join(",")
        .replace(/,+/g, ",")
        .replace(/\s*,\s*/g, ",")
        .replace(/\s+/g, " ")
        .replace(/^,|,$/g, "")),
      this.banners.push(d);
  }