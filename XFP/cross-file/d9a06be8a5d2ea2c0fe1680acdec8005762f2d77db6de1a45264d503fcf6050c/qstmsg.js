import {setKfNoTalkVariable} from './setKfNoTalkVariable.js'
import {setImKfNoTalkVariable} from './setImKfNoTalkVariable.js'
import {setNoTalkVariable} from './setNoTalkVariable.js';
var typcontent = '';
var kfNoTalkNum = 0;





export function qstmsg(msg, fk_msgid, msg_type, msgid) {
    typcontent = '';
    if (msg_type == 'a') {
        setKfNoTalkVariable();
        setImKfNoTalkVariable();
    } else if (msg_type != 'b') {
        setNoTalkVariable();
    }
    try {
        clearTimeout(carousel_id);
    } catch (e) {
    }
    if (kfNoTalkNum == 0 && msg_type != 'b' && msg_type != 'a') {
        try {
            clearInterval(m_kfNoTalkTimer);
            m_kfNoTalkTimer = setInterval('checkKfNoTalk()', 1000);
        } catch (e) {
        }
    }
    var code_arr = new Array();
    if (msg_type != 'b' && msg_type != 'a') {
        try {
            var mo_patt = new RegExp('(%5BMOBILE%5D)(\\d+?)(%5B%2FMOBILE%5D)', 'im');
            var ph_patt = new RegExp('(%5BPHONE%5D)([\\d\\-]+?)(%5B%2FPHONE%5D)', 'gim');
            var em_patt = new RegExp('(%5BEMAIL%5D)(\\S+?)(%5B%2FEMAIL%5D)', 'gim');
            var img_patt = new RegExp('(%5BIMG%5D)(\\S+?)(%5B%2FIMG%5D)', 'gim');
            var url_patt = new RegExp('(%5BURL%3D(.+?)%5D)(.+?)(%5B%2FURL%5D)', 'gim');
            var qq_patt = new RegExp('[1-9][0-9]{4,10}', 'gim');
            if (mo_patt.test(msg)) {
                code_arr.push('1');
                is_mobile = true;
                if (mobile_finger_log == '1') {
                    var mobile = msg.match(mo_patt);
                    if (mobile) {
                        $.get('dpp_debug.php', {
                            action: 'fingerRecord',
                            ip: ip,
                            mobile: mobile[2],
                            finger_id: finger_id,
                            company_id: company_id,
                            guest_id: myid,
                            talk_id: myfirst_tempid,
                            id6d: obj_id,
                            device: '1.1'
                        });
                        checkFingerRecord(mobile);
                    }
                }
            }
            if (ph_patt.test(msg)) {
                code_arr.push('2');
                is_mobile = true;
            }
            if (em_patt.test(msg)) {
                code_arr.push('3');
            }
            var msg_tmp = decodeURIComponent(msg.replace(mo_patt, '').replace(ph_patt, '').replace(em_patt, '').replace(img_patt, '').replace(url_patt, ''));
            if (checkWechatByMsg(msg_tmp, 'v')) {
                code_arr.push('5');
                is_wechat = true;
            } else {
                if (qq_patt.test(msg_tmp)) {
                    code_arr.push('4');
                }
            }
        } catch (e) {
        }
    }
    g_comm.SendTalkMsg(msg, code_arr.join(','), fk_msgid, msg_type, msgid);
}