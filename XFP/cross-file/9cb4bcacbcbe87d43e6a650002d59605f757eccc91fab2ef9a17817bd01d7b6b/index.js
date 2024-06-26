import {x64Add} from './x64Add.js'
import {x64Multiply} from './x64Multiply.js'
import {x64Rotl} from './x64Rotl.js'
import {x64LeftShift} from './x64LeftShift.js'
import {x64Xor} from './x64Xor.js'
import {x64Fmix} from './x64Fmix.js'
import {x64hash128} from './x64hash128.js'
import {each} from './each.js'
import {map} from './map.js'
import {extendSoft} from './extendSoft.js'
import {enumerateDevicesKey} from './enumerateDevicesKey.js'
import {isEnumerateDevicesSupported} from './isEnumerateDevicesSupported.js'
import {audioKey} from './audioKey.js'
import {UserAgent} from './UserAgent.js'
import {webdriver} from './webdriver.js'
import {languageKey} from './languageKey.js'
import {colorDepthKey} from './colorDepthKey.js'
import {deviceMemoryKey} from './deviceMemoryKey.js'
import {pixelRatioKey} from './pixelRatioKey.js'
import {screenResolutionKey} from './screenResolutionKey.js'
import {getScreenResolution} from './getScreenResolution.js'
import {availableScreenResolutionKey} from './availableScreenResolutionKey.js'
import {getAvailableScreenResolution} from './getAvailableScreenResolution.js'
import {timezoneOffset} from './timezoneOffset.js'
import {timezone} from './timezone.js'
import {sessionStorageKey} from './sessionStorageKey.js'
import {localStorageKey} from './localStorageKey.js'
import {indexedDbKey} from './indexedDbKey.js'
import {addBehaviorKey} from './addBehaviorKey.js'
import {openDatabaseKey} from './openDatabaseKey.js'
import {cpuClassKey} from './cpuClassKey.js'
import {platformKey} from './platformKey.js'
import {doNotTrackKey} from './doNotTrackKey.js'
import {canvasKey} from './canvasKey.js'
import {webglKey} from './webglKey.js'
import {webglVendorAndRendererKey} from './webglVendorAndRendererKey.js'
import {adBlockKey} from './adBlockKey.js'
import {hasLiedLanguagesKey} from './hasLiedLanguagesKey.js'
import {hasLiedResolutionKey} from './hasLiedResolutionKey.js'
import {hasLiedOsKey} from './hasLiedOsKey.js'
import {hasLiedBrowserKey} from './hasLiedBrowserKey.js'
import {flashFontsKey} from './flashFontsKey.js'
import {jsFontsKey} from './jsFontsKey.js'
import {pluginsComponent} from './pluginsComponent.js'
import {getRegularPlugins} from './getRegularPlugins.js'
import {getIEPlugins} from './getIEPlugins.js'
import {pluginsShouldBeSorted} from './pluginsShouldBeSorted.js'
import {touchSupportKey} from './touchSupportKey.js'
import {hardwareConcurrencyKey} from './hardwareConcurrencyKey.js'
import {hasSessionStorage} from './hasSessionStorage.js'
import {hasLocalStorage} from './hasLocalStorage.js'
import {hasIndexedDB} from './hasIndexedDB.js'
import {getHardwareConcurrency} from './getHardwareConcurrency.js'
import {getNavigatorCpuClass} from './getNavigatorCpuClass.js'
import {getNavigatorPlatform} from './getNavigatorPlatform.js'
import {getDoNotTrack} from './getDoNotTrack.js'
import {getTouchSupport} from './getTouchSupport.js'
import {getCanvasFp} from './getCanvasFp.js'
import {getWebglFp} from './getWebglFp.js'
import {getWebglVendorAndRenderer} from './getWebglVendorAndRenderer.js'
import {getAdBlock} from './getAdBlock.js'
import {getHasLiedLanguages} from './getHasLiedLanguages.js'
import {getHasLiedResolution} from './getHasLiedResolution.js'
import {getHasLiedOs} from './getHasLiedOs.js'
import {getHasLiedBrowser} from './getHasLiedBrowser.js'
import {isCanvasSupported} from './isCanvasSupported.js'
import {isWebGlSupported} from './isWebGlSupported.js'
import {isIE} from './isIE.js'
import {hasSwfObjectLoaded} from './hasSwfObjectLoaded.js'
import {hasMinFlashInstalled} from './hasMinFlashInstalled.js'
import {addFlashDivNode} from './addFlashDivNode.js'
import {loadSwfAndDetectFonts} from './loadSwfAndDetectFonts.js'
import {getWebglCanvas} from './getWebglCanvas.js'
import {loseWebglContext} from './loseWebglContext.js'
import {fp2} from './fp2.js'
import {serialize} from './serialize.js'
import {documentReady} from './documentReady.js'
import {iterateCollection} from './iterateCollection.js'
import {log} from './log.js'
import {setCookie} from './setCookie.js'
import {getCookie} from './getCookie.js'
import {getReferer} from './getReferer.js'
import {createCORSRequest} from './createCORSRequest.js'
import {makeCORSRequest} from './makeCORSRequest.js'
import {parseTextToJSON} from './parseTextToJSON.js'
import {insertScript} from './insertScript.js'
import {insertStyle} from './insertStyle.js'
import {guid} from './guid.js'
import {dispatchEvent} from './dispatchEvent.js'
import {s4} from './s4.js'
import {isWeChat} from './isWeChat.js'
import {getParam} from './getParam.js'
import {appendTrackedContact} from './appendTrackedContact.js'
import {getTrackedContact} from './getTrackedContact.js'
import {setTrackedContact} from './setTrackedContact.js'
import {onFirstEventDelivery} from './onFirstEventDelivery.js'
import {beforeFirstEventDelivery} from './beforeFirstEventDelivery.js'
import {pixelLoaded} from './pixelLoaded.js'
import {checkForTrackingPixel} from './checkForTrackingPixel.js'
import {isPixelLoaded} from './isPixelLoaded.js'
import {landingTracking} from './landingTracking.js'
import {heartHate} from './heartHate.js'
import {getUrlParameter} from './getUrlParameter.js'
import {initGatedVideo} from './initGatedVideo.js'
import {processGatedVideos} from './processGatedVideos.js'
import {replaceDynamicContent} from './replaceDynamicContent.js';

