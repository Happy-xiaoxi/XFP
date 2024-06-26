const GDPR_APPLIES = false;
import {processData} from './processd-ata.js'
export function onConsent(w, d, t, u, callback) {
    const tcdataCallback = (tcdata, success) => {
        if (success && tcdata.eventStatus === 'tcloaded') {
            __tcfapi('removeEventListener', 2, success => {
                if (success) {
                }
            }, tcdataCallback);
            if (isPermittedToProcessData(tcdata)) {
                callback(w, d, t, u, tcdata);
            }
        }
        if (success && tcdata.eventStatus === 'useractioncomplete') {
            if (isPermittedToProcessData(tcdata)) {
                callback(w, d, t, u, tcdata);
            }
        }
    };
    const gppCallback = evt => {
        console.warn('[Audigent] implementation for __gpp framework to be completed');
    };
    if (GDPR_APPLIES === false) {
        processData(w, d, t, u, { 'gdprApplies': false });
    } else if (typeof w['__tcfapi'] === 'function') {
        __tcfapi('addEventListener', 2, tcdataCallback);
    } else if (typeof w['__gpp'] === 'function') {
        __gpp('addEventListener', gppCallback);
    } else {
        console.warn('[Audigent] cannot find a required consent framework, halt execution');
    }
}
