import { getCookie, setCookie } from "./cookie.js";
import { randomString, buildAudigent1d, getAudigent1d } from "./Audigent1d.js";
import { processData } from './processData.js'
import { isPermittedToProcessData } from "./isPermittedToProcessData.js";
import { onConsent } from "./onConsent.js";

!function (t, u) {
    const COOKIE_TTL = 57600;
    const CURRENT_SECONDS = Math.round(new Date() / 1000);
    const GDPR_APPLIES = false;
    const NEED_GDPR_FLAGS = [
        'apn',
        'ttd',
        'rub',
        'smart',
        'son',
        'index'
    ];

    const ID_MATCH_VENDORS = {
        "apn": 32,
        "ttd": 21,
        "adx": 755,
        "ado": 565,
        "pub": 76,
        "son": 104,
        "goo": 561,
        "rub": 52,
        "bees": 12,
        "impr": 253,
        "smart": 45,
        "ppnt": 81,
        "taboola": 42,
        "unruly": 36,
        "openx": 69,
        "ip": 561,
        "tapad": 89,
        "index": 10
    };
    // getCookie setCookie


    const w = window;
    onConsent(w, w.document, t, u, processData);
}('script', 'https://p.ad.gt/api/v1/p/95');