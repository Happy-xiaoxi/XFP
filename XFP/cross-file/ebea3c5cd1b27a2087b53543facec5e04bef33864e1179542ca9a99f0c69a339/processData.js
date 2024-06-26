import { randomString, buildAudigent1d, getAudigent1d } from "./Audigent1d.js";
import { setupHadron } from './setupHadron.js'
import { setCookie, setupCookieSync } from "./cookie.js";

export function processData(vv, d, t, u, tcdata) {
        vv.auvars = vv.auvars || {};
        vv.auvars['95'] = vv.auvars['95'] || {};
        if (vv.auvars['95'].a_loaded === true) {
            console.warn("[Audigent] script has already been initialised. Skip further execution");
            return;
        }
        const au1d = getAudigent1d(vv, d);
        const hadronId = setupHadron(vv, d, au1d);
        setCookie(d, "1d", au1d);
        vv.auvars.a = au1d;
        vv.auvars['95'].a_loaded = true;
        vv.auvars['95'].p = '95';
        vv.auvars['95'].a = au1d;
        vv.auvars['95'].ty = 'passive';
        vv.auvars['95'].tcdata = tcdata;
        setupCookieSync(vv, d, au1d, hadronId, tcdata);
        var a = d.createElement(t);
        a.defer = true;
        a.src = u;
        var s = d.getElementsByTagName(t)[0];
        s.parentNode.insertBefore(a, s);
    }