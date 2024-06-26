








export function msgInfoFilter(msg, filter_key) {
    if (filter_key == 'mobile') {
        var data = ('-' + msg).match(/[^\d](1[3-9]\d{9})(?!\d)/);
        if (data)
            data = data[0].substring(1);
    }
    if (filter_key == 'phone') {
        var data = ('-' + msg).match(/[^\d](0\d{2,3}-?\d{7,8})(?!\d)/);
        if (data)
            data = data[0].substring(1);
    }
    if (filter_key == 'email') {
        var data = msg.match(/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/);
        if (data)
            data = data[0];
    }
    if (filter_key == 'qq') {
        var data = ('-' + msg).match(/[^\d](\d{5,12})(?!\d)/);
        if (data)
            data = data[0].substring(1);
    }
    if (filter_key == 'wechat') {
        var data = ('-' + msg).match(/[^\w](\w|-){5,19}(?![\w#])/);
        if (data)
            data = data[0].substring(1);
    }
    if (data != '' && data != null)
        return data;
    else
        return '';
}
