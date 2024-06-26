
export function param(t, e) {
    var i = [];
    e = e || '&';
    function n(t, e) {
        i[i.length] = hstc.utils.encodeParam(t) + '=' + hstc.utils.encodeParam(e);
    }
    for (var r in t)
        hstc.utils.isArray(t[r]) ? hstc.utils.each(t[r], function () {
            n(r, this);
        }) : n(r, hstc.utils.isFunction(t[r]) ? t[r]() : t[r]);
    return i.join(e).replace(/%20/g, '+');
}
