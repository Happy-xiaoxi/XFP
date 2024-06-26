import {msgFilter} from './msgFilter.js'
import {UBBEncode} from './UBBEncode.js'
import {UrlEncode} from './UrlEncode.js'
import {HtmlEncode} from './HtmlEncode.js'
import {HtmlDecode} from './HtmlDecode.js';
export function qstRobotMsg(msg, type, task_zsk_id, index, times, guide_size, hasWechat) {
    var code_arr = new Array();
    if (type == 'g') {
        msg = msgFilter(msg);
        msg = UBBEncode(msg);
        msg = UrlEncode(msg);
        msg = HtmlEncode(msg);
        try {
            if (type !== true) {
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
                                device: '1.2'
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
                if (qq_patt.test(msg_tmp)) {
                    code_arr.push('4');
                }
                if (hasWechat == 1) {
                    code_arr.push('5');
                    is_wechat = true;
                }
            }
        } catch (e) {
        }
    } else if (type == 'p') {
        msg = HtmlDecode(msg);
    }
    if (msg != '') {
        if (task_zsk_id != undefined && index != undefined && times != undefined && guide_size != undefined) {
            robot_client.sendRoa(msg, type, code_arr.join(','), task_zsk_id, index, times, guide_size);
        } else {
            robot_client.sendRoa(msg, type, code_arr.join(','));
        }
    }
}