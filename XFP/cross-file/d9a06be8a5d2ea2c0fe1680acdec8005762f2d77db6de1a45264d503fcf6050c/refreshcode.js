
export function refreshcode(action, url, str) {
    $.ajax({
        url: url,
        data: str,
        dataType: 'jsonp',
        jsonp: 'callback',
        timeout: 3000,
        success: function (res) {
            if (res.action == 'codeInfo') {
                codeInfo(res);
            } else if (res.action == 'callBackCode') {
                callBackCode(res);
            }
        },
        error: function () {
            checkCodeError();
        }
    });
}
