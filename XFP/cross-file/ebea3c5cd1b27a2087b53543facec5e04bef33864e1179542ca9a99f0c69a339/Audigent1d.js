import { getCookie, setCookie } from "./cookie.js";

export function randomString(length) {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ'.split('');
        if (!length) {
            length = Math.floor(Math.random() * chars.length);
        }
        let str = '';
        for (let i = 0; i < length; i++) {
            str += chars[Math.floor(Math.random() * chars.length)];
        }
        return str;
    }
export function buildAudigent1d() {
        const secondsSinceEpoch = Math.round(Date.now() / 1000);
        return "AU1D-0100-" + String(secondsSinceEpoch).padStart(12, '0') + "-" + randomString(8) + "-" + randomString(4);
    }
export function getAudigent1d(w, d) {
        let au1d = getCookie(d, "1d");
        if (au1d == null) {
            au1d = buildAudigent1d();
        }
        return au1d;
    }