
export function ado(keys, done) {
    if (this.options.excludeAudio) {
        return done(keys);
    }
    if (this.options.excludeAudioIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
        return done(keys);
    }
    var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    if (AudioContext === null || AudioContext === undefined) {
        keys.data.push({
            key: 'audio_fp',
            value: null
        });
        return done(keys);
    }
    var context = new AudioContext(1, 44100, 44100);
    var oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(10000, context.currentTime);
    var compressor = context.createDynamicsCompressor();
    this.each([
        [
            'threshold',
            -50
        ],
        [
            'knee',
            40
        ],
        [
            'ratio',
            12
        ],
        [
            'reduction',
            -20
        ],
        [
            'attack',
            0
        ],
        [
            'release',
            0.25
        ]
    ], function (item) {
        if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
            compressor[item[0]].setValueAtTime(item[1], context.currentTime);
        }
    });
    var oncompleteTimeout = setTimeout(function () {
        return done(keys);
    }, 1000);
    context.oncomplete = function (event) {
        clearTimeout(oncompleteTimeout);
        var fingerprint = event.renderedBuffer.getChannelData(0).slice(4500, 5000).reduce(function (acc, val) {
            return acc + Math.abs(val);
        }, 0).toString();
        oscillator.disconnect();
        compressor.disconnect();
        keys.data.push({
            key: 'audio_fp',
            value: fingerprint
        });
        return done(keys);
    };
    oscillator.connect(compressor);
    compressor.connect(context.destination);
    oscillator.start(0);
    context.startRendering();
}
