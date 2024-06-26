
export function each(e, t, r) {
    if (null !== e)
        if (this.nativeForEach && e.forEach === this.nativeForEach)
            e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var n = 0, i = e.length; n < i; n++)
                if (t.call(r, e[n], n, e) === {})
                    return;
        } else
            for (var a in e)
                if (e.hasOwnProperty(a) && t.call(r, e[a], a, e) === {})
                    return;
}
