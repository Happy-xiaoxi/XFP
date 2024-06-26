export function fp2() {
    // 'use strict';
    if (typeof Array.isArray === 'undefined') {
        Array.isArray = function (obj) {
            return Object.prototype.toString.call(obj) === '[object Array]';
        };
    }
    var components = [
        {
            key: 'userAgent',
            getData: UserAgent
        },
        {
            key: 'webdriver',
            getData: webdriver
        },
        {
            key: 'language',
            getData: languageKey
        },
        {
            key: 'colorDepth',
            getData: colorDepthKey
        },
        {
            key: 'deviceMemory',
            getData: deviceMemoryKey
        },
        {
            key: 'pixelRatio',
            getData: pixelRatioKey
        },
        {
            key: 'hardwareConcurrency',
            getData: hardwareConcurrencyKey
        },
        {
            key: 'screenResolution',
            getData: screenResolutionKey
        },
        {
            key: 'availableScreenResolution',
            getData: availableScreenResolutionKey
        },
        {
            key: 'timezoneOffset',
            getData: timezoneOffset
        },
        {
            key: 'timezone',
            getData: timezone
        },
        {
            key: 'sessionStorage',
            getData: sessionStorageKey
        },
        {
            key: 'localStorage',
            getData: localStorageKey
        },
        {
            key: 'indexedDb',
            getData: indexedDbKey
        },
        {
            key: 'addBehavior',
            getData: addBehaviorKey
        },
        {
            key: 'openDatabase',
            getData: openDatabaseKey
        },
        {
            key: 'cpuClass',
            getData: cpuClassKey
        },
        {
            key: 'platform',
            getData: platformKey
        },
        {
            key: 'doNotTrack',
            getData: doNotTrackKey
        },
        {
            key: 'plugins',
            getData: pluginsComponent
        },
        {
            key: 'canvas',
            getData: canvasKey
        },
        {
            key: 'webgl',
            getData: webglKey
        },
        {
            key: 'webglVendorAndRenderer',
            getData: webglVendorAndRendererKey
        },
        {
            key: 'adBlock',
            getData: adBlockKey
        },
        {
            key: 'hasLiedLanguages',
            getData: hasLiedLanguagesKey
        },
        {
            key: 'hasLiedResolution',
            getData: hasLiedResolutionKey
        },
        {
            key: 'hasLiedOs',
            getData: hasLiedOsKey
        },
        {
            key: 'hasLiedBrowser',
            getData: hasLiedBrowserKey
        },
        {
            key: 'touchSupport',
            getData: touchSupportKey
        },
        {
            key: 'fonts',
            getData: jsFontsKey,
            pauseBefore: true
        },
        {
            key: 'fontsFlash',
            getData: flashFontsKey,
            pauseBefore: true
        },
        {
            key: 'audio',
            getData: audioKey
        },
        {
            key: 'enumerateDevices',
            getData: enumerateDevicesKey
        }
    ];
    var Fingerprint2 = function (options) {
        throw new Error("''");
    };
    Fingerprint2.get = function (options, callback) {
        if (!callback) {
            callback = options;
            options = {};
        } else if (!options) {
            options = {};
        }
        extendSoft(options, defaultOptions);
        options.components = options.extraComponents.concat(components);
        var keys = {
            data: [],
            addPreprocessedComponent: function (key, value) {
                if (typeof options.preprocessor === 'function') {
                    value = options.preprocessor(key, value);
                }
                keys.data.push({
                    key: key,
                    value: value
                });
            }
        };
        var i = -1;
        var chainComponents = function (alreadyWaited) {
            i += 1;
            if (i >= options.components.length) {
                callback(keys.data);
                return;
            }
            var component = options.components[i];
            if (options.excludes[component.key]) {
                chainComponents(false);
                return;
            }
            if (!alreadyWaited && component.pauseBefore) {
                i -= 1;
                setTimeout(function () {
                    chainComponents(true);
                }, 1);
                return;
            }
            try {
                component.getData(function (value) {
                    keys.addPreprocessedComponent(component.key, value);
                    chainComponents(false);
                }, options);
            } catch (error) {
                keys.addPreprocessedComponent(component.key, String(error));
                chainComponents(false);
            }
        };
        chainComponents(false);
    };
    Fingerprint2.getPromise = function (options) {
        return new Promise(function (resolve, reject) {
            Fingerprint2.get(options, resolve);
        });
    };
    Fingerprint2.getV18 = function (options, callback) {
        if (callback == null) {
            callback = options;
            options = {};
        }
        return Fingerprint2.get(options, function (components) {
            var newComponents = [];
            for (var i = 0; i < components.length; i++) {
                var component = components[i];
                if (component.value === (options.NOT_AVAILABLE || 'not available')) {
                    newComponents.push({
                        key: component.key,
                        value: 'unknown'
                    });
                } else if (component.key === 'plugins') {
                    newComponents.push({
                        key: 'plugins',
                        value: map(component.value, function (p) {
                            var mimeTypes = map(p[2], function (mt) {
                                if (mt.join) {
                                    return mt.join('~');
                                }
                                return mt;
                            }).join(',');
                            return [
                                p[0],
                                p[1],
                                mimeTypes
                            ].join('::');
                        })
                    });
                } else if ([
                        'canvas',
                        'webgl'
                    ].indexOf(component.key) !== -1 && Array.isArray(component.value)) {
                    newComponents.push({
                        key: component.key,
                        value: component.value.join('~')
                    });
                } else if ([
                        'sessionStorage',
                        'localStorage',
                        'indexedDb',
                        'addBehavior',
                        'openDatabase'
                    ].indexOf(component.key) !== -1) {
                    if (component.value) {
                        newComponents.push({
                            key: component.key,
                            value: 1
                        });
                    } else {
                        continue;
                    }
                } else {
                    if (component.value) {
                        newComponents.push(component.value.join ? {
                            key: component.key,
                            value: component.value.join(';')
                        } : component);
                    } else {
                        newComponents.push({
                            key: component.key,
                            value: component.value
                        });
                    }
                }
            }
            var murmur = x64hash128(map(newComponents, function (component) {
                return component.value;
            }).join('~~~'), 31);
            callback(murmur, newComponents);
        });
    };
    Fingerprint2.x64hash128 = x64hash128;
    Fingerprint2.VERSION = '2.1.0';
    return Fingerprint2;
}
