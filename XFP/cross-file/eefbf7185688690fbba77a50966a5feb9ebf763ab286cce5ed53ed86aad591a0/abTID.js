;
;
export function abTID(n) {
    var i, t, r = 'abtid', e, u, o, f;
    for (n && (t = n, i = n), typeof localStorage == 'object' && (n ? localStorage.setItem(r, t) : (i = localStorage.getItem(r), i && (t = i))), typeof sessionStorage == 'object' && (i = sessionStorage.getItem(r), i ? t || (i = t) : t && sessionStorage.setItem(r, t)), i = 0, e = (document.cookie + '').split(';'), u = 0; u < e.length; u++)
        o = e[u].split('='), o[0].replace(/[\s]/gi, '') == r && (i = o[1].replace(/[\s]/gi, ''));
    return i ? t || (t = i) : t && (f = new Date(), f.setFullYear(f.getFullYear() + 10), document.cookie = r + '=' + t + '; SameSite=None; Secure; expires=' + f.toUTCString()), typeof quiz == 'object' && t && !quiz.vid && (quiz.vid = t), t;
}