import {getCookie} from './getCookie.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;




export function set_myid() {
    var c_guestid = getCookie('guest_id', 'u');
    var l_guestid = '';
    try {
        l_guestid = localStorage['53kf_guest_id'];
    } catch (e) {
    }
    if (is_get_guest_id == '2' || is_get_guest_id == '3' || use_cust_guestid == 1) {
        myid = guest_id;
    } else {
        myid = l_guestid || c_guestid || guest_id;
    }
    if (myid != parseInt(myid))
        myid = 0;
    $.get('wnn_debug.php', {
        type: 'set_myid',
        myid: myid,
        l_guestid: l_guestid,
        c_guestid: c_guestid,
        guest_id: guest_id
    });
    if (is_get_guest_id == '1' && use_cust_guestid != 1) {
        try {
            getFingerGid(0);
        } catch (e) {
        }
    }
    setGuestId();
}