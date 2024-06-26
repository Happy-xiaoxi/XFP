



export function setGuestId() {
    if (use_cust_guestid == 1)
        return;
    var today = new Date();
    var expires = new Date();
    expires.setTime(today.getTime() + 1000 * 60 * 60 * 24 * 365 * 30);
    document.cookie = 'guest_id=' + escape(myid) + '; expires=' + expires.toGMTString() + ';domain=' + base_host;
    try {
        localStorage['53kf_guest_id'] = myid;
    } catch (e) {
    }
    if (is_set_finger) {
        try {
            $.get(http_pro + finger_host + '/fingerprintjs?cmd=set&fn=' + finger_id + '&guestid=' + myid, function () {
            });
        } catch (e) {
        }
    }
}
