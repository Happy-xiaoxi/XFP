import {abTID} from './abTID.js'
import {xSend} from './xSend.js';
;
;
;
;




export function tEvent(n, t, i, r, u, f, e) {
    gEvent(i, r, u, f, e);
    var o = abTID();
    o && xSend({
        s: 'System.AB_Track_E',
        noLog: 1,
        d: 'tid=' + n + '&tv=' + t + '&vid=' + encodeURIComponent(o) + (i ? '&ct=' + encodeURIComponent(i) : '') + (r ? '&ac=' + encodeURIComponent(r) : '') + (u ? '&lb=' + encodeURIComponent(u) : '') + (f ? '&v=' + encodeURIComponent(f) : ''),
        cb: function () {
        }
    });
}