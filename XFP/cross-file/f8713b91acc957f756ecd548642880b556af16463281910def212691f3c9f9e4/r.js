var e = 0;
import { get } from "./get.js";
import { customEntropyFunction } from "./customEntropyFunction.js";
import { userAgentKey } from "./userAgentKey.js";
// import { getUserAgent } from "./getUserAgent.js";
import { languageKey } from "./languageKey.js";
import { colorDepthKey } from "./colorDepthKey.js";
import { deviceMemoryKey } from "./deviceMemoryKey.js";
import { pixelRatioKey } from "./pixelRatioKey.js";
// import { getPixelRatio } from "./getPixelRatio.js";
import { screenResolutionKey } from "./screenResolutionKey.js";
// import { getScreenResolution } from "./getScreenResolution.js";
import { availableScreenResolutionKey } from "./availableScreenResolutionKey.js";
// import { getAvailableScreenResolution } from "./getAvailableScreenResolution.js";
import { timezoneOffsetKey } from "./timezoneOffsetKey.js";
import { sessionStorageKey,localStorageKey } from "./sessionStorageKey.js";
// import { localStorageKey } from "./localStorageKey.js";
import { indexedDbKey } from "./indexedDbKey.js";
import { addBehaviorKey } from "./addBehaviorKey.js";
import { openDatabaseKey } from "./openDatabaseKey.js";
import { cpuClassKey } from "./cpuClassKey.js";
import { platformKey } from "./platformKey.js";
import { doNotTrackKey } from "./doNotTrackKey.js";
import { canvasKey } from "./canvasKey.js";
import { webglKey } from "./webglKey.js";
import { webglVendorAndRendererKey } from "./webglVendorAndRendererKey.js";
import { adBlockKey } from "./adBlockKey.js";
import { hasLiedLanguagesKey } from "./hasLiedLanguagesKey.js";
import { hasLiedResolutionKey } from "./hasLiedResolutionKey.js";
import { hasLiedOsKey } from "./hasLiedOsKey.js";
import { hasLiedBrowserKey } from "./hasLiedBrowserKey.js";
import { fontsKey } from "./fontsKey.js";
import { flashFontsKey } from "./flashFontsKey.js";
import { jsFontsKey } from "./jsFontsKey.js";
import { pluginsKey } from "./pluginsKey.js";
import { getRegularPlugins } from "./getRegularPlugins.js";
import { getIEPlugins } from "./getIEPlugins.js";
import { pluginsShouldBeSorted } from "./pluginsShouldBeSorted.js";
import { touchSupportKey } from "./touchSupportKey.js";
import { hardwareConcurrencyKey } from "./hardwareConcurrencyKey.js";
import { hasSessionStorage } from "./hasSessionStorage.js";
import { hasLocalStorage } from "./hasLocalStorage.js";
import { hasIndexedDB } from "./hasIndexedDB.js";
import { getHardwareConcurrency } from "./getHardwareConcurrency.js";
// import { getNavigatorCpuClass } from "./getNavigatorCpuClass.js";
// import { getNavigatorPlatform } from "./getNavigatorPlatform.js";
import { getDoNotTrack } from "./getDoNotTrack.js";
import { getTouchSupport } from "./getTouchSupport.js";
import { getCanvasFp } from "./getCanvasFp.js";
import { getWebglFp } from "./getWebglFp.js";
import { getWebglVendorAndRenderer } from "./getWebglVendorAndRenderer.js";
import { getAdBlock } from "./getAdBlock.js";
import { getHasLiedLanguages } from "./getHasLiedLanguages.js";
import { getHasLiedResolution } from "./getHasLiedResolution.js";
import { getHasLiedOs } from "./getHasLiedOs.js";
import { getHasLiedBrowser } from "./getHasLiedBrowser.js";
import { isCanvasSupported } from "./isCanvasSupported.js";
import { isWebGlSupported } from "./isWebGlSupported.js";
import { isIE } from "./isIE.js";
import { hasSwfObjectLoaded } from "./hasSwfObjectLoaded.js";
import { hasMinFlashInstalled } from "./hasMinFlashInstalled.js";
import { addFlashDivNode } from "./addFlashDivNode.js";
import { loadSwfAndDetectFonts } from "./loadSwfAndDetectFonts.js";
import { getWebglCanvas } from "./getWebglCanvas.js";
import { each } from "./each.js";
import { map } from "./map.js";
import { x64Add } from "./x64Add.js";
import { x64Multiply } from "./x64Multiply.js";
import { x64Rotl } from "./x64Rotl.js";
import { x64LeftShift } from "./x64LeftShift.js";
import { x64Xor } from "./x64Xor.js";
import { x64Fmix } from "./x64Fmix.js";
import { x64hash128 } from "./x64hash128.js";


export function r() {
    // 'use strict';
    console.log("this.options.excludeScreenResolution");

    function e(t) {
        if (!(this instanceof e))
            return new e(t);
        this.options = this.extend(t, {
            swfContainerId: 'fingerprintjs2',
            swfPath: 'flash/compiled/FontList.swf',
            detectScreenOrientation: !0,
            sortPluginsFor: [/palemoon/i],
            userDefinedFonts: [],
            excludeDoNotTrack: !0,
            excludePixelRatio: !0
        }), this.nativeForEach = Array.prototype.forEach, this.nativeMap = Array.prototype.map;
    }
    function extend(e, t) {
        if (null == e)
            return t;
        for (var r in e)
            null != e[r] && t[r] !== e[r] && (t[r] = e[r]);
        return t;
    }
    return e.prototype = {
        extend: extend,
        get: get,
        customEntropyFunction: customEntropyFunction,
        userAgentKey: userAgentKey,
        // getUserAgent: getUserAgent,
        languageKey: languageKey,
        colorDepthKey: colorDepthKey,
        deviceMemoryKey: deviceMemoryKey,
        // getDeviceMemory: getDeviceMemory,
        pixelRatioKey: pixelRatioKey,
        // getPixelRatio: getPixelRatio,
        screenResolutionKey: screenResolutionKey,
        // getScreenResolution: getScreenResolution,
        availableScreenResolutionKey: availableScreenResolutionKey,
        // getAvailableScreenResolution: getAvailableScreenResolution,
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
        webglVendorAndRendererKey: webglVendorAndRendererKey,
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
        // getNavigatorCpuClass: getNavigatorCpuClass,
        // getNavigatorPlatform: getNavigatorPlatform,
        getDoNotTrack: getDoNotTrack,
        getTouchSupport: getTouchSupport,
        getCanvasFp: getCanvasFp,
        getWebglFp: getWebglFp,
        getWebglVendorAndRenderer: getWebglVendorAndRenderer,
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
    }, e.VERSION = '1.8.0', e;
}
