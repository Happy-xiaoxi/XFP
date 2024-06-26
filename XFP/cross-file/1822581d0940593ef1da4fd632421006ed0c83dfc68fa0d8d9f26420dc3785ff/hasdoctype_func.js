;
;
export function hasdoctype_func() {
    var ret;
    if (document.compatMode == 'BackCompat') {
        ret = false;
    } else {
        ret = true;
    }
    return ret;
}