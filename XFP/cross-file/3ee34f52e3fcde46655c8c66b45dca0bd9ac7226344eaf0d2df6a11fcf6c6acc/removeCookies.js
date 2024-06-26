

export function removeCookies() {
    this.cookie.remove(hstc.tracking.Session.RESTART_COOKIE);
    this.cookie.remove(hstc.tracking.Session.COOKIE);
}
