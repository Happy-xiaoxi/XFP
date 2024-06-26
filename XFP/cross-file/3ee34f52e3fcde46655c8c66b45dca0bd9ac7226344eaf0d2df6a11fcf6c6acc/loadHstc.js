



export function loadHstc(t, e) {
    function i() {
        new hstc.tracking.Runner(t).run();
    }
    var n = t.getDocument();
    !n.readyState || 'complete' == n.readyState || n.addEventListener && 'loaded' == n.readyState ? i() : hstc.utils.addEventListener(e, 'load', i, !0);
}
