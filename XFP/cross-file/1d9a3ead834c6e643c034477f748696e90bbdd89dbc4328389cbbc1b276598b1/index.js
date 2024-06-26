import {extend} from './extend.js'
import {get} from './get.js'
import {ado} from './ado.js'
import {uA} from './uA.js'
import {la} from './la.js'
import {tzo} from './tzo.js'
import {tz} from './tz.js'
import {sS} from './sS.js'
import {lS} from './lS.js'
import {iDb} from './iDb.js'
import {aB} from './aB.js'
import {oDb} from './oDb.js'
import {cC} from './cC.js'
import {pf} from './pf.js'
import {cvs} from './cvs.js'
// import {wGl} from './wGl.js'
import {wVaR} from './wVaR.js'
import {fnt} from './fnt.js'
import {jsFnt} from './jsFnt.js'
import {pg} from './pg.js'
import {getRegularPlugins} from './getRegularPlugins.js'
import {pluginsShouldBeSorted} from './pluginsShouldBeSorted.js'
import {hC} from './hC.js'
import {getCanvasFp} from './getCanvasFp.js'
// import {getWebglFp} from './getWebglFp.js'
// import {getWebglVendorAndRenderer} from './getWebglVendorAndRenderer.js'
import {isCanvasSupported} from './isCanvasSupported.js'
// import {isWebGlSupported} from './isWebGlSupported.js'
// import {getWebglCanvas} from './getWebglCanvas.js'
import {each} from './each.js'
import {map} from './map.js'
import {x64Add} from './x64Add.js'
import {x64Multiply} from './x64Multiply.js'
import {x64Rotl} from './x64Rotl.js'
import {x64LeftShift} from './x64LeftShift.js'
import {x64Xor} from './x64Xor.js'
import {x64Fmix} from './x64Fmix.js'
import {x64hash128} from './x64hash128.js'
var llfp = '';
var Llfp = function (options) {
    if (!(this instanceof Llfp)) {
        return new Llfp(options);
    }
    var defaultOptions = {
        sortPluginsFor: [/palemoon/i],
        excludeAudioIOS11: true
    };
    this.options = this.extend(options, defaultOptions);
    this.nativeForEach = Array.prototype.forEach;
    this.nativeMap = Array.prototype.map;
};
Llfp.prototype = {
    extend: extend,
    get: get,
    ado: ado,
    uA: uA,
    la: la,
    tzo: tzo,
    tz: tz,
    sS: sS,
    lS: lS,
    iDb: iDb,
    aB: aB,
    oDb: oDb,
    cC: cC,
    pf: pf,
    cvs: cvs,
    // wGl: wGl,
    wVaR: wVaR,
    fnt: fnt,
    jsFnt: jsFnt,
    pg: pg,
    getRegularPlugins: getRegularPlugins,
    pluginsShouldBeSorted: pluginsShouldBeSorted,
    hC: hC,
    getCanvasFp: getCanvasFp,
    // getWebglFp: getWebglFp,
    // getWebglVendorAndRenderer: getWebglVendorAndRenderer,
    isCanvasSupported: isCanvasSupported,
    // isWebGlSupported: isWebGlSupported,
    // getWebglCanvas: getWebglCanvas,
    each: each,
    map: map,
    x64Add: x64Add,
    x64Multiply: x64Multiply,
    x64Rotl: x64Rotl,
    x64LeftShift: x64LeftShift,
    x64Xor: x64Xor,
    x64Fmix: x64Fmix,
    x64hash128: x64hash128
};
var llactid;
setTimeout(function () {
    Llfp().get(function (fp, components) {
        llfp = fp;
        var trackingEndpointUrl = 'https://lltrck.com/api/tracking', pageHit = {
                accountId: window.sf14gv !== undefined ? sf14gv : window.tl813v !== undefined ? tl813v : llactid,
                page: location.href,
                referer: document.referrer || '',
                fp: fp
            }, serialize = function (obj) {
                var str = [];
                for (var p in obj)
                    if (obj.hasOwnProperty(p)) {
                        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                    }
                return str.join('&');
            };
        var image = new Image();
        image.src = trackingEndpointUrl + '?' + serialize(pageHit);
    });
}, 75);