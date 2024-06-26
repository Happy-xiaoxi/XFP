import {showzsk} from './showzsk.js'
import {clearTYP} from './clearTYP.js';
var m_noTalkTimer = 0;
var m_kfNoTalkTimer = 0;
var lnkover = 0;













export function linkCloseProc(robid, arg, style, workerid, islink, iscswh, islink_companyId, iscswh_id6d, iscswh_companyId, code_arg, kf_sign, msg_end) {
    clearInterval(m_noTalkTimer);
    clearInterval(m_kfNoTalkTimer);
    try {
        document.cookie = 'hz6d_open_talk_' + company_id + '=0';
    } catch (e) {
    }
    g_comm.ShutDown(true);
    if (robid != '') {
        showzsk(robid);
        return;
    }
    if (arg != '') {
        var curUrl = window.location.href;
        curUrl_arr = curUrl.split('&');
        for (var i = 0; i < curUrl_arr.length; i++) {
            if (curUrl_arr[i].substr(0, 3) == 'tpl') {
                var tpl = curUrl_arr[i].substr(4);
            }
            if (curUrl_arr[i].substr(0, 13) == 'minchat_style') {
                var minchat_style = curUrl_arr[i].substr(14);
            }
        }
        var referer = curUrl.match(/&referer=[^&]*/gim);
        var keyword = curUrl.match(/&keyword=[^&]*/gim);
        var str = '';
        if (referer != null)
            str += referer;
        if (keyword != null)
            str += keyword;
        var href = http_pro + master_host + '/webCompany.php?arg=' + arg + '&style=' + style + str + '&is_swh=1';
        if (workerid != undefined && workerid != '') {
            href += '&switch_workerid=' + workerid;
        }
        if (islink == '1')
            href += '&islink=1&islink_companyId=' + islink_companyId;
        if (iscswh == '1')
            href += '&iscswh=1&iscswh_id6d=' + iscswh_id6d + '&iscswh_companyId=' + iscswh_companyId;
        if (code_arg != undefined && code_arg != '')
            href += '&code_arg=' + code_arg;
        if (kf_sign != undefined && kf_sign != '')
            href += '&kf_sign=' + kf_sign;
        if (tpl != '' && tpl != undefined && tpl != null)
            href = href + '&tpl=' + tpl;
        if (minchat_style != '' && minchat_style != undefined && minchat_style != null)
            href = href + '&minchat_style=' + minchat_style;
        location.href = href;
        return;
    }
    lnkover = 2;
    changeModule('talkend');
    sendEndMsg();
    showVote();
    mytempid = 0;
    clearTYP();
    hiddenQuick();
    removeVisitorForm();
    try {
        top.postMessage('53kf_new_colse', '*');
    } catch (e) {
    }
}