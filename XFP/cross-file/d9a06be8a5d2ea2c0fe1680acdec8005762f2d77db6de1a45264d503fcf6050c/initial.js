var m_startInitial = false;










export function initial() {
    if (m_startInitial)
        return;
    m_startInitial = true;
    try {
        document.cookie = 'hz6d_open_talk_' + company_id + '=1';
    } catch (e) {
    }
    if (fk_debug) {
        $.ajax({
            type: 'POST',
            url: http_pro + host + '/tmp_debug.php',
            data: {
                action: 'webcompany.js-initial',
                from: 'fk',
                cid: company_id
            },
            success: function (data) {
            }
        });
    }
    init_comm();
    set_myid();
    is_cswh();
    if (checkFireWall()) {
        if (hasOnlineKf == '1') {
            top.postMessage('get_force', '*');
            setOnLine(true);
        } else {
            setOffLine();
        }
        checkMyid('api');
    }
    try {
        sendkafka('talk_info', '1');
    } catch (e) {
    }
    if (queued_ly_buttton == 1) {
        $('.toMessage').hide();
    }
}
