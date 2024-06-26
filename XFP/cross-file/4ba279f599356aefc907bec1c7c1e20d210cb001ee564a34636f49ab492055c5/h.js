export function h() {
    if (!!g("uctk")) {
      var n = T("iframe"),
        o = function (f) {
          return function (l) {
            j(l, f);
          };
        };
      if (window.addEventListener) {
        document.addEventListener(
          "click",
          function (f) {
            j(f);
          },
          !0
        ),
          window.addEventListener(
            "unload",
            function (f) {
              D();
            },
            !0
          );
        for (var _ = 0; _ < n.length; _++)
          try {
            n[_].contentWindow.document.addEventListener(
              "click",
              o(n[_].position),
              !0
            );
          } catch (f) {}
      } else if (window.attachEvent) {
        document.attachEvent("onclick", function (f) {
          j(f);
        }),
          window.attachEvent("onbeforeunload", function (f) {
            D();
          });
        for (var _ = 0; _ < n.length; _++)
          try {
            n[_].contentWindow.document.attachEvent(
              "onclick",
              o(n[_].position)
            );
          } catch (l) {}
      }
      setInterval(D, 1e3 * w), setInterval(O, 1e3 * 5);
    }
  }