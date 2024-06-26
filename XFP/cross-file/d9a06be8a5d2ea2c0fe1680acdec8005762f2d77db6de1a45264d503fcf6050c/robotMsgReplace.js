

export function robotMsgReplace(msg) {
    if (msg == '')
        return '';
    for (var i = 0; i < zsk_vars.length; i++) {
        msg = msg.replace(zsk_vars[i].tag, zsk_vars[i].val);
    }
    if (mobile_record != '') {
        msg = msg.replace(/\{\{电话号码\}\}/g, mobile_record);
    }
    if (city_record != '') {
        msg = msg.replace(/\{\{城市\}\}/g, city_record);
    }
    return msg;
}
