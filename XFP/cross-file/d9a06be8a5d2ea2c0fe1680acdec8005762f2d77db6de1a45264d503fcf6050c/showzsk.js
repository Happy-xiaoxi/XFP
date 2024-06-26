import {sendLNK} from './sendLNK.js'
import {showLword} from './showLword.js'
import {UrlEncode} from './UrlEncode.js'
import {HtmlDecode} from './HtmlDecode.js';
var m_robid = '';
var zsk_name = '';
var zsk_prompt = '';
var zsk_un_prompt = '';
var zsk_zsktb_url = '';
var zsk_zdzrg = '';
var zsk_unret_times = '';
var zsk_admit_rule = '';
var zsk_kw_trans = '';
var zsk_api_robot_id = '';
var zsk_api_name = '';
var zsk_vars = [];
var zsk_feedback = '';
var zsk_lwswitch = '';
var zsk_hots = '';
var lnkover = 0;
var robotTipsTime = 0;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var origin_type = 0;
var talk_type = 0;
var m_isShowInertactMenu = false;


































export function showzsk(rid) {
    hiddenAutoLink();
    if (rid === undefined)
        rid = robot_id;
    if (rid == '' || robotList[rid] == undefined) {
        if (hasOnlineKf == '1') {
            sendLNK();
        } else {
            showLword();
        }
        return;
    }
    m_robid = rid;
    zsk_name = robotList[rid].name;
    zsk_prompt = robotMsgReplace(robotList[rid].prompt);
    zsk_un_prompt = robotMsgReplace(robotList[rid].un_prompt);
    zsk_zsktb_url = robotList[rid].zsktb_url;
    zsk_zdzrg = robotList[rid].zdzrg;
    zsk_unret_times = robotList[rid].unret_times;
    zsk_admit_rule = robotList[rid].admit_rule;
    zsk_kw_trans = robotList[rid].kw_trans;
    zsk_api_robot_id = robotList[rid].api_robot_id;
    zsk_api_name = robotList[rid].api_name;
    zsk_vars = robotList[rid].vars;
    zsk_feedback = robotList[rid].feedback;
    zsk_lwswitch = robotList[rid].lwswitch;
    task_robot_use = robotList[rid].task_robot_use;
    zsk_hots = robotList[rid].hots;
    if (typeof robotList[rid].task_robot_info != 'undefined')
        task_robot_info = robotList[rid].task_robot_info;
    changeModule('robot');
    g_comm.QuitWait();
    g_comm.ShutDown(true);
    lnkover = 4;
    var now = new Date();
    robotTipsTime = now.getTime() + 5000;
    robot_client.setParams(http_pro, robot_host, UrlEncode(HtmlDecode(talkpage)), UrlEncode(HtmlDecode(frompage)), search_engine, UrlEncode(keyword), UrlEncode(HtmlDecode(landpage)), tfrom, is_group, open_time, myid, uid, ucust_id, u_stat_id, UrlEncode(channel), m_robid, UrlEncode(zsk_name));
    if (typeof talk_robot_info['khnumber'] != 'undefined' && guest_id != talk_robot_info['guest_id']) {
        talk_robot_info['task_zsk_id'] = 0;
        talk_robot_info['index'] = 0;
    }
    robot_client.setCallBack('GID_CALL', function (gid) {
        myid = gid;
    });
    robot_client.setCallBack('RLNK_CALL', function () {
        myfirst_tempid = robot_client.first_tempid;
        if (typeof talk_robot_info['khnumber'] != 'undefined') {
            robot_client.sendRqst();
        }
        robot_client.sendGidc(guest_id_from_get);
    });
    robot_client.setCallBack('RQST_CALL', function (list) {
        var last_msg = '';
        if (task_robot_use != '0' && typeof talk_robot_info['khnumber'] != 'undefined') {
            list = task_robot_obj.multiWindowHistory(list);
        }
        for (var i = 0; i < list.length; i++) {
            var type = list[i].type;
            if (type == 's')
                continue;
            if (i == 0 && task_robot_use == '0' && typeof talk_robot_info['khnumber'] != 'undefined' && zsk_api_name != 'ly') {
                $('#robot_start').show();
                continue;
            }
            var msg = decodeURIComponent(list[i].msg);
            msg = UBBCode(msg);
            msg = msg.replace(/(<br>)/g, '<br>');
            msg = msg.replace(/\[voice\](.*?)\[\/voice\]/g, '''''');
            if (type == 'p' || type == 'u') {
                display_robot_answer(0, msg, '');
            } else if (type == 'X' || type == 'K' || type == 'Q') {
                display_robot_answer_othertype(0, JSON.parse(msg), type == 'X' ? 'option' : type == 'K' ? 'card' : type == 'Q' ? 'form' : '', '');
            } else if (type == 'J') {
                display_fk_msg_drawer(JSON.parse(msg).cards[0]);
            } else {
                display_fk_msg(msg);
            }
            if (i == list.length - 1 && type == 'g') {
                last_msg = msg;
            }
        }
        if (robotList[m_robid].task_switch == '1') {
            if (last_msg != '')
                robot_nlp_obj.handleNowShow(last_msg);
            task_robot_obj.taskContinue(last_msg);
        } else {
            if (last_msg != '') {
                getRobotReply('', undefined, 1);
            }
        }
    });
    robot_client.setCallBack('ULN_CALL', function () {
        lnkover = 2;
        sendEndMsg();
        $('.maskArea').show();
        kindeditor.html('');
    });
    robot_client.setCallBack('ZRG_CALL', function (workerid) {
        worker_ids = workerid;
        kflist = 'off';
        is_robotToTalk = true;
        sendLNK();
    });
    robot_client.setCallBack('RECEPTION_CALL', function (workerid) {
        worker_ids = workerid;
        kflist = 'off';
        lnk_overflow = 3;
        is_robotToTalk = true;
        isSendLNK = false;
        sendLNK();
    });
    robot_client.setCallBack('RQKW_CALL', function (kw, kw2) {
        keyword = kw;
        task_robot_obj.getwdCallBack(kw, kw2);
    });
    if (task_robot_use == '0' && typeof talk_robot_info['khnumber'] == 'undefined') {
        $('#robot_start').show();
        if (zsk_api_name == 'ly') {
            var question = '你好';
            if (keyword != '') {
                question = keyword;
            } else if (talkpage != '') {
            }
            $.ajax({
                url: '/client/clientRobot.php',
                dataType: 'json',
                data: {
                    cmd: 'UQR',
                    com_id: company_id,
                    robot_id: m_robid,
                    question: '<newchat>' + question,
                    guest_id: myid,
                    api_robot_id: zsk_api_robot_id,
                    api_name: zsk_api_name,
                    talk_id: myfirst_tempid,
                    style: style,
                    temp_id: robot_client.temp_id
                },
                success: function (result) {
                    if (result) {
                        if (result['answer_type'] == 'text' && result['answer'] != '') {
                            var relation = '';
                            if (result['relation'].length > 0) {
                                relation = '<div class="question-lists"><ul class="questions">';
                                for (i = 0; i < result['relation'].length; i++) {
                                    relation += ''''' + result['relation'][i]['id'] + '''' + result['relation'][i]['question'] + '''' + result['relation'][i]['answer'] + ''' + result['relation'][i]['question'] + '</li>';
                                }
                                relation += '</ul></div>';
                            }
                            zsk_prompt = robotMsgReplace(result['answer']) + relation;
                            $('.pc-robot-reply').html(zsk_prompt);
                        } else {
                        }
                    }
                    getClueByMsg(zsk_prompt, 'w');
                    qstRobotMsg(zsk_prompt, 'p');
                },
                error: function () {
                    getClueByMsg(zsk_prompt, 'w');
                    qstRobotMsg(zsk_prompt, 'p');
                }
            });
        } else {
            getClueByMsg(zsk_prompt, 'w');
            qstRobotMsg(zsk_prompt, 'p');
        }
    } else {
        $('#robot_start').hide();
    }
    createTaskRobot();
    handleCustMsg('robot');
    if (origin_type != '1') {
        talk_type = 3;
        sendkafka('type', '1', '1');
        origin_type = 1;
    }
    if (!m_isShowInertactMenu) {
        m_isShowInertactMenu = true;
        try {
            if (robotList[rid].recommend_phrase_swich) {
                getRobotMenuData();
            } else {
                menu.init(pc_inertact_menu);
            }
        } catch (e) {
        }
    }
}