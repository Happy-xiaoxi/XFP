var custom_auto_update = {
    qq: 0,
    wechat: 0
};

export function getClueByMsg(msg, type, nosave) {
    msg = msg.replace(/<[^>]+>/g, '');
    if (type == 'w') {
        if (msg.toLowerCase().indexOf('qq') > -1) {
            custom_auto_update.qq = 2;
        }
        if (msg.toLowerCase().indexOf('') > -1) {
            custom_auto_update.wechat = 2;
        }
    } else if (type == 'v') {
        var data_new = {
            mobile: '',
            phone: '',
            email: '',
            qq: '',
            wechat: ''
        };
        var msg = msg.replace(/\[URL=.*?]/g, '').replace(/\[IMG\](.*?)\[\/IMG\]/g, '');
        data_new.mobile = msgInfoFilter(msg, 'mobile');
        data_new.phone = msgInfoFilter(msg, 'phone');
        data_new.email = msgInfoFilter(msg, 'email');
        if (msg.toLowerCase().indexOf('qq') > -1 || custom_auto_update.qq > 0) {
            if (msg.toLowerCase().indexOf('qq') > -1) {
                custom_auto_update.qq = 2;
            }
            data_new.qq = msgInfoFilter(msg, 'qq');
            custom_auto_update.qq--;
        }
        if (msg.toLowerCase().indexOf('') > -1 || custom_auto_update.wechat > 0) {
            if (msg.toLowerCase().indexOf('') > -1) {
                custom_auto_update.wechat = 2;
            }
            data_new.wechat = msgInfoFilter(msg, 'wechat');
            custom_auto_update.wechat--;
        }
        if (!nosave) {
            if (data_new.mobile != '' || data_new.phone != '' || data_new.email != '' || data_new.qq != '' || data_new.wechat != '')
                saveRobotClue(data_new);
        }
        return data_new;
    }
}
