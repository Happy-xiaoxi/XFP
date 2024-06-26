import ha from "./ha.js";
import fa from "./fa.js";
import sa from "./sa.js";
import Z from "./N_Z.js";
import ta from "./ta.js";
import qa from "./qa.js";
import Y from "./N_Y.js";
import na from "./na.js";
import oa from "./oa.js";
import pa from "./pa.js";
import ma from "./ma.js";
import la from "./la.js";
import X from "./X.js";
import W from "./W.js";
import T from "./T.js";
import U from "./N_U.js";
import Q from "./N_Q.js";
import da from "./da.js";
import K from "./K.js";
import F from "./F.js";
import E from "./E.js";
import D from "./D.js";
import B from "./B.js";
import ca from "./ca.js";
import y from "./y.js";
import aa from "./aa.js";
import u from "./u.js";
import q from "./q.js";
import p from "./p.js";
var r, v;
;
B.prototype.toString = function () {
  return this.j.toString();
};
var C = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
new B("about:invalid#zClosurez");
new B("about:blank");
D.prototype.toString = function () {
  return this.i.toString();
};
new D();
E.prototype.toString = function () {
  return this.h.toString();
};
new E();
F.prototype.toString = function () {
  return this.g.toString();
};
new F();
var S;
;
var ja = /(.*?)\*(.*?)\*(.*)/,
  ka = /([^?#]+)(\?[^#]*)?(#.*)?/;
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
  if (b = b.data) z(c, b.query), a && z(c, b.fragment);
  return c;
});
p("google_tag_data.tcBridge.registerUa", function (a, b) {
  a = a + "_" + b;
  var c = M(),
    d = c.destination[a];
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