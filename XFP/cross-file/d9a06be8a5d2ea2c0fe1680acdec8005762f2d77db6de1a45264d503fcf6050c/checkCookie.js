import {setCookie} from './setCookie.js'
import {getCookie} from './getCookie.js';
export function checkCookie() {
    var timestamp = new Date().getTime();
    setCookie('sup_cookie', timestamp);
    if (timestamp != getCookie('sup_cookie')) {
        return false;
    }
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
    return true;
}