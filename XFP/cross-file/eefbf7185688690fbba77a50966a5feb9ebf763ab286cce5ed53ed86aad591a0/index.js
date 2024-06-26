import {getIPs} from './getIPs.js'
import {aspError} from './aspError.js'
import {xSend} from './xSend.js'
import {qsV} from './qsV.js'
import {abTID} from './abTID.js'
import {addExp} from './addExp.js'
import {mixExp} from './mixExp.js'
import {mixExpS} from './mixExpS.js'
import {mixV1} from './mixV1.js'
import {abTrack} from './abTrack.js'
import {tEventS} from './tEventS.js'
import {tEvent} from './tEvent.js'
import {elog} from './elog.js'
import {get} from './get.js'
import {murmurhash3_32_gc} from './murmurhash3_32_gc.js'
import {hasLocalStorage} from './hasLocalStorage.js'
import {hasSessionStorage} from './hasSessionStorage.js'
import {isCanvasSupported} from './isCanvasSupported.js'
import {isIE} from './isIE.js'
import {getPluginsString} from './getPluginsString.js'
import {getRegularPluginsString} from './getRegularPluginsString.js'
import {getIEPluginsString} from './getIEPluginsString.js'
import {getScreenResolution} from './getScreenResolution.js'
import {getCanvasFingerprint} from './getCanvasFingerprint.js'
// import {_convertedFunction} from './_convertedFunction.js'
import {fn} from './fn.js';


var hCand, abLog;
// _convertedFunction('Fingerprint', this, fn);
fn()
getIPs(function (n) {
    n && (document.ip2 + '').indexOf(n) == -1 && (document.ip2 = (document.ip2 ? document.ip2 + ',' : '') + n);
});
abLog = {};
document && 'loaded;interactive;complete'.indexOf(document.readyState) != -1 ? abTrack() : attachE(window, 'DOMContentLoaded', abTrack);