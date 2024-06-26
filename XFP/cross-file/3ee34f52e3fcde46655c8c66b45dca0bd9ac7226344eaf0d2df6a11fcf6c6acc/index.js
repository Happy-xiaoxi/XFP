import {getDocument} from './getDocument.js'
import {getNavigator} from './getNavigator.js'
import {getScreen} from './getScreen.js'
import {getWindow} from './getWindow.js'
import {getLocation} from './getLocation.js'
import {getHostName} from './getHostName.js'
import {getPathName} from './getPathName.js'
import {getTop} from './getTop.js'
import {getParent} from './getParent.js'
import {getReferrer} from './getReferrer.js'
import {getCharacterSet} from './getCharacterSet.js'
import {getLanguage} from './getLanguage.js'
import {getOrigin} from './getOrigin.js'
import {getCurrentHref} from './getCurrentHref.js'
import {addDomain} from './addDomain.js'
import {getDomains} from './getDomains.js'
import {set} from './set.js'
import {_set} from './_set.js'
import {_writeCookie} from './_writeCookie.js'
import {get} from './get.js'
import {has} from './has.js'
import {remove} from './remove.js'
import {setCookiesToSubdomain} from './setCookiesToSubdomain.js'
import {setSecureCookie} from './setSecureCookie.js'
import {getNextWeekStart} from './getNextWeekStart.js'
import {getNextMonthStart} from './getNextMonthStart.js'
import {clearTimePart} from './clearTimePart.js'
import {truncateString} from './truncateString.js'
import {search2dArray} from './search2dArray.js'
import {removeSingleCallValueFromHsq} from './removeSingleCallValueFromHsq.js'
import {removeDomain} from './removeDomain.js'
import {removeItem} from './removeItem.js'
import {isArray} from './isArray.js'
import {inArray} from './inArray.js'
import {extend} from './extend.js'
import {each} from './each.js'
import {isDefined} from './isDefined.js'
import {addEventListener} from './addEventListener.js'
import {removeEventListener} from './removeEventListener.js'
import {preventDefault} from './preventDefault.js'
import {loadImage} from './loadImage.js'
import {isEmpty} from './isEmpty.js'
import {isEmptyObject} from './isEmptyObject.js'
import {safeString} from './safeString.js'
import {makeLowerCase} from './makeLowerCase.js'
import {encodeParam} from './encodeParam.js'
import {decodeParam} from './decodeParam.js'
import {isFunction} from './isFunction.js'
import {utcnow} from './utcnow.js'
import {hashString} from './hashString.js'
import {extractDomain} from './extractDomain.js'
import {createElement} from './createElement.js'
import {sanitizeKey} from './sanitizeKey.js'
import {deparam} from './deparam.js'
import {param} from './param.js'
import {updateQueryStringParameter} from './updateQueryStringParameter.js'
import {trim} from './trim.js'
import {startsWith} from './startsWith.js'
import {endsWith} from './endsWith.js'
import {mergeObject} from './mergeObject.js'
import {hasClass} from './hasClass.js'
import {stripNumericBrackets} from './stripNumericBrackets.js'
import {parseCurrency} from './parseCurrency.js'
import {logError} from './logError.js'
import {objectsAreEqual} from './objectsAreEqual.js'
import {eq} from './eq.js'
import {_initialize} from './_initialize.js'
import {_getHspQueue} from './_getHspQueue.js'
import {setTrackingDomain} from './setTrackingDomain.js'
import {setTrackingGate} from './setTrackingGate.js'
import {hasTrackingGate} from './hasTrackingGate.js'
import {setPortalId} from './setPortalId.js'
import {setCanonicalUrl} from './setCanonicalUrl.js'
import {setPath} from './setPath.js'
import {refreshPageHandlers} from './refreshPageHandlers.js'
import {setContentType} from './setContentType.js'
import {setPageId} from './setPageId.js'
import {setContentMetadata} from './setContentMetadata.js'
import {setTargetedContentMetadata} from './setTargetedContentMetadata.js'
import {setDebugMode} from './setDebugMode.js'
import {_setCookiesToSubdomain} from './_setCookiesToSubdomain.js'
import {setLimitTrackingToCookieDomains} from './setLimitTrackingToCookieDomains.js'
import {setTrackingEnabled} from './setTrackingEnabled.js'
import {addUserTokenListener} from './addUserTokenListener.js'
import {addCookieListener} from './addCookieListener.js'
import {addPageIdListener} from './addPageIdListener.js'
import {addContentMetadataListener} from './addContentMetadataListener.js'
import {addContentTypeListener} from './addContentTypeListener.js'
import {addPrivacyConsentListener} from './addPrivacyConsentListener.js'
import {addCookieDomain} from './addCookieDomain.js'
import {enableSecureCookie} from './enableSecureCookie.js'
import {enableAutomaticLinker} from './enableAutomaticLinker.js'
import {handleSearchLink} from './handleSearchLink.js'
import {handleSearchLinks} from './handleSearchLinks.js'
import {_iterateLinks} from './_iterateLinks.js'
import {handleLink} from './handleLink.js'
import {identify} from './identify.js'
import {trackPageView} from './trackPageView.js'
import {trackConversion} from './trackConversion.js'
import {trackClick} from './trackClick.js'
import {_resetClickHandler} from './_resetClickHandler.js'
import {trackFormView} from './trackFormView.js'
import {trackFormInstall} from './trackFormInstall.js'
import {trackFormVisible} from './trackFormVisible.js'
import {trackFormInteraction} from './trackFormInteraction.js'
import {trackFormCompletion} from './trackFormCompletion.js'
import {_trackFormActivity} from './_trackFormActivity.js'
import {trackFeedbackView} from './trackFeedbackView.js'
import {trackCtaView} from './trackCtaView.js'
import {doNotTrack} from './doNotTrack.js'
import {autocaptureClicks} from './autocaptureClicks.js'
import {urlMatches} from './urlMatches.js'
import {resetVisitorIdentity} from './resetVisitorIdentity.js'
import {resetVisitor} from './resetVisitor.js'
import {_manageCookies} from './_manageCookies.js'
import {_extractIdentitiesFromQueryString} from './_extractIdentitiesFromQueryString.js'
import {_extractUtkOverride} from './_extractUtkOverride.js'
import {_loadImage} from './_loadImage.js'
import {_generateURL} from './_generateURL.js'
import {_determineTrackingDomain} from './_determineTrackingDomain.js'
import {_getUserInfo} from './_getUserInfo.js'
import {_getPageInfo} from './_getPageInfo.js'
import {_getClientInfo} from './_getClientInfo.js'
import {_getPrivacyInfo} from './_getPrivacyInfo.js'
import {_hasDoNotTrack} from './_hasDoNotTrack.js'
import {_hasAutocaptureClicks} from './_hasAutocaptureClicks.js'
import {showTargetedElements} from './showTargetedElements.js'
import {hideTargetedElements} from './hideTargetedElements.js'
import {_handlePrivacyPolicy} from './_handlePrivacyPolicy.js'
import {_enqueueConsentListener} from './_enqueueConsentListener.js'
import {_enqueuePrivacyCall} from './_enqueuePrivacyCall.js'
import {_handleMigrations} from './_handleMigrations.js'
import {_setRelCanonicalUrl} from './_setRelCanonicalUrl.js'
import {_getFingerprint} from './_getFingerprint.js'
import {_getUrlParams} from './_getUrlParams.js'
import {embedHubSpotScript} from './embedHubSpotScript.js'
import {revokeCookieConsent} from './revokeCookieConsent.js'
import {trackApproveCookieConsent} from './trackApproveCookieConsent.js'
import {trackDeclineCookieConsent} from './trackDeclineCookieConsent.js'
import {trackRevokeCookieConsent} from './trackRevokeCookieConsent.js'
import {_safeCallListener} from './_safeCallListener.js'
import {trackCustomBehavioralEvent} from './trackCustomBehavioralEvent.js'
import {trackClickEvent} from './trackClickEvent.js'
import {getPageDiagnostics} from './getPageDiagnostics.js'
import {_initPageDiagnostics} from './_initPageDiagnostics.js'
import {getParentNodeModuleId} from './getParentNodeModuleId.js'
import {initEventVisualizerScript} from './initEventVisualizerScript.js'
import {_logError} from './_logError.js'
import {isNew} from './isNew.js'
import {_parse} from './_parse.js'
import {regenerate} from './regenerate.js'
import {increment} from './increment.js'
import {_get} from './_get.js'
import {save} from './save.js'
import {removeCookies} from './removeCookies.js'
import {merge} from './merge.js'
import {resetDomain} from './resetDomain.js'
import {run} from './run.js'
import {setUpHsq} from './setUpHsq.js'
import {processHsq} from './processHsq.js'
import {murmurhash3_32_gc} from './murmurhash3_32_gc.js'
import {hasLocalStorage} from './hasLocalStorage.js'
import {hasSessionStorage} from './hasSessionStorage.js'
import {getScreenResolution} from './getScreenResolution.js'
import {loadHstc} from './loadHstc.js'
var _hsq = _hsq || [];
var _paq = _paq || [];
_hsq.push([
    'setTrackingGate',
    'WA:FeatureEventVisualizer'
]);
_hsq.push(['initEventVisualizerScript']);
_hsq.push([
    'setPortalId',
    8289649
]);
_hsq.push(['trackPageView']);
_hsq.push([
    'setLegacy',
    false
]);
_hsq.push([
    'addCookieDomain',
    '.hs-sites.com'
]);
_hsq.push([
    'addCookieDomain',
    '.hubspotpagebuilder.com'
]);
_hsq.push([
    'addCookieDomain',
    '.userguiding.com'
]);
_hsq.push([
    'addCookieDomain',
    '.hubspot.com'
]);
_hsq.push([
    'addCookieDomain',
    '.hsforms.com'
]);
_hsq.push([
    'enableAutomaticLinker',
    true
]);
_hsq.push([
    'embedHubSpotScript',
    'https://js-na1.hs-scripts.com/8289649.js',
    'hs-script-loader'
]);
_hsq.push([
    'setTrackingDomain',
    'track.hubspot.com'
]);
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
(hstc = hstc || {}).JS_VERSION = 1.1;
hstc.ANALYTICS_HOST = 'track.hubspot.com';
(hstc = hstc || {}).Math = {
    uuid: function () {
        if (window.navigator.userAgent.indexOf('googleweblight') > -1)
            return hstc.Math._mathRandomUuid();
        var t = window.crypto || window.msCrypto;
        return void 0 !== t && void 0 !== t.getRandomValues && void 0 !== window.Uint16Array ? hstc.Math._cryptoUuid() : hstc.Math._mathRandomUuid();
    },
    _mathRandomUuid: function () {
        var t = new Date().getTime();
        return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
            var i = (t + 16 * Math.random()) % 16 | 0;
            t = Math.floor(t / 16);
            return ('x' === e ? i : 3 & i | 8).toString(16);
        });
    },
    _cryptoUuid: function () {
        var t = window.crypto || window.msCrypto, e = new Uint16Array(8);
        t.getRandomValues(e);
        var i = function (t) {
            for (var e = t.toString(16); e.length < 4;)
                e = '0' + e;
            return e;
        };
        return i(e[0]) + i(e[1]) + i(e[2]) + i(e[3]) + i(e[4]) + i(e[5]) + i(e[6]) + i(e[7]);
    }
};
Math.uuid = Math.uuid || function () {
    hstc.utils.logError(new Error('Attempt to use Math.uuid()'));
    return hstc.Math.uuid();
};
(hstc = hstc || {}).debug = !1;
hstc.log = function () {
    try {
        var t = new hstc.cookies.Cookie(), e = 'hs_dbg', i = document.location.hash.indexOf('#hsdbg') > -1;
        if (hstc.debug || i || '1' === t.get(e)) {
            var n = window.console;
            n && 'function' == typeof n.log && n.log.apply(n, arguments);
            if (document.location.hash.indexOf('#hsdbg') > -1) {
                hstc.__logs = hstc.__logs || [];
                hstc.__logs.push.apply(hstc.__logs, arguments);
            }
            t.set(e, 1);
        }
    } catch (t) {
    }
};
(hstc = hstc || {}).global = {};
hstc.global.Context = function (t, e, i, n, r, s, o) {
    this.doc = t || document;
    this.nav = e || navigator;
    this.scr = i || screen;
    this.win = n || window;
    this.loc = r || this.win.location;
    this.top = s || top;
    this.parent = o || parent;
};
hstc.global.Context.prototype.getDocument = getDocument;
hstc.global.Context.prototype.getNavigator = getNavigator;
hstc.global.Context.prototype.getScreen = getScreen;
hstc.global.Context.prototype.getWindow = getWindow;
hstc.global.Context.prototype.getLocation = getLocation;
hstc.global.Context.prototype.getHostName = getHostName;
hstc.global.Context.prototype.getPathName = getPathName;
hstc.global.Context.prototype.getTop = getTop;
hstc.global.Context.prototype.getParent = getParent;
hstc.global.Context.prototype.getReferrer = getReferrer;
hstc.global.Context.prototype.getCharacterSet = getCharacterSet;
hstc.global.Context.prototype.getLanguage = getLanguage;
hstc.global.Context.prototype.getOrigin = getOrigin;
hstc.global.Context.prototype.getCurrentHref = getCurrentHref;
(hstc = hstc || {}).utils = {};
hstc.utils.tostr = Object.prototype.toString;
hstc.utils.getNextWeekStart = getNextWeekStart;
hstc.utils.getNextMonthStart = getNextMonthStart;
hstc.utils.clearTimePart = clearTimePart;
hstc.utils.truncateString = truncateString;
hstc.utils.search2dArray = search2dArray;
hstc.utils.removeSingleCallValueFromHsq = removeSingleCallValueFromHsq;
hstc.utils.removeDomain = removeDomain;
hstc.utils.removeItem = removeItem;
hstc.utils.isArray = isArray;
hstc.utils.inArray = inArray;
hstc.utils.extend = extend;
hstc.utils.each = each;
hstc.utils.isDefined = isDefined;
hstc.utils.addEventListener = addEventListener;
hstc.utils.removeEventListener = removeEventListener;
hstc.utils.preventDefault = preventDefault;
hstc.utils.loadImage = loadImage;
hstc.utils.isEmpty = isEmpty;
hstc.utils.isEmptyObject = isEmptyObject;
hstc.utils.safeString = safeString;
hstc.utils.makeLowerCase = makeLowerCase;
hstc.utils.encodeParam = encodeParam;
hstc.utils.decodeParam = decodeParam;
hstc.utils.isFunction = isFunction;
hstc.utils.utcnow = utcnow;
hstc.utils.hashString = hashString;
hstc.utils.extractDomain = extractDomain;
hstc.utils.createElement = createElement;
hstc.utils.deparam = deparam;
hstc.utils.param = param;
hstc.utils.updateQueryStringParameter = updateQueryStringParameter;
hstc.utils.trim = trim;
hstc.utils.startsWith = startsWith;
hstc.utils.endsWith = endsWith;
hstc.utils.mergeObject = mergeObject;
hstc.utils.hasClass = hasClass;
hstc.utils.stripNumericBrackets = stripNumericBrackets;
hstc.utils.parseCurrency = parseCurrency;
hstc.utils.logError = logError;
hstc.utils.objectsAreEqual = objectsAreEqual;
hstc.utils.eq = eq;
(hstc = hstc || {}).cookies = {};
hstc.cookies.Cookie = function (t) {
    this.context = t || new hstc.global.Context();
    this.currentDomain = null;
    this.domains = [];
    this.secureCookie = !1;
};
hstc.cookies.Cookie.prototype.addDomain = addDomain;
hstc.cookies.Cookie.prototype.getDomains = getDomains;
hstc.cookies.Cookie.prototype.set = set;
hstc.cookies.Cookie.prototype._set = _set;
hstc.cookies.Cookie.prototype._writeCookie = _writeCookie;
hstc.cookies.Cookie.prototype.get = get;
hstc.cookies.Cookie.prototype.has = has;
hstc.cookies.Cookie.prototype.remove = remove;
hstc.cookies.Cookie.prototype.setCookiesToSubdomain = _setCookiesToSubdomain;
hstc.cookies.Cookie.prototype.setSecureCookie = setSecureCookie;
(hstc = hstc || {}).identities = {};
hstc.identities.Identity = function (t) {
    this.raw = t;
};
hstc.identities.Identity.prototype.get = function () {
    return this.raw;
};
hstc.identities.Identity.prototype.equals = function (t) {
    return hstc.utils.objectsAreEqual(this, t);
};
hstc.identities.Identity.prototype.merge = function (t) {
    this.raw = hstc.utils.mergeObject(this.raw, t);
};
(hstc = hstc || {}).browser = function (t) {
    var e = (t = t || new hstc.global.Context()).getNavigator(), i = e.userAgent.toLowerCase(), n = {
            init: function () {
                this.browser = this.searchString(this.dataBrowser) || '';
                this.version = this.searchVersion(e.userAgent) || this.searchVersion(e.appVersion) || '';
                this.OS = this.searchString(this.dataOS) || '';
            },
            searchString: function (t) {
                for (var e = 0; e < t.length; e++) {
                    var i = t[e].string, n = t[e].prop;
                    this.versionSearchString = t[e].versionSearch || t[e].identity;
                    if (i) {
                        if (-1 !== i.indexOf(t[e].subString))
                            return t[e].identity;
                        if (n)
                            return t[e].identity;
                    }
                }
            },
            searchVersion: function (t) {
                var e = t.indexOf(this.versionSearchString);
                if (-1 !== e)
                    return parseFloat(t.substring(e + this.versionSearchString.length + 1));
            },
            dataBrowser: [
                {
                    string: e.userAgent,
                    subString: 'Chrome',
                    identity: 'Chrome'
                },
                {
                    string: e.userAgent,
                    subString: 'OmniWeb',
                    versionSearch: 'OmniWeb/',
                    identity: 'OmniWeb'
                },
                {
                    string: e.vendor,
                    subString: 'Apple',
                    identity: 'Safari',
                    versionSearch: 'Version'
                },
                {
                    prop: window.opera,
                    identity: 'Opera'
                },
                {
                    string: e.vendor,
                    subString: 'iCab',
                    identity: 'iCab'
                },
                {
                    string: e.vendor,
                    subString: 'KDE',
                    identity: 'Konqueror'
                },
                {
                    string: e.userAgent,
                    subString: 'Firefox',
                    identity: 'Firefox'
                },
                {
                    string: e.vendor,
                    subString: 'Camino',
                    identity: 'Camino'
                },
                {
                    string: e.userAgent,
                    subString: 'Netscape',
                    identity: 'Netscape'
                },
                {
                    string: e.userAgent,
                    subString: 'MSIE',
                    identity: 'Explorer',
                    versionSearch: 'MSIE'
                },
                {
                    string: e.userAgent,
                    subString: 'Gecko',
                    identity: 'Mozilla',
                    versionSearch: 'rv'
                },
                {
                    string: e.userAgent,
                    subString: 'Mozilla',
                    identity: 'Netscape',
                    versionSearch: 'Mozilla'
                }
            ],
            dataOS: [
                {
                    string: e.platform,
                    subString: 'Win',
                    identity: 'Windows'
                },
                {
                    string: e.platform,
                    subString: 'Mac',
                    identity: 'Mac'
                },
                {
                    string: e.userAgent,
                    subString: 'iPhone',
                    identity: 'iPhone/iPod'
                },
                {
                    string: e.platform,
                    subString: 'Linux',
                    identity: 'Linux'
                }
            ]
        };
    n.init();
    this.version = (i.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [
        0,
        '0'
    ])[1];
    this.os = n.OS;
    this.brand = n.browser;
    this.webkit = /webkit/.test(i);
    this.opera = /opera/.test(i);
    this.msie = /msie/.test(i) && !/opera/.test(i);
    this.mozilla = /mozilla/.test(i) && !/(compatible|webkit)/.test(i);
};
(hstc = hstc || {}).tracking = hstc.tracking || {};
var hstc, thisScriptUrl = document && document.currentScript && document.currentScript.src;
hstc.tracking.Tracker = function (t, e) {
    this.context = t || new hstc.global.Context();
    this.cookie = e || new hstc.cookies.Cookie(this.context);
    this.now = hstc.utils.utcnow();
    this.session = null;
    this.utk = null;
    this.managedCookies = !1;
    this.trackingEnabled = !0;
    this.limitTrackingToCookieDomains = !1;
    this.crossDomainLinkingEnabled = !1;
    this.hasResetVisitor = !1;
    this.privacyConsent = null;
    this.privacySettings = null;
    this.clickSelectors = [];
    this.userTokenListeners = [];
    this.cookieListeners = [];
    this.pageIdListeners = [];
    this.contentMetadataListeners = [];
    this.contentTypeListeners = [];
    this.trackingDomain = null;
    this.trackingGate = [];
    this.currentScriptUrl = thisScriptUrl;
    this.eventBuilderMessageHandler = null;
};
hstc.tracking.Tracker.DO_NOT_TRACK = '__hs_do_not_track';
hstc.tracking.Tracker.DO_NOT_TRACK_EXPIRATION = 180;
hstc.tracking.Tracker.prototype.addIdentityListener = hstc.tracking.Tracker.prototype.addCookieListener;
hstc.tracking.Tracker.prototype.trackEvent = hstc.tracking.Tracker.prototype.trackConversion;
hstc.tracking.Tracker.prototype._initialize = _initialize;
hstc.tracking.Tracker.prototype._getHspQueue = _getHspQueue;
hstc.tracking.Tracker.prototype.setTrackingDomain = setTrackingDomain;
hstc.tracking.Tracker.prototype.setTrackingGate = setTrackingGate;
hstc.tracking.Tracker.prototype.hasTrackingGate = hasTrackingGate;
hstc.tracking.Tracker.prototype.setPortalId = setPortalId;
hstc.tracking.Tracker.prototype.setCanonicalUrl = setCanonicalUrl;
hstc.tracking.Tracker.prototype.setPath = setPath;
hstc.tracking.Tracker.prototype.refreshPageHandlers = refreshPageHandlers;
hstc.tracking.Tracker.prototype.setContentType = setContentType;
hstc.tracking.Tracker.prototype.setPageId = setPageId;
hstc.tracking.Tracker.prototype.setContentMetadata = setContentMetadata;
hstc.tracking.Tracker.prototype.setTargetedContentMetadata = setTargetedContentMetadata;
hstc.tracking.Tracker.prototype.setDebugMode = setDebugMode;
hstc.tracking.Tracker.prototype.setCookiesToSubdomain = setCookiesToSubdomain;
hstc.tracking.Tracker.prototype.setLimitTrackingToCookieDomains = setLimitTrackingToCookieDomains;
hstc.tracking.Tracker.prototype.setTrackingEnabled = setTrackingEnabled;
hstc.tracking.Tracker.prototype.addUserTokenListener = addUserTokenListener;
hstc.tracking.Tracker.prototype.addCookieListener = addCookieListener;
hstc.tracking.Tracker.prototype.addPageIdListener = addPageIdListener;
hstc.tracking.Tracker.prototype.addContentMetadataListener = addContentMetadataListener;
hstc.tracking.Tracker.prototype.addContentTypeListener = addContentTypeListener;
hstc.tracking.Tracker.prototype.addPrivacyConsentListener = addPrivacyConsentListener;
hstc.tracking.Tracker.prototype.addCookieDomain = addCookieDomain;
hstc.tracking.Tracker.prototype.enableSecureCookie = enableSecureCookie;
hstc.tracking.Tracker.prototype.enableAutomaticLinker = enableAutomaticLinker;
hstc.tracking.Tracker.prototype.handleSearchLink = handleSearchLink;
hstc.tracking.Tracker.prototype.handleSearchLinks = handleSearchLinks;
hstc.tracking.Tracker.prototype._iterateLinks = _iterateLinks;
hstc.tracking.Tracker.prototype.handleLink = handleLink;
hstc.tracking.Tracker.prototype.identify = identify;
hstc.tracking.Tracker.prototype.trackPageView = trackPageView;
hstc.tracking.Tracker.prototype.trackConversion = trackConversion;
hstc.tracking.Tracker.prototype.trackClick = trackClick;
hstc.tracking.Tracker.prototype._resetClickHandler = _resetClickHandler;
hstc.tracking.Tracker.prototype.trackFormView = trackFormView;
hstc.tracking.Tracker.prototype.trackFormInstall = trackFormInstall;
hstc.tracking.Tracker.prototype.trackFormVisible = trackFormVisible;
hstc.tracking.Tracker.prototype.trackFormInteraction = trackFormInteraction;
hstc.tracking.Tracker.prototype.trackFormCompletion = trackFormCompletion;
hstc.tracking.Tracker.prototype._trackFormActivity = _trackFormActivity;
hstc.tracking.Tracker.prototype.trackFeedbackView = trackFeedbackView;
hstc.tracking.Tracker.prototype.trackCtaView = trackCtaView;
hstc.tracking.Tracker.prototype.doNotTrack = doNotTrack;
hstc.tracking.Tracker.prototype.autocaptureClicks = autocaptureClicks;
hstc.tracking.Tracker.prototype.urlMatches = urlMatches;
hstc.tracking.Tracker.prototype.resetVisitorIdentity = resetVisitorIdentity;
hstc.tracking.Tracker.prototype.resetVisitor = resetVisitor;
hstc.tracking.Tracker.prototype._manageCookies = _manageCookies;
hstc.tracking.Tracker.prototype._extractIdentitiesFromQueryString = _extractIdentitiesFromQueryString;
hstc.tracking.Tracker.prototype._extractUtkOverride = _extractUtkOverride;
hstc.tracking.Tracker.prototype._loadImage = _loadImage;
hstc.tracking.Tracker.prototype._generateURL = _generateURL;
hstc.tracking.Tracker.prototype._determineTrackingDomain = _determineTrackingDomain;
hstc.tracking.Tracker.prototype._getUserInfo = _getUserInfo;
hstc.tracking.Tracker.prototype._getPageInfo = _getPageInfo;
hstc.tracking.Tracker.prototype._getClientInfo = _getClientInfo;
hstc.tracking.Tracker.prototype._getPrivacyInfo = _getPrivacyInfo;
hstc.tracking.Tracker.prototype._hasDoNotTrack = _hasDoNotTrack;
hstc.tracking.Tracker.prototype._hasAutocaptureClicks = _hasAutocaptureClicks;
hstc.tracking.Tracker.prototype.showTargetedElements = showTargetedElements;
hstc.tracking.Tracker.prototype.hideTargetedElements = hideTargetedElements;
hstc.tracking.Tracker.prototype._handlePrivacyPolicy = _handlePrivacyPolicy;
hstc.tracking.Tracker.prototype._enqueueConsentListener = _enqueueConsentListener;
hstc.tracking.Tracker.prototype._enqueuePrivacyCall = _enqueuePrivacyCall;
hstc.tracking.Tracker.prototype._handleMigrations = _handleMigrations;
hstc.tracking.Tracker.prototype._setRelCanonicalUrl = _setRelCanonicalUrl;
hstc.tracking.Tracker.prototype._getFingerprint = _getFingerprint;
hstc.tracking.Tracker.prototype._getUrlParams = _getUrlParams;
hstc.tracking.Tracker.prototype.embedHubSpotScript = embedHubSpotScript;
hstc.tracking.Tracker.prototype.revokeCookieConsent = revokeCookieConsent;
hstc.tracking.Tracker.prototype.trackApproveCookieConsent = trackApproveCookieConsent;
hstc.tracking.Tracker.prototype.trackDeclineCookieConsent = trackDeclineCookieConsent;
hstc.tracking.Tracker.prototype.trackRevokeCookieConsent = trackRevokeCookieConsent;
hstc.tracking.Tracker.prototype._safeCallListener = _safeCallListener;
hstc.tracking.Utk = function (t, e, i, n, r, s, o, c, a) {
    this.context = t ? t.context : new hstc.global.Context();
    this.cookie = t || new hstc.cookies.Cookie(this.context);
    this.rawDomain = this.cookie.currentDomain || hstc.utils.extractDomain(this.context.getHostName());
    this.domain = e && !c ? e : hstc.utils.hashString(this.rawDomain);
    this.visitor = i ? i.toLowerCase() : hstc.Math.uuid();
    this.initial = n || hstc.utils.utcnow();
    this.previous = r || hstc.utils.utcnow();
    this.current = s || hstc.utils.utcnow();
    this.session = o || 1;
    this.recovered = c;
    this.returningVisitor = a;
};
hstc.tracking.Utk.COOKIE = '__hstc';
hstc.tracking.Utk.LEGACY_COOKIE = 'hubspotutk';
hstc.tracking.Utk.EXPIRATION = 180;
hstc.tracking.Utk.EXPIRATION_START = 1544400000000;
hstc.tracking.Utk.parse = function (t, e, i) {
    var n = t ? t.context : new hstc.global.Context();
    t = t || new hstc.cookies.Cookie(n);
    var r = !e;
    e = e || t.get(hstc.tracking.Utk.COOKIE);
    try {
        var s = e.split('.');
        if (6 == s.length && s[1].length > 0) {
            s[5] = parseInt(s[5], 10);
            return new hstc.tracking.Utk(t, s[0], s[1], s[2], s[3], s[4], s[5], r, !0);
        }
        if (1 == s.length && s[0].length > 0)
            return new hstc.tracking.Utk(t, null, s[0], null, null, null, null, !i, !1);
    } catch (t) {
    }
    return hstc.tracking.Utk.regenerate(t);
};
hstc.tracking.Utk.regenerate = function (t) {
    return new hstc.tracking.Utk(t);
};
hstc.tracking.Utk.prototype.isNew = function () {
    return !this.returningVisitor;
};
hstc.tracking.Utk.prototype.rotate = function (t) {
    this.previous = this.current || t;
    this.current = t;
    this.session += 1;
};
hstc.tracking.Utk.prototype.get = function () {
    return [
        this.domain,
        this.visitor,
        this.initial,
        this.previous,
        this.current,
        this.session
    ].join('.');
};
hstc.tracking.Utk.prototype.save = function (t, e) {
    var i = t && 1 == t.active && ('OPT_IN' == t.mode || 'COOKIES_BY_CATEGORY' == t.mode) && 0 == t.hideDecline, n = e && 1 == e.allowed;
    if (!this.isNew() && i) {
        if (n) {
            var r = hstc.tracking.Utk.EXPIRATION - Math.floor((hstc.utils.utcnow() - this.initial) / 86400000);
            this.cookie.set(hstc.tracking.Utk.COOKIE, this.get(), { daysToExpire: r });
            this.cookie.set(hstc.tracking.Utk.LEGACY_COOKIE, this.visitor, { daysToExpire: r });
        }
    } else {
        this.cookie.set(hstc.tracking.Utk.COOKIE, this.get(), { daysToExpire: hstc.tracking.Utk.EXPIRATION });
        this.cookie.set(hstc.tracking.Utk.LEGACY_COOKIE, this.visitor, { daysToExpire: hstc.tracking.Utk.EXPIRATION });
    }
};
hstc.tracking.Utk.prototype.removeCookies = function (t) {
    this.cookie.remove(hstc.tracking.Utk.COOKIE);
    this.cookie.remove(hstc.tracking.Utk.LEGACY_COOKIE);
};
hstc.tracking.Utk.prototype.resetDomain = function () {
    this.domain = hstc.utils.hashString(this.rawDomain);
};
hstc.tracking.Session = function (t, e, i, n, r) {
    this.context = t ? t.context : new hstc.global.Context();
    this.cookie = t || new hstc.cookies.Cookie(this.context);
    this.rawDomain = this.cookie.currentDomain || hstc.utils.extractDomain(this.context.getHostName());
    this.domain = e && !r ? e : hstc.utils.hashString(this.rawDomain);
    this.viewCount = i || 1;
    this.start = n || hstc.utils.utcnow();
    this.recovered = r;
};
hstc.tracking.Session.parse = _parse;
hstc.tracking.Session.regenerate = regenerate;
hstc.tracking.Session.COOKIE = '__hssc';
hstc.tracking.Session.RESTART_COOKIE = '__hssrc';
hstc.tracking.Session.prototype.isNew = isNew;
hstc.tracking.Session.prototype.increment = increment;
hstc.tracking.Session.prototype.get = _get;
hstc.tracking.Session.prototype.save = save;
hstc.tracking.Session.prototype.removeCookies = removeCookies;
hstc.tracking.Session.prototype.merge = merge;
hstc.tracking.Session.prototype.resetDomain = resetDomain;
hstc.tracking.Tracker.prototype.trackCustomBehavioralEvent = trackCustomBehavioralEvent;
hstc.tracking.Tracker.prototype.trackClickEvent = trackClickEvent;
hstc.tracking.Tracker.prototype.getPageDiagnostics = getPageDiagnostics;
hstc.tracking.Tracker.prototype._initPageDiagnostics = _initPageDiagnostics;
hstc.tracking.Tracker.prototype.getParentNodeModuleId = getParentNodeModuleId;
hstc.tracking.Tracker.prototype.initEventVisualizerScript = initEventVisualizerScript;
hstc.tracking.Tracker.prototype.logError = _logError;
(hstc = hstc || {}).tracking = hstc.tracking || {};
hstc.tracking.Runner = function (t, e) {
    this.context = t || new hstc.global.Context();
    this.cookie = e || new hstc.cookies.Cookie(this.context);
    this.tracker = new hstc.tracking.Tracker(this.context, this.cookie);
};
hstc.tracking.Runner.hsqParam = '_hsq';
hstc.tracking.Runner.ranParam = '_hstc_ran';
hstc.tracking.Runner.priorityFunctions = [
    'setTrackingGate',
    'setPortalId',
    'setCanonicalUrl',
    'setPath',
    'setContentType',
    'setContentMetadata',
    'setPageId',
    'setTargetedContentMetadata',
    'identify',
    'setDebugMode',
    'setLimitTrackingToCookieDomains',
    'setTrackingEnabled',
    'doNotTrack'
];
hstc.tracking.Runner.prototype.run = run;
hstc.tracking.Runner.prototype.setUpHsq = setUpHsq;
hstc.tracking.Runner.prototype.processHsq = processHsq;
!function (t) {
    var e, i, n, r, s, o, c, a, h, u, l, g, p, f, d, k, m, y = 'sizzle' + -new Date(), v = t.document, C = 0, _ = 0, T = rt(), w = rt(), x = rt(), S = !1, b = function (t, e) {
            if (t === e) {
                S = !0;
                return 0;
            }
            return 0;
        }, 
        E = 'undefined', I = 1 << 31, D = {}.hasOwnProperty, L = [], N = L.pop, A = L.push, O = L.push, P = L.slice, R = L.indexOf || function (t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (this[e] === t)
                    return e;
            return -1;
        }, 
        U = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
        M = '[\\x20\\t\\r\\n\\f]', q = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', 
        F = q.replace('w', 'w#'), 
        j = '\\[' + M + '*(' + q + ')' + M + '*(?:([*^$|!~]?=)' + M + '\'' + F + ')|)|)' + M + '*\\]', 
        H = ':(' + q + '\'' + j.replace(3, 8) + ')*)|.*)\\)|)', 
        B = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'), 
        $ = new RegExp('^' + M + '*,' + M + '*'), 
        V = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'), 
        K = new RegExp(M + '*[+~]'), 
        W = new RegExp('=' + M + '\'' + M + '*\\]', 'g'), 
        G = new RegExp(H), z = new RegExp('^' + F + '$'), 
        Y = {
            ID: new RegExp('^#(' + q + ')'),
            CLASS: new RegExp('^\\.(' + q + ')'),
            TAG: new RegExp('^(' + q.replace('w', 'w*') + ')'),
            ATTR: new RegExp('^' + j),
            PSEUDO: new RegExp('^' + H),
            CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
            bool: new RegExp('^(?:' + U + ')$', 'i'),
            needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
        }, X = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, J = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, tt = /'|\\/g, et = new RegExp('\\\\([\\da-f]{1,6}' + M + '?|(' + M + ')|.)', 'ig'), it = function (t, e, i) {
            var n = '0x' + e - 65536;
            return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
        };
    try {
        O.apply(L = P.call(v.childNodes), v.childNodes);
        L[v.childNodes.length].nodeType;
    } catch (t) {
        O = {
            apply: L.length ? function (t, e) {
                A.apply(t, P.call(e));
            } : function (t, e) {
                for (var i = t.length, n = 0; t[i++] = e[n++];);
                t.length = i - 1;
            }
        };
    }
    function nt(t, e, n, r) {
        var s, o, c, a, h, g, d, k, C, _;
        (e ? e.ownerDocument || e : v) !== l && u(e);
        n = n || [];
        if (!t || 'string' != typeof t)
            return n;
        if (1 !== (a = (e = e || l).nodeType) && 9 !== a)
            return [];
        if (p && !r) {
            if (s = Q.exec(t))
                if (c = s[1]) {
                    if (9 === a) {
                        if (!(o = e.getElementById(c)) || !o.parentNode)
                            return n;
                        if (o.id === c) {
                            n.push(o);
                            return n;
                        }
                    } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(c)) && m(e, o) && o.id === c) {
                        n.push(o);
                        return n;
                    }
                } else {
                    if (s[2]) {
                        O.apply(n, e.getElementsByTagName(t));
                        return n;
                    }
                    if ((c = s[3]) && i.getElementsByClassName && e.getElementsByClassName) {
                        O.apply(n, e.getElementsByClassName(c));
                        return n;
                    }
                }
            if (i.qsa && (!f || !f.test(t))) {
                k = d = y;
                C = e;
                _ = 9 === a && t;
                if (1 === a && 'object' !== e.nodeName.toLowerCase()) {
                    g = pt(t);
                    (d = e.getAttribute('id')) ? k = d.replace(tt, '\\$&') : e.setAttribute('id', k);
                    k = '\'' + k + '\'';
                    h = g.length;
                    for (; h--;)
                        g[h] = k + ft(g[h]);
                    C = K.test(t) && e.parentNode || e;
                    _ = g.join(',');
                }
                if (_)
                    try {
                        O.apply(n, C.querySelectorAll(_));
                        return n;
                    } catch (t) {
                    } finally {
                        d || e.removeAttribute('id');
                    }
            }
        }
        return Tt(t.replace(B, '$1'), e, n, r);
    }
    function rt() {
        var t = [];
        function e(i, n) {
            t.push(i += ' ') > r.cacheLength && delete e[t.shift()];
            return e[i] = n;
        }
        return e;
    }
    function st(t) {
        t[y] = !0;
        return t;
    }
    function ot(t) {
        var e = l.createElement('div');
        try {
            return !!t(e);
        } catch (t) {
            return !1;
        } finally {
            e.parentNode && e.parentNode.removeChild(e);
            e = null;
        }
    }
    function ct(t, e) {
        for (var i = t.split('|'), n = t.length; n--;)
            r.attrHandle[i[n]] = e;
    }
    function at(t, e) {
        var i = e && t, n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || I) - (~t.sourceIndex || I);
        if (n)
            return n;
        if (i)
            for (; i = i.nextSibling;)
                if (i === e)
                    return -1;
        return t ? 1 : -1;
    }
    function ht(t) {
        return function (e) {
            return 'input' === e.nodeName.toLowerCase() && e.type === t;
        };
    }
    function ut(t) {
        return function (e) {
            var i = e.nodeName.toLowerCase();
            return ('input' === i || 'button' === i) && e.type === t;
        };
    }
    function lt(t) {
        return st(function (e) {
            e = +e;
            return st(function (i, n) {
                for (var r, s = t([], i.length, e), o = s.length; o--;)
                    i[r = s[o]] && (i[r] = !(n[r] = i[r]));
            });
        });
    }
    o = nt.isXML = function (t) {
        var e = t && (t.ownerDocument || t).documentElement;
        return !!e && 'HTML' !== e.nodeName;
    };
    i = nt.support = {};
    u = nt.setDocument = function (t) {
        var e = t ? t.ownerDocument || t : v, n = e.defaultView;
        if (e === l || 9 !== e.nodeType || !e.documentElement)
            return l;
        l = e;
        g = e.documentElement;
        p = !o(e);
        n && n.attachEvent && n !== n.top && n.attachEvent('onbeforeunload', function () {
            u();
        });
        i.attributes = ot(function (t) {
            t.className = 'i';
            return !t.getAttribute('className');
        });
        i.getElementsByTagName = ot(function (t) {
            t.appendChild(e.createComment(''));
            return !t.getElementsByTagName('*').length;
        });
        i.getElementsByClassName = ot(function (t) {
            t.innerHTML = "''''";
            t.firstChild.className = 'i';
            return 2 === t.getElementsByClassName('i').length;
        });
        i.getById = ot(function (t) {
            g.appendChild(t).id = y;
            return !e.getElementsByName || !e.getElementsByName(y).length;
        });
        if (i.getById) {
            r.find.ID = function (t, e) {
                if (typeof e.getElementById !== E && p) {
                    var i = e.getElementById(t);
                    return i && i.parentNode ? [i] : [];
                }
            };
            r.filter.ID = function (t) {
                var e = t.replace(et, it);
                return function (t) {
                    return t.getAttribute('id') === e;
                };
            };
        } else {
            delete r.find.ID;
            r.filter.ID = function (t) {
                var e = t.replace(et, it);
                return function (t) {
                    var i = typeof t.getAttributeNode !== E && t.getAttributeNode('id');
                    return i && i.value === e;
                };
            };
        }
        r.find.TAG = i.getElementsByTagName ? function (t, e) {
            if (typeof e.getElementsByTagName !== E)
                return e.getElementsByTagName(t);
        } : function (t, e) {
            var i, n = [], r = 0, s = e.getElementsByTagName(t);
            if ('*' === t) {
                for (; i = s[r++];)
                    1 === i.nodeType && n.push(i);
                return n;
            }
            return s;
        };
        r.find.CLASS = i.getElementsByClassName && function (t, e) {
            if (typeof e.getElementsByClassName !== E && p)
                return e.getElementsByClassName(t);
        };
        d = [];
        f = [];
        if (i.qsa = X.test(e.querySelectorAll)) {
            ot(function (t) {
                t.innerHTML = "''";
                t.querySelectorAll('[selected]').length || f.push('\\[' + M + '*(?:value|' + U + ')');
                t.querySelectorAll(':checked').length || f.push(':checked');
            });
            ot(function (t) {
                var i = e.createElement('input');
                i.setAttribute('type', 'hidden');
                t.appendChild(i).setAttribute('t', '');
                t.querySelectorAll("''").length && f.push('[*^$]=' + M + "''");
                t.querySelectorAll(':enabled').length || f.push(':enabled', ':disabled');
                t.querySelectorAll('*,:x');
                f.push(',.*:');
            });
        }
        (i.matchesSelector = X.test(k = g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.msMatchesSelector)) && ot(function (t) {
            i.disconnectedMatch = k.call(t, 'div');
            k.call(t, "''");
            d.push('!=', H);
        });
        f = f.length && new RegExp(f.join('|'));
        d = d.length && new RegExp(d.join('|'));
        m = X.test(g.contains) || g.compareDocumentPosition ? function (t, e) {
            var i = 9 === t.nodeType ? t.documentElement : t, n = e && e.parentNode;
            return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
        } : function (t, e) {
            if (e)
                for (; e = e.parentNode;)
                    if (e === t)
                        return !0;
            return !1;
        };
        b = g.compareDocumentPosition ? function (t, n) {
            if (t === n) {
                S = !0;
                return 0;
            }
            var r = n.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(n);
            return r ? 1 & r || !i.sortDetached && n.compareDocumentPosition(t) === r ? t === e || m(v, t) ? -1 : n === e || m(v, n) ? 1 : h ? R.call(h, t) - R.call(h, n) : 0 : 4 & r ? -1 : 1 : t.compareDocumentPosition ? -1 : 1;
        } : function (t, i) {
            var n, r = 0, s = t.parentNode, o = i.parentNode, c = [t], a = [i];
            if (t === i) {
                S = !0;
                return 0;
            }
            if (!s || !o)
                return t === e ? -1 : i === e ? 1 : s ? -1 : o ? 1 : h ? R.call(h, t) - R.call(h, i) : 0;
            if (s === o)
                return at(t, i);
            n = t;
            for (; n = n.parentNode;)
                c.unshift(n);
            n = i;
            for (; n = n.parentNode;)
                a.unshift(n);
            for (; c[r] === a[r];)
                r++;
            return r ? at(c[r], a[r]) : c[r] === v ? -1 : a[r] === v ? 1 : 0;
        };
        return e;
    };
    nt.matches = function (t, e) {
        return nt(t, null, null, e);
    };
    nt.matchesSelector = function (t, e) {
        (t.ownerDocument || t) !== l && u(t);
        e = e.replace(W, "''");
        if (i.matchesSelector && p && (!d || !d.test(e)) && (!f || !f.test(e)))
            try {
                var n = k.call(t, e);
                if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                    return n;
            } catch (t) {
            }
        return nt(e, l, null, [t]).length > 0;
    };
    nt.contains = function (t, e) {
        (t.ownerDocument || t) !== l && u(t);
        return m(t, e);
    };
    nt.attr = function (t, e) {
        (t.ownerDocument || t) !== l && u(t);
        var n = r.attrHandle[e.toLowerCase()], s = n && D.call(r.attrHandle, e.toLowerCase()) ? n(t, e, !p) : void 0;
        return void 0 === s ? i.attributes || !p ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null : s;
    };
    nt.error = function (t) {
        throw new Error('Syntax error, unrecognized expression: ' + t);
    };
    nt.uniqueSort = function (t) {
        var e, n = [], r = 0, s = 0;
        S = !i.detectDuplicates;
        h = !i.sortStable && t.slice(0);
        t.sort(b);
        if (S) {
            for (; e = t[s++];)
                e === t[s] && (r = n.push(s));
            for (; r--;)
                t.splice(n[r], 1);
        }
        return t;
    };
    s = nt.getText = function (t) {
        var e, i = '', n = 0, r = t.nodeType;
        if (r) {
            if (1 === r || 9 === r || 11 === r) {
                if ('string' == typeof t.textContent)
                    return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling)
                    i += s(t);
            } else if (3 === r || 4 === r)
                return t.nodeValue;
        } else
            for (; e = t[n]; n++)
                i += s(e);
        return i;
    };
    (r = nt.selectors = {
        cacheLength: 50,
        createPseudo: st,
        match: Y,
        attrHandle: {},
        find: {},
        relative: {
            '>': {
                dir: 'parentNode',
                first: !0
            },
            ' ': { dir: 'parentNode' },
            '+': {
                dir: 'previousSibling',
                first: !0
            },
            '~': { dir: 'previousSibling' }
        },
        preFilter: {
            ATTR: function (t) {
                t[1] = t[1].replace(et, it);
                t[3] = (t[4] || t[5] || '').replace(et, it);
                '~=' === t[2] && (t[3] = ' ' + t[3] + ' ');
                return t.slice(0, 4);
            },
            CHILD: function (t) {
                t[1] = t[1].toLowerCase();
                if ('nth' === t[1].slice(0, 3)) {
                    t[3] || nt.error(t[0]);
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ('even' === t[3] || 'odd' === t[3]));
                    t[5] = +(t[7] + t[8] || 'odd' === t[3]);
                } else
                    t[3] && nt.error(t[0]);
                return t;
            },
            PSEUDO: function (t) {
                var e, i = !t[5] && t[2];
                if (Y.CHILD.test(t[0]))
                    return null;
                if (t[3] && void 0 !== t[4])
                    t[2] = t[4];
                else if (i && G.test(i) && (e = pt(i, !0)) && (e = i.indexOf(')', i.length - e) - i.length)) {
                    t[0] = t[0].slice(0, e);
                    t[2] = i.slice(0, e);
                }
                return t.slice(0, 3);
            }
        },
        filter: {
            TAG: function (t) {
                var e = t.replace(et, it).toLowerCase();
                return '*' === t ? function () {
                    return !0;
                } : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                };
            },
            CLASS: function (t) {
                var e = T[t + ' '];
                return e || (e = new RegExp('(^|' + M + ')' + t + '(' + M + '|$)')) && T(t, function (t) {
                    return e.test('string' == typeof t.className && t.className || typeof t.getAttribute !== E && t.getAttribute('class') || '');
                });
            },
            ATTR: function (t, e, i) {
                return function (n) {
                    var r = nt.attr(n, t);
                    if (null == r)
                        return '!=' === e;
                    if (!e)
                        return !0;
                    r += '';
                    return '=' === e ? r === i : '!=' === e ? r !== i : '^=' === e ? i && 0 === r.indexOf(i) : '*=' === e ? i && r.indexOf(i) > -1 : '$=' === e ? i && r.slice(-i.length) === i : '~=' === e ? (' ' + r + ' ').indexOf(i) > -1 : '|=' === e && (r === i || r.slice(0, i.length + 1) === i + '-');
                };
            },
            CHILD: function (t, e, i, n, r) {
                var s = 'nth' !== t.slice(0, 3), o = 'last' !== t.slice(-4), c = 'of-type' === e;
                return 1 === n && 0 === r ? function (t) {
                    return !!t.parentNode;
                } : function (e, i, a) {
                    var h, u, l, g, p, f, d = s !== o ? 'nextSibling' : 'previousSibling', k = e.parentNode, m = c && e.nodeName.toLowerCase(), v = !a && !c;
                    if (k) {
                        if (s) {
                            for (; d;) {
                                l = e;
                                for (; l = l[d];)
                                    if (c ? l.nodeName.toLowerCase() === m : 1 === l.nodeType)
                                        return !1;
                                f = d = 'only' === t && !f && 'nextSibling';
                            }
                            return !0;
                        }
                        f = [o ? k.firstChild : k.lastChild];
                        if (o && v) {
                            p = (h = (u = k[y] || (k[y] = {}))[t] || [])[0] === C && h[1];
                            g = h[0] === C && h[2];
                            l = p && k.childNodes[p];
                            for (; l = ++p && l && l[d] || (g = p = 0) || f.pop();)
                                if (1 === l.nodeType && ++g && l === e) {
                                    u[t] = [
                                        C,
                                        p,
                                        g
                                    ];
                                    break;
                                }
                        } else if (v && (h = (e[y] || (e[y] = {}))[t]) && h[0] === C)
                            g = h[1];
                        else
                            for (; l = ++p && l && l[d] || (g = p = 0) || f.pop();)
                                if ((c ? l.nodeName.toLowerCase() === m : 1 === l.nodeType) && ++g) {
                                    v && ((l[y] || (l[y] = {}))[t] = [
                                        C,
                                        g
                                    ]);
                                    if (l === e)
                                        break;
                                }
                        return (g -= r) === n || g % n == 0 && g / n >= 0;
                    }
                };
            },
            PSEUDO: function (t, e) {
                var i, n = r.pseudos[t] || r.setFilters[t.toLowerCase()] || nt.error('unsupported pseudo: ' + t);
                if (n[y])
                    return n(e);
                if (n.length > 1) {
                    i = [
                        t,
                        t,
                        '',
                        e
                    ];
                    return r.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function (t, i) {
                        for (var r, s = n(t, e), o = s.length; o--;)
                            t[r = R.call(t, s[o])] = !(i[r] = s[o]);
                    }) : function (t) {
                        return n(t, 0, i);
                    };
                }
                return n;
            }
        },
        pseudos: {
            not: st(function (t) {
                var e = [], i = [], n = c(t.replace(B, '$1'));
                return n[y] ? st(function (t, e, i, r) {
                    for (var s, o = n(t, null, r, []), c = t.length; c--;)
                        (s = o[c]) && (t[c] = !(e[c] = s));
                }) : function (t, r, s) {
                    e[0] = t;
                    n(e, null, s, i);
                    return !i.pop();
                };
            }),
            has: st(function (t) {
                return function (e) {
                    return nt(t, e).length > 0;
                };
            }),
            contains: st(function (t) {
                return function (e) {
                    return (e.textContent || e.innerText || s(e)).indexOf(t) > -1;
                };
            }),
            lang: st(function (t) {
                z.test(t || '') || nt.error('unsupported lang: ' + t);
                t = t.replace(et, it).toLowerCase();
                return function (e) {
                    var i;
                    do {
                        if (i = p ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                            return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + '-');
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                    return !1;
                };
            }),
            target: function (e) {
                var i = t.location && t.location.hash;
                return i && i.slice(1) === e.id;
            },
            root: function (t) {
                return t === g;
            },
            focus: function (t) {
                return t === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
            },
            enabled: function (t) {
                return !1 === t.disabled;
            },
            disabled: function (t) {
                return !0 === t.disabled;
            },
            checked: function (t) {
                var e = t.nodeName.toLowerCase();
                return 'input' === e && !!t.checked || 'option' === e && !!t.selected;
            },
            selected: function (t) {
                t.parentNode && t.parentNode.selectedIndex;
                return !0 === t.selected;
            },
            empty: function (t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeName > '@' || 3 === t.nodeType || 4 === t.nodeType)
                        return !1;
                return !0;
            },
            parent: function (t) {
                return !r.pseudos.empty(t);
            },
            header: function (t) {
                return Z.test(t.nodeName);
            },
            input: function (t) {
                return J.test(t.nodeName);
            },
            button: function (t) {
                var e = t.nodeName.toLowerCase();
                return 'input' === e && 'button' === t.type || 'button' === e;
            },
            text: function (t) {
                var e;
                return 'input' === t.nodeName.toLowerCase() && 'text' === t.type && (null == (e = t.getAttribute('type')) || e.toLowerCase() === t.type);
            },
            first: lt(function () {
                return [0];
            }),
            last: lt(function (t, e) {
                return [e - 1];
            }),
            eq: lt(function (t, e, i) {
                return [i < 0 ? i + e : i];
            }),
            even: lt(function (t, e) {
                for (var i = 0; i < e; i += 2)
                    t.push(i);
                return t;
            }),
            odd: lt(function (t, e) {
                for (var i = 1; i < e; i += 2)
                    t.push(i);
                return t;
            }),
            lt: lt(function (t, e, i) {
                for (var n = i < 0 ? i + e : i; --n >= 0;)
                    t.push(n);
                return t;
            }),
            gt: lt(function (t, e, i) {
                for (var n = i < 0 ? i + e : i; ++n < e;)
                    t.push(n);
                return t;
            })
        }
    }).pseudos.nth = r.pseudos.eq;
    for (e in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
        r.pseudos[e] = ht(e);
    for (e in {
            submit: !0,
            reset: !0
        })
        r.pseudos[e] = ut(e);
    function gt() {
    }
    gt.prototype = r.filters = r.pseudos;
    r.setFilters = new gt();
    function pt(t, e) {
        var i, n, s, o, c, a, h, u = w[t + ' '];
        if (u)
            return e ? 0 : u.slice(0);
        c = t;
        a = [];
        h = r.preFilter;
        for (; c;) {
            if (!i || (n = $.exec(c))) {
                n && (c = c.slice(n[0].length) || c);
                a.push(s = []);
            }
            i = !1;
            if (n = V.exec(c)) {
                i = n.shift();
                s.push({
                    value: i,
                    type: n[0].replace(B, ' ')
                });
                c = c.slice(i.length);
            }
            for (o in r.filter)
                if ((n = Y[o].exec(c)) && (!h[o] || (n = h[o](n)))) {
                    i = n.shift();
                    s.push({
                        value: i,
                        type: o,
                        matches: n
                    });
                    c = c.slice(i.length);
                }
            if (!i)
                break;
        }
        return e ? c.length : c ? nt.error(t) : w(t, a).slice(0);
    }
    function ft(t) {
        for (var e = 0, i = t.length, n = ''; e < i; e++)
            n += t[e].value;
        return n;
    }
    function dt(t, e, i) {
        var r = e.dir, s = i && 'parentNode' === r, o = _++;
        return e.first ? function (e, i, n) {
            for (; e = e[r];)
                if (1 === e.nodeType || s)
                    return t(e, i, n);
        } : function (e, i, c) {
            var a, h, u, l = C + ' ' + o;
            if (c) {
                for (; e = e[r];)
                    if ((1 === e.nodeType || s) && t(e, i, c))
                        return !0;
            } else
                for (; e = e[r];)
                    if (1 === e.nodeType || s)
                        if ((h = (u = e[y] || (e[y] = {}))[r]) && h[0] === l) {
                            if (!0 === (a = h[1]) || a === n)
                                return !0 === a;
                        } else {
                            (h = u[r] = [l])[1] = t(e, i, c) || n;
                            if (!0 === h[1])
                                return !0;
                        }
        };
    }
    function kt(t) {
        return t.length > 1 ? function (e, i, n) {
            for (var r = t.length; r--;)
                if (!t[r](e, i, n))
                    return !1;
            return !0;
        } : t[0];
    }
    function mt(t, e, i, n, r) {
        for (var s, o = [], c = 0, a = t.length, h = null != e; c < a; c++)
            if ((s = t[c]) && (!i || i(s, n, r))) {
                o.push(s);
                h && e.push(c);
            }
        return o;
    }
    function yt(t, e, i, n, r, s) {
        n && !n[y] && (n = yt(n));
        r && !r[y] && (r = yt(r, s));
        return st(function (s, o, c, a) {
            var h, u, l, g = [], p = [], f = o.length, d = s || _t(e || '*', c.nodeType ? [c] : c, []), k = !t || !s && e ? d : mt(d, g, t, c, a), m = i ? r || (s ? t : f || n) ? [] : o : k;
            i && i(k, m, c, a);
            if (n) {
                h = mt(m, p);
                n(h, [], c, a);
                u = h.length;
                for (; u--;)
                    (l = h[u]) && (m[p[u]] = !(k[p[u]] = l));
            }
            if (s) {
                if (r || t) {
                    if (r) {
                        h = [];
                        u = m.length;
                        for (; u--;)
                            (l = m[u]) && h.push(k[u] = l);
                        r(null, m = [], h, a);
                    }
                    u = m.length;
                    for (; u--;)
                        (l = m[u]) && (h = r ? R.call(s, l) : g[u]) > -1 && (s[h] = !(o[h] = l));
                }
            } else {
                m = mt(m === o ? m.splice(f, m.length) : m);
                r ? r(null, o, m, a) : O.apply(o, m);
            }
        });
    }
    function vt(t) {
        for (var e, i, n, s = t.length, o = r.relative[t[0].type], c = o || r.relative[' '], h = o ? 1 : 0, u = dt(function (t) {
                    return t === e;
                }, c, !0), l = dt(function (t) {
                    return R.call(e, t) > -1;
                }, c, !0), g = [function (t, i, n) {
                        return !o && (n || i !== a) || ((e = i).nodeType ? u(t, i, n) : l(t, i, n));
                    }]; h < s; h++)
            if (i = r.relative[t[h].type])
                g = [dt(kt(g), i)];
            else {
                if ((i = r.filter[t[h].type].apply(null, t[h].matches))[y]) {
                    n = ++h;
                    for (; n < s && !r.relative[t[n].type]; n++);
                    return yt(h > 1 && kt(g), h > 1 && ft(t.slice(0, h - 1).concat({ value: ' ' === t[h - 2].type ? '*' : '' })).replace(B, '$1'), i, h < n && vt(t.slice(h, n)), n < s && vt(t = t.slice(n)), n < s && ft(t));
                }
                g.push(i);
            }
        return kt(g);
    }
    function Ct(t, e) {
        var i = 0, s = e.length > 0, o = t.length > 0, c = function (c, h, u, g, p) {
                var f, d, k, m = [], y = 0, v = '0', _ = c && [], T = null != p, w = a, x = c || o && r.find.TAG('*', p && h.parentNode || h), S = C += null == w ? 1 : Math.random() || 0.1, b = x.length;
                if (T) {
                    a = h !== l && h;
                    n = i;
                }
                for (; v !== b && null != (f = x[v]); v++) {
                    if (o && f) {
                        d = 0;
                        for (; k = t[d++];)
                            if (k(f, h, u)) {
                                g.push(f);
                                break;
                            }
                        if (T) {
                            C = S;
                            n = ++i;
                        }
                    }
                    if (s) {
                        (f = !k && f) && y--;
                        c && _.push(f);
                    }
                }
                y += v;
                if (s && v !== y) {
                    d = 0;
                    for (; k = e[d++];)
                        k(_, m, h, u);
                    if (c) {
                        if (y > 0)
                            for (; v--;)
                                _[v] || m[v] || (m[v] = N.call(g));
                        m = mt(m);
                    }
                    O.apply(g, m);
                    T && !c && m.length > 0 && y + e.length > 1 && nt.uniqueSort(g);
                }
                if (T) {
                    C = S;
                    a = w;
                }
                return _;
            };
        return s ? st(c) : c;
    }
    c = nt.compile = function (t, e) {
        var i, n = [], r = [], s = x[t + ' '];
        if (!s) {
            e || (e = pt(t));
            i = e.length;
            for (; i--;)
                (s = vt(e[i]))[y] ? n.push(s) : r.push(s);
            s = x(t, Ct(r, n));
        }
        return s;
    };
    function _t(t, e, i) {
        for (var n = 0, r = e.length; n < r; n++)
            nt(t, e[n], i);
        return i;
    }
    function Tt(t, e, n, s) {
        var o, a, h, u, l, g = pt(t);
        if (!s && 1 === g.length) {
            if ((a = g[0] = g[0].slice(0)).length > 2 && 'ID' === (h = a[0]).type && i.getById && 9 === e.nodeType && p && r.relative[a[1].type]) {
                if (!(e = (r.find.ID(h.matches[0].replace(et, it), e) || [])[0]))
                    return n;
                t = t.slice(a.shift().value.length);
            }
            o = Y.needsContext.test(t) ? 0 : a.length;
            for (; o--;) {
                h = a[o];
                if (r.relative[u = h.type])
                    break;
                if ((l = r.find[u]) && (s = l(h.matches[0].replace(et, it), K.test(a[0].type) && e.parentNode || e))) {
                    a.splice(o, 1);
                    if (!(t = s.length && ft(a))) {
                        O.apply(n, s);
                        return n;
                    }
                    break;
                }
            }
        }
        c(t, g)(s, e, !p, n, K.test(t));
        return n;
    }
    i.sortStable = y.split('').sort(b).join('') === y;
    i.detectDuplicates = S;
    u();
    i.sortDetached = ot(function (t) {
        return 1 & t.compareDocumentPosition(l.createElement('div'));
    });
    ot(function (t) {
        t.innerHTML = "''";
        return '#' === t.firstChild.getAttribute('href');
    }) || ct('type|href|height|width', function (t, e, i) {
        if (!i)
            return t.getAttribute(e, 'type' === e.toLowerCase() ? 1 : 2);
    });
    i.attributes && ot(function (t) {
        t.innerHTML = '<input/>';
        t.firstChild.setAttribute('value', '');
        return '' === t.firstChild.getAttribute('value');
    }) || ct('value', function (t, e, i) {
        if (!i && 'input' === t.nodeName.toLowerCase())
            return t.defaultValue;
    });
    ot(function (t) {
        return null == t.getAttribute('disabled');
    }) || ct(U, function (t, e, i) {
        var n;
        if (!i)
            return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
    });
    function wt(t) {
        if (!t)
            return null;
        var e = /\[\w+(\*|\$|\||~|!|\^)?=(.+)]/, i = e.test(t);
        if (i && (i = e.exec(t)) && 3 == i.length) {
            var n = /".+"/;
            if (!/'.+'/.test(i[2]) && !n.test(i[2]))
                return t.replace('=' + i[2], "'" + i[2] + "'");
        }
    }
    hstc.find = function () {
        try {
            return nt.apply(null, arguments);
        } catch (e) {
            var t = wt(arguments[0]);
            if (t) {
                arguments[0] = t;
                return nt.apply(null, arguments);
            }
            throw e;
        }
    };
    hstc.expr = nt.selectors;
    hstc.expr[':'] = hstc.expr.filters;
    hstc.unique = nt.uniqueSort;
    hstc.text = nt.getText;
    hstc.isXMLDoc = nt.isXML;
    hstc.contains = nt.contains;
}(window);
!function (t, e, i) {
    hstc['Fingerprint'] = i();
}(0, 0, function () {
    'use strict';
    var t = function (t) {
        var e, i;
        e = Array.prototype.forEach;
        i = Array.prototype.map;
        this.each = function (t, i, n) {
            if (null !== t)
                if (e && t.forEach === e)
                    t.forEach(i, n);
                else if (t.length === +t.length) {
                    for (var r = 0, s = t.length; r < s; r++)
                        if (i.call(n, t[r], r, t) === {})
                            return;
                } else
                    for (var o in t)
                        if (t.hasOwnProperty(o) && i.call(n, t[o], o, t) === {})
                            return;
        };
        this.map = function (t, e, n) {
            var r = [];
            if (null == t)
                return r;
            if (i && t.map === i)
                return t.map(e, n);
            this.each(t, function (t, i, s) {
                r[r.length] = e.call(n, t, i, s);
            });
            return r;
        };
        if ('object' == typeof t) {
            this.hasher = t.hasher;
            this.screen_resolution = t.screen_resolution;
            this.screen_orientation = t.screen_orientation;
        } else
            'function' == typeof t && (this.hasher = t);
    };
    t.prototype = {
        get: function () {
            var t = [];
            t.push(navigator.userAgent);
            t.push(navigator.language);
            t.push(screen.colorDepth);
            if (this.screen_resolution) {
                var e = this.getScreenResolution();
                void 0 !== e && t.push(e.join('x'));
            }
            t.push(new Date().getTimezoneOffset());
            t.push(this.hasSessionStorage());
            t.push(this.hasLocalStorage());
            t.push(!!window.indexedDB);
            document && document.body ? t.push(typeof document.body.addBehavior) : t.push('undefined');
            t.push(typeof window.openDatabase);
            t.push(navigator.cpuClass);
            t.push(navigator.platform);
            t.push(navigator.doNotTrack);
            return this.hasher ? this.hasher(t.join('###'), 31) : this.murmurhash3_32_gc(t.join('###'), 31);
        },
        murmurhash3_32_gc: murmurhash3_32_gc,
        hasLocalStorage: hasLocalStorage,
        hasSessionStorage: hasSessionStorage,
        getScreenResolution: getScreenResolution
    };
    return t;
});
!function (t, e) {
    try {
        var i = t.getWindow();
        if (!i[e]) {
            loadHstc(t, i);
            i[e] = !0;
        }
    } catch (t) {
        hstc.utils.logError(t);
    }
}(new hstc.global.Context(), '_hstc_loaded');