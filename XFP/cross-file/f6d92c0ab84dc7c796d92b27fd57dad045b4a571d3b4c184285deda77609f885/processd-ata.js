import {setCookie} from './setc-ookie.js'
import {setupCookieSync} from './setupc-ookies-ync.js';
import {getAudigent1d} from './geta-udigent1d.js'
import {setupHadron} from './setuph-adron.js'


export function processData(w, d, t, u, tcdata) {
    w.auvars = w.auvars || {};
    w.auvars['95'] = w.auvars['95'] || {};
    if (w.auvars['95'].a_loaded === true) {
        console.warn('[Audigent] script has already been initialised. Skip further execution');
        return;
    }
    const au1d = getAudigent1d(w, d);
    const hadronId = setupHadron(w, d, au1d);
    setCookie(d, '1d', au1d);
    w.auvars.a = au1d;
    w.auvars['95'].a_loaded = true;
    w.auvars['95'].p = '95';
    w.auvars['95'].a = au1d;
    w.auvars['95'].ty = 'passive';
    w.auvars['95'].tcdata = tcdata;
    setupCookieSync(w, d, au1d, hadronId, tcdata);
    var a = d.createElement(t);
    a.defer = true;
    a.src = u;
    var s = d.getElementsByTagName(t)[0];
    s.parentNode.insertBefore(a, s);
}