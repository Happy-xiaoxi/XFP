;
;
export function nb() {
    var a = new Date(), b = a.getTimezoneOffset();
    e('time-unix-epoch-ms', a.getTime());
    e('time-local', a.toLocaleString());
    e('time-string', a.toString());
    e('time-tz-offset-minutes', b);
    var c = new Date(a.getFullYear(), 0, 1), d = new Date(a.getFullYear(), 6, 1), h = c.getTimezoneOffset() != d.getTimezoneOffset();
    e('time-tz-has-dst', h ? 'true' : 'false');
    var g = !1;
    h && a.getTimezoneOffset() == d.getTimezoneOffset() && c.getTimezoneOffset() > d.getTimezoneOffset() ? g = !0 : h && a.getTimezoneOffset() == c.getTimezoneOffset() && c.getTimezoneOffset() < d.getTimezoneOffset() && (g = !0);
    e('time-tz-dst-active', g ? 'true' : 'false');
    e('time-tz-std-offset', b);
    a = new Date(2014, 2, 6);
    a.setHours(7);
    a.setMinutes(58);
    a.setSeconds(39);
    e('time-tz-fixed-locale-string', a.toLocaleString());
}