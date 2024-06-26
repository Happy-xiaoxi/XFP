



export function run() {
    var t = this.context.getWindow();
    if (!t[hstc.tracking.Runner.ranParam]) {
        t[hstc.tracking.Runner.ranParam] = !0;
        var e = this.tracker;
        this.setUpHsq(i);
        this.processHsq(i);
    }
    function i(t) {
        try {
            if ('function' == typeof t)
                t(e, hstc);
            else if (t && hstc.utils.isArray(t) && e[t[0]])
                return e[t[0]].apply(e, t.slice(1));
        } catch (t) {
            hstc.utils.logError(t);
        }
    }
}
