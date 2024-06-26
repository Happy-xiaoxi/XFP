export function getIEPlugins() {
    var e = [];
    if (
      (Object.getOwnPropertyDescriptor &&
        Object.getOwnPropertyDescriptor(window, "ActiveXObject")) ||
      "ActiveXObject" in window
    ) {
      var t = [
        "AcroPDF.PDF",
        "Adodb.Stream",
        "AgControl.AgControl",
        "DevalVRXCtrl.DevalVRXCtrl.1",
        "MacromediaFlashPaper.MacromediaFlashPaper",
        "Msxml2.DOMDocument",
        "Msxml2.XMLHTTP",
        "PDF.PdfCtrl",
        "QuickTime.QuickTime",
        "QuickTimeCheckObject.QuickTimeCheck.1",
        "RealPlayer",
        "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
        "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
        "Scripting.Dictionary",
        "SWCtl.SWCtl",
        "Shell.UIHelper",
        "ShockwaveFlash.ShockwaveFlash",
        "Skype.Detection",
        "TDCCtl.TDCCtl",
        "WMPlayer.OCX",
        "rmocx.RealPlayer G2 Control",
        "rmocx.RealPlayer G2 Control.1",
      ];
      e = this.map(t, function (e) {
        try {
          return new ActiveXObject(e), e;
        } catch (e) {
          return null;
        }
      });
    }
    return navigator.plugins && (e = e.concat(this.getRegularPlugins())), e;
  }