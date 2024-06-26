import { get } from './get.js';
import { murmurhash3_32_gc } from './murmurhash3_32_gc.js';
import { hasLocalStorage } from './hasLocalStorage.js';
import { hasSessionStorage } from './hasSessionStorage.js';
import { isCanvasSupported } from './isCanvasSupported.js';
import { isIE } from './isIE.js';
import { getScreenResolution } from './getScreenResolution.js';
import { getPluginsString } from './getPluginsString.js';
import { getCanvasFingerprint } from './getCanvasFingerprint.js';

export function fn() {
    'use strict';
    function n(n) {
        var t, i;
        t = Array.prototype.forEach;
        i = Array.prototype.map;
        this.each = function (n, i, r) {
            var u, e, f;
            if (n !== null)
                if (t && n.forEach === t)
                    n.forEach(i, r);
                else if (n.length === +n.length) {
                    for (u = 0, e = n.length; u < e; u++)
                        if (i.call(r, n[u], u, n) === {})
                            return;
                } else
                    for (f in n)
                        if (n.hasOwnProperty(f) && i.call(r, n[f], f, n) === {})
                            return;
        };
        this.map = function (n, t, r) {
            var u = [];
            return n == null ? u : i && n.map === i ? n.map(t, r) : (this.each(n, function (n, i, f) {
                u[u.length] = t.call(r, n, i, f);
            }), u);
        };
        typeof n == 'object' ? (this.hasher = n.hasher, this.screen_resolution = n.screen_resolution, this.screen_orientation = n.screen_orientation, this.canvas = n.canvas, this.ie_activex = n.ie_activex) : typeof n == 'function' && (this.hasher = n);
    }
    return n.prototype = {
        get: get,
        murmurhash3_32_gc: murmurhash3_32_gc,
        hasLocalStorage: hasLocalStorage,
        hasSessionStorage: hasSessionStorage,
        isCanvasSupported: isCanvasSupported,
        isIE: isIE,
        getPluginsString: getPluginsString,
        getScreenResolution: getScreenResolution,
        getCanvasFingerprint: getCanvasFingerprint
    }, n;
}