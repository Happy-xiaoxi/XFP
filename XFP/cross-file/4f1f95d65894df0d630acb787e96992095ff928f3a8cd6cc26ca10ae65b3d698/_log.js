var Tynt = window.Tynt || [];

export function _log(a) {
    'undefined' == typeof Tynt.debug && 0 < e.location.search.indexOf('__tcdebugmode=1') && e.console && e.console.log && (Tynt.debug = !0);
    if (!0 === Tynt.debug || 1 === Tynt.debug)
        a.unshift('[TC]'), e.console.log.apply(e.console, a);
}
