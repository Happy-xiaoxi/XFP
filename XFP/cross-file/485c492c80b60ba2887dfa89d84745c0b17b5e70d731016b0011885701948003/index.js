'use strict';

// detect if object is array
// only implement if no native implementation is available
if (typeof Array.isArray === 'undefined') {
  Array.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
  }
};


/// MurmurHash3 related functions

import {x64Xor,  x64Rotl,  x64Multiply,  x64LeftShift,  x64hash128,  x64Fmix } from './murmurhash3.js'


var defaultOptions = {
  preprocessor: null,
  audio: {
    timeout: 1000,
    // On iOS 11, audio context can only be used in response to user interaction.
    // We require users to explicitly enable audio fingerprinting on iOS 11.
    // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
    excludeIOS11: true
  },
  fonts: {
    swfContainerId: 'fingerprintjs2',
    swfPath: 'flash/compiled/FontList.swf',
    userDefinedFonts: [],
    extendedJsFonts: false
  },
  screen: {
    // To ensure consistent fingerprints when users rotate their mobile devices
    detectScreenOrientation: true
  },
  plugins: {
    sortPluginsFor: [/palemoon/i],
    excludeIE: false
  },
  extraComponents: [],
  excludes: {
    // Unreliable on Windows, see https://github.com/fingerprintjs/fingerprintjs/issues/375
    'enumerateDevices': true,
    // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
    'pixelRatio': true,
    // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
    'doNotTrack': true,
    // uses js fonts already
    'fontsFlash': true,
    // Extensions (including AdBlock) are disabled by default in Incognito mod of Chrome and Firefox
    // See https://github.com/fingerprintjs/fingerprintjs/issues/405
    'adBlock': true
  },
  NOT_AVAILABLE: 'not available',
  ERROR: 'error',
  EXCLUDED: 'excluded'
}


import { each, map } from './utils.js'
import { extendSoft } from './extendSoft.js'


// Inspired by and based on https://github.com/cozylife/audio-fingerprint

import { UserAgent } from './UserAgent.js'
// import { webdriver } from './webdriver.js'
// import { languageKey } from './languageKey.js'

// import { colorDepthKey } from './colorDepthKey.js'
// import { deviceMemoryKey } from './deviceMemoryKey.js'
// import { pixelRatioKey } from './pixelRatioKey.js'
import { hardwareConcurrencyKey } from './hardwareConcurrencyKey.js'
import { screenResolutionKey } from './screenResolutionKey.js'
import { availableScreenResolutionKey } from './availableScreenResolutionKey.js'
// import { timezoneOffset } from './timezoneOffset.js'
import { timezone } from './timezone.js'

import { sessionStorageKey, localStorageKey, indexedDbKey} from './webstorage.js'
// import { addBehaviorKey } from './addBehaviorKey.js';
// import { openDatabaseKey } from './openDatabaseKey.js';
// import { cpuClassKey  } from './cpuClassKey.js';
// import { platformKey } from './platformKey.js';
// import { doNotTrackKey } from './doNotTrackKey.js';
// import { pluginsComponent } from './pluginsComponent.js'

// import { canvasKey } from './canvasFpKey.js';
// import { webglKey } from './webglKey.js';
// import { webglVendorAndRendererKey } from './webglVendorAndRendererKey.js'
// import { adBlockKey } from './adBlockKey.js';


// import { hasLiedLanguagesKey } from './getHasLiedLanguages.js';
// import { hasLiedResolutionKey } from './getHasLiedResolution.js';
// import { hasLiedOsKey } from './getHasLiedOs.js';
// import { hasLiedBrowserKey } from './getHasLiedBrowser.js';
// import { touchSupportKey } from './touchSupportKey.js';
// import { flashFontsKey } from './flashFontsKey.js'
// import { jsFontsKey } from './jsFontsKey.js'

// import { audioKey } from './audioKey.js'
import { enumerateDevicesKey } from './enumerate.js'

