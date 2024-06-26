var sendlnktimes = 0;

export function refreshLNK() {
    sendlnktimes++;
    if (sendlnktimes > 3)
        return;
    $.ajax({
        url: 'get_firewall.php?type=m_new&company_id=' + company_id + '&guest_id=' + myid,
        timeout: 5000,
        type: 'get',
        dataType: 'json',
        success: function (data) {
            firewall_uuid = data.firewall_uuid;
            lnk_param = data.lnk_param;
            lnk_fire = data.lnk_fire;
            lnkopentime = Date.parse(new Date()) / 1000;
            sendLNK();
        },
        complete: function (XMLHttpRequest, status) {
            if (status == 'timeout' || status == 'error') {
                lnkFailProc();
            }
        }
    });
}