export function fingerprint_main(name, context, definition) {
    // 'use strict';
    if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) {
        define(definition);
        context[name] = definition();
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else if (context.exports) {
        context.exports = definition();
    } else {
        context[name] = definition();
    }
}('Fingerprint2', this, fp2);
;

var defaultOptions = {
    preprocessor: null,
    audio: {
        timeout: 1000,
        excludeIOS11: true
    },
    fonts: {
        swfContainerId: 'fingerprintjs2',
        swfPath: 'flash/compiled/FontList.swf',
        userDefinedFonts: [],
        extendedJsFonts: false
    },
    screen: { detectScreenOrientation: true },
    plugins: {
        sortPluginsFor: [/palemoon/i],
        excludeIE: false
    },
    extraComponents: [],
    excludes: {
        enumerateDevices: true,
        pixelRatio: true,
        doNotTrack: true,
        fontsFlash: true
    },
    NOT_AVAILABLE: 'not available',
    ERROR: 'error',
    EXCLUDED: 'excluded'
};

(function () {
    if (typeof window.CustomEvent === 'function')
        return false;
    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}());
var MauticJS = MauticJS || {};
MauticJS.CORSRequestsAllowed = true;
MauticJS.mtcSet = false;
MauticJS.postEventDeliveryQueue = [];
MauticJS.firstDeliveryMade = false;
;
MauticJS.preEventDeliveryQueue = [];
MauticJS.beforeFirstDeliveryMade = false;
document.addEventListener('mauticPageEventDelivered', function (e) {
    var detail = e.detail;
    var isImage = detail.image;
    if (isImage && !MauticJS.mtcSet) {
        MauticJS.getTrackedContact();
    } else if (detail.response && detail.response.id) {
        MauticJS.setTrackedContact(detail.response);
    }
    if (!isImage && typeof detail.event[3] === 'object' && typeof detail.event[3].onload === 'function') {
        detail.event[3].onload(detail);
    }
    if (!MauticJS.firstDeliveryMade) {
        MauticJS.firstDeliveryMade = true;
        for (var i = 0; i < MauticJS.postEventDeliveryQueue.length; i++) {
            if (typeof MauticJS.postEventDeliveryQueue[i] === 'function') {
                MauticJS.postEventDeliveryQueue[i](detail);
            }
            delete MauticJS.postEventDeliveryQueue[i];
        }
    }
});
MauticJS.checkForTrackingPixel();
if (typeof window[window.MauticTrackingObject] !== 'undefined') {
    MauticJS.input = window[window.MauticTrackingObject];
    if (typeof MauticJS.input.q === 'undefined') {
        MauticJS.input.q = [];
    }
    MauticJS.inputQueue = MauticJS.input.q;
    if (!MauticJS.inputQueue.hasOwnProperty('push')) {
        Object.defineProperty(MauticJS.inputQueue, 'push', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: function () {
                for (var i = 0, n = this.length, l = arguments.length; i < l; i++, n++) {
                    MauticJS.dispatchEvent('eventAddedToMauticQueue', arguments[i]);
                }
                return n;
            }
        });
    }
    function getInput(task, type) {
        var matches = [];
        if (typeof MauticJS.inputQueue !== 'undefined' && MauticJS.inputQueue.length) {
            for (var i in MauticJS.inputQueue) {
                if (MauticJS.inputQueue[i][0] === task && MauticJS.inputQueue[i][1] === type) {
                    matches.push(MauticJS.inputQueue[i]);
                }
            }
        }
        return matches;
    }
}
MauticJS.hostname = 'sangfor.huoyan.cn';
MauticJS.documentReady(MauticJS.landingTracking);
var poster_id = parseInt(MauticJS.getUrlParameter('poster_id'));
var exclusive_id = parseInt(MauticJS.getUrlParameter('exclusive_id'));
var channel_id = parseInt(MauticJS.getUrlParameter('channel_id'));
if (poster_id && channel_id) {
    var url = 'https://sangfor.huoyan.cn/poster_stop';
    function posterPageStopTime(url, poster_id, channel_id, time, exclusive_id) {
        var params = {
            poster_id: poster_id,
            channel_id: channel_id,
            time: time
        };
        if (exclusive_id) {
            params.exclusive_id = exclusive_id;
        }
        MauticJS.makeCORSRequest('GET', url, params, function (json, xhr) {
            console.log(json);
        });
    }
    ;
    var _arr = [
        5000,
        10000,
        30000,
        60000
    ];
    for (var i in _arr) {
        setTimeout(function () {
            MauticJS.posterPageStopTime(url, poster_id, channel_id, 10, exclusive_id);
        }, _arr[i]);
    }
}
;
MauticJS.documentReady(MauticJS.initGatedVideo);
(function (m, l, n, d) {
    m.pageTrackingUrl = (l.protocol == 'https:' ? 'https:' : 'https:') + '//sangfor.huoyan.cn/mtracking.gif';
    m.pageTrackingCORSUrl = (l.protocol == 'https:' ? 'https:' : 'https:') + '//sangfor.huoyan.cn/mtc/event';
    m.contactIdUrl = (l.protocol == 'https:' ? 'https:' : 'https:') + '//sangfor.huoyan.cn/mtc';
    m.fingerprint = null;
    m.fingerprintComponents = null;
    m.fingerprintIsLoading = false;
    m.addFingerprint = function (params) {
        for (var componentId in m.fingerprintComponents) {
            var component = m.fingerprintComponents[componentId];
            if (typeof component.key !== 'undefined') {
                if (component.key === 'resolution') {
                    params.resolution = component.value[0] + 'x' + component.value[1];
                } else if (component.key === 'timezone_offset') {
                    params.timezone_offset = component.value;
                } else if (component.key === 'navigator_platform') {
                    params.platform = component.value;
                } else if (component.key === 'adblock') {
                    params.adblock = component.value;
                } else if (component.key === 'do_not_track') {
                    params.do_not_track = component.value;
                }
            }
        }
        params.fingerprint = m.fingerprint;
        return params;
    };
    m.deliverPageEvent = function (event, params) {
        if (!m.firstDeliveryMade && params['counter'] > 0) {
            setTimeout(function () {
                m.deliverPageEvent(event, params);
            }, 5);
            return;
        }
        if (m.fingerprintComponents) {
            params = m.addFingerprint(params);
        }
        if (m.preEventDeliveryQueue.length && m.beforeFirstDeliveryMade === false) {
            for (var i = 0; i < m.preEventDeliveryQueue.length; i++) {
                m.preEventDeliveryQueue[i](params);
            }
            params = m.appendTrackedContact(params);
            m.beforeFirstDeliveryMade = true;
        }
        MauticJS.makeCORSRequest('POST', m.pageTrackingCORSUrl, params, function (response) {
            MauticJS.dispatchEvent('mauticPageEventDelivered', {
                event: event,
                params: params,
                response: response
            });
        }, function () {
            setTimeout(function () {
                m.buildTrackingImage(event, params);
            }, 2000);
            m.buildTrackingImage(event, params);
            m.firstDeliveryMade = true;
        });
    };
    m.buildTrackingImage = function (pageview, params) {
        delete m.trackingPixel;
        m.trackingPixel = new Image();
        if (typeof pageview[3] === 'object') {
            var events = [
                'onabort',
                'onerror',
                'onload'
            ];
            for (var i = 0; i < events.length; i++) {
                var e = events[i];
                if (typeof pageview[3][e] === 'function') {
                    m.trackingPixel[e] = pageview[3][e];
                }
            }
        }
        m.trackingPixel.onload = function (e) {
            MauticJS.dispatchEvent('mauticPageEventDelivered', {
                event: pageview,
                params: params,
                image: true
            });
        };
        m.trackingPixel.src = m.pageTrackingUrl + '?' + m.serialize(params);
    };
    m.pageViewCounter = 0;
    m.sendPageview = function (pageview) {
        var queue = [];
        if (!pageview) {
            if (typeof m.getInput === 'function') {
                queue = m.getInput('send', 'pageview');
            } else {
                return false;
            }
        } else {
            queue.push(pageview);
        }
        var js_referrer = MauticJS.getReferer();
        if (queue) {
            for (var i = 0; i < queue.length; i++) {
                var event = queue[i];
                var params = {
                    page_title: d.title,
                    page_language: n.language,
                    page_referrer: d.referrer ? d.referrer.split('/')[2] : '',
                    page_url: l.href,
                    counter: m.pageViewCounter
                };
                if (null != m.getParam('spam')) {
                    params.spam = m.getParam('spam');
                }
                params = MauticJS.appendTrackedContact(params);
                if (typeof event[2] === 'object') {
                    for (var attr in event[2]) {
                        params[attr] = event[2][attr];
                    }
                }
                m.handleFingerprintInit(event, params);
                m.pageViewCounter++;
            }
        }
    };
    m.handleFingerprintInit = function (event, params) {
        if (m.fingerprintComponents) {
            m.deliverPageEvent(event, params);
        } else if (!m.fingerprint && m.fingerprintIsLoading === false) {
            m.fingerprintIsLoading = true;
            Fingerprint2.get(function (result, components) {
                m.fingerprintIsLoading = false;
                m.fingerprint = result;
                m.fingerprintComponents = components;
                m.deliverPageEvent(event, params);
            });
        } else if (m.fingerprintIsLoading === true) {
            var fingerprintLoop = window.setInterval(function () {
                if (m.fingerprintIsLoading === false) {
                    m.deliverPageEvent(event, params);
                    clearInterval(fingerprintLoop);
                }
            }, 5);
        } else {
            m.deliverPageEvent(event, params);
        }
    };
    m.sendPageview();
    document.addEventListener('eventAddedToMauticQueue', function (e) {
        m.sendPageview(e.detail);
    });
}(MauticJS, location, navigator, document));
if (typeof MauticDomain == 'undefined') {
    var MauticDomain = 'https://sangfor.huoyan.cn';
}
if (typeof MauticLang == 'undefined') {
    var MauticLang = { submittingMessage: 'wait ...' };
}
;
MauticJS.serialize = serialize;
MauticJS.documentReady = documentReady;
MauticJS.iterateCollection = iterateCollection;
MauticJS.log = log;
MauticJS.setCookie = setCookie;
MauticJS.getCookie = getCookie;
MauticJS.getReferer = getReferer;
MauticJS.createCORSRequest = createCORSRequest;
MauticJS.makeCORSRequest = makeCORSRequest;
MauticJS.parseTextToJSON = parseTextToJSON;
MauticJS.insertScript = insertScript;
MauticJS.insertStyle = insertStyle;
MauticJS.guid = guid;
MauticJS.dispatchEvent = dispatchEvent;
MauticJS.isWeChat = isWeChat;
MauticJS.getParam = getParam;
MauticJS.appendTrackedContact = appendTrackedContact;
MauticJS.getTrackedContact = getTrackedContact;
MauticJS.setTrackedContact = setTrackedContact;
MauticJS.onFirstEventDelivery = onFirstEventDelivery;
MauticJS.beforeFirstEventDelivery = beforeFirstEventDelivery;
MauticJS.pixelLoaded = pixelLoaded;
MauticJS.checkForTrackingPixel = checkForTrackingPixel;
MauticJS.isPixelLoaded = isPixelLoaded;
MauticJS.getInput = getInput;
MauticJS.landingTracking = landingTracking;
MauticJS.heartHate = heartHate;
MauticJS.getUrlParameter = getUrlParameter;
MauticJS.posterPageStopTime = posterPageStopTime;
MauticJS.initGatedVideo = initGatedVideo;
MauticJS.processGatedVideos = processGatedVideos;
MauticJS.addVideoView = addVideoView;
MauticJS.endCurrentView = endCurrentView;
MauticJS.replaceDynamicContent = replaceDynamicContent;
MauticJS.beforeFirstEventDelivery(MauticJS.replaceDynamicContent);