import {UBBCode} from './UBBCode.js'
import {UBBEncode} from './UBBEncode.js';
export function clickTaskOption(link_id, obj) {
    $(obj).parent().hide();
    var msg = $(obj).html();
    if (link_id == '0') {
        getRobotReply(msg);
    } else {
        display_fk_msg(UBBCode(UBBEncode(msg)));
        qstRobotMsg(msg, 'g');
        task_robot_obj.breakNowTask(link_id);
    }
}