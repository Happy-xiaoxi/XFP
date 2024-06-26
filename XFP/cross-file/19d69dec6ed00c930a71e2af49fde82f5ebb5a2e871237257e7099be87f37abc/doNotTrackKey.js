export function doNotTrackKey(e) {
    return this.options.excludeDoNotTrack || e.addPreprocessedComponent({
        key: 'do_not_track',
        value: this.getDoNotTrack()
    }), e;
}
