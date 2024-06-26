import {clearTYP} from './clearTYP.js';
var m_noTalkTimer = 0;
var m_kfNoTalkTimer = 0;
var lnkover = 0;









export function timeOverCloseProc(link, msg_end) {
    clearInterval(m_noTalkTimer);
    clearInterval(m_kfNoTalkTimer);
    try {
        document.cookie = 'hz6d_open_talk_' + company_id + '=0';
    } catch (e) {
    }
    g_comm.ShutDown(true);
    lnkover = 2;
    changeModule('talkend');
    sendEndMsg();
    showVote();
    clearTYP();
    mytempid = 0;
    hiddenQuick();
    try {
        top.postMessage('53kf_new_colse', '*');
    } catch (e) {
    }
    removeVisitorForm();
}