import {getRobotReply} from './getRobotReply.js'
import {getClueByMsg} from './getClueByMsg.js'
import {qstRobotMsg} from './qstRobotMsg.js';
var zsk_api_name = '';
var lnkover = 0;
var zsk_kw_trans = '';
var m_robid = '';
var answer_timeout;
var zsk_zdzrg = '';
var robot_cannot_answer_times = 0;
var zsk_unret_times = '';




















export function dealRobotQa(q_id, question, answer, type, from, answer_type, answer2, answer2_index, is_repetition) {
    if (from == undefined || from != 'Reply') {
        if (zsk_api_name == 'ly' && q_id == '' && answer == '') {
            getRobotReply(question);
            return;
        }
        hideRobotTips();
        if (zsk_api_name != 'yw')
            customerResponse(q_id, 5);
        kindeditor.html('');
        if (type == 'hot' && lnkover == 4) {
            if (zsk_kw_trans.length > 0) {
                for (var i = 0; i < zsk_kw_trans.length; i++) {
                    if (zsk_kw_trans[i].match_type == '0') {
                        if (question == zsk_kw_trans[i].key_word) {
                            display_fk_msg(question);
                            offToTalk('robot');
                            return;
                        }
                    } else {
                        if (question.indexOf(zsk_kw_trans[i].key_word) != -1) {
                            display_fk_msg(question);
                            offToTalk('robot');
                            return;
                        }
                    }
                }
            }
        }
        display_fk_msg(question);
        showRobotLoad();
        robot_unshow_msg++;
        var clueData = getClueByMsg(question, 'v');
        var hasWechat = clueData.wechat == '' ? 0 : 1;
        if (is_repetition != 1) {
            qstRobotMsg(question, 'g', undefined, undefined, undefined, undefined, hasWechat);
        }
    } else {
        if (zsk_api_name != 'yw')
            customerResponse(q_id, 5);
    }
    if (type == 'answer' && (answer_type == 'text' || answer_type == undefined))
        getClueByMsg(answer, 'w');
    if (type == 'toTalk') {
        offToTalk('robot');
        return;
    }
    if (task_robot_use != '0' && (q_id == '0' || q_id == '' || q_id == undefined || q_id == null) && robotList[m_robid].task_switch == '1') {
        robot_unshow_msg--;
        removeRobotLoad();
        task_robot_obj.handleMsg(question);
        robot_nlp_obj.handleNowShow('', 1);
        return;
    }
    var rela_ques = '';
    if (answer2_index == undefined) {
        $.ajax({
            url: '/client/clientRobot.php',
            data: {
                cmd: 'GT',
                com_id: company_id,
                q_id: q_id,
                guest_id: myid,
                question: question,
                api_robot_id: zsk_api_robot_id,
                api_name: zsk_api_name
            },
            dataType: 'json',
            async: false,
            success: function (data) {
                rela_ques = data;
            }
        });
    }
    var answer_time = Math.floor(Math.random() * 500 + robot_answer_delay);
    if (answer2_index != undefined && answer2[answer2_index - 1].intervals != undefined) {
        answer_time = answer2[answer2_index - 1].intervals * 1000;
        console.log(answer_time);
    }
    answer_timeout = setTimeout(function () {
        if (answer != '') {
            if (answer_type == 'text' || answer_type == undefined) {
                answer = robotMsgReplace(answer);
                display_robot_answer(q_id, answer, rela_ques);
            } else {
                display_robot_answer_othertype(q_id, answer, answer_type, rela_ques);
            }
            playSound();
        }
        robot_unshow_msg--;
        removeRobotLoad();
        if (answer != '') {
            if (answer_type == 'text' || answer_type == undefined) {
                qstRobotMsg(answer, 'p');
            } else {
                if (answer_type != 'drawer') {
                    qstRobotMsg(JSON.stringify(answer), answer_type == 'option' ? 'X' : answer_type == 'card' ? 'K' : answer_type == 'form' ? 'Q' : '');
                }
            }
        }
        if (robotList[m_robid].task_switch == '1') {
            task_robot_obj.showLastMsg();
            robot_nlp_obj.handleNowShow();
            robotTimeOut.handle();
        }
        if (type == 'unanswer') {
            if (zsk_zdzrg != '1') {
                display_sys_msg('', 'cannot_answer');
            }
        }
        if (answer2 && answer2.length > 0) {
            if (answer2_index) {
                if (answer2_index < answer2.length) {
                    var new_index = answer2_index + 1;
                    dealRobotQa(q_id, question, answer2[answer2_index].msg, type, from, answer2[answer2_index].type, answer2, new_index);
                    showRobotLoad();
                }
            } else {
                dealRobotQa(q_id, question, answer2[0].msg, type, from, answer2[0].type, answer2, 1);
                showRobotLoad();
            }
        }
        if (answer2 == '' || answer2_index && answer2_index == answer2.length) {
            if (notalk_overtime > -1) {
                notalk_timeout = setInterval('checkNewNotalk()', 1000);
            }
        }
    }, answer_time);
    if (type == 'unanswer') {
        if (zsk_zdzrg == '1') {
            robot_cannot_answer_times += 1;
            if (robot_cannot_answer_times == zsk_unret_times) {
                offToTalk('robot');
                robot_cannot_answer_times = 0;
            }
        }
    }
}