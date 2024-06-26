import {setNoTalkVariable} from './setNoTalkVariable.js'
import {getClueByMsg} from './getClueByMsg.js'
import {quickQA} from './quickQA.js';
export function getQuickAnswer(id, question) {
    $.get('dpp_debug.php', { action: 'getQuickAnswer' });
    setNoTalkVariable();
    display_fk_msg(question);
    getClueByMsg(question, 'v');
    quickQA('', 'GetAnswer', '', id);
    hiddenQuick();
}