import { each } from './utils.js'
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
// Inspired by and based on https://github.com/cozylife/audio-fingerprint
var audioKey = function (done) {
  var audioOptions = {
    timeout: 1000,
    excludeIOS11: true
  }
  if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
    // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
    return done(options.EXCLUDED)
  }

  var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

  if (AudioContext == null) {
    return done(options.NOT_AVAILABLE)
  }

  var context = new AudioContext(1, 44100, 44100)

  var oscillator = context.createOscillator()
  oscillator.type = 'triangle'
  oscillator.frequency.setValueAtTime(10000, context.currentTime)

  var compressor = context.createDynamicsCompressor()
  each([
    ['threshold', -50],
    ['knee', 40],
    ['ratio', 12],
    ['reduction', -20],
    ['attack', 0],
    ['release', 0.25]
  ], function (item) {
    if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
      compressor[item[0]].setValueAtTime(item[1], context.currentTime)
    }
  })

  oscillator.connect(compressor)
  compressor.connect(context.destination)
  oscillator.start(0)
  context.startRendering()

  var audioTimeoutId = setTimeout(function () {
    console.warn('Audio fingerprint timed out. Please report bug at https://github.com/fingerprintjs/fingerprintjs with your user agent: "' + navigator.userAgent + '".')
    context.oncomplete = function () { }
    context = null
    return done('audioTimeout')
  }, audioOptions.timeout)

  context.oncomplete = function (event) {
    var fingerprint
    try {
      clearTimeout(audioTimeoutId)
      fingerprint = event.renderedBuffer.getChannelData(0)
        .slice(4500, 5000)
        .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
        .toString()
      oscillator.disconnect()
      compressor.disconnect()
    } catch (error) {
      done(error)
      return
    }
    done(fingerprint)
  }
}

export {
  audioKey
}
