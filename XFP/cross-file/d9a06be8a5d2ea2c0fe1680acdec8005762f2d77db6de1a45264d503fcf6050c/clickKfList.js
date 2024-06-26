import {UBBEncode} from './UBBEncode.js'
import {UrlEncode} from './UrlEncode.js';
export function clickKfList(obj) {
    var msg = $(obj).find('span').text();
    var fk_msgid = 'msgid_' + new Date().getTime();
    msg = UBBEncode(msg);
    msg = UrlEncode(msg);
    display_fk_msg($(obj).find('span').text(), fk_msgid);
    qstmsg(msg, fk_msgid);
}