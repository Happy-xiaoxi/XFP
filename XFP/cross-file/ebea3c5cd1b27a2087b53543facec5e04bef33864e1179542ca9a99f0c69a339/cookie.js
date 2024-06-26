import { extractDomain } from "./extractDomain.js";

const SIMPLE_DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]*\.[a-z]+$/i;
const DOMAIN_MATCH_REGEX = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i;


function imgSrcToElement(src, d) {
    var img = d.createElement('img');
    img.height = 1;
    img.width = 1;
    img.style.display = 'none';
    img.src = src;
    img.alt = '';
    return img;
}

export function getCookie(d, key) {
        let fkey = "_au_" + key + "=";
        let decodedCookie = decodeURIComponent(d.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(fkey) == 0) {
                return c.substring(fkey.length, c.length);
            }
        }
        console.log("cookie get");
        return null;
    }
    
export function setCookie(d, key, value, maxAge = 31536000) {
        d.cookie = "_au_" + key + "=" + encodeURIComponent(value) + "; domain=" + extractDomain(d.location.hostname) + "; secure; samesite=none; path=/; max-age=" + maxAge;
    }
    
    
const NEED_HADRON_MATCH = ['index'];
const CURRENT_SECONDS = Math.round(new Date() / 1000);
const COOKIE_TTL = 57600;
const NEED_GDPR_FLAGS = [
    'apn',
    'ttd',
    'rub',
    'smart',
    'son',
    'index'
];

