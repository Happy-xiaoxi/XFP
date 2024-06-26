import {HtmlDecode} from './HtmlDecode.js'
import {getTime} from './getTime.js'
import {UBBEncode} from './UBBEncode.js'
import {UBBCode} from './UBBCode.js'
import {UrlEncode} from './UrlEncode.js';
var sendtyptime = 0;
var typtime = 8;
var typcontent = '';
var sendtyp_type = 0;













export function sendTYP() {
    var msg_content = $.trim(kindeditor.html());
    msg_content = msg_content.replace(/&nbsp;/g, '').replace(/ /g, '');
    msg_content = HtmlDecode(msg_content);
    msg_content = msg_content.replace(/<br\/>/g, '\n');
    if (getTime() - sendtyptime >= typtime && typcontent != msg_content) {
        if (sendtyp_type == 0) {
            if (msg_content != '') {
                g_comm.SendTyping('');
            }
        } else {
            if (msg_content != '') {
                var msg = UBBEncode(msg_content);
                try {
                    msg = msgFilter(msg);
                } catch (e) {
                }
                g_comm.SendTyping(UBBCode(UrlEncode(msg)));
            } else {
                if (typcontent != '') {
                    g_comm.SendTyping('');
                }
            }
        }
        sendtyptime = getTime();
        typcontent = msg_content;
    }
}