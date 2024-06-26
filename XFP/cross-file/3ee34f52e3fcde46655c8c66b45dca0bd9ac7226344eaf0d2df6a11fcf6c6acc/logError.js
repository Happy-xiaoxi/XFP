



export function logError(t, e) {
    e = e || '';
    var i = {
        w: hstc.utils.utcnow(),
        m: t.message || t.toString ? t.toString() : '-',
        j: hstc.JS_VERSION
    };
    t.name && (i.n = t.name);
    t.fileName && (i.f = t.fileName);
    t.lineNumber && (i.l = t.lineNumber);
    try {
        i.x = t.stack || t.stacktrace || '';
    } catch (t) {
    }
    hstc.log('Encountered a JS error');
    hstc.log(i);
    var n = 'https://' + (e || hstc.ANALYTICS_HOST) + '/__pto.gif?';
    hstc.utils.loadImage(n + hstc.utils.param(i));
}
