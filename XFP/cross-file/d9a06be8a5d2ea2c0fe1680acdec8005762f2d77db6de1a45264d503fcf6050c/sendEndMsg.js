import {getKfPrompt} from './getKfPrompt.js'
import {UBBCode} from './UBBCode.js'
import {UBBEncode} from './UBBEncode.js';
export function sendEndMsg(msg_end) {
    if (!!getKfPrompt('close_prompt')) {
        display_kf_msg(UBBCode(UBBEncode(getKfPrompt('close_prompt').replace(/\\/g, ''))));
    }
}