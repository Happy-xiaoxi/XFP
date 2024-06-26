


export function save() {
    this.cookie.set(hstc.tracking.Session.RESTART_COOKIE, '1');
    this.cookie.set(hstc.tracking.Session.COOKIE, this.get(), { minsToExpire: 30 });
}