export function setupCookieSync(w, d, au1d, hadronId, tcdata) {
    const pixels = [
        [
            "apn",
            "https://secure.adnxs.com/getuid?https://ids.ad.gt/api/v1/match?id=[AU1D]&adnxs_id=$UID"
        ],
        [
            "ttd",
            "https://match.adsrvr.org/track/cmf/generic?ttd_pid=8gkxb6n&ttd_tpi=1&ttd_puid=[AU1D]"
        ],
        [
            "pub",
            "https://image2.pubmatic.com/AdServer/UCookieSetPug?rd=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fpbm_match%3Fpbm%3D%23PM_USER_ID%26id%3D[AU1D]"
        ],
        [
            "rub",
            "https://token.rubiconproject.com/token?pid=50242&puid=[AU1D]"
        ],
        [
            "tapad",
            "https://pixel.tapad.com/idsync/ex/receive?partner_id=3185&partner_device_id=[AU1D]&partner_url=https://ids.ad.gt%2Fapi%2Fv1%2Ftapad_match%3Fid%3D[AU1D]%26tapad_id%3D%24%7BTA_DEVICE_ID%7D"
        ],
        [
            "adx",
            "https://cm.g.doubleclick.net/pixel?google_nid=audigent_w_appnexus_3985&google_cm&google_sc&google_ula=450542624&id=[AU1D]"
        ],
        [
            "goo",
            "https://ids.ad.gt/api/v1/g_hosted?id=[AU1D]"
        ],
        [
            "index",
            "https://ssum-sec.casalemedia.com/ium?sourceid=15&uid=[HID]"
        ],
        [
            "amo",
            "https://d.turn.com/r/dd/id/L2NzaWQvMS9jaWQvMTc0ODI0MTY1OC90LzA/url/https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Famo_match%3Fturn_id%3D%24!{TURN_UUID}%26id%3D[AU1D]"
        ],
        [
            "taboola",
            "https://trc.taboola.com/sg/audigent/1/cm?redirect=http%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Ftaboola%3Fpartner_uid%3D%3CTUID%3E%3Fid%3D[AU1D]"
        ],
        [
            "bees",
            "https://match.prod.bidr.io/cookie-sync/audigent?buyer_user_id=[AU1D]"
        ],
        [
            "unruly",
            "https://sync.1rx.io/usersync/audigent/0?dspret=1&redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Funruly%3Fid%3D[AU1D]%26unruly_id%3D%5BRX_UUID%5D"
        ],
        [
            "colossus",
            "https://sync.colossusssp.com/ebfa23da174faa55634171c5e49d0152.gif?puid=[AU1D]&redir=http%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fcolossus%3Fcls_id%3D%5BUID%5D%26id%3D[AU1D]"
        ],
        [
            "ip",
            "https://ids.ad.gt/api/v1/ip_match?id=[AU1D]"
        ],
        [
            "ppnt",
            "https://bh.contextweb.com/bh/rtset?pid=562316&ev=1&rurl=https://ids.ad.gt/api/v1/ppnt_match?uid=%%VGUID%%&id=[AU1D]"
        ],
        [
            "openx",
            "https://u.openx.net/w/1.0/cm?id=998eaf06-9905-4eae-9e26-9fac75960c53&r=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fopenx%3Fopenx_id%3D%7BOPENX_ID%7D%26id%3D[AU1D]%26auid%3D[AU1D]"
        ],
        [
            "impr",
            "https://ad.360yield.com/ux?&publisher_dmp_id=15&r=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fimpr_match%3Fid%3D[AU1D]%26impr_uid%3D%7BPUB_USER_ID%7D"
        ],
        [
            "ado",
            "https://dpm.demdex.net/ibs:dpid=348447&dpuuid=[AU1D]&redir=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fadb_match%3Fadb%3D%24%7BDD_UUID%7D%26id%3D[AU1D]"
        ],
        [
            "smart",
            "https://sync.smartadserver.com/getuid?url=https%3A%2F%2Fids.ad.gt%2Fapi%2Fv1%2Fsmart_match%3Fid%3D[AU1D]%26sas_uid%3D%5bsas_uid%5d"
        ],
        [
            "son",
            "https://sync.go.sonobi.com/us?https://ids.ad.gt/api/v1/son_match?id=[AU1D]&uid=[UID]"
        ]
    ];
    let pixelCount = 0;
    const lastSeenPixelsEncoded = getCookie(d, "last_seen_pixels");
    const lastSeenPixels = lastSeenPixelsEncoded !== null ? JSON.parse(atob(lastSeenPixelsEncoded)) : {};
    for (const pixelInfo of pixels) {
        if (pixelCount > 9)
            break;
        const pixelType = pixelInfo[0];
        setCookie(d, "last_seen_" + pixelType, "", 0);
        let pixelHref = "";
        if (NEED_HADRON_MATCH.includes(pixelType)) {
            if (hadronId == null) {
                continue;
            }
            pixelHref = pixelInfo[1].replace(/\[HID\]/g, hadronId);
        } else {
            pixelHref = pixelInfo[1].replace(/\[AU1D\]/g, au1d);
        }
        if ((tcdata || {})['gdprApplies'] === true) {
            const vendorId = ID_MATCH_VENDORS[pixelType];
            if (vendorId === undefined) {
                continue;
            }
            const vendorConsents = tcdata['vendor'].consents;
            if (vendorConsents[vendorId] !== true) {
                continue;
            }
        }
        const lastSeenMillis = parseInt(lastSeenPixels[pixelType]) || 0;
        if (lastSeenMillis + COOKIE_TTL < CURRENT_SECONDS) {
            if (NEED_GDPR_FLAGS.includes(pixelType)) {
                if ((tcdata || {})['gdprApplies'] === true) {
                    pixelHref += '&gdpr=1&gdpr_consent=' + (tcdata['tcString'] || '');
                } else {
                    pixelHref += '&gdpr=0';
                }
            }
            const img = imgSrcToElement(pixelHref, d);
            d.body.appendChild(img);
            if (pixelType !== 'ip') {
                lastSeenPixels[pixelType] = CURRENT_SECONDS;
            }
            pixelCount += 1;
        }
    }
    setCookie(d, "last_seen_pixels", btoa(JSON.stringify(lastSeenPixels)));
}
