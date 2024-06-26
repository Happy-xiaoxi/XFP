;
;
export function mixExp(n, t) {
    if (!t)
        return n;
    if (!n)
        return t;
    var i = (n ? n + '' : '').split(':'), r = (t ? t + '' : '').split(':');
    return r[1] || (r[1] = ''), i[1] || (i[1] = ''), i[0] = mixExpS(i[0], r[0]), i[1] = mixExpS(i[1], r[1]), i[0] && i[1] && (i[0] = i[0].replace(/(^|[\,\_\:])[\d]+(?=[\,\_\:]|$)/gi, function (n) {
        return function (t) {
            var i = '';
            return /^[^\d]/.test(t) && (i = t.substr(0, 1), t = t.substr(1)), new RegExp('(^|[\\,\\_\\:])' + t + '(?=[\\,\\_\\:]|$)', '').test(n) && (t = ''), i + t;
        };
    }(i[1])).replace(/((^|[\_\:])[\,]+|[\,]+([\_\:]|$))/g, '').replace(/[\,]+/gi, ',')), i[0] === '_' && (i[0] = ''), i[1] === '_' && (i[1] = ''), i[0] + (i[1] ? (i[0] ? ':' : '') + i[1] : '');
}