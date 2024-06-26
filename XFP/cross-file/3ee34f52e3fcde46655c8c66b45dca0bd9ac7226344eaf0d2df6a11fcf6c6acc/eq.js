
export function eq(t, e, i) {
    if (t === e)
        return 0 !== t || 1 / t == 1 / e;
    if (null == t || null == e)
        return t === e;
    t._chain && (t = t._wrapped);
    e._chain && (e = e._wrapped);
    if (t.isEqual && _.isFunction(t.isEqual))
        return t.isEqual(e);
    if (e.isEqual && _.isFunction(e.isEqual))
        return e.isEqual(t);
    var n = toString.call(t);
    if (n != toString.call(e))
        return !1;
    switch (n) {
    case '[object String]':
        return t == String(e);
    case '[object Number]':
        return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
    case '[object Date]':
    case '[object Boolean]':
        return +t == +e;
    case '[object RegExp]':
        return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
    }
    if ('object' != typeof t || 'object' != typeof e)
        return !1;
    for (var r = i.length; r--;)
        if (i[r] == t)
            return !0;
    i.push(t);
    var s = 0, o = !0;
    if ('[object Array]' == n) {
        if (o = (s = t.length) == e.length)
            for (; s-- && (o = s in t == s in e && eq(t[s], e[s], i)););
    } else {
        if ('constructor' in t != 'constructor' in e || t.constructor != e.constructor)
            return !1;
        for (var c in t)
            if (_.has(t, c)) {
                s++;
                if (!(o = _.has(e, c) && eq(t[c], e[c], i)))
                    break;
            }
        if (o) {
            for (c in e)
                if (_.has(e, c) && !s--)
                    break;
            o = !s;
        }
    }
    i.pop();
    return o;
}
