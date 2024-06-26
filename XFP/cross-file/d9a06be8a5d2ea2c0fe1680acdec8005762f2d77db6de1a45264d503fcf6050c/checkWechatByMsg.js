var custom_wechat_update = 0;

export function checkWechatByMsg(msg, type) {
    msg = msg.replace(/<[^>]+>/g, '');
    if (type == 'w') {
        if (msg.toLowerCase().indexOf('') > -1) {
            custom_wechat_update = 2;
        }
    } else if (type == 'v') {
        var wechat = '';
        var msg = msg.replace(/\[URL=.*?]/g, '').replace(/\[IMG\](.*?)\[\/IMG\]/g, '');
        if (msg.toLowerCase().indexOf('') > -1 || custom_wechat_update > 0) {
            if (msg.toLowerCase().indexOf('') > -1) {
                custom_wechat_update = 2;
            }
            wechat = msgInfoFilter(msg, 'wechat');
            custom_wechat_update--;
        }
        if (wechat == '')
            return false;
        return true;
    }
}
