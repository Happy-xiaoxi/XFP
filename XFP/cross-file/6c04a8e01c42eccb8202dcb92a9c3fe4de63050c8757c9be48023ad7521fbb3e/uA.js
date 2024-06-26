
export function uA(keys) {
    var that = this;
    var ua = function () {
        var userAgent = navigator.userAgent.split('/'), simpAgent = '';
        that.each(userAgent, function (ua1) {
            var secondSplit = ua1.split(' ');
            that.each(secondSplit, function (ua2) {
                var parts = ua2.split('.');
                if (parts.length > 2) {
                    simpAgent += parts[0] + '.' + parts[1] + ' ';
                } else {
                    simpAgent += ua2 + ' ';
                }
            });
        });
        return simpAgent;
    };
    keys.data.push({
        key: 'user_agent',
        value: ua()
    });
    return keys;
}
