import { _setCookie } from "./_setCookie.js";
import { _getCookie } from "./_getCookie.js";
import { _ajaxsend } from "./_ajaxsend.js";
import { _setLocalStorage } from "./_setLocalStorage.js";
import { _getLocalStorage } from "./_getLocalStorage.js";
import { _getUUID, _getRandom} from "./_getUUID.js";
import { _getBaseInfo } from "./_getBaseInfo.js";
import { _sendLog } from "./_sendLog.js";
import { _trackLog } from "./_trackLog.js";
import { _clickLog } from "./_clickLog.js";
import { _bindAlsTag } from "./_bindAlsTag.js";
import { _getDomain } from "./_getDomain.js";
import { _getNavigationType } from "./_getNavigationType.js";

var d = window;
var e = document,
l = d.location;
d.TJ58 = !0;
null == d.String.prototype.trim &&
	(d.String.prototype.trim = function () {
		return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	});

var c = {
		curURL: l.href,
		referrer: e.referrer,
		protocol: l.protocol,
		window_size: e.documentElement.clientWidth + 'x' + e.documentElement.clientHeight,
		domain: _getDomain(l),
		navigation_type: _getNavigationType() ,
		setCookie: _setCookie, 
		getCookie: _getCookie,
		ajaxsend: _ajaxsend,
		setLocalStorage: _setLocalStorage,
		getLocalStorage: _getLocalStorage, 
		getUUID: _getUUID,
		getRandom: _getRandom
	},
	g = {
		config: {
			trackLog: {
				server: 'tracklog.58.com/58che_pc/empty.js.gif',
				allParams: 'site_name tag referrer _ga_utma window_size trackURL rand_id'.split(' '),
				uniqParams: ['tag', 'rand_id'],
			},
			clickLog: {
				server: 'tracklog.58.com/58che_pc/click/empty.js.gif',
				allParams: 'site_name tag from trackURL referrer rand'.split(' '),
				uniqParams: ['tag', 'from', 'rand'],
			},
		},
		getBaseInfo: _getBaseInfo,
		sendLog: _sendLog,
		trackLog: _trackLog,
		clickLog: _clickLog,
		bindAlsTag: _bindAlsTag,
	};
g.baseInfo = g.getBaseInfo(c);
g.trackLog(c);
g.bindAlsTag(c);
d.clickLog = function (a) {
	g.clickLog(a);
};
