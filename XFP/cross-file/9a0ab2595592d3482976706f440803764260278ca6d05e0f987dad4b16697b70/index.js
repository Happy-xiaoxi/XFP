import {_convertedFunction} from './_convertedFunction.js'
import {extend} from './extend.js'
// import {get} from './get.js'
import {customEntropyFunction} from './customEntropyFunction.js'
import {userAgentKey} from './userAgentKey.js'
import {getUserAgent} from './getUserAgent.js'
import {languageKey} from './languageKey.js'
import {colorDepthKey} from './colorDepthKey.js'
import {pixelRatioKey} from './pixelRatioKey.js'
import {getPixelRatio} from './getPixelRatio.js'
import {screenResolutionKey} from './screenResolutionKey.js'
import {getScreenResolution} from './getScreenResolution.js'
import {availableScreenResolutionKey} from './availableScreenResolutionKey.js'
import {getAvailableScreenResolution} from './getAvailableScreenResolution.js'
import {timezoneOffsetKey} from './timezoneOffsetKey.js'
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
import {adBlockKey} from './adBlockKey.js'
import {hasLiedLanguagesKey} from './hasLiedLanguagesKey.js'
import {hasLiedResolutionKey} from './hasLiedResolutionKey.js'
import {hasLiedOsKey} from './hasLiedOsKey.js'
import {hasLiedBrowserKey} from './hasLiedBrowserKey.js'
import {fontsKey} from './fontsKey.js'
import {flashFontsKey} from './flashFontsKey.js'
import {jsFontsKey} from './jsFontsKey.js'
import {pluginsKey} from './pluginsKey.js'
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
import {each} from './each.js'
import {map} from './map.js'
import {x64Add} from './x64Add.js'
import {x64Multiply} from './x64Multiply.js'
import {x64Rotl} from './x64Rotl.js'
import {x64LeftShift} from './x64LeftShift.js'
import {x64Xor} from './x64Xor.js'
import {x64Fmix} from './x64Fmix.js'
import {x64hash128} from './x64hash128.js'
// import {_convertedFunction1} from './_convertedFunction1.js';

function get(done) {
    var keys = [];
    keys = this.userAgentKey(keys);
    keys = this.languageKey(keys);
    keys = this.colorDepthKey(keys);
    keys = this.pixelRatioKey(keys);
    keys = this.hardwareConcurrencyKey(keys);
    keys = this.screenResolutionKey(keys);
    keys = this.availableScreenResolutionKey(keys);
    keys = this.timezoneOffsetKey(keys);
    keys = this.sessionStorageKey(keys);
    keys = this.localStorageKey(keys);
    keys = this.indexedDbKey(keys);
    keys = this.addBehaviorKey(keys);
    keys = this.openDatabaseKey(keys);
    keys = this.cpuClassKey(keys);
    keys = this.platformKey(keys);
    keys = this.doNotTrackKey(keys);
    keys = this.pluginsKey(keys);
    keys = this.canvasKey(keys);
    keys = this.webglKey(keys);
    keys = this.adBlockKey(keys);
    keys = this.hasLiedLanguagesKey(keys);
    keys = this.hasLiedResolutionKey(keys);
    keys = this.hasLiedOsKey(keys);
    keys = this.hasLiedBrowserKey(keys);
    keys = this.touchSupportKey(keys);
    keys = this.customEntropyFunction(keys);
    var that = this;
    this.fontsKey(keys, function (newKeys) {
        var values = [];
        that.each(newKeys, function (pair) {
            var value = pair.value;
            if (typeof pair.value.join !== 'undefined') {
                value = pair.value.join(';');
            }
            values.push(value);
        });
        var murmur = that.x64hash128(values.join('~~~'), 31);
        return done(murmur, newKeys);
    });
}

function _convertedFunction1() {
    function Fingerprint2(options) {
        if (!(this instanceof Fingerprint2)) {
            return new Fingerprint2(options);
        }
        var defaultOptions = {
            swfContainerId: 'fingerprintjs2',
            swfPath: 'flash/compiled/FontList.swf',
            detectScreenOrientation: true,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: []
        };
        this.options = this.extend(options, defaultOptions);
        this.nativeForEach = Array.prototype.forEach;
        this.nativeMap = Array.prototype.map;
    }
    Fingerprint2.prototype = {
        extend: extend,
        get: get,
        customEntropyFunction: customEntropyFunction,
        userAgentKey: userAgentKey,
        getUserAgent: getUserAgent,
        languageKey: languageKey,
        colorDepthKey: colorDepthKey,
        pixelRatioKey: pixelRatioKey,
        getPixelRatio: getPixelRatio,
        screenResolutionKey: screenResolutionKey,
        getScreenResolution: getScreenResolution,
        availableScreenResolutionKey: availableScreenResolutionKey,
        getAvailableScreenResolution: getAvailableScreenResolution,
        timezoneOffsetKey: timezoneOffsetKey,
        sessionStorageKey: sessionStorageKey,
        localStorageKey: localStorageKey,
        indexedDbKey: indexedDbKey,
        addBehaviorKey: addBehaviorKey,
        openDatabaseKey: openDatabaseKey,
        cpuClassKey: cpuClassKey,
        platformKey: platformKey,
        doNotTrackKey: doNotTrackKey,
        canvasKey: canvasKey,
        webglKey: webglKey,
        adBlockKey: adBlockKey,
        hasLiedLanguagesKey: hasLiedLanguagesKey,
        hasLiedResolutionKey: hasLiedResolutionKey,
        hasLiedOsKey: hasLiedOsKey,
        hasLiedBrowserKey: hasLiedBrowserKey,
        fontsKey: fontsKey,
        flashFontsKey: flashFontsKey,
        jsFontsKey: jsFontsKey,
        pluginsKey: pluginsKey,
        getRegularPlugins: getRegularPlugins,
        getIEPlugins: getIEPlugins,
        pluginsShouldBeSorted: pluginsShouldBeSorted,
        touchSupportKey: touchSupportKey,
        hardwareConcurrencyKey: hardwareConcurrencyKey,
        hasSessionStorage: hasSessionStorage,
        hasLocalStorage: hasLocalStorage,
        hasIndexedDB: hasIndexedDB,
        getHardwareConcurrency: getHardwareConcurrency,
        getNavigatorCpuClass: getNavigatorCpuClass,
        getNavigatorPlatform: getNavigatorPlatform,
        getDoNotTrack: getDoNotTrack,
        getTouchSupport: getTouchSupport,
        getCanvasFp: getCanvasFp,
        getWebglFp: getWebglFp,
        getAdBlock: getAdBlock,
        getHasLiedLanguages: getHasLiedLanguages,
        getHasLiedResolution: getHasLiedResolution,
        getHasLiedOs: getHasLiedOs,
        getHasLiedBrowser: getHasLiedBrowser,
        isCanvasSupported: isCanvasSupported,
        isWebGlSupported: isWebGlSupported,
        isIE: isIE,
        hasSwfObjectLoaded: hasSwfObjectLoaded,
        hasMinFlashInstalled: hasMinFlashInstalled,
        addFlashDivNode: addFlashDivNode,
        loadSwfAndDetectFonts: loadSwfAndDetectFonts,
        getWebglCanvas: getWebglCanvas,
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
    Fingerprint2.VERSION = '1.5.1';
    return Fingerprint2;
}
_convertedFunction1()

// _convertedFunction('Fingerprint2', this, _convertedFunction1);