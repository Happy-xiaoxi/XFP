
export function get(done) {
    var that = this, keys = { data: [] };
    keys = this.uA(keys);
    keys = this.la(keys);
    // keys = this.hC(keys);
    keys = this.tzo(keys);
    keys = this.tz(keys);
    // keys = this.sS(keys);
    // keys = this.lS(keys);
    // keys = this.iDb(keys);
    // keys = this.aB(keys);
    // keys = this.oDb(keys);
    keys = this.cC(keys);
    keys = this.pf(keys);
    keys = this.pg(keys);
    keys = this.cvs(keys);
    keys = this.wGl(keys);
    keys = this.wVaR(keys);
    this.fnt(keys, function (keysWithFont) {
        that.ado(keysWithFont, function (newKeys) {
            var values = [];
            that.each(newKeys.data, function (pair) {
                var value = pair.value;
                if (value && typeof value.join === 'function') {
                    values.push(value.join(';'));
                } else {
                    values.push(value);
                }
            });
            var murmur = that.x64hash128(values.join('~~~'), 31);
            return done(murmur, newKeys.data);
        });
    });
}
