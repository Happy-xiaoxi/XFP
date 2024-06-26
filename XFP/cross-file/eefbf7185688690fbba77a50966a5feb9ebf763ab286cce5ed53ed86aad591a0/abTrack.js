import {abTID} from './abTID.js'
import {xSend} from './xSend.js';

export function abTrack() {
    var t = document.querySelectorAll("''"), i, p, r, w, n, u, c, l, e, a, o, s, v, y;
    t && t[0] && (i = t[t.length - 1].getAttribute('t'), p = t[t.length - 1].getAttribute('log'));
    var h = abTID(), b = new Fingerprint({
            screen_resolution: !0,
            canvas: !0,
            ie_activex: !0
        }).get(), f = document.body.getAttribute('p') + '';
    if (f == 'Dashboard' && typeof sys == 'object' && sys.pages && sys.pages.pg && (r = sys.pages.pg, f += r.c == 'dashboard' ? '' : '/' + r.c + (r.tab ? '/' + r.tab : '')), w = window.innerWidth > 768 ? 1200 : window.innerWidth > 480 ? 768 : window.innerWidth > 320 ? 480 : 320, n = document.location.search + '', n && n.substr(0, 1) == '?' && (n = n.substr(1)), u = '', !h && /(matchtype|device)[\=]/i.test(n))
        for (c = n.substr(1).split('&'), l = {}, e = 0; e < c.length; e++)
            a = c[e].split('='), l[a[0]] = a[1], u = '&aw=' + encodeURIComponent(JSON.stringify(l));
    f == 'take-quiz' && typeof quiz == 'object' && (u += '&qp=' + quiz.ref);
    i && (o = addExp(i.replace(/[\;]/g, '_')), typeof localStorage == 'object' && localStorage.setItem('exp', o), typeof sessionStorage == 'object' && sessionStorage.setItem('exp', o), s = new Date(), s.setFullYear(s.getFullYear() + 10), document.cookie = 'exp=' + o + '; SameSite=None; Secure; expires=' + s.toUTCString(), typeof gEventS == 'function' && (v = (i + ';').split(';'), gEventS('AB', v[0], v[1])));
    try {
        if (p) {
            if (document.cls || typeof PerformanceObserver != 'function' || (document.cls = {
                    score: 0,
                    list: []
                }, document.clsC = function (n) {
                    if (n.id)
                        return '#' + n.id;
                    var t = n.tagName + (n.className ? '.' + Array.prototype.slice.call(n.classList).join('.') : ''), i = Array.prototype.slice.call(document.querySelectorAll(t));
                    return t + (i.length > 1 ? '[' + i.indexOf(n) + ']' : '');
                }, new PerformanceObserver(function (n) {
                    for (var h = n.getEntries(), t, e, o, i, r, u, s, f = 0; f < h.length; f++)
                        if (t = h[f], !t.hadRecentInput) {
                            for (e = {
                                    sources: [],
                                    score: t.value,
                                    start: t.startTime,
                                    duration: t.duration,
                                    recentInput: t.hadRecentInput,
                                    lastInput: t.lastInputTime
                                }, o = 0; o < t.sources.length; o++) {
                                i = t.sources[o];
                                r = {
                                    sel: document.clsC(i.node),
                                    from: {},
                                    to: {}
                                };
                                for (u in i.currentRect)
                                    r.from[u] = i.currentRect[u];
                                delete r.from.toJSON;
                                for (u in i.previousRect)
                                    r.to[u] = i.previousRect[u];
                                delete r.to.toJSON;
                                e.sources.push(r);
                            }
                            s = document.cls;
                            s.score += e.score;
                            s.list.push(e);
                        }
                }).observe({
                    type: 'layout-shift',
                    buffered: !0
                })), document.readyState != 'complete') {
                setTimeout(abTrack, 100);
                return;
            }
            document.cls && (abLog.cls = document.cls, u = '&path=' + encodeURIComponent((document.location.pathname + '').substr(1)) + '&log=' + encodeURIComponent(JSON.stringify(abLog)));
        }
    } catch (k) {
    }
    xSend({
        s: 'System.AB_Track',
        noLog: 1,
        d: 'fp=' + encodeURIComponent(b) + '&p=' + encodeURIComponent(f) + '&qs=' + encodeURIComponent(n) + '&ss=' + encodeURIComponent(w) + (h ? '&id=' + encodeURIComponent(h) : '') + (i ? '&t=' + encodeURIComponent(i) : '') + (document.ip2 ? '&ip2=' + encodeURIComponent(document.ip2) : '') + u,
        cb: function (n) {
            n && parseInt(n) > 0 && abTID(parseInt(n));
        }
    });
    typeof sys == 'object' && (y = function () {
        if (typeof gObj == 'object') {
            var n = {
                vid: abTID(),
                fp: new Fingerprint({
                    screen_resolution: !0,
                    canvas: !0,
                    ie_activex: !0
                }).get()
            };
            document.ip2 && (n.ip2 = document.ip2);
            gObj.abtrack = n;
        }
        return !0;
    }, sys.qlist ? sys.qlist.saveCheck.push(y) : sys.createCB('qlist', y));
}