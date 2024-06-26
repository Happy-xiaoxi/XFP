    export function c(t) {
      if (
        (localStorage.removeItem("optinShow"),
        sessionStorage.removeItem("new_session"),
        "default" != t.optInType)
      ) {
        (e =
          "default+" === (e = "box+" === (e = t.optInType) ? "box2" : e)
            ? "default2"
            : e),
          (document.getElementsByClassName(
            "truepush_optin_notifications"
          )[0].innerHTML = p[e]);
        var o = "box+" === t.optInType ? "box2" : t.optInType;
        (o = "default+" === o ? "default2" : o),
          t.websiteSSL || (w && w.postMessage({ type: "iframeShow" }, "*")),
          setTimeout(function () {
            if (!t.websiteSSL) {
              var e = { type: "optinHeight" },
                i = "";
              "bell" === o
                ? (i = "belloptin_truepush")
                : "box2" === o
                ? (i = "optinbox_truepush optinbox_plus_truepush")
                : "default2" === o
                ? (i = "defaultplus_truepush")
                : "top_bar" === o
                ? (i = "bar_truepush d-flex")
                : "box" === o && (i = "optinbox_truepush"),
                (e.height =
                  document.getElementsByClassName(i)[0].clientHeight + 5),
                w && w.postMessage(e, "*");
            }
            "default2" == o &&
              (-1 != navigator.userAgent.indexOf("Opera") ||
              -1 != navigator.userAgent.indexOf("OPR")
                ? (document.getElementById("jklm-default2").className =
                    "defaultplus_truepush opera_defaultplus_truepush")
                : -1 != navigator.userAgent.indexOf("Firefox")
                ? (document.getElementById("jklm-default2").className =
                    "defaultplus_truepush moz_defaultplus_truepush")
                : -1 != navigator.userAgent.indexOf("Edge") &&
                  (document.getElementById("jklm-default2").className =
                    "defaultplus_truepush edge_defaultplus_truepush")),
              t.websiteSSL &&
                "top_bar" === o &&
                ("" !== t.customStyles.top
                  ? (document.body.style.cssText =
                      "margin-top:" +
                      document.getElementsByClassName("bar_truepush d-flex")[0]
                        .clientHeight +
                      "px !important")
                  : (document.getElementsByTagName("html")[0].style.cssText =
                      "margin-bottom:" +
                      document.getElementsByClassName("bar_truepush d-flex")[0]
                        .clientHeight +
                      "px !important"));
          }, 500);
      }
      var e;
      "custom" !== t.optInType &&
      "bell" !== t.optInType &&
      "spec_time" === t.optInFrequencyType
        ? localStorage.setItem("optinShow", Date.now() + 6e4 * t.optInFrequency)
        : "new_session" === t.optInFrequencyType &&
          sessionStorage.setItem("new_session", "true");
    }