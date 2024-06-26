



export function log() {
    p.inXOIframe() ? this.clog.apply(this, arguments) : this._log(this.toArray(arguments));
}
