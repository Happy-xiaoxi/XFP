
import { addIframeInIframe } from './addIframeInIframe.js'
import { addKeyword } from './addKeyword.js'
import { addPixelInIframe } from './addPixelInIframe.js'
import { addScript } from './addScript.js'
import { addSearchKeyword } from './addSearchKeyword.js'
import { setCookieData,getCookie } from './cookie.js'
import { getALlKeywords } from './getALlKeywords.js'
import { getDataURL } from './getDataURL.js'
import { getMeta } from './getMeta.js'
import { getURLKeywords } from './getURLKeywords.js'
import { setHash,getHash } from './hash.js'
import { httpCall } from './httpCall.js'
import { httpCallList } from './httpCallList.js'
import { httpCallWithoutProtocol } from './httpCallWithoutProtocol.js'
import { getUserID,getPartnerID,setService,getService } from './ID.js'
import { setCountry,getCountry,setCity,getCity } from './location.js'
import { setGetParams,getGetParams,getGetParam,getIntGetParam } from './params.js'
import { sendData } from './sendData.js'
import { sendDataArg } from './sendDataArg.js'
import { getUrl,callURL } from './url.js'
import { getUserCat,setUserData,getUserCats,addUserCatIterator } from './usercat.js'

function sirData() {
	this.insertDataURL = 'js.sddan.com/ID.d?';
	this.searchKeywords = '';
	this.keywords = '';
	this.partnerID = 0;
	this.siteID = 0;
	this.subID = 0;
	this.requestID = '';
	this.userID = '';
	this.country = '';
	this.getParams = {};
	this.userCat = {};
	this.userIteratorFunc = [];
	this.customVar = {};
	this.cookieData = {};
	this.hashList = {};
	this.service = '';
	this.u = '';
	this.ts = null;
	this.welcomeMediaHash = '';
}


function definePartner (partnerID, siteID, subID) {
	this.partnerID = partnerID;
	this.siteID = siteID;
	this.subID = subID;
};



function callUrlIfBlock (blockPixelArray, notBlockPixelArray) {
	var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isChrome = !!window.chrome && !isOpera;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isChrome || isFirefox) {
		var htmlElem = document.createElement('div');
		htmlElem.className = 'AdvertContainer adblock annonces_google barre_adsense adBlock';
		htmlElem.style.height = '1px';
		htmlElem.style.width = '1px';
		htmlElem.style.opacity = '0.1';
		document.body.appendChild(htmlElem);
		if (htmlElem.offsetHeight == 0) {
			for (var i = 0; i < blockPixelArray.length; i++) {
				this.callURL(blockPixelArray[i]);
			}
		} else {
			for (var i = 0; i < notBlockPixelArray.length; i++) {
				this.callURL(notBlockPixelArray[i]);
			}
		}
		htmlElem.parentNode.removeChild(htmlElem);
	}
};



function stripAccent (str) {
	var rExps = [
		{ re: /[\xC0-\xC6]/g, ch: 'A' },
		{ re: /[\xE0-\xE6]/g, ch: 'a' },
		{ re: /[\xC8-\xCB]/g, ch: 'E' },
		{ re: /[\xE8-\xEB]/g, ch: 'e' },
		{ re: /[\xCC-\xCF]/g, ch: 'I' },
		{ re: /[\xEC-\xEF]/g, ch: 'i' },
		{ re: /[\xD2-\xD6]/g, ch: 'O' },
		{ re: /[\xF2-\xF6]/g, ch: 'o' },
		{ re: /[\xD9-\xDC]/g, ch: 'U' },
		{ re: /[\xF9-\xFC]/g, ch: 'u' },
		{ re: /[\xD1]/g, ch: 'N' },
		{ re: /[\xF1]/g, ch: 'n' },
	];
	for (var i = 0, len = rExps.length; i < len; i++) {
		str = str.replace(rExps[i].re, rExps[i].ch);
	}
	return str;
};

