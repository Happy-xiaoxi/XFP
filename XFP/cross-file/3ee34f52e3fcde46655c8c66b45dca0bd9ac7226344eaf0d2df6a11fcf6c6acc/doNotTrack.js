
export function doNotTrack(t) {
    t && t.track ? this.cookie.remove(hstc.tracking.Tracker.DO_NOT_TRACK) : this.cookie.set(hstc.tracking.Tracker.DO_NOT_TRACK, 'yes', { daysToExpire: hstc.tracking.Tracker.DO_NOT_TRACK_EXPIRATION });
}
