import {getWorkerCard} from './getWorkerCard.js';
var is_robotToTalk = false;
var is_sceneToTalk = false;
var is_show_prompt = false;
var lnkover = 0;








export function waitAutoinRobot() {
    if (is_robotToTalk || is_sceneToTalk || is_show_prompt) {
        lnkover = 5;
        changeModule('busy');
        if (worker_ids.indexOf(',') == -1) {
            getWorkerCard();
        }
    } else {
        if (robot_id == '' || robotList[robot_id] == undefined) {
            lnkover = 5;
            changeModule('busy');
            if (worker_ids.indexOf(',') == -1) {
                getWorkerCard();
            }
        } else {
            g_comm.SendDELQUE();
            setTimeout(function () {
                clearInterval(m_noTalkTimer);
                clearInterval(m_kfNoTalkTimer);
                try {
                    document.cookie = 'hz6d_open_talk_' + company_id + '=0';
                } catch (e) {
                }
                g_comm.ShutDown(true);
                showzsk(robot_id);
            }, 100);
        }
    }
}