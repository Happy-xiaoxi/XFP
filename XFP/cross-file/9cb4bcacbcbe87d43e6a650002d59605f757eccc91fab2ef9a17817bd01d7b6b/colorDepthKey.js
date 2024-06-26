
export function colorDepthKey(done, options) {
    done(window.screen.colorDepth || options.NOT_AVAILABLE);
}
