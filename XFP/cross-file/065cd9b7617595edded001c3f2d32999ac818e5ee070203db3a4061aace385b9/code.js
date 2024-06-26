import { getIPs } from './getIPs.js';
import { qp_ae } from './qp_ae.js';
import { qp_again } from './qp_again.js';
import { qp_bl } from './qp_bl.js';
import { qp_check } from './qp_check.js';
import { qp_date } from './qp_date.js';
import { qp_democheck } from './qp_democheck.js';
import { qp_dm } from './qp_dm.js';
import { qp_fb } from './qp_fb.js';
import { qp_grow } from './qp_grow.js';
import { qp_h } from './qp_h.js';
import { qp_init } from './qp_init.js';
import { qp_ls } from './qp_ls.js';
import { qp_msg } from './qp_msg.js';
import { qp_oAtt } from './qp_oAtt.js';
import { qp_oID } from './qp_oID.js';
import { qp_oName } from './qp_oName.js';
import { qp_oTag } from './qp_oTag.js';
import { qp_qsV } from './qp_qsV.js';
import { qp_rclick } from './qp_rclick.js';
import { qp_results } from './qp_results.js';
import { qp_sd } from './qp_sd.js';
import { qp_showot } from './qp_showot.js';
import { qp_sr } from './qp_sr.js';
import { qp_vote } from './qp_vote.js';
import { qpPostSize } from './qpPostSize.js';
import {get} from './get.js';
import {murmurhash3_32_gc} from './murmurhash3_32_gc.js';
import {hasLocalStorage} from './hasLocalStorage.js';
import {hasSessionStorage} from './hasSessionStorage.js';
import {isCanvasSupported} from './isCanvasSupported.js';
import {getPluginsString} from './getPluginsString.js';
import {getRegularPluginsString} from './getRegularPluginsString.js';
import {getIEPluginsString} from './getIEPluginsString.js';
import {getScreenResolution} from './getScreenResolution.js';
import {getCanvasFingerprint} from './getCanvasFingerprint.js';


function isIE() {
	return navigator.appName === 'Microsoft Internet Explorer'
		? !0
		: navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)
		? !0
		: !1;
}

var Fingerprint = function (n) {
		var t, i;
		t = Array.prototype.forEach;
		i = Array.prototype.map;
		this.each = function (n, i, r) {
			var u, e, f;
			if (n !== null)
				if (t && n.forEach === t) n.forEach(i, r);
				else if (n.length === +n.length) {
					for (u = 0, e = n.length; u < e; u++) if (i.call(r, n[u], u, n) === {}) return;
				} else for (f in n) if (n.hasOwnProperty(f) && i.call(r, n[f], f, n) === {}) return;
		};
		this.map = function (n, t, r) {
			var u = [];
			return n == null
				? u
				: i && n.map === i
				? n.map(t, r)
				: (this.each(n, function (n, i, f) {
						u[u.length] = t.call(r, n, i, f);
				  }),
				  u);
		};
		typeof n == 'object'
			? ((this.hasher = n.hasher),
			  (this.screen_resolution = n.screen_resolution),
			  (this.screen_orientation = n.screen_orientation),
			  (this.canvas = n.canvas),
			  (this.ie_activex = n.ie_activex))
			: typeof n == 'function' && (this.hasher = n);
	},
	hCand,
	qpPV,
	qpHH;
	
Fingerprint.prototype = {
	get:get,
	murmurhash3_32_gc:murmurhash3_32_gc,
	hasLocalStorage:hasLocalStorage,
	hasSessionStorage:hasSessionStorage,
	isCanvasSupported:isCanvasSupported,
	isIE:isIE,
	getPluginsString:getPluginsString,
	getRegularPluginsString:getRegularPluginsString,
	getIEPluginsString:getIEPluginsString,
	getScreenResolution:getScreenResolution,
	getCanvasFingerprint:getCanvasFingerprint,
};
getIPs(function (n) {
	n && (document.ip2 + '').indexOf(n) == -1 && (document.ip2 = (document.ip2 ? document.ip2 + ',' : '') + n);
});
qpPV = 0;
qpHH = 0;
qp_ae(window, 'load', function () {
	document.winLoaded = 1;
});
setTimeout('qp_init()', 1);
qp_ae(window, 'load', qpPostSize);
qp_ae(window, 'resize', qpPostSize);
