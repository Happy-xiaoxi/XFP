export function getReferer() {
    if (document.referrer) {
        return document.referrer;
    } else {
        return false;
    }
}
