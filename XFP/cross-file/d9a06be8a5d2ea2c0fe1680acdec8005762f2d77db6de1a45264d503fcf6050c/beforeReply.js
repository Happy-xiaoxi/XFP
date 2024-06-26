import {changeUpDownMsg} from './changeUpDownMsg.js'
import {recordVisitorMsg} from './recordVisitorMsg.js'
import {getClueByMsg} from './getClueByMsg.js'
import {qstRobotMsg} from './qstRobotMsg.js';
export function beforeReply(question) {
    if (question == '') {
        return;
    }
    hideRobotTips();
    kindeditor.html('');
    changeUpDownMsg(question);
    recordVisitorMsg(question);
    display_fk_msg(question);
    showRobotLoad();
    robot_unshow_msg++;
    var clueData = getClueByMsg(question, 'v');
    var hasWechat = clueData.wechat == '' ? 0 : 1;
    qstRobotMsg(question, 'g', undefined, undefined, undefined, undefined, hasWechat);
}