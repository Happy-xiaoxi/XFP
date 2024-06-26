;
;
export function getIEPluginsString() {
    if (window.ActiveXObject)
        return this.map([
            'ShockwaveFlash.ShockwaveFlash',
            'AcroPDF.PDF',
            'PDF.PdfCtrl',
            'QuickTime.QuickTime',
            'rmocx.RealPlayer G2 Control',
            'rmocx.RealPlayer G2 Control.1',
            'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
            'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
            'RealPlayer',
            'SWCtl.SWCtl',
            'WMPlayer.OCX',
            'AgControl.AgControl',
            'Skype.Detection'
        ], function (n) {
            try {
                return new ActiveXObject(n), n;
            } catch (t) {
                return null;
            }
        }).join(';');
    return '';
}