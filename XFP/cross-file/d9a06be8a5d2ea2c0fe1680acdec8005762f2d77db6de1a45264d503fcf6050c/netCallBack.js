export function netCallBack(ele, type, scode) {
    if (callBackClick)
        return;
    var phone = '';
    var scode_data = '';
    if (scode) {
        if (ele) {
            var elm = $(ele).parents('.call_phone_box').find('.call_phone_input');
            var val = elm.val();
        } else {
            var elm = $('.net_callback_phone_box');
            var val = $('#net_call_phone_val').val();
        }
        scode_data = '&scode=' + scode;
    } else {
        if (ele) {
            phone = $(ele).parent().parent().attr('data_phone');
            var elm = $(ele).siblings('.call_phone_input');
            var val = elm.val();
            sendKafkaNew('guest_click_event', 'clue', 'phone');
        } else {
            var elm = $('.net_callBack_input');
            var val = $('.net_callBack_input').val();
        }
    }
    var code = 0;
    if (/^(1[3-9]\d{9})$/.test(val)) {
        callBackClick = true;
        $.ajax({
            type: 'POST',
            url: 'impl/rpc_callback_phone.php?from=visitor',
            data: 'company_id=' + company_id + '&id6d=' + obj_id + '&guest_id=' + myid + '&talk_id=' + myfirst_tempid + '&phone=' + phone + '&call=' + val + '&style_id=' + style_id + '&lnk_fire=' + lnk_fire + '&land_page=' + encodeURIComponent(landpage) + '&talk_page=' + encodeURIComponent(talkpage) + '&from_page=' + encodeURIComponent(frompage) + '&gid=' + guest_id + '&call_way=' + type + scode_data,
            dataType: 'json',
            success: function (result) {
                var code = result.code;
                var call_id = result.call_id;
                var callNbr = result.callNbr;
                if (code == 0) {
                    var callNbrStr = '';
                    if (callNbr != '') {
                        callNbrStr = ' ' + callNbr + '\u16512';
                    }
                    var tips = ' ' + callNbrStr + ' ';
                    display_sys_msg(tips);
                    $('.talk').removeClass('hasCallBack');
                } else if (code == 3) {
                    elm.addClass('error');
                    basic.toastOut(langs[73]);
                } else if (code == 4) {
                    display_sys_msg(langs[76]);
                    $('.talk').removeClass('hasCallBack');
                } else if (code == 8) {
                    basic.toastOut(langs[77]);
                } else if (code == 12) {
                    display_sys_msg(langs[78]);
                } else if (code == 13) {
                    display_sys_msg(langs[79]);
                } else if (code == 17) {
                    display_sys_msg(langs[79]);
                } else if (code == 18) {
                    display_sys_msg(langs[108]);
                } else {
                    display_sys_msg(langs[72]);
                }
                g_comm.SendCallBackPhone(code, val, call_id);
                callBackClick = false;
            },
            error: function (data, status, e) {
                basic.toastOut(langs[31]);
                callBackClick = false;
            }
        });
    } else {
        elm.addClass('error');
        basic.toastOut(langs[73]);
    }
}
