;
;
export function getIEPlugins() {
    var result = [];
    if (Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject') || 'ActiveXObject' in window) {
        var names = [
            'AcroPDF.PDF',
            'Adodb.Stream',
            'AgControl.AgControl',
            'DevalVRXCtrl.DevalVRXCtrl.1',
            'MacromediaFlashPaper.MacromediaFlashPaper',
            'Msxml2.DOMDocument',
            'Msxml2.XMLHTTP',
            'PDF.PdfCtrl',
            'QuickTime.QuickTime',
            'QuickTimeCheckObject.QuickTimeCheck.1',
            'RealPlayer',
            'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
            'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
            'Scripting.Dictionary',
            'SWCtl.SWCtl',
            'Shell.UIHelper',
            'ShockwaveFlash.ShockwaveFlash',
            'Skype.Detection',
            'TDCCtl.TDCCtl',
            'WMPlayer.OCX',
            'rmocx.RealPlayer G2 Control',
            'rmocx.RealPlayer G2 Control.1'
        ];
        result = this.map(names, function (name) {
            try {
                new ActiveXObject(name);
                return name;
            } catch (e) {
                return null;
            }
        });
    }
    if (navigator.plugins) {
        result = result.concat(this.getRegularPlugins());
    }
    return result;
}