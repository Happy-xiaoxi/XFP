;
;
export function addExp(n) {
    var t = '', i, r;
    return typeof localStorage == 'object' && (i = localStorage.getItem('exp'), i && (t = mixExp(t, i))), typeof sessionStorage == 'object' && (i = sessionStorage.getItem('exp'), i && (t = mixExp(t, i))), r = /exp[\=]([^\=\;]+)/.exec(document.cookie + ''), r && r[1] && (t = mixExp(t, r[1])), t ? mixExp(t, n) : n;
}