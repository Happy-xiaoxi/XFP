import {_0xfc28} from './_0xfc28.js'
export function _convertedFunction_n1(_0x229cf0) {
    var _0x3db4e9 = _0xfc28('0x8'), _0x1b828b = 1000;
    var R_BOOMR = R_BOOMR || {}
    var R_BOOMR_start, MEASUREMENTS;
    _0xfc28('0x9') == typeof R_BOOMR && (R_BOOMR = {}), R_BOOMR['version'] || (R_BOOMR[_0xfc28('0xa')] = '0.1', R_BOOMR = {
        t_start: R_BOOMR_start,
        t_end: null,
        base_url: '',
        timeout: 15000,
        latency_runs: MEASUREMENTS,
        user_ip: _0xfc28('0xb'),
        latencies: [],
        latency: null,
        aborted: !1,
        complete: !1,
        running: !1,
        events: {
            page_ready: [],
            page_unload: [],
            before_beacon: []
        },
        vars: {},
        init: function (_0x36c51f) {
            return this[_0xfc28('0xc')] ? this : (this[_0xfc28('0xd')] = _0x36c51f, this['base_url'] && (this['latencies'] = [], this[_0xfc28('0xe')] = null, this[_0xfc28('0xc')] = !1, this['aborted'] = !1, this['removeVars'](), this[_0xfc28('0xf')](_0xfc28('0x10'), this[_0xfc28('0x11')], null, this), this[_0xfc28('0xf')](_0xfc28('0x10'), RISKX[_0xfc28('0x10')]), this[_0xfc28('0xf')](_0xfc28('0x12'), this[_0xfc28('0x13')], null, this), this[_0xfc28('0xf')](_0xfc28('0x14'), RISKX[_0xfc28('0x14')])), this);
        },
        fireEvent: function (_0x478d06, _0x40c92f) {
            var _0x11c766, _0x10e659, _0x1342c8;
            if (!this['events']['hasOwnProperty'](_0x478d06))
                return !1;
            for (_0x1342c8 = this['events'][_0x478d06], _0x11c766 = 0; _0x11c766 < _0x1342c8[_0xfc28('0x15')]; _0x11c766++)
                (_0x10e659 = _0x1342c8[_0x11c766])[0]['call'](_0x10e659[2], _0x40c92f, _0x10e659[1]);
            return !0;
        },
        addListener: function (_0x496649, _0x174dcc, _0x5b52c0) {
            _0x496649[_0xfc28('0x16')] ? _0x496649[_0xfc28('0x16')](_0x174dcc, _0x5b52c0, !1) : _0x496649[_0xfc28('0x17')] && _0x496649['attachEvent']('on' + _0x174dcc, _0x5b52c0);
        },
        ncmp: function (_0x3bdcce, _0x30570e) {
            return _0x3bdcce - _0x30570e;
        },
        iqr: function (_0xe53137) {
            var _0x344043, _0x53d7f0, _0x15ad46, _0x1adf6e, _0x47261a = _0xe53137[_0xfc28('0x15')] - 1, _0x46f83d = [];
            for (_0x344043 = (_0xe53137[Math[_0xfc28('0x18')](0.25 * _0x47261a)] + _0xe53137[Math[_0xfc28('0x19')](0.25 * _0x47261a)]) / 2, _0x15ad46 = 1.5 * ((_0x53d7f0 = (_0xe53137[Math['floor'](0.75 * _0x47261a)] + _0xe53137[Math[_0xfc28('0x19')](0.75 * _0x47261a)]) / 2) - _0x344043), _0x47261a++, _0x1adf6e = 0; _0x1adf6e < _0x47261a && _0xe53137[_0x1adf6e] < _0x53d7f0 + _0x15ad46; _0x1adf6e++)
                _0xe53137[_0x1adf6e] > _0x344043 - _0x15ad46 && _0x46f83d[_0xfc28('0x1a')](_0xe53137[_0x1adf6e]);
            return _0x46f83d;
        },
        calc_latency: function () {
            var _0x56d016, _0x13f5a0, _0x5e97b7, _0xa9ebcb, _0x5cd6ed, _0x20b855;
            for (_0x13f5a0 = (_0x20b855 = this[_0xfc28('0x1b')](this[_0xfc28('0x1c')][_0xfc28('0x1d')](this[_0xfc28('0x1e')])))['length'], _0x5e97b7 = _0x20b855[1], _0x56d016 = 1; _0x56d016 < _0x13f5a0; _0x56d016++)
                _0x20b855[_0x56d016] < _0x5e97b7 && (_0x5e97b7 = _0x20b855[_0x56d016]), _0x5cd6ed += _0x20b855[_0x56d016];
            return _0x13f5a0--, _0xa9ebcb = Math[_0xfc28('0x1f')](_0x5cd6ed / _0x13f5a0), void 0 === _0x5e97b7 && (this[_0xfc28('0x1c')] = this['latencies'][_0xfc28('0x1d')](this[_0xfc28('0x1e')]), _0x5e97b7 = this[_0xfc28('0x1c')][0]), {
                min: _0x5e97b7,
                mean: _0xa9ebcb
            };
        },
        load_img: function (_0x7f0dac, _0x167c40) {
            var _0x598cfd = this[_0xfc28('0xd')] + _0x3db4e9;
            _0xfc28('0x20') === _0x229cf0[_0xfc28('0x21')][_0xfc28('0x22')] && (_0x598cfd = 'https://img.riskified.com/img/image-l.gif'), _0x598cfd = _0x598cfd + _0xfc28('0x23') + new Date()[_0xfc28('0x24')]() + Math[_0xfc28('0x25')]() + _0xfc28('0x26') + window['RI22'][_0xfc28('0x27')]()[_0xfc28('0x28')] + _0xfc28('0x29') + window[_0xfc28('0x2a')][_0xfc28('0x2b')]() + _0xfc28('0x2c') + RISKX[_0xfc28('0x2d')]() + _0xfc28('0x2e') + getYyRxId1() + _0xfc28('0x2f') + getYyRxId3();
            var _0x131707 = 0, _0x48e2a9 = 0, _0x5ceede = new Image(), _0x45573d = this;
            _0x598cfd = encodeURI(_0x598cfd), _0x5ceede['onload'] = function () {
                this[_0xfc28('0x30')] = this[_0xfc28('0x31')] = null, _0x5ceede = null, clearTimeout(_0x131707), _0x167c40 && _0x167c40['call'](_0x45573d, _0x48e2a9, _0x7f0dac, !0), _0x45573d = _0x167c40 = null;
            }, _0x5ceede[_0xfc28('0x31')] = function () {
                this[_0xfc28('0x30')] = this[_0xfc28('0x31')] = null, _0x5ceede = null, clearTimeout(_0x131707), _0x167c40 && _0x167c40['call'](_0x45573d, _0x48e2a9, _0x7f0dac, !1), _0x45573d = _0x167c40 = null;
            }, _0x131707 = setTimeout(function () {
                _0x167c40 && _0x167c40['call'](_0x45573d, _0x48e2a9, _0x7f0dac, null);
            }, _0x1b828b + Math[_0xfc28('0x32')](400, this[_0xfc28('0xe')] ? this[_0xfc28('0xe')]['mean'] : 400)), _0x48e2a9 = new Date()['getTime'](), _0x5ceede['src'] = _0x598cfd;
        },
        iterate: function () {
            if (this[_0xfc28('0x33')])
                return !1;
            this['latency_runs'] && this['load_img'](this['latency_runs']--, this['lat_loaded']);
        },
        defer: function (_0x1f4685) {
            var _0x5c7425 = this;
            return setTimeout(function () {
                _0x1f4685[_0xfc28('0x34')](_0x5c7425), _0x5c7425 = null;
            }, 10);
        },
        lat_loaded: function (_0x4478a0, _0x26eb3e, _0xec7569) {
            if (_0x26eb3e === this[_0xfc28('0x35')] + 1)
                if (null !== _0xec7569) {
                    var _0x67896e = new Date()[_0xfc28('0x24')]() - _0x4478a0;
                    this['latencies'][_0xfc28('0x1a')](_0x67896e), 0 === this[_0xfc28('0x35')] && (this[_0xfc28('0xe')] = this[_0xfc28('0x36')](), this[_0xfc28('0x37')]()), this['defer'](this[_0xfc28('0x38')]);
                } else
                    this[_0xfc28('0x39')]();
        },
        finish: function () {
            this[_0xfc28('0xe')] || (this[_0xfc28('0xe')] = this[_0xfc28('0x36')]()), this[_0xfc28('0x37')](), this[_0xfc28('0x3a')] = !1;
        },
        send_lat_event: function () {
            lat_values = {
                lat: this[_0xfc28('0xe')][_0xfc28('0x32')],
                lat_err: parseFloat(this[_0xfc28('0xe')][_0xfc28('0x3b')], 10)
            }, this[_0xfc28('0xc')] = !0, this['fireEvent'](_0xfc28('0x14'), lat_values);
        },
        start_lat_measurement: function () {
            var _0x4e4a2c = this;
            return this[_0xfc28('0x3a')] || this['complete'] || (this[_0xfc28('0x3a')] = !0, setTimeout(function () {
                _0x4e4a2c[_0xfc28('0x39')]();
            }, this[_0xfc28('0x3c')]), this[_0xfc28('0x3d')](this['iterate'])), this;
        },
        abort: function () {
            return this[_0xfc28('0x33')] = !0, this[_0xfc28('0x3a')] && this[_0xfc28('0x3e')](), this;
        },
        skip: function () {
            return this['abort'](), this[_0xfc28('0xc')] || (this['complete'] = !0, this[_0xfc28('0x3f')](_0xfc28('0x14'), this[_0xfc28('0x40')])), this;
        },
        page_ready: function () {
            return this['fireEvent'](_0xfc28('0x10')), this;
        },
        subscribe: function (_0x30d1fc, _0xf1d0a8, _0x13da9a, _0x205107) {
            var _0x22deb3, _0x4be061, _0x28cf3c;
            for (_0x28cf3c = this[_0xfc28('0x41')][_0x30d1fc], _0x22deb3 = 0; _0x22deb3 < _0x28cf3c['length']; _0x22deb3++)
                if ((_0x4be061 = _0x28cf3c[_0x22deb3])[0] === _0xf1d0a8 && _0x4be061[1] === _0x13da9a && _0x4be061[2] === _0x205107)
                    return this;
            if (_0x28cf3c['push']([
                    _0xf1d0a8,
                    _0x13da9a || {},
                    _0x205107 || null
                ]), 'page_unload' === _0x30d1fc) {
                function _0x28e3aa() {
                    _0xf1d0a8 && _0xf1d0a8[_0xfc28('0x34')](_0x205107, null, _0x13da9a), _0xf1d0a8 = _0x205107 = _0x13da9a = null;
                }
                _0xfc28('0x42') in _0x229cf0 ? this[_0xfc28('0x43')](_0x229cf0, _0xfc28('0x44'), _0x28e3aa) : (this[_0xfc28('0x43')](_0x229cf0, _0xfc28('0x45'), _0x28e3aa), this[_0xfc28('0x43')](_0x229cf0, _0xfc28('0x46'), _0x28e3aa));
            }
            return this;
        },
        removeVars: function () {
            return delete this[_0xfc28('0x40')][_0xfc28('0x47')], delete this[_0xfc28('0x40')][_0xfc28('0x48')], this;
        },
        reset: function () {
            this[_0xfc28('0x1c')] = [], this['latency'] = null, this[_0xfc28('0x33')] = !1, this[_0xfc28('0xc')] = !1, this[_0xfc28('0x3a')] = !1, this[_0xfc28('0x35')] = MEASUREMENTS;
        }
    });
}
