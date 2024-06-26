export function landingTracking() {
    var _eventType = '2';
    var _pageId = '0';
    var _arr = [
        5000,
        10000,
        30000,
        60000
    ];
    if (_eventType == 1 && _pageId == 0) {
        for (var i in _arr) {
            setTimeout(function () {
                MauticJS.heartHate();
            }, _arr[i]);
        }
    }
}
