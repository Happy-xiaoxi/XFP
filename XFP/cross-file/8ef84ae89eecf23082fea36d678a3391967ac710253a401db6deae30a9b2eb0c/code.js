(function () {
    var n = this || self, p = function (a, b) {
            a = a.split(".");
            var c = n;
            a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());)
                a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b;
        };
    function q() {
        for (var a = r, b = {}, c = 0; c < a.length; ++c)
            b[a[c]] = c;
        return b;
    }
    function u() {
        var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        a += a.toLowerCase() + "0123456789-_";
        return a + ".";
    }
    var r, v;
    function aa(a) {
        function b(k) {
            for (; d < a.length;) {
                var m = a.charAt(d++), l = v[m];
                if (null != l)
                    return l;
                if (!/^[\s\xa0]*$/.test(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return k;
        }
        r = r || u();
        v = v || q();
        for (var c = "", d = 0;;) {
            var e = b(-1), f = b(0), h = b(64), g = b(64);
            if (64 === g && -1 === e)
                return c;
            c += String.fromCharCode(e << 2 | f >> 4);
            64 != h && (c += String.fromCharCode(f << 4 & 240 | h >> 2), 64 != g && (c += String.fromCharCode(h << 6 & 192 | g)));
        }
    }
    ;
    var w = {}, y = function (a) {
            w.TAGGING = w.TAGGING || [];
            w.TAGGING[a] = !0;
        };
    var ba = Array.isArray, ca = function (a, b) {
            if (a && ba(a))
                for (var c = 0; c < a.length; c++)
                    if (a[c] && b(a[c]))
                        return a[c];
        }, z = function (a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c]);
        }, A = function (a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !0;
            return !1;
        };
    var B = function (a) {
        this.j = a;
    };
    B.prototype.toString = function () {
        return this.j.toString();
    };
    var C = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    new B("about:invalid#zClosurez");
    new B("about:blank");
    var D = function () {
        this.i = "";
    };
    D.prototype.toString = function () {
        return this.i.toString();
    };
    new D();
    var E = function () {
        this.h = "";
    };
    E.prototype.toString = function () {
        return this.h.toString();
    };
    new E();
    var F = function () {
        this.g = n.trustedTypes && n.trustedTypes.emptyHTML || "";
    };
    F.prototype.toString = function () {
        return this.g.toString();
    };
    new F();
    var G = window, H = window.history, I = document, J = navigator, K = function () {
            var a = {}, b = G.google_tag_data;
            G.google_tag_data = void 0 === b ? a : b;
            return G.google_tag_data;
        }, L = function (a, b) {
            I.addEventListener ? I.addEventListener(a, b, !1) : I.attachEvent && I.attachEvent("on" + a, b);
        };
    var da = function (a) {
            var b = M();
            b.pending || (b.pending = []);
            ca(b.pending, function (c) {
                return c.target.ctid === a.ctid && c.target.isDestination === a.isDestination;
            }) || b.pending.push({
                target: a,
                onLoad: void 0
            });
        }, ea = function () {
            this.container = {};
            this.destination = {};
            this.canonical = {};
            this.pending = [];
        }, M = function () {
            var a = K(), b = a.tidr;
            b || (b = new ea(), a.tidr = b);
            return b;
        };
    var N = /:[0-9]+$/, Q = function (a, b) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = O(a.protocol) || O(G.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : G.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || G.location.hostname).replace(N, "").toLowerCase());
            return P(a, b);
        }, P = function (a, b, c) {
            var d = O(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
            case "url_no_fragment":
                c = "";
                a && a.href && (c = a.href.indexOf("#"), c = 0 > c ? a.href : a.href.substr(0, c));
                a = c;
                break;
            case "protocol":
                a = d;
                break;
            case "host":
                a = a.hostname.replace(N, "").toLowerCase();
                c && (c = /^www\d*\./.exec(a)) && c[0] && (a = a.substr(c[0].length));
                break;
            case "port":
                a = String(Number(a.port) || ("http" === d ? 80 : "https" === d ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || y(1);
                a = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                0 <= [].indexOf(a[a.length - 1]) && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href;
            }
            return a;
        }, O = function (a) {
            return a ? a.replace(":", "").toLowerCase() : "";
        }, R = function (a) {
            var b = I.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || y(1), c = "/" + c);
            a = b.hostname.replace(N, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: a,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            };
        };
    var S;
    var U = function () {
            var a = fa, b = ha, c = T(), d = function (h) {
                    a(h.target || h.srcElement || {});
                }, e = function (h) {
                    b(h.target || h.srcElement || {});
                };
            if (!c.init) {
                L("mousedown", d);
                L("keyup", d);
                L("submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function () {
                    b(this);
                    f.call(this);
                };
                c.init = !0;
            }
        }, ia = function (a, b, c, d, e) {
            a = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            T().decorators.push(a);
        }, V = function (a, b, c) {
            for (var d = T().decorators, e = {}, f = 0; f < d.length; ++f) {
                var h = d[f], g;
                if (g = !c || h.forms)
                    a: {
                        g = h.domains;
                        var k = a, m = !!h.sameHost;
                        if (g && (m || k !== I.location.hostname))
                            for (var l = 0; l < g.length; l++)
                                if (g[l] instanceof RegExp) {
                                    if (g[l].test(k)) {
                                        g = !0;
                                        break a;
                                    }
                                } else if (0 <= k.indexOf(g[l]) || m && 0 <= g[l].indexOf(k)) {
                                    g = !0;
                                    break a;
                                }
                        g = !1;
                    }
                g && (g = h.placement, void 0 == g && (g = h.fragment ? 2 : 1), g === b && z(e, h.callback()));
            }
            return e;
        };
    function T() {
        var a = K(), b = a.gl;
        b && b.decorators || (b = { decorators: [] }, a.gl = b);
        return b;
    }
    ;
    var ja = /(.*?)\*(.*?)\*(.*)/, ka = /([^?#]+)(\?[^#]*)?(#.*)?/;
    function W(a) {
        return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
    }
    var X = function (a) {
        var b = [], c;
        for (c in a)
            if (a.hasOwnProperty(c)) {
                var d = a[c];
                if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                    b.push(c);
                    var e = b, f = e.push;
                    d = String(d);
                    r = r || u();
                    v = v || q();
                    for (var h = [], g = 0; g < d.length; g += 3) {
                        var k = g + 1 < d.length, m = g + 2 < d.length, l = d.charCodeAt(g), t = k ? d.charCodeAt(g + 1) : 0, x = m ? d.charCodeAt(g + 2) : 0, ra = l >> 2;
                        l = (l & 3) << 4 | t >> 4;
                        t = (t & 15) << 2 | x >> 6;
                        x &= 63;
                        m || (x = 64, k || (t = 64));
                        h.push(r[ra], r[l], r[t], r[x]);
                    }
                    f.call(e, h.join(""));
                }
            }
        a = b.join("*");
        return [
            "1",
            la(a),
            a
        ].join("*");
    };
    function la(a, b) {
        a = [
            J.userAgent,
            new Date().getTimezoneOffset(),
            J.userLanguage || J.language,
            Math.floor(new Date(Date.now()).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b),
            a
        ].join("*");
        if (!(b = S)) {
            b = Array(256);
            for (var c = 0; 256 > c; c++) {
                for (var d = c, e = 0; 8 > e; e++)
                    d = d & 1 ? d >>> 1 ^ 3988292384 : d >>> 1;
                b[c] = d;
            }
        }
        S = b;
        b = 4294967295;
        for (c = 0; c < a.length; c++)
            b = b >>> 8 ^ S[(b ^ a.charCodeAt(c)) & 255];
        return ((b ^ -1) >>> 0).toString(36);
    }
    function ma(a) {
        return function (b) {
            var c = R(G.location.href), d = c.search.replace("?", "");
            a: {
                var e = d.split("&");
                for (var f = 0; f < e.length; f++) {
                    var h = e[f].split("=");
                    if ("_gl" === decodeURIComponent(h[0]).replace(/\+/g, " ")) {
                        e = h.slice(1).join("=");
                        break a;
                    }
                }
                e = void 0;
            }
            b.query = na(e || "") || {};
            e = Q(c, "fragment");
            f = e.match(W("_gl"));
            b.fragment = na(f && f[3] || "") || {};
            a && oa(c, d, e);
        };
    }
    function pa(a, b) {
        if (a = W(a).exec(b)) {
            var c = a[2], d = a[4];
            b = a[1];
            d && (b = b + c + d);
        }
        return b;
    }
    function oa(a, b, c) {
        function d(f, h) {
            f = pa("_gl", f);
            f.length && (f = h + f);
            return f;
        }
        if (H && H.replaceState) {
            var e = W("_gl");
            if (e.test(b) || e.test(c))
                a = Q(a, "path"), b = d(b, "?"), c = d(c, "#"), H.replaceState({}, void 0, "" + a + b + c);
        }
    }
    var na = function (a) {
        try {
            a: {
                if (a) {
                    b: {
                        for (var b = 0; 3 > b; ++b) {
                            var c = ja.exec(a);
                            if (c) {
                                var d = c;
                                break b;
                            }
                            a = decodeURIComponent(a);
                        }
                        d = void 0;
                    }
                    if (d && "1" === d[1]) {
                        var e = d[2], f = d[3];
                        b: {
                            for (d = 0; 3 > d; ++d)
                                if (e === la(f, d)) {
                                    var h = !0;
                                    break b;
                                }
                            h = !1;
                        }
                        if (h) {
                            var g = f;
                            break a;
                        }
                        y(7);
                    }
                }
                g = void 0;
            }
            e = g;
            if (void 0 !== e) {
                g = {};
                var k = e ? e.split("*") : [];
                for (e = 0; e + 1 < k.length; e += 2) {
                    var m = k[e], l = aa(k[e + 1]);
                    g[m] = l;
                }
                y(6);
                return g;
            }
        } catch (t) {
            y(8);
        }
    };
    function Y(a, b, c, d) {
        function e(k) {
            k = pa(a, k);
            var m = k.charAt(k.length - 1);
            k && "&" !== m && (k += "&");
            return k + g;
        }
        d = void 0 === d ? !1 : d;
        var f = ka.exec(c);
        if (!f)
            return "";
        c = f[1];
        var h = f[2] || "";
        f = f[3] || "";
        var g = a + "=" + b;
        d ? f = "#" + e(f.substring(1)) : h = "?" + e(h.substring(1));
        return "" + c + h + f;
    }
    function qa(a, b) {
        var c = "FORM" === (a.tagName || "").toUpperCase(), d = V(b, 1, c), e = V(b, 2, c);
        b = V(b, 3, c);
        A(d) && (d = X(d), c ? sa("_gl", d, a) : Z("_gl", d, a, !1));
        !c && A(e) && (c = X(e), Z("_gl", c, a, !0));
        for (var f in b)
            b.hasOwnProperty(f) && ta(f, b[f], a);
    }
    function ta(a, b, c, d) {
        if (c.tagName) {
            if ("a" === c.tagName.toLowerCase())
                return Z(a, b, c, d);
            if ("form" === c.tagName.toLowerCase())
                return sa(a, b, c);
        }
        if ("string" == typeof c)
            return Y(a, b, c, d);
    }
    function Z(a, b, c, d) {
        c.href && (a = Y(a, b, c.href, void 0 === d ? !1 : d), C.test(a) && (c.href = a));
    }
    function sa(a, b, c) {
        if (c && c.action) {
            var d = (c.method || "").toLowerCase();
            if ("get" === d) {
                d = c.childNodes || [];
                for (var e = !1, f = 0; f < d.length; f++) {
                    var h = d[f];
                    if (h.name === a) {
                        h.setAttribute("value", b);
                        e = !0;
                        break;
                    }
                }
                e || (d = I.createElement("input"), d.setAttribute("type", "hidden"), d.setAttribute("name", a), d.setAttribute("value", b), c.appendChild(d));
            } else
                "post" === d && (a = Y(a, b, c.action), C.test(a) && (c.action = a));
        }
    }
    function fa(a) {
        try {
            a: {
                for (var b = 100; a && 0 < b;) {
                    if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
                        var c = a;
                        break a;
                    }
                    a = a.parentNode;
                    b--;
                }
                c = null;
            }
            if (c) {
                var d = c.protocol;
                "http:" !== d && "https:" !== d || qa(c, c.hostname);
            }
        } catch (e) {
        }
    }
    function ha(a) {
        try {
            if (a.action) {
                var b = Q(R(a.action), "host");
                qa(a, b);
            }
        } catch (c) {
        }
    }
    ;
    p("google_tag_data.glBridge.auto", function (a, b, c, d) {
        U();
        ia(a, b, "fragment" === c ? 2 : 1, !!d, !1);
    });
    p("google_tag_data.glBridge.passthrough", function (a, b, c) {
        U();
        ia(a, [P(G.location, "host", !0)], b, !!c, !0);
    });
    p("google_tag_data.glBridge.decorate", function (a, b, c) {
        a = X(a);
        return ta("_gl", a, b, !!c);
    });
    p("google_tag_data.glBridge.generate", X);
    p("google_tag_data.glBridge.get", function (a, b) {
        var c = ma(!!b);
        b = T();
        b.data || (b.data = {
            query: {},
            fragment: {}
        }, c(b.data));
        c = {};
        if (b = b.data)
            z(c, b.query), a && z(c, b.fragment);
        return c;
    });
    p("google_tag_data.tcBridge.registerUa", function (a, b) {
        a = a + "_" + b;
        var c = M(), d = c.destination[a];
        d ? (d.state = 2, d.containers = [], d.destinations = [b]) : c.destination[a] = {
            state: 2,
            containers: [],
            destinations: [b]
        };
    });
    p("google_tag_data.tcBridge.setSideload", function (a, b, c) {
        a = {
            ctid: a + "_" + c,
            isDestination: !0
        };
        M().container[b] = {
            state: 1,
            context: {
                source: 5,
                fromContainerExecution: !0
            },
            parent: a
        };
        da({
            ctid: b,
            isDestination: !1
        });
    });
}(window));