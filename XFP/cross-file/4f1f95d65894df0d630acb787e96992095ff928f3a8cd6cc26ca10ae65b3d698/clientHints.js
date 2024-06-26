

export function clientHints(a) {
    'pending' != this._chpv && (this._chm && (a += '&chm=' + encodeURIComponent(this._chm)), this._chpv && (a += '&chpv=' + encodeURIComponent(this._chpv)), this._chuav && (a += '&chuav=' + encodeURIComponent(this._chuav)));
    this._chp && (a += '&chp=' + encodeURIComponent(this._chp));
    'boolean' == typeof this._chmob && (a += '&chmob=' + (this._chmob ? '1' : '0'));
    this._chua && (a += '&chua=' + encodeURIComponent(this._chua));
    return a;
}
