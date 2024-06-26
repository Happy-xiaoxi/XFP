export function encodeParam(t, e) {
    var i = encodeURIComponent;
    return i instanceof Function ? e ? encodeURI(t) : i(t) : escape(t);
}
