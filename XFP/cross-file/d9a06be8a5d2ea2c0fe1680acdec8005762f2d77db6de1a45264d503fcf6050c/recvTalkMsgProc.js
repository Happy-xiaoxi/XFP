import {HtmlDecode} from './HtmlDecode.js'
import {UBBCode} from './UBBCode.js'
import {getWorkerNameById6d} from './getWorkerNameById6d.js'
import {setKfNoTalkVariable} from './setKfNoTalkVariable.js'
import {setImKfNoTalkVariable} from './setImKfNoTalkVariable.js'
import {showServiceQRcode} from './showServiceQRcode.js'
import {setOldKf} from './setOldKf.js'
import {checkWechatByMsg} from './checkWechatByMsg.js'
import {setNoTalkVariable} from './setNoTalkVariable.js'
import {clearTYP} from './clearTYP.js';
var lnkover = 0;
var obj_name = '';
var imfocus = 1;






















export function recvTalkMsgProc(msg, font, size, color, from, jid6d, sid, msgid, msg_type) {
    if (lnkover != 1)
        return;
    if (msg_type == 'z') {
        changeFormStatus('formid_' + msgid, true);
        return;
    }
    if (!isLoadVoice(msg)) {
        setTimeout(function () {
            recvTalkMsgProc(msg, font, size, color, from, jid6d, sid, msgid);
        }, 100);
        return;
    }
    var wxcode_msg = msg;
    msg = HtmlDecode(msg);
    msg = UBBCode(msg);
    msg = msg.replace(/(<br>)/g, '<br>');
    font = decodeURIComponent(font);
    size = decodeURIComponent(size);
    color = decodeURIComponent(color);
    if (color == '#000')
        color = color_kfxx;
    var style = 'font-family:' + font + ';font-size:' + size + 'px;color:' + color + ';background-color:' + color_kfqp + ';';
    var talkname = obj_name;
    if (jid6d != '') {
        talkname = getWorkerNameById6d(jid6d);
    }
    if (sid == obj_id) {
        playSound();
        setKfNoTalkVariable();
        setImKfNoTalkVariable();
        try {
            top.postMessage('53kf_new_msg', '*');
        } catch (e) {
        }
        if (msg_type == 'I') {
            showServiceQRcode(wxcode_msg, msgid, obj_name);
        } else {
            display_kf_msg(msg, talkname, style, undefined, msgid, undefined, undefined, undefined, msg_type);
        }
        setOldKf();
        checkWechatByMsg(msg, 'w');
    } else {
        setNoTalkVariable();
        display_fk_msg(msg);
    }
    try {
        clearTimeout(carousel_id);
    } catch (e) {
    }
    if (imfocus == 0) {
        window.focus();
        kindeditor.focus();
    }
    clearTYP();
}