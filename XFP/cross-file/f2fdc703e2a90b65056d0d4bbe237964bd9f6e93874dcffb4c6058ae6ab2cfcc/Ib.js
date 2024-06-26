;
;
export function ib(a) {
    var b = a();
    try {
        var c = 'undefined' == typeof navigator.plugins || 0 == navigator.plugins.length ? !!new ActiveXObject('ShockwaveFlash.ShockwaveFlash') : navigator.plugins['Shockwave Flash'];
        e('flash-installed', null == c ? 'false' : 'true');
    } catch (d) {
        k(d);
    }
    if (0 == (f.methods & 8) && 0 == (f.methods & 1024) && 0 == (f.methods & 8192))
        b(!1);
    else {
        a = document;
        c = [];
        c.push('t=' + encodeURIComponent(y));
        c.push('cm=' + encodeURIComponent(f.methods));
        for (var h in L)
            c.push(h + '=' + encodeURIComponent(L[h]));
        h = !1;
        navigator.userAgent && -1 != navigator.userAgent.indexOf('MSIE ') && (h = !0);
        var g = a.createElement('div');
        g.innerHTML = "''''" + (h ? '' : '\'' + G + '/s.swf?' + c.join('&') + '\'') + (h ? '\'\'' : '') + "''''" + (h ? "'''" + G + '/s.swf?' + c.join('&') + '\'' : '') + '</object>';
        h = g.firstChild;
        h.setAttribute('style', 'position: absolute; top: -9999px; left: -9999px;');
        h.setAttribute('width', '1');
        h.setAttribute('height', '1');
        g = a.createElement('param');
        g.setAttribute('FlashVars', c.join('&'));
        h.appendChild(g);
        window._fli = function (a) {
            try {
                e('flash-ip', a), b(!0);
            } catch (c) {
                b(!1);
            }
        };
        window._sft = function (a) {
            try {
                e('flash-tag', a), e('flash-enabled', 'true'), b(!0);
            } catch (c) {
                b(!1);
            }
        };
        window._gfl = function (a) {
            try {
                for (var c = 0; c < a.length; c++)
                    e('flash-font-' + a[c], 'true');
                b(!0);
            } catch (d) {
                b(!1);
            }
        };
        a.body.appendChild(h);
    }
}