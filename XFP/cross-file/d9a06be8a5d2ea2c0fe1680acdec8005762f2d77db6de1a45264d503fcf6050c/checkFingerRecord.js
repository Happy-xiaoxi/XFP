

export function checkFingerRecord(mobile, type) {
    if (type == 'check_talk') {
        if (talk_finger_log == '1')
            $.post('client/checkFinger.php', {
                action: 'fingerTalk',
                ip: ip,
                finger_id: finger_id,
                company_id: company_id,
                guest_id: myid,
                talk_id: myfirst_tempid,
                id6d: obj_id,
                device: '1'
            });
        return;
    }
    if (mobile && typeof mobile[2] != 'undefined') {
        $.post('client/checkFinger.php', {
            action: 'fingerRecord',
            ip: ip,
            mobile: mobile[2],
            finger_id: finger_id,
            company_id: company_id,
            guest_id: myid,
            talk_id: myfirst_tempid,
            id6d: obj_id,
            device: '1'
        });
    }
}