var components = [
  { key: 'userAgent', getData: UserAgent },
  // { key: 'webdriver', getData: webdriver },
  // { key: 'language', getData: languageKey },
  // { key: 'colorDepth', getData: colorDepthKey },
  // { key: 'deviceMemory', getData: deviceMemoryKey },
  // { key: 'pixelRatio', getData: pixelRatioKey },
  { key: 'hardwareConcurrency', getData: hardwareConcurrencyKey },
  { key: 'screenResolution', getData: screenResolutionKey },
  { key: 'availableScreenResolution', getData: availableScreenResolutionKey },
  // { key: 'timezoneOffset', getData: timezoneOffset },
  { key: 'timezone', getData: timezone },
  { key: 'sessionStorage', getData: sessionStorageKey },
  { key: 'localStorage', getData: localStorageKey },
  { key: 'indexedDb', getData: indexedDbKey },
  // { key: 'addBehavior', getData: addBehaviorKey },
  // { key: 'openDatabase', getData: openDatabaseKey },
  // { key: 'cpuClass', getData: cpuClassKey },
  // { key: 'platform', getData: platformKey },
  // { key: 'doNotTrack', getData: doNotTrackKey },
  // { key: 'plugins', getData: pluginsComponent },
  // { key: 'canvas', getData: canvasKey },
  // { key: 'webgl', getData: webglKey },
  // { key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey },
  // { key: 'adBlock', getData: adBlockKey },
  // { key: 'hasLiedLanguages', getData: hasLiedLanguagesKey },
  // { key: 'hasLiedResolution', getData: hasLiedResolutionKey },
  // { key: 'hasLiedOs', getData: hasLiedOsKey },
  // { key: 'hasLiedBrowser', getData: hasLiedBrowserKey },
  // { key: 'touchSupport', getData: touchSupportKey },
  // { key: 'fonts', getData: jsFontsKey, pauseBefore: true },
  // { key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true },
  // { key: 'audio', getData: audioKey },
  { key: 'enumerateDevices', getData: enumerateDevicesKey }
]


var Fingerprint2 = function (options) {
  throw new Error("'new Fingerprint()' is deprecated, see https://github.com/fingerprintjs/fingerprintjs#upgrade-guide-from-182-to-200")
}

Fingerprint2.get = function (options, callback) {
  if (!callback) {
    callback = options
    options = {}
  } else if (!options) {
    options = {}
  }
  extendSoft(options, defaultOptions)
  options.components = options.extraComponents.concat(components)

  var keys = {
    data: [],
    addPreprocessedComponent: function (key, value) {
      if (typeof options.preprocessor === 'function') {
        value = options.preprocessor(key, value)
      }
      keys.data.push({ key: key, value: value })
    }
  }

  var i = -1
  var chainComponents = function (alreadyWaited) {
    i += 1
    if (i >= options.components.length) { // on finish
      callback(keys.data)
      return
    }
    var component = options.components[i]

    if (options.excludes[component.key]) {
      chainComponents(false) // skip
      return
    }

    // if true
    if (!alreadyWaited && component.pauseBefore) {
      i -= 1
      setTimeout(function () {
        chainComponents(true)
      }, 1)
      return
    }

    try {
      component.getData(function (value) {
        keys.addPreprocessedComponent(component.key, value)
        chainComponents(false)
      }, options)
    } catch (error) {
      // main body error
      console.log('error: ', error)
      keys.addPreprocessedComponent(component.key, String(error))
      chainComponents(false)
    }
  }
  chainComponents(false)
}

Fingerprint2.getPromise = function (options) {
  return new Promise(function (resolve, reject) {
    Fingerprint2.get(options, resolve)
  })
}

Fingerprint2.getV18 = function (options, callback) {
  if (callback == null) {
    callback = options
    options = {}
  }
  return Fingerprint2.get(options, function (components) {
    var newComponents = []
    for (var i = 0; i < components.length; i++) {
      var component = components[i]
      if (component.value === (options.NOT_AVAILABLE || 'not available')) {
        newComponents.push({ key: component.key, value: 'unknown' })
      } else if (component.key === 'plugins') {
        newComponents.push({
          key: 'plugins',
          value: map(component.value, function (p) {
            var mimeTypes = map(p[2], function (mt) {
              if (mt.join) { return mt.join('~') }
              return mt
            }).join(',')
            return [p[0], p[1], mimeTypes].join('::')
          })
        })
      } else if (['canvas', 'webgl'].indexOf(component.key) !== -1 && Array.isArray(component.value)) {
        // sometimes WebGL returns error in headless browsers (during CI testing for example)
        // so we need to join only if the values are array
        newComponents.push({ key: component.key, value: component.value.join('~') })
      } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
        if (component.value) {
          newComponents.push({ key: component.key, value: 1 })
        } else {
          // skip
          continue
        }
      } else {
        if (component.value) {
          newComponents.push(component.value.join ? { key: component.key, value: component.value.join(';') } : component)
        } else {
          newComponents.push({ key: component.key, value: component.value })
        }
      }
    }
    var murmur = x64hash128(map(newComponents, function (component) { return component.value }).join('~~~'), 31) 
    newComponents.push({key:"fingerprint", value:murmur})
    callback(newComponents)
    // callback(murmur, newComponents)
  })
}

Fingerprint2.x64hash128 = x64hash128
Fingerprint2.VERSION = '2.1.5'

export default Fingerprint2
