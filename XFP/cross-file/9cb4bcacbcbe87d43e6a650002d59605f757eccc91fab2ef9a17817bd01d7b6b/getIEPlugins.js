import {map} from './map.js'
import {getRegularPlugins} from './getRegularPlugins.js';
export function getIEPlugins(options) {
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
        result = map(names, function (name) {
            try {
                new window.ActiveXObject(name);
                return name;
            } catch (e) {
                return options.ERROR;
            }
        });
    } else {
        result.push(options.NOT_AVAILABLE);
    }
    if (navigator.plugins) {
        result = result.concat(getRegularPlugins(options));
    }
    return result;
}