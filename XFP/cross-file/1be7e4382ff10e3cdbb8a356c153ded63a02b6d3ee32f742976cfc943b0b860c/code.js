import {getDataURL} from './getDataURL.js';
import {definePartner} from './definePartner.js';
import {getALlKeywords} from './getALlKeywords.js';
import {addKeyword} from './addKeyword.js';
import {addSearchKeyword} from './addSearchKeyword.js';
import {callUrlIfBlock} from './callUrlIfBlock.js';
import {httpCall} from './httpCall.js';
import {httpCallList} from './httpCallList.js';
import {httpCallWithoutProtocol} from './httpCallWithoutProtocol.js';
import {sendData} from './sendData.js';
import {getMeta} from './getMeta.js';
import {sendDataArg} from './sendDataArg.js';
import {getURLKeywords} from './getURLKeywords.js';
import {callURL} from './callURL.js';
import {stripAccent} from './stripAccent.js';
import {run} from './run.js';
import {findHTMLNode} from './findHTMLNode.js';
import {getElementsBySelector} from './getElementsBySelector.js';
import {addScript} from './addScript.js';
import {addPixelInIframe} from './addPixelInIframe.js';
import {addIframeInIframe} from './addIframeInIframe.js';
import {appendElemToBody} from './appendElemToBody.js';
import {getUserID} from './getUserID.js';
import {getPartnerID} from './getPartnerID.js';
import {setService} from './setService.js';
import {getService} from './getService.js';
import {setCountry} from './setCountry.js';
import {getCountry} from './getCountry.js';
import {setCity} from './setCity.js';
import {getCity} from './getCity.js';
import {setHash} from './setHash.js';
import {getHash} from './getHash.js';
import {setCookieData} from './setCookieData.js';
import {getCookie} from './getCookie.js';
import {setGetParams} from './setGetParams.js';
import {getGetParams} from './getGetParams.js';
import {getGetParam} from './getGetParam.js';
import {getIntGetParam} from './getIntGetParam.js';
import {getUserCat} from './getUserCat.js';
import {setUserData} from './setUserData.js';
import {getUserCats} from './getUserCats.js';
import {getUrl} from './getUrl.js';
import {addUserCatIterator} from './addUserCatIterator.js';
import {executeUserCatIteratorFunc} from './executeUserCatIteratorFunc.js';

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
_sdAD.userID = '20231213_32e86bf03db7a1172b9d617cf09d2411';
_sdAD.partner_id = '24645';
_sdAD.setService('GS.d');
_sdAD.setGetParams({
	bounce: '1',
	c: 'NHlg2',
	cmp: '0',
	cookieless_ignore: '0',
	fb_consent: '0',
	gdpr: '0',
	gdpr_consent: '',
	globalscope: 'false',
	pa: '24645',
	r: '',
	rand: '1702460069139',
	tbp: 'true',
	u: 'https://www.journaldugeek.com/',
});
_sdAD.setCountry('JP');
_sdAD.setCookieData({ techcookie: '1' });
_sdAD.setUserData({
	id: '20231213_32e86bf03db7a1172b9d617cf09d2411',
	segments: [],
	categories: [],
	mapping_key: null,
	mapping_keys: null,
});
_sdAD.u = 'https://www.journaldugeek.com/';
_sdAD.run();
_sdAD.addIframeInIframe(
	'https://map.sddan.com/SC.d?mapnames=exelate,google,nexus,yahoo,weborama,eyeota,rubicon,ttd,smart,freewheel,adobe,pubmatic,gtm'
);
_sdAD.addPixelInIframe(
	'https://ib.adnxs.com/getuid?https://sync-uid.leadplace.fr/sync-uid.php?part=sirapp&id=%24UID&gdpr=0'
);
_sdAD.addPixelInIframe('https://cm.g.doubleclick.net/pixel?google_nid=temelio_dmp&google_sc&google_cm&gdpr=0');
_sdAD.addPixelInIframe(
	'https://redirect.frontend.weborama.fr/redirect/standard?url=https%3A%2F%2Fsync-uid.leadplace.fr%2Fsync-uid.php%3Fpart%3Dsirwebo%26id%3D{WEBO_CID}&gdpr=0'
);
