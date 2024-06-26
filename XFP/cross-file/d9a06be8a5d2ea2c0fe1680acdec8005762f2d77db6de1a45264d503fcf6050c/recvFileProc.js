import {setKfNoTalkVariable} from './setKfNoTalkVariable.js'
import {setImKfNoTalkVariable} from './setImKfNoTalkVariable.js'
import {getStringField} from './getStringField.js'
import {clearTYP} from './clearTYP.js';
var lnkover = 0;
var imfocus = 1;









export function recvFileProc(fileName, sid, jid6d, type, file_cancel_id, size) {
    if (lnkover != 1)
        return;
    setKfNoTalkVariable();
    setImKfNoTalkVariable();
    try {
        clearTimeout(carousel_id);
    } catch (e) {
    }
    playSound();
    var name = getStringField(fileName, '*', 2);
    var url = getStringField(fileName, '*', 1);
    display_fil_msg(name, url, sid, jid6d, type, file_cancel_id, size);
    if (imfocus == 0) {
        window.focus();
        kindeditor.focus();
    }
    clearTYP();
    try {
        top.postMessage('53kf_new_msg', '*');
    } catch (e) {
    }
}