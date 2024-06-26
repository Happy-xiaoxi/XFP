
var d = document;
var w = window;
var nav = navigator;
var sc = screen;
var ua = nav.userAgent;
import { generateUid } from './generateUid.js';
import { getCookie } from './getCookie.js';
import { getInu} from './getInu.js';
import { getUid} from './getUid.js';
import { getWGL} from './getWGL.js';
import { serialize} from './serialize.js';

export function hit(referrer) {
    var s = w && w.sessionStorage ? w.sessionStorage : {}
    var query = {
      rnd: Math.random().toString(),
      u: encodeURIComponent(d.URL),
      r: encodeURIComponent(referrer || d.referrer),
      inu: getInu()
    }

    try {
      var e = d.documentElement
      query.v = 4
      query.uid = getUid()
      query.w = w.top === w ? 1 : 0
      query.h = d.hidden ? 1 : 0
      query.gW = Math.max(e.clientWidth, w.innerWidth || 0)
      query.gH = Math.max(e.clientHeight, w.innerHeight || 0)
      query.gDH = Math.max(
        d.body.scrollHeight,
        e.scrollHeight,
        d.body.offsetHeight,
        e.offsetHeight,
        d.body.clientHeight,
        e.clientHeight
      )
      query.gDW = Math.max(
        d.body.scrollWidth,
        e.scrollWidth,
        d.body.offsetWidth,
        e.offsetWidth,
        d.body.clientWidth,
        e.clientWidth
      )
      query.sW = sc.width || 0
      query.sH = sc.height || 0
      query.daw = sc.availWidth || 0
      query.dah = sc.availHeight || 0
      query.ga = getCookie('_ga')
      query.ya = getCookie('_ym_uid')
      query.dpr = w.devicePixelRatio || ''
      query.c = (function() {
        var conn = ''
        if (nav && nav.connection) {
          if (nav.connection.type) conn = nav.connection.type
          else if (nav.connection.effectiveType) conn = 'eff:' + nav.connection.effectiveType
        }
        return conn
      })()
      query.t = s && s._tid ? s._tid : (s._tid = Date.now())

      if (w.performance) {
        if (w.performance.navigation) {
          query.rc = w.performance.navigation.redirectCount
          query.tn = w.performance.navigation.type
        }

        if (w.performance.timing)
          query.dc =
            (w.performance.timing.secureConnectionStart || w.performance.timing.fetchStart) -
            w.performance.timing.fetchStart
      }

      var wGL = getWGL()
      if (wGL) {
        query.wGLRen = wGL.ren
        query.wGLVen = wGL.ven
      }
    } catch (e) {}

    var path = '//statad.ru/pixel.gif'
    var qs = serialize(query)
    new Image().src = [path, '?', qs].join('')
  }