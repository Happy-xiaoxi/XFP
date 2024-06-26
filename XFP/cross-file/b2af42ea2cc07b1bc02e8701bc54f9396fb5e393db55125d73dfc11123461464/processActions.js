export function processActions(a) {
  try {
    var c = this,
      b = new Date().getTimezoneOffset(),
      d = {
        id: this.SettingsObject.SiteSectionId,
        fl: !1,
        dom: window.location.hostname,
        lso: null,
        ds: null,
        dsl: null,
        dh: null,
        url: window.location.href,
        rurl: window.document.referrer,
        pvid: this.SettingsObject.PVID,
        dc: this.domainCookie,
        tzOffset: b,
      };
    this.panel &&
      ((d.hhid = this.panelHouseholdId), (d.uid = this.panelUserId));
    b = !1;
    if (a.SendDeviceInfo || a.Ping) {
      var f = { deviceInfo: !1, pings: 0, exitPageData: !1 };
      a.Ping && 0 < a.Ping && 0 == this.deviceInfoSent && (f.pings = a.Ping);
      a.SendDeviceInfo &&
        0 == this.deviceInfoSent &&
        (this.deviceInfoSent = f.deviceInfo = !0);
      this.submitData(f);
    }
    if (a.Survey && a.Survey.SurveyUrl)
      if (((this.Survey = a.Survey), this.Survey.Mobile)) {
        var e = this;
        this.anchor = this.Core.CreateElement(
          "a",
          {
            href: a.Survey.SurveyUrl,
            style:
              "position:fixed; width:100%; height:100%; top:0; left:0; background:#f00; opacity:0;z-index:99999",
            target: "_blank",
            id: "DotMetricsPopupLink",
          },
          null
        );
        document.body.appendChild(this.anchor);
        this.Core.addEventSimple(this.anchor, "click", function (a) {
          try {
            a.preventDefault();
            var b = e.anchor.getAttribute("href");
            document.body.removeChild(e.anchor);
            e.surveyDone ||
              ((e.surveyDone = !0),
              setTimeout(function () {
                window.open(b, "_blank");
              }, 20));
          } catch (l) {
            e.Core.sendScriptError(l);
          }
        });
      } else {
        var g = function () {
          try {
            document.body.addEventListener
              ? document.body.removeEventListener("click", g)
              : document.body.detachEvent("onclick", g),
              c.showSurvey();
          } catch (q) {
            c.Core.sendScriptError(q);
          }
        };
        document.body.addEventListener
          ? document.body.addEventListener("click", g, !1)
          : document.body.attachEvent("onclick", g);
      }
    if (a.SendDeviceHash)
      if (this.Core.clientInfo) {
        var k = DotmetricsJSON.stringify(this.Core.clientInfo),
          n = this.Core.SHA1(k);
        d.dh = n.toString();
        b = !0;
      } else {
        this.Core.createClientInfo(function () {
          c.processActions(a);
        });
        return;
      }
    a.PersistDeviceAndUser &&
      a.DeviceId &&
      a.UserId &&
      a.DeviceGuidId &&
      this.Core.saveInLocalStorage({
        DotMetricsDeviceId: a.DeviceId,
        DotMetricsUserId: a.UserId,
        DotMetricsDeviceGuidId: a.DeviceGuidId,
      });
    if (a.SendLSO) {
      var m = this.Core.getFromLocalStorage("DotMetricsUserId"),
        r = this.Core.getFromLocalStorage("DotMetricsDeviceId"),
        h = this.Core.getFromLocalStorage("DotMetricsDeviceGuidId");
      d.lso =
        m && r && h
          ? { d: r, u: m, dg: h }
          : {
              d: "",
              u: "00000000-0000-0000-0000-000000000000",
              dg: "00000000-0000-0000-0000-000000000000",
            };
      b = !0;
    }
    b && c.Core.sendData(this.SettingsObject.DataUrl, d);
  } catch (q) {
    this.Core.sendScriptError(q);
  }
}