import {qstRobotMsg} from './qstRobotMsg.js';
export function getRobotReply_drawer(id) {
    console.log(id, 1122);
    $('.robot-drawer-box').remove();
    hideRobotTips();
    kindeditor.html('');
    var option = '';
    for (var i = 0; i < robot_drawer_cards.cards.length; i++) {
        if (id == robot_drawer_cards.cards[i].id) {
            option = robot_drawer_cards.cards[i];
        }
    }
    if (option == '') {
        return;
    }
    display_fk_msg_drawer(option);
    showRobotLoad();
    robot_unshow_msg++;
    var send_msg = {
        presentation: robot_drawer_cards.presentation,
        cards: [option]
    };
    qstRobotMsg(JSON.stringify(send_msg), 'J', undefined, undefined, undefined, undefined, 0);
    $.ajax({
        url: '/client/clientRobot.php',
        dataType: 'json',
        data: {
            cmd: 'UQR',
            question_type: 'drawer',
            option_id: id,
            com_id: company_id,
            robot_id: m_robid,
            question: JSON.stringify(send_msg),
            guest_id: myid,
            api_robot_id: zsk_api_robot_id,
            api_name: zsk_api_name,
            talk_id: myfirst_tempid,
            style: style,
            is_collect: '',
            keyword: UrlEncode(keyword),
            search_engine: UrlEncode(search_engine),
            ucust_id: ucust_id,
            temp_id: robot_client.temp_id
        },
        success: function (result) {
            if (robotList[m_robid].recommend_phrase_swich) {
                robot_menu.changeMenu(question);
            }
            task_robot_obj.backRobotGuide();
            var q_id = '0';
            var answer = UBBCode(UBBEncode(zsk_un_prompt));
            var answer_type = 'text';
            var type = 'unanswer';
            var answer2 = [];
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
                robot_runkf_fail_msg = result ? result.fail_msg : '';
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
            dealRobotQa(q_id, option, answer, type, 'Reply', answer_type, answer2);
        },
        error: function () {
            dealRobotQa('0', option, UBBCode(UBBEncode(zsk_un_prompt)), 'unanswer', 'Reply', answer_type);
        }
    });
}