export function hasClass(t, e) {
    if (t && t.className)
        return hstc.utils.inArray(e, t.className.split(' ')) > -1;
}
