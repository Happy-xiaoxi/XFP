

export function getFingerGid(times) {
    if (finger_id == '') {
        if (times < 3) {
            times++;
            setTimeout(function () {
                getFingerGid(times);
            }, 2000);
        } else {
            is_get_guest_id = '0';
        }
        return;
    }
    $.ajax({
        url: http_pro + finger_host + '/fingerprintjs?cmd=get&fn=' + finger_id,
        timeout: 5000,
        type: 'get',
        success: function (data) {
            if (data != '' && parseInt(data) > 0) {
                myid = parseInt(data);
                var today = new Date();
                var expires = new Date();
                expires.setTime(today.getTime() + 1000 * 60 * 60 * 24 * 365 * 30);
                document.cookie = 'finger_guest_id=' + escape(myid) + '; expires=' + expires.toGMTString() + ';domain=' + base_host;
                setGuestId();
            } else {
                if (myid > 0)
                    $.get(http_pro + finger_host + '/fingerprintjs?cmd=set&fn=' + finger_id + '&guestid=' + myid, function () {
                    });
                else
                    is_set_finger = 1;
            }
            is_get_guest_id = '0';
        },
        complete: function (XMLHttpRequest, status) {
            if (status == 'timeout' || status == 'error') {
                $.get('wnn_debug.php', {
                    type: 'finger',
                    flag: 'status',
                    info: status,
                    company_id: company_id
                });
            }
            is_get_guest_id = '0';
        }
    });
}
