






export function trackConversion(t, e) {
    this._manageCookies();
    if ('string' == typeof t || 'number' == typeof t) {
        t = { id: hstc.utils.safeString(t) };
        hstc.utils.isDefined(e) && (t = hstc.utils.mergeObject(t, e));
    }
    hstc.utils.isFunction(t.value) && (t.value = t.value(hstc));
    var i = hstc.utils.mergeObject(t, {
        k: 3,
        n: hstc.utils.safeString(t.id),
        m: hstc.utils.safeString(t.value)
    });
    this._loadImage(i);
}
