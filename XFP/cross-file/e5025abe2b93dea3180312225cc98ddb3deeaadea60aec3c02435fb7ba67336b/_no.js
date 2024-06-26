export function o(n) {
  var e = [];
  if (
    (Object.getOwnPropertyDescriptor &&
      Object.getOwnPropertyDescriptor(window, "ActiveXObject")) ||
    "ActiveXObject" in window
  ) {
    e = s(
      [
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
      ],
      function (e) {
        try {
          return new window.ActiveXObject(e), e;
        } catch (t) {
          return n.ERROR;
        }
      }
    );
  } else e.push(n.NOT_AVAILABLE);
  return navigator.plugins && (e = e.concat(i(n))), e;
}