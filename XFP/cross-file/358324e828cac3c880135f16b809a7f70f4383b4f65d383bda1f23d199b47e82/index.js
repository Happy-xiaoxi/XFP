import {uid} from './uid.js'
import {guid} from './guid.js'
import {get_q} from './get_q.js'
import {queryBuilder} from './queryBuilder.js'
import {getUrlElement} from './getUrlElement.js'
import {setCookie} from './setCookie.js'
import {getCookie} from './getCookie.js'
import {getDate} from './getDate.js'
import {cleanString} from './cleanString.js'
import {post} from './post.js'
import {get} from './get.js'
import {pixel} from './pixel.js'
import {checkDomain} from './checkDomain.js'
import {checkCommon} from './checkCommon.js'
import {checkCake} from './checkCake.js'
import {setPageHash} from './setPageHash.js'
import {setSessionId} from './setSessionId.js'
import {getSessionId} from './getSessionId.js'
import {setTrackId} from './setTrackId.js'
import {getTrackId} from './getTrackId.js'
import {setWebmaster} from './setWebmaster.js'
import {getWebmaster} from './getWebmaster.js'
import {parseWebmaster} from './parseWebmaster.js'
import {setPartner} from './setPartner.js'
import {getPartner} from './getPartner.js'
import {parsePartner} from './parsePartner.js'
import {setClickId} from './setClickId.js'
import {getClickId} from './getClickId.js'
import {parseClickId} from './parseClickId.js'
import {setTrackUrl} from './setTrackUrl.js'
import {getTrackUrl} from './getTrackUrl.js'
import {getQuerySource} from './getQuerySource.js'
import {getQueryMedium} from './getQueryMedium.js'
import {getReferrer} from './getReferrer.js'
import {isIframe} from './isIframe.js'
import {getIframeLand} from './getIframeLand.js'
import {getLand} from './getLand.js'
import {sendHit} from './sendHit.js'
import {advcakeCorrection} from './advcakeCorrection.js'
import {advcakeOrder} from './advcakeOrder.js'
import {advcakeEvents} from './advcakeEvents.js'
import {_convertedFunction} from './_convertedFunction.js'
window.advcake_attempt = window.advcake_attempt || 0;
;
;
;
try {
    var advcake_helper = {};
    advcake_helper['uid'] = uid;
    advcake_helper['guid'] = guid;
    advcake_helper['get_q'] = get_q;
    advcake_helper['queryBuilder'] = queryBuilder;
    advcake_helper['getUrlElement'] = getUrlElement;
    advcake_helper['setCookie'] = setCookie;
    advcake_helper['getCookie'] = getCookie;
    advcake_helper['getDate'] = getDate;
    advcake_helper['cleanString'] = cleanString;
    advcake_helper['post'] = post;
    advcake_helper['get'] = get;
    advcake_helper['pixel'] = pixel;
    var advcake_int = {
        domain: '.smotreshka.tv',
        hitUrl: 'https://hit.acstat.com/smotreshkatv/',
        postbackUrl: 'https://api.ekacvda.com/postback/smotreshkatv',
        utm_source: 'utm_source',
        utm_partner: 'utm_campaign',
        utm_webmaster: 'utm_content',
        utm_params: 'advcake_params',
        cookie_partner: 'advcake_utm_partner',
        cookie_webmaster: 'advcake_utm_webmaster',
        cookie_params: 'advcake_click_id',
        cookie_session_id: 'advcake_session_id',
        cookie_track_id: 'advcake_track_id',
        cookie_track_url: 'advcake_track_url',
        cookie_lifetime: 2592000,
        vars: { page_hash: '' },
        init: function () {
            advcake_int.checkDomain(advcake_int)
            advcake_int.setPageHash(advcake_int, advcake_helper)
            advcake_int.setTrackId()
            advcake_int.setSessionId()
            if (advcake_int.checkCommon()) {
                advcake_int.setTrackUrl();
                advcake_int.setPartner();
                advcake_int.setWebmaster();
                advcake_int.setClickId();
            }
        },
        checkDomain: checkDomain,
        checkCommon: checkCommon,
        checkCake: checkCake,
        setPageHash: setPageHash,
        setSessionId: setSessionId,
        getSessionId: getSessionId,
        setTrackId: setTrackId,
        getTrackId: getTrackId,
        setWebmaster: setWebmaster,
        getWebmaster: getWebmaster,
        parseWebmaster: parseWebmaster,
        setPartner: setPartner,
        getPartner: getPartner,
        parsePartner: parsePartner,
        setClickId: setClickId,
        getClickId: getClickId,
        parseClickId: parseClickId,
        setTrackUrl: setTrackUrl,
        getTrackUrl: getTrackUrl,
        getQuerySource: getQuerySource,
        getQueryMedium: getQueryMedium,
        getReferrer: getReferrer,
        isIframe: isIframe,
        getIframeLand: getIframeLand,
        getLand: getLand,
        sendHit: sendHit
    };
    advcake_int.init();
    advcake_int.sendHit();
    window.advcakeCorrection = advcakeCorrection;
    window.advcakeOrder = advcakeOrder;
    window.advcakeEvents = advcakeEvents;
    window.advcake_data = window.advcake_data || [];
    if (window.advcake_data_push_flag !== true) {
        window.advcake_data_push_flag = true;
        var cakePush = window.advcake_data.push;
        window.advcake_data.push = function (data) {
            var a = cakePush.apply(this, arguments);
            window.advcakeEvents(data);
            return a;
        };
    }
    if (typeof window.advcake_data === 'object' && typeof window.advcake_data.forEach !== 'undefined') {
        window.advcake_data.forEach(function (data) {
            if (typeof data === 'object') {
                window.advcakeEvents(data);
            }
        });
    }
} catch (e) {
    if (e === 'incorrect_domain') {
        _convertedFunction(document);
    }
}