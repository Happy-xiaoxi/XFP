import {UBBCode} from './UBBCode.js'
import {UBBEncode} from './UBBEncode.js';
var lnkover = 0;










export function showConnPrompt() {
    var prompt_count = 1, first_prompt = '', carousel_count = 1, info_list = {};
    if (priority_use == '1') {
        var conn_prompt_new_use = false;
        for (var i = 0; i < 8; i++) {
            if (conn_prompt_new['carousel_prompt' + (i + 1)].replace(/&nbsp;/g, '').trim() != '') {
                conn_prompt_new_use = true;
                break;
            }
        }
        if (conn_prompt_new_use) {
            info_list = conn_prompt_new;
            info_list.carousel = '1';
            info_list.carousel_num = '1';
        } else {
            if (conn_prompt_list[obj_id] != undefined && conn_prompt_list[obj_id] != null) {
                info_list = conn_prompt_list[obj_id];
            }
        }
    } else {
        if (conn_prompt_list[obj_id] != undefined && conn_prompt_list[obj_id] != null) {
            if ((conn_prompt_list[obj_id]['carousel_prompt1'] == undefined || conn_prompt_list[obj_id]['carousel_prompt1'] == null || conn_prompt_list[obj_id]['carousel_prompt1'] == '') && (conn_prompt_list[obj_id]['conn_prompt'] == undefined || conn_prompt_list[obj_id]['conn_prompt'] == null || conn_prompt_list[obj_id]['conn_prompt'] == '')) {
                info_list = conn_prompt_new;
                info_list.carousel = '1';
                info_list.carousel_num = '1';
            } else {
                info_list = conn_prompt_list[obj_id];
            }
        } else {
            info_list = conn_prompt_new;
            info_list.carousel = '1';
            info_list.carousel_num = '1';
        }
    }
    if (Object.keys(info_list).length > 0) {
        if (typeof info_list.carousel != 'undefined' && info_list.carousel == 1) {
            try {
                clearTimeout(carousel_id);
            } catch (e) {
            }
            function check_prmopt() {
                if (lnkover != 1) {
                    clearTimeout(carousel_id);
                    return;
                }
                var prompt = eval('info_list.carousel_prompt' + prompt_count);
                if (typeof prompt != 'undefined' && prompt != null && prompt.replace(/&nbsp;/g, '').trim() != '') {
                    conn_prompt_num = prompt_count;
                    if (!first_prompt) {
                        first_prompt = prompt;
                    } else {
                        display_kf_msg(setupFilter(UBBCode(UBBEncode(prompt))), undefined, '', null, null, null, true, true);
                        checkWechatByMsg(prompt, 'w');
                        playSound();
                        g_comm.SendConnPrompt(UrlEncode(kwFilter(UBBEncode(prompt))));
                    }
                    prompt_count++;
                    if (info_list['carousel_time' + prompt_count]) {
                        carousel_id = setTimeout(check_prmopt, info_list['carousel_time' + prompt_count] * 1000);
                    } else {
                        carousel_id = setTimeout(check_prmopt, info_list['carousel_time1'] * 1000);
                    }
                } else {
                    prompt_count++;
                    if (prompt_count > 8) {
                        prompt_count = 1;
                        carousel_count++;
                        if (carousel_count > info_list.carousel_num) {
                            return;
                        }
                    }
                    check_prmopt();
                }
            }
            check_prmopt();
        } else {
            first_prompt = info_list.conn_prompt.replace(/&nbsp;/g, '').trim();
        }
    }
    if (first_prompt == '')
        first_prompt = conn_prompt;
    if (first_prompt != '') {
        display_kf_msg(setupFilter(UBBCode(UBBEncode(first_prompt))), undefined, '', null, null, null, true, true);
        checkWechatByMsg(first_prompt, 'w');
        playSound();
    }
}