import {getClueByMsg} from './getClueByMsg.js';
var m_robid = '';
var notalk_timeout;
var answer_timeout;








export function getRobotReply(question, isOvertime, is_repetition) {
    showRobotLoad();
    beforeReply(question);
    var _cmd = 'UQR';
    if (isOvertime) {
        _cmd = 'UTR';
    }
    if (robot_nlp_obj.isMatch(question))
        return;
    if (robotList[m_robid].task_switch == '1') {
        if (robotTimeOut.match(question))
            return;
    }
    if (notalk_timeout) {
        clearInterval(notalk_timeout);
    }
    if (answer_timeout)
        clearTimeout(answer_timeout);
    var clueData = getClueByMsg(question, 'v', 'nosave');
    var is_collect = '';
    if (clueData.mobile != '' || clueData.phone != '' || clueData.email != '' || clueData.qq != '' || clueData.wechat != '') {
        is_collect = '1';
    }
    $.ajax({
        url: '/client/clientRobot.php',
        dataType: 'json',
        data: {
            cmd: _cmd,
            com_id: company_id,
            robot_id: m_robid,
            question: question,
            guest_id: myid,
            api_robot_id: zsk_api_robot_id,
            api_name: zsk_api_name,
            talk_id: myfirst_tempid,
            style: style,
            is_collect: is_collect,
            keyword: UrlEncode(keyword),
            search_engine: UrlEncode(search_engine),
            ucust_id: ucust_id,
            is_repetition: is_repetition,
            temp_id: robot_client.temp_id
        },
        success: function (result) {
            if (_cmd == 'UQR' && robotList[m_robid].recommend_phrase_swich) {
                robot_menu.changeMenu(question);
            }
            task_robot_obj.backRobotGuide();
            var q_id = '0';
            var answer = UBBCode(UBBEncode(zsk_un_prompt));
            var answer_type = 'text';
            var type = 'unanswer';
            notalk_nowtime = 0;
            notalk_overtime = result['time_out'];
            var answer2 = [];
            robot_runkf_fail_msg = result ? result.fail_msg : '';
            if (result != null && result['q_id'] != '0') {
                answer = result['answer'];
                answer_type = result['answer_type'];
                q_id = result['q_id'];
                type = 'answer';
                answer2 = result['answer2'] ? result['answer2'] : [];
                if (zsk_api_name == 'yw') {
                    if (result['serviceType'] == 'seat')
                        type = 'toTalk';
                }
                if (zsk_api_name == 'ly') {
                    if (result['answer'] == 'order_transfer')
                        type = 'toTalk';
                }
                if (result['staff_service'] == 1) {
                    setTimeout(function () {
                        if (notalk_timeout) {
                            clearInterval(notalk_timeout);
                        }
                        if (answer_timeout) {
                            clearTimeout(answer_timeout);
                        }
                        offToTalk('robot');
                    }, result['staff_time'] * 1000);
                }
            } else if (result['answer'] == '') {
                if (result['staff_service'] == 1) {
                    setTimeout(function () {
                        if (notalk_timeout) {
                            clearInterval(notalk_timeout);
                        }
                        if (answer_timeout) {
                            clearTimeout(answer_timeout);
                        }
                        offToTalk('robot');
                    }, result['staff_time'] * 1000);
                }
            }
            dealRobotQa(q_id, question, answer, type, 'Reply', answer_type, answer2, undefined, is_repetition);
        },
        error: function () {
            dealRobotQa('0', question, UBBCode(UBBEncode(zsk_un_prompt)), 'unanswer', 'Reply', answer_type);
        }
    });
}