function run () {
	// if (arguments.callee.done) return;
	// arguments.callee.done = true;
	var args = {
		ri: this.requestID,
		pa: this.partnerID,
		si: this.siteID,
		su: this.subID,
		userID: this.userID,
		v: 1,
		t: this.stripAccent(document.title)
			.replace(/[^\w -.]/g, '')
			.replace(/[ ]{2,}/g, ' ')
			.substr(0, 150),
		k: this.keywords,
		u: window.location.href,
		r: document.referrer,
		s: this.searchKeywords,
	};
};
function findHTMLNode (nodeInfo) {
	for (i = 0; i < nodeInfo.length; i++) {
		if (nodeInfo[i].css == undefined) return false;
		var found = this.getElementsBySelector(nodeInfo[i].css);
		if (found && found.length > 0) {
			if (nodeInfo[i].item == undefined)
				for (j = 0; j < found.length; j++) {
					this.addKeyword(found[j].text != undefined ? found[j].text : found[j].innerHTML);
				}
			else if (nodeInfo[i].item != undefined && found[nodeInfo[i].item] != undefined)
				this.addKeyword(
					found[nodeInfo[i].item].text != undefined
						? found[nodeInfo[i].item].text
						: found[nodeInfo[i].item].innerHTML
				);
		}
		return false;
	}
};
function getElementsBySelector (all_selectors) {
	var selected = [];
	if (!document.getElementsByTagName) return selected;
	all_selectors = all_selectors.replace(/\s*([^\w])\s*/g, '$1');
	var selectors = all_selectors.split(',');
	var getElements = function (context, tag) {
		if (!tag) tag = '*';
		var found = new Array();
		for (var a = 0, len = context.length; (con = context[a]), a < len; a++) {
			var eles;
			if (tag == '*') eles = con.all ? con.all : con.getElementsByTagName('*');
			else eles = con.getElementsByTagName(tag);
			for (var b = 0, leng = eles.length; b < leng; b++) {
				found.push(eles[b]);
			}
		}
		return found;
	};
	COMMA: for (var i = 0, len1 = selectors.length; (selector = selectors[i]), i < len1; i++) {
		var context = new Array(document);
		var inheriters = selector.split(' ');
		SPACE: for (var j = 0, len2 = inheriters.length; (element = inheriters[j]), j < len2; j++) {
			var left_bracket = element.indexOf('[');
			var right_bracket = element.indexOf(']');
			var pos = element.indexOf('#');
			if (pos + 1 && !(pos > left_bracket && pos < right_bracket)) {
				var parts = element.split('#');
				var tag = parts[0];
				var id = parts[1];
				var ele = document.getElementById(id);
				if (!ele || (tag && ele.nodeName.toLowerCase() != tag)) {
					continue COMMA;
				}
				context = new Array(ele);
				continue SPACE;
			}
			pos = element.indexOf('.');
			if (pos + 1 && !(pos > left_bracket && pos < right_bracket)) {
				var parts = element.split('.');
				var tag = parts[0];
				var class_name = parts[1];
				var found = getElements(context, tag);
				context = new Array();
				for (var l = 0, len = found.length; (fnd = found[l]), l < len; l++) {
					if (fnd.className && fnd.className.match(new RegExp('(^|s)' + class_name + '(s|$)')))
						context.push(fnd);
				}
				continue SPACE;
			}
			if (element.indexOf('[') + 1) {
				if (element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)) {
					var tag = RegExp.$1;
					var attr = RegExp.$2;
					var operator = RegExp.$3;
					var value = RegExp.$4;
				}
				var found = getElements(context, tag);
				context = new Array();
				for (var l = 0, len = found.length; (fnd = found[l]), l < len; l++) {
					if (operator == '=' && fnd.getAttribute(attr) != value) continue;
					if (operator == '~' && !fnd.getAttribute(attr).match(new RegExp('(^|\\s)' + value + '(\\s|$)')))
						continue;
					if (operator == '|' && !fnd.getAttribute(attr).match(new RegExp('^' + value + '-?'))) continue;
					if (operator == '^' && fnd.getAttribute(attr).indexOf(value) != 0) continue;
					if (
						operator == '$' &&
						fnd.getAttribute(attr).lastIndexOf(value) != fnd.getAttribute(attr).length - value.length
					)
						continue;
					if (operator == '*' && !(fnd.getAttribute(attr).indexOf(value) + 1)) continue;
					else if (!fnd.getAttribute(attr)) continue;
					context.push(fnd);
				}
				continue SPACE;
			}
			var found = getElements(context, element);
			context = found;
		}
		for (var o = 0, len = context.length; o < len; o++) {
			selected.push(context[o]);
		}
	}
	return selected;
};


function appendElemToBody (elem) {
	if (document.getElementsByTagName('body').length > 0) {
		document.getElementsByTagName('body')[0].appendChild(elem);
		return;
	}
	var scripts = document.getElementsByTagName('script');
	if (scripts.length > 0 && scripts[0].parentNode !== undefined && scripts[0].parentNode != null) {
		scripts[0].parentNode.appendChild(elem);
	}
};


function executeUserCatIteratorFunc () {
	for (var c = 0; c < this.userIteratorFunc.length; c++) {
		if (this.userIteratorFunc[c][1]) this.userIteratorFunc[c][1]();
	}
	for (var catID in this.userCat) {
		for (var c = 0; c < this.userIteratorFunc.length; c++)
			if (this.userIteratorFunc[c][0]) this.userIteratorFunc[c][0](catID, this.userCat[catID]);
	}
	for (var c = 0; c < this.userIteratorFunc.length; c++) {
		if (this.userIteratorFunc[c][2]) this.userIteratorFunc[c][2]();
	}
};

