;
;
export function doNotTrackKey(keys) {
    if (!this.options.excludeDoNotTrack) {
        keys.push({
            key: 'do_not_track',
            value: this.getDoNotTrack()
        });
    }
    return keys;
}