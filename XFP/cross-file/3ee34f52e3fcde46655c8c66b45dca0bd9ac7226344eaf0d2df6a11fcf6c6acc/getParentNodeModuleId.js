export function getParentNodeModuleId(t) {
    for (var e = ''; t && !e.includes('hs_cos_wrapper_');)
        e = (t = t.parentElement) && t.id ? t.id : '';
    return e && e.replace(/^hs_cos_wrapper_|_$/g, '');
}