sirData.prototype.getDataURL = getDataURL;
sirData.prototype.definePartner = definePartner;
sirData.prototype.getALlKeywords = getALlKeywords;
sirData.prototype.addKeyword = addKeyword;
sirData.prototype.addSearchKeyword = addSearchKeyword;
sirData.prototype.callUrlIfBlock = callUrlIfBlock;
sirData.prototype.httpCall = httpCall;
sirData.prototype.httpCallList = httpCallList;
sirData.prototype.httpCallWithoutProtocol = httpCallWithoutProtocol;
sirData.prototype.sendData = sendData;
sirData.prototype.getMeta = getMeta;
sirData.prototype.sendDataArg = sendDataArg;
sirData.prototype.getURLKeywords = getURLKeywords;
sirData.prototype.callURL = callURL;
sirData.prototype.stripAccent = stripAccent;
sirData.prototype.run = run;
sirData.prototype.findHTMLNode = findHTMLNode;
sirData.prototype.getElementsBySelector = getElementsBySelector;
sirData.prototype.addScript = addScript;
sirData.prototype.addPixelInIframe = addPixelInIframe;
sirData.prototype.addIframeInIframe = addIframeInIframe;
sirData.prototype.appendElemToBody = appendElemToBody;
sirData.prototype.getUserID = getUserID;
sirData.prototype.getPartnerID = getPartnerID;
sirData.prototype.setService = setService;
sirData.prototype.getService = getService;
sirData.prototype.setCountry = setCountry;
sirData.prototype.getCountry = getCountry;
sirData.prototype.setCity = setCity;
sirData.prototype.getCity = getCity;
sirData.prototype.setHash = setHash;
sirData.prototype.getHash = getHash;
sirData.prototype.setCookieData = setCookieData;
sirData.prototype.getCookie = getCookie;
sirData.prototype.setGetParams = setGetParams;
sirData.prototype.getGetParams = getGetParams;
sirData.prototype.getGetParam = getGetParam;
sirData.prototype.getIntGetParam = getIntGetParam;
sirData.prototype.getUserCat = getUserCat;
sirData.prototype.setUserData = setUserData;
sirData.prototype.getUserCats = getUserCats;
sirData.prototype.getUrl = getUrl;
sirData.prototype.addUserCatIterator = addUserCatIterator;
sirData.prototype.executeUserCatIteratorFunc = executeUserCatIteratorFunc;


var _sdAD = new sirData();
_sdAD.insertDataURL = '/GS.d?';
_sdAD.userID = '20231128_faa02be1f39ce0e202ecaf5039d638bb';
_sdAD.partner_id = '22550';
_sdAD.setService('LAL.d');
_sdAD.setGetParams({ bounce: '1', cat_name: 'CATEGORY_NAME', pa: '22550', r: '', u: 'https://www.promovacances.com/' });
_sdAD.setCountry('SG');
_sdAD.setCookieData({ techcookie: '1' });
_sdAD.setUserData({
	id: '20231128_faa02be1f39ce0e202ecaf5039d638bb',
	segments: [],
	categories: [],
	mapping_key: null,
	mapping_keys: null,
});
_sdAD.u = 'https://www.promovacances.com/';
_sdAD.run();
_sdAD.httpCall('https://secure.adnxs.com/seg?add=3149906:22550&t=2');
_sdAD.httpCall('https://secure.adnxs.com/seg?add=18151414&t=2');
_sdAD.addScript('https://trk.datnova.com/status.js?pid=22550');
_sdAD.addIframeInIframe(
	'https://map.sddan.com/SC.d?mapnames=google,ttd,yahoo,eyeota,rubicon,weborama,smart,adobe,exelate,nexus,freewheel,pubmatic,gtm'
);
_sdAD.addPixelInIframe(
	'https://ib.adnxs.com/getuid?https://sync-uid.leadplace.fr/sync-uid.php?part=sirapp&id=%24UID&gdpr=0'
);
_sdAD.addPixelInIframe('https://cm.g.doubleclick.net/pixel?google_nid=temelio_dmp&google_sc&google_cm&gdpr=0');
_sdAD.addPixelInIframe(
	'https://redirect.frontend.weborama.fr/redirect/standard?url=https%3A%2F%2Fsync-uid.leadplace.fr%2Fsync-uid.php%3Fpart%3Dsirwebo%26id%3D{WEBO_CID}&gdpr=0'
);
