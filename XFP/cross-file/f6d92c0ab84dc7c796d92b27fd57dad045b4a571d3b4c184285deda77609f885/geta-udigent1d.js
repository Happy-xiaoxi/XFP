import {buildAudigent1d} from './builda-udigent1d.js';
import {getCookie} from './getc-ookie.js'

export function getAudigent1d(w, d) {
    let au1d = getCookie(d, '1d');
    if (au1d == null) {
        au1d = buildAudigent1d();
    }
    return au1d;
}