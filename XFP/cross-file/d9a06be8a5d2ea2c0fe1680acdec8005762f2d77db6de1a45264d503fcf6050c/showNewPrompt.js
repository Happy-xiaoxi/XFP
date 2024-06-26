var notalk_nowtime = 0;
var notalk_overtime = -1;

export function showNewPrompt(q_id, question, answer, type, from, answer_type, answer2, time_out) {
    notalk_nowtime = 0;
    notalk_overtime = time_out;
    dealRobotQa(q_id, question, answer, type, from, answer_type, answer2, undefined);
}
