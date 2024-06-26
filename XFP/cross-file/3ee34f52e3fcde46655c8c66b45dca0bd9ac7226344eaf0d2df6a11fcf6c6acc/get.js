

export function get(t) {
    var e = new RegExp('(^|;)[ ]*' + t + '=([^;]*)').exec(this.context.getDocument().cookie);
    return e ? hstc.utils.decodeParam(e[2], !0) : '';
}
