import {getKfPromptTime} from './getKfPromptTime.js'
import {setGuestId} from './setGuestId.js'
import {checkMyid} from './checkMyid.js'
import {checkFingerRecord} from './checkFingerRecord.js'
import {getCusWebMsg} from './getCusWebMsg.js'
import {showConnPrompt} from './showConnPrompt.js'
import {setImKfNoTalkVariable} from './setImKfNoTalkVariable.js'
import {getWorkerCard} from './getWorkerCard.js'
import {getQrcode} from './getQrcode.js';
var m_refreshTimer = 0;
var obj_name = '';
var khnumber = 1;
var CONST_NOTALK_TIP = 0;
var CONST_KF_NOTALK_TIP = 0;
var lnkover = 0;
var is_sceneToTalk = false;
var m_ImKfNoTalkTimer = 0;
var m_noTalkTimer = 0;
var m_typTimer = 0;
var m_isShowInertactMenu = false;

























export function linkOpenProc(errCode, errMsg, robotid) {
    clearTimeout(m_refreshTimer);
    var is_swh = 0;
    if (obj_id != 0 && g_comm.GetKfid() != obj_id)
        is_swh = 1;
    myid = g_comm.GetGid();
    mytempid = g_comm.GetTid();
    myfirst_tempid = g_comm.GetFirstTid();
    obj_name = g_comm.GetKfname();
    obj_id = g_comm.GetKfid();
    khnumber = g_comm.GetKhnumber();
    CONST_NOTALK_TIP = (auto_disconnect - 3) * 60;
    CONST_KF_NOTALK_TIP = getKfPromptTime();
    setGuestId();
    checkMyid('acc');
    if (obj_id == 0) {
        switch (errCode) {
        case '1':
            setOffLine();
            break;
        case '2':
            setOffLine();
            break;
        case '3':
            if (wait_robot_autoin == '1') {
                waitAutoinRobot();
            } else {
                lnkover = 5;
                changeModule('busy');
                if (worker_ids.indexOf(',') == -1) {
                    getWorkerCard();
                }
            }
            break;
        case '4':
            if (is_robotToTalk) {
                showNoKfToTalk('robot');
                is_robotToTalk = false;
            } else {
                showzsk(robotid);
            }
            break;
        case '11':
            changeModule('black');
            display_sys_msg(UBBCode(UBBEncode(reject_prompt)));
            break;
        case '101':
            setOffLine();
            break;
        case '111':
            alert(langs[57]);
            var curUrl = window.location.href;
            window.location.href = curUrl;
            break;
        }
    } else {
        changeModule('lnksuccess');
        lnkover = 1;
        if (is_sceneToTalk)
            display_sys_msg(obj_name + ' ' + langs[107]);
        try {
            diaplay_cinfo_msg(comeinfo);
        } catch (e) {
        }
        if (typeof kefuCodeList[obj_id] == 'undefined') {
            admin_wx_code = '';
        } else {
            admin_wx_code = kefuCodeList[obj_id];
        }
        if (typeof visitorPathSwitchList[obj_id] == 'undefined') {
            visitorPathSwitch = '1';
        } else {
            visitorPathSwitch = visitorPathSwitchList[obj_id];
        }
        try {
            if (msg_wait_arr.length > 0) {
                for (var i = 0; i < msg_wait_arr.length; i++) {
                    qstmsg(UrlEncode(msg_wait_arr[i].msg), msg_wait_arr[i].fk_msgid, msg_wait_arr[i].msg_type, msg_wait_arr[i].msgid);
                }
            }
            msg_wait_arr = new Array();
        } catch (e) {
        }
        try {
            task_robot_obj.closeTask('kf');
            robot_nlp_obj.close();
        } catch (e) {
        }
        if (khnumber > 1 && !is_sceneToTalk) {
            playSound();
            g_comm.SendReceiveMsg();
            sendkafka('talk_info', '1');
        } else {
            checkFingerRecord('', 'check_talk');
            try {
                handleCustMsg('lnk');
            } catch (e) {
            }
            getCusWebMsg();
            if (robotassign == '0' && is_swh != 1) {
                showConnPrompt();
            }
            try {
                if (comeinfo.sendtype == '1')
                    sendCinfo();
            } catch (e) {
            }
        }
        if (m_ImKfNoTalkTimer == 0 && errCode == '6') {
            m_ImKfNoTalkTimer = setInterval('checkImKfNoTalk()', 1000);
            setImKfNoTalkVariable();
        }
        if (m_noTalkTimer == 0 && auto_disconnect != 0) {
            m_noTalkTimer = setInterval('checkNoTalk()', 1000);
        }
        if (m_typTimer == 0) {
            m_typTimer = setInterval('sendTypMsg()', 1000);
        }
        getWorkerCard();
        if (wx_drainage == '1' && wx_public_account == '1')
            getQrcode();
        if (!m_isShowInertactMenu) {
            m_isShowInertactMenu = true;
            try {
                if (errCode == 4) {
                    if (robotList[robot_id].recommend_phrase_swich) {
                        getRobotMenuData();
                    }
                } else {
                    menu.init(pc_inertact_menu);
                }
            } catch (e) {
            }
        }
    }
}