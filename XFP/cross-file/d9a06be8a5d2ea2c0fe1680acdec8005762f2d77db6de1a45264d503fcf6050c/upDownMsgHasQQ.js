
export function upDownMsgHasQQ() {
    var has_qq = false;
    upDownMsg.forEach(function (item, index) {
        if (item.indexOf('qq') != -1 || item.indexOf('QQ') != -1) {
            has_qq = true;
        }
    });
    return has_qq;
}
