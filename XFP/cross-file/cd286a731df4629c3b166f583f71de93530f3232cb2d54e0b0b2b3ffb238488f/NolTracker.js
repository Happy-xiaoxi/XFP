export function NolTracker(d, b) {
  try {
    window.V60 = window.V60 || {};
    var a = this;
    this.pvar = d;
    this.globals = {
      tagCurrRetry: -1,
      tagMaxRetry: 3,
      wlCurrRetry: -1,
      wlMaxRetry: 3,
      domain:
        this.pvar &&
        this.pvar.hasOwnProperty("server") &&
        typeof this.pvar.server !== "undefined"
          ? String(this.pvar.server).toLowerCase()
          : "",
      cid:
        this.pvar &&
        this.pvar.hasOwnProperty("cid") &&
        typeof this.pvar.cid !== "undefined"
          ? String(this.pvar.cid).toLowerCase()
          : "",
      content:
        this.pvar &&
        this.pvar.hasOwnProperty("content") &&
        typeof this.pvar.content !== "undefined" &&
        String(this.pvar.content).length !== 0
          ? String(this.pvar.content).toLowerCase()
          : "0",
      origAuWhitelist: { "au-ziffdavis": {}, ziffdavis: {} },
      fpidSfCodeList: ["au"],
      defaultApidFile: "config250",
      defaultErrorParams: { nol_vcid: "c00" },
      si: window.location.href
        .replace(/\"/g, "")
        .replace(/\'/g, "")
        .replace(/%27/g, "")
        .replace(/%22/g, ""),
      init: function () {
        this.defaultErrorParams.nol_clientid = this.cid;
        return this;
      },
    }.init();
    if (!window.NOLBUNDLE) {
      !(function (e, f) {
        e[f] = e[f] || {
          nlsQ: function (k, l, m, j, h, g) {
            return (
              (h = e.document),
              (j = h.createElement("script")),
              (j.async = 1),
              (j.src =
                ("http:" === e.location.protocol ? "http:" : "https:") +
                "//cdn-gl.imrworldwide.com/conf/" +
                k +
                ".js#name=" +
                l +
                "&ns=" +
                f),
              (g = h.getElementsByTagName("script")[0]),
              g.parentNode.insertBefore(j, g),
              (e[f][l] = e[f][l] || {
                g: m,
                ggPM: function (q, t, p, o, n) {
                  (e[f][l].q = e[f][l].q || []).push([q, t, p, o, n]);
                },
              }),
              e[f][l]
            );
          },
        };
      })(window, "NOLBUNDLE");
    }
    this.mergeFeatures(b);
    if (
      this.globals.domain.indexOf("secure-au") !== -1 ||
      this.globals.domain.indexOf("secure-nz") !== -1 ||
      (this.globals.hasOwnProperty("origAuWhitelist") &&
        Object.keys(this.globals.origAuWhitelist).length > 0 &&
        this.globals.origAuWhitelist.hasOwnProperty(this.globals.cid))
    ) {
      this.retrieveCiFileViaCors(function (e) {
        a.injectBsdk(e);
      });
    } else {
    }
  } catch (c) {
    logger("Failed to execute NolTracker constructor - " + c.message);
  }
}