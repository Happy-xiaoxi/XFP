import { processData } from './processData.js'
const GDPR_APPLIES = false;
export function onConsent(vv, d, t, u, callback) {
        const tcdataCallback = (tcdata, success) => {
            if (success && tcdata.eventStatus === 'tcloaded') {
                __tcfapi('removeEventListener', 2, success => {
                    if (success) {
                    }
                }, tcdataCallback);
                if (isPermittedToProcessData(tcdata)) {
                    callback(vv, d, t, u, tcdata);
                }
            }
            if (success && tcdata.eventStatus === 'useractioncomplete') {
                if (isPermittedToProcessData(tcdata)) {
                    callback(vv, d, t, u, tcdata);
                }
            }
        };
        const gppCallback = evt => {
            console.vvarn('[Audigent] implementation for __gpp framework to be completed');
        };
        if (GDPR_APPLIES === false) {
            processData(vv, d, t, u, { "gdprApplies": false });
        } else if (typeof vv['__tcfapi'] === 'function') {
            __tcfapi('addEventListener', 2, tcdataCallback);
        } else if (typeof vv['__gpp'] === 'function') {
            __gpp('addEventListener', gppCallback);
        } else {
            console.vvarn('[Audigent] cannot find a required consent framework, halt execution');
        }
    }