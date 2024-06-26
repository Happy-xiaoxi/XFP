import {getTime2} from './getTime2.js'
import {UBBCode} from './UBBCode.js'
import {UBBEncode} from './UBBEncode.js';
var zsk_zsktb_url = '';
var zsk_name = '';

export function clickTastSubmitForm(obj) {
    var bool = previewvType($(obj));
    if (bool) {
        var msg_div = '<div class="pc-service"><div class="pc-service-left"><img width="34px" src="' + zsk_zsktb_url + '" alt=""></div><div class="pc-service-right">' + '<p><label>' + zsk_name + '</label><span id="robot_start_time">' + getTime2() + '</span></p>' + '<div class="pc-service-info font14"><div class="robot-info-answer"><div class="answer-text">' + UBBCode(UBBEncode($(obj).attr('data_success'))) + '</div></div></div></div></div>';
        $('.pc_talk_content').append(msg_div);
        $(obj).attr('data_issubmit', 'yes');
        $(obj).parent().parent().remove();
        basic.scrollPage();
        try {
            $(obj).parent().parent().find('.form_input_input').each(function (index, ele) {
                if ($(ele).attr('data-val') == '') {
                    is_mobile = true;
                }
                if ($(ele).attr('data-val') == '') {
                    is_wechat = true;
                }
            });
        } catch (e) {
        }
        removeRobotLoad();
        robotTimeOut.handle();
    }
}