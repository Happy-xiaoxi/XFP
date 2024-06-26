

export function get_record() {
    $('.show_history').removeClass('show_history_hover');
    $('#show_last_msg_button').addClass('disabled');
    try {
        last_talk_id = last_talk_id ? last_talk_id : myfirst_tempid;
        var data = {
            company_id: company_id,
            guest_id: myid,
            talk_id: last_talk_id,
            style_id: style_id
        };
        $.ajax({
            type: 'POST',
            url: '/impl/last_msg_info.php',
            data: data,
            timeout: 30000,
            dataType: 'JSON',
            success: function (res) {
                if (res.code == 'error') {
                    basic.toastOut(res.info);
                } else {
                    var info = res.info;
                    if (info == '') {
                        $('#show_last_msg_button').html(langs[65]);
                    } else {
                        $('#show_last_msg_button').html(langs[70]);
                        last_talk_id = info[0].talk_id;
                        setLastMsg(info);
                        $('.phone_ver_code').html(langs[87]);
                        time_flag = false;
                    }
                }
            },
            error: function (xhr, status, error) {
                $('#show_last_msg_button').html(langs[66]);
            }
        });
    } catch (e) {
    }
}
