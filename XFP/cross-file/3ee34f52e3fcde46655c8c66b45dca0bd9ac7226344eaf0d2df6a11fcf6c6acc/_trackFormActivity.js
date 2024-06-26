






export function _trackFormActivity(t, e, i, n) {
    if ('object' == typeof i) {
        n = i;
        i = '';
    }
    n = n || {};
    var r = {
        k: t,
        fi: hstc.utils.safeString(e)
    };
    hstc.utils.isEmpty(i) || (r.fci = i);
    hstc.utils.isEmpty(n.formVariantId) && hstc.utils.isEmpty(n.fvi) || (r.fvi = n.formVariantId || n.fvi);
    hstc.utils.isEmpty(n.leadFlowId) && hstc.utils.isEmpty(n.lfi) || (r.lfi = n.leadFlowId || n.lfi);
    hstc.utils.isEmpty(n.formType) && 0 !== n.formType || (r.ft = n.formType);
    this._loadImage(r);
}
