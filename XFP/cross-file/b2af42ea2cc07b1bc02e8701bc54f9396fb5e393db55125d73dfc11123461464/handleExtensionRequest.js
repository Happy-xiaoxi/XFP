export function handleExtensionRequest(a, c) {
  switch (a) {
    case "timeOnPage":
      a = this.createCurrentTimeOnPageObject();
      var b = this.getTimeOnPageDataTemplate();
      b.ep.push(a);
      this.Core.sendMessageToExtension(
        { target: "dotmetrics-extension", type: "timeOnPage", data: b },
        c
      );
      break;
    case "getEnterPageData":
      this.EnterPageEventData &&
        ((b = JSON.parse(JSON.stringify(this.EnterPageEventData))),
        (b.pvid = this.SettingsObject.PVID),
        (b.dc = this.domainCookie),
        this.Core.postMessage(
          { target: "dotmetrics-plugin", type: "enterPageData", data: b },
          c
        ));
      break;
    case "getDeviceInfo":
      var d = this;
      this.Core.createClientInfo(function () {
        var a = {
          deviceInfo: d.Core.clientInfo,
          deviceHash: d.Core.SHA1(
            DotmetricsJSON.stringify(d.Core.clientInfo)
          ),
          experimentalFP: d.Core.experimentalFP,
          clientInfoTimingData: d.Core.clientInfoTimingData,
        };
        d.Core.postMessage(
          { target: "dotmetrics-extension", type: "deviceInfo", data: a },
          c
        );
      });
  }
}