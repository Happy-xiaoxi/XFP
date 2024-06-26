


export function clog() {
    var a = this.toArray(arguments);
    a.unshift(p.id);
    this._log(a);
}
