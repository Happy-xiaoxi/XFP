;
;
export function xSend(n, t, i) {
    var r, u, f;
    typeof n == 'string' && (n = {
        s: n,
        d: t,
        cb: i
    });
    n.stm || (n.stm = new Date().getTime());
    document.xtt = 0;
    r = document.location + '';
    n.xTest = r.indexOf('//test.') != -1 && !n.noLog && !document.noLog && (n.s + '').indexOf('Facebook.Heat_save') == -1 && (n.s + '').indexOf('System.ASP_Error') == -1;
    u = r.match(/[\&\?]fbuid[\=]([\d]+)/i);
    u && u.length && (n.uid = u[1]);
    try {
        n.objXML = new XMLHttpRequest();
    } catch (e) {
        n.objXML = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (n.noencode || (n.s = escape(n.s)), n.tURL = n.furl ? n.furl : '/api/' + n.s + (n.uid ? '&fbuid=' + n.uid : '') + '&tt=' + n.stm + (document.utf || n.utf ? '&utf=y' : ''), n.tURL = n.tURL.replace(/[\+]/gi, '%20'), n.fLive && r.indexOf('//test.') != -1 && (n.tURL = 'https://' + (document.location.host + '').replace(/test./gi, 'www.') + n.tURL + '&cors=y'), n.log = function (t, i) {
            if (n.xTest)
                try {
                    if (i && i.substr(0, 1) == '{') {
                        var r = JSON.parse(i);
                        r ? (console.log(r), console.groupCollapsed(t), console.log(i), console.groupEnd()) : console.log(i);
                    } else
                        i && i.length > 110 ? (console.groupCollapsed(t), console.log(i), console.groupEnd()) : console.log(t + ': ' + i);
                } catch (u) {
                }
        }, n.xTest)
        try {
            console.groupEnd();
            console.groupCollapsed('XURLVR', n.tURL);
            console.trace();
            n.start = performance.now();
        } catch (e) {
            n.log('XURLVR', n.tURL);
        }
    return n.wait && (f = typeof n.wait == 'number', setWait(f ? n.wait : 1, f ? 0 : n.wait)), n.emsg && typeof sys == 'object' && sys.manage && (n.oecb = n.ecb, n.ecb = function (n, t) {
        sys.manage.newMsg(t.emsg + (!n || !n.error ? '' : ': ' + n.error), 'error ontop');
        t.oecb && t.oecb(n, t);
    }), n.d ? (n.log('XPOST', decodeURIComponent(n.d)), n.objXML.open('POST', n.tURL, n.cb ? !0 : !1), n.objXML.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'), n.objXML.send(n.d)) : (n.log('XGET', decodeURIComponent(n.s)), n.objXML.open('GET', n.tURL, n.cb ? !0 : !1), n.objXML.send(null)), n.catchErr = function (n) {
        return function () {
            if (document.xtt = new Date().getTime() - n.stm, n.isErr = n.noErr ? 0 : aspError(n.s, n.d, n.objXML.responseText), n.xTest) {
                n.log('XRESP', n.objXML.responseText);
                try {
                    console.log('%d, %fms, %fkb', n.objXML.status, Math.round((performance.now() - n.start) * 1000) / 1000, Math.round((n.objXML.responseText + '').length * 100 / 1024) / 100);
                    console.groupEnd();
                    n.isErr && console.error(n.isErr);
                } catch (t) {
                }
            }
        };
    }(n), n.cb ? (n.cb !== !0 && (n.objXML.onreadystatechange = function (n) {
        return function () {
            if (n.objXML.readyState == 4) {
                n.wait && setWait(0, typeof n.wait == 'number' ? 0 : n.wait);
                n.catchErr();
                var t = n.objXML.responseText + '';
                if (n.json) {
                    if (t.substr(0, 1) == '{')
                        try {
                            t = JSON.parse(t);
                        } catch (i) {
                            t = { error: 'Failed to parse JSON' };
                        }
                    else
                        t = { error: t };
                    if (n.ecb && (t.error || t.error === '')) {
                        n.ecb != 1 && n.ecb(t, n);
                        return;
                    }
                }
                n.cb(t, n);
            }
        };
    }(n)), n) : (n.catchErr(), n.objXML.responseText);
}