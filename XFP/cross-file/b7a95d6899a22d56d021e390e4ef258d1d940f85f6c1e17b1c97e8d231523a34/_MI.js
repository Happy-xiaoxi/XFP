export function I() {
  return new Promise(function (e, t) {
    var n,
      i,
      o = "Unknown";
    function a(t) {
      e({ isPrivate: t, browserName: o });
    }
    function r(e) {
      return e === eval.toString().length;
    }
    function c() {
      void 0 !== navigator.maxTouchPoints
        ? (function () {
            var e = String(Math.random());
            try {
              window.indexedDB.open(e, 1).onupgradeneeded = function (t) {
                var n,
                  i = t.target,
                  o = null == i ? void 0 : i.result;
                try {
                  o
                    .createObjectStore("test", { autoIncrement: !0 })
                    .put(new Blob()),
                    a(!1);
                } catch (e) {
                  var r = e;
                  return (
                    e instanceof Error &&
                      (r = null !== (n = e.message) && void 0 !== n ? n : e),
                    a(
                      "string" == typeof r &&
                        /BlobURLs are not yet supported/.test(r)
                    )
                  );
                } finally {
                  o.close(), window.indexedDB.deleteDatabase(e);
                }
              };
            } catch (e) {
              return a(!1);
            }
          })()
        : (function () {
            var e = window.openDatabase,
              t = window.localStorage;
            try {
              e(null, null, null, null);
            } catch (e) {
              return a(!0);
            }
            try {
              t.setItem("test", "1"), t.removeItem("test");
            } catch (e) {
              return a(!0);
            }
            a(!1);
          })();
    }
    function s() {
      navigator.webkitTemporaryStorage.queryUsageAndQuota(
        function (e, t) {
          var n;
          a(
            Math.round(t / 1048576) <
              2 *
                Math.round(
                  (void 0 !== (n = window).performance &&
                  void 0 !== n.performance.memory &&
                  void 0 !== n.performance.memory.jsHeapSizeLimit
                    ? performance.memory.jsHeapSizeLimit
                    : 1073741824) / 1048576
                )
          );
        },
        function (e) {
          t(
            new Error(
              "detectIncognito somehow failed to query storage quota: " +
                e.message
            )
          );
        }
      );
    }
    function u() {
      void 0 !== self.Promise && void 0 !== self.Promise.allSettled
        ? s()
        : (0, window.webkitRequestFileSystem)(
            0,
            1,
            function () {
              a(!1);
            },
            function () {
              a(!0);
            }
          );
    }
    void 0 !== (i = navigator.vendor) && 0 === i.indexOf("Apple") && r(37)
      ? ((o = "Safari"), c())
      : (function () {
          var e = navigator.vendor;
          return void 0 !== e && 0 === e.indexOf("Google") && r(33);
        })()
      ? ((n = navigator.userAgent),
        (o = n.match(/Chrome/)
          ? void 0 !== navigator.brave
            ? "Brave"
            : n.match(/Edg/)
            ? "Edge"
            : n.match(/OPR/)
            ? "Opera"
            : "Chrome"
          : "Chromium"),
        u())
      : void 0 !== document.documentElement &&
        void 0 !== document.documentElement.style.MozAppearance &&
        r(37)
      ? ((o = "Firefox"), a(void 0 === navigator.serviceWorker))
      : void 0 !== navigator.msSaveBlob && r(39)
      ? ((o = "Internet Explorer"), a(void 0 === window.indexedDB))
      : t(new Error("detectIncognito cannot determine the browser"));
  });
}