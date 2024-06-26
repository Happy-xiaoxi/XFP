
export function log() {
    var log = {};
    log.history = log.history || [];
    log.history.push(arguments);
}
