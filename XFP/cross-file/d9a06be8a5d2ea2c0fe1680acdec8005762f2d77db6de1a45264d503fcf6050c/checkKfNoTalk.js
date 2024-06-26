import {getKfPrompt} from './getKfPrompt.js'
import {UBBCode} from './UBBCode.js'
import {UBBEncode} from './UBBEncode.js'
import {UrlEncode} from './UrlEncode.js';
var kfNoTalkNum = 0;
var CONST_KF_NOTALK_TIP = 0;
var lnkover = 0;








export function checkKfNoTalk() {
    if (kfNoTalkNum < CONST_KF_NOTALK_TIP) {
        kfNoTalkNum++;
    } else {
        setKfNoTalkVariable();
        var busy_prompt = getKfPrompt('busy_prompt');
        if (lnkover == 1 && busy_prompt != '') {
            display_kf_msg(UBBCode(UBBEncode(busy_prompt)));
            qstmsg(UrlEncode(UBBEncode(busy_prompt)), undefined, 'b');
        }
    }
}