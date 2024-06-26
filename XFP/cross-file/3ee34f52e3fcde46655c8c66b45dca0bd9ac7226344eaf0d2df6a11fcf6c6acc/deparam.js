
export function deparam(t, e) {
    var i = {}, n = {
            true: !0,
            false: !1,
            null: null
        };
    t = hstc.utils.trim(hstc.utils.safeString(t));
    (hstc.utils.startsWith(t, '?') || hstc.utils.startsWith(t, '#')) && (t = t.slice(1));
    hstc.utils.each(t.split('+').join(' ').split('&'), function (t, r) {
        var s, o = r.split('='), c = hstc.utils.decodeParam(o[0]), a = i, h = 0, u = c.split(']['), l = u.length - 1;
        if (/\[/.test(u[0]) && /\]$/.test(u[l])) {
            u[l] = u[l].replace(/\]$/, '');
            l = (u = u.shift().split('[').concat(u)).length - 1;
        } else
            l = 0;
        if (2 === o.length) {
            s = hstc.utils.decodeParam(o[1]);
            e && (s = s && !isNaN(s) ? +s : 'undefined' === s ? void 0 : void 0 !== n[s] ? n[s] : s);
            if (l)
                for (; h <= l; h++) {
                    c = '' === u[h] ? a.length : u[h];
                    a = a[c = sanitizeKey(c)] = h < l ? a[c] || (u[h + 1] && isNaN(u[h + 1]) ? {} : []) : s;
                }
            else {
                c = sanitizeKey(c);
                hstc.utils.isArray(i[c]) ? i[c].push(s) : void 0 !== i[c] ? i[c] = [
                    i[c],
                    s
                ] : i[c] = s;
            }
        } else
            c && (i[c] = e ? void 0 : '');
    });
    return i;
}
