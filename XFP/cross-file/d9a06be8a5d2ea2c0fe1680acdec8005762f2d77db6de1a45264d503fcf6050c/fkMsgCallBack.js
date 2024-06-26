




export function fkMsgCallBack(msgid, type) {
    var msg = '';
    if (type == 'msg') {
        msg = $('#' + msgid).parent().first().text();
    } else if (type == 'form') {
        msg = $('#' + msgid).find('''').val();
    }
    var reg = new RegExp(/[\d]+(1[3-9]\d{9})(?!\d)+/gi);
    if (!reg.test(msg)) {
        var re = /[^\d]?(1[3-9]\d{9})(?!\d)+/gi;
        if (re.test(msg)) {
            top.postMessage('53kf_fk_new_msg:' + true, '*');
        }
    }
}
