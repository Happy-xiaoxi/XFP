export function _hasDoNotTrack() {
    try {
        if (this.cookie.get(hstc.tracking.Tracker.DO_NOT_TRACK) && 'yes' == this.cookie.get(hstc.tracking.Tracker.DO_NOT_TRACK))
            return !0;
    } catch (t) {
    }
    return !1;
}
