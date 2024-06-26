import {UrlEncode} from './UrlEncode.js'
import {UBBEncode} from './UBBEncode.js'
import {showSceneGuide} from './showSceneGuide.js';
export function sendFormMsg(obj, id, num, content) {
    var step = id + '-' + num;
    var msg = UrlEncode(UBBEncode(content));
    var code_arr = new Array();
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
                        device: '1.3'
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
    } catch (e) {
    }
    scene_client.sendRoa(msg, step, 'f', undefined, undefined, code_arr.join(','));
    $(obj).parents('.reception_talk_info').removeClass('guide_f').html(langs[86]);
    showSceneGuide(id, num + 1);
}