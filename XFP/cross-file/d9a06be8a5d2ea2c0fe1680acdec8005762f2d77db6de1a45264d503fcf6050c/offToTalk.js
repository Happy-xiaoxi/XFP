var notalk_timeout;
var answer_timeout;




export function offToTalk(type) {
    if (notalk_timeout) {
        clearInterval(notalk_timeout);
    }
    if (answer_timeout) {
        clearTimeout(answer_timeout);
    }
    display_sys_msg('', 'wait');
    var data = {
        company_id: company_id,
        style_id: style_id,
        guest_id: myid,
        from_page: frompage,
        land_page: landpage,
        guest_ip_info: guest_ip_info
    };
    $.ajax({
        type: 'POST',
        url: '/impl/get_new_talk.php',
        data: data,
        dataType: 'json',
        success: function (data) {
            if (data.is_online == 1) {
                hasOnlineKf = '1';
                worker_ids = data.kf_list;
                lnk_overflow = data.lnk_overflow;
                firewall_uuid = data.firewall_uuid;
                lnk_param = data.lnk_param;
                lnk_fire = data.lnk_fire;
                kflist = 'off';
                lnkopentime = Date.parse(new Date()) / 1000;
                if (type == 'robot') {
                    is_robotToTalk = true;
                } else if (type == 'scene') {
                    is_sceneToTalk = true;
                }
                isSendLNK = false;
                sendLNK();
            } else {
                showNoKfToTalk(type);
            }
        },
        error: function (data) {
            showNoKfToTalk(type);
        }
    });
}
