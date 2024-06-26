;
;
var kf_sign = 'DgyNDMTcwMI1NDExOTA2NTk2Mzc4MDA5NzIxNTU0MTY%3D';
var hz6d_guest_id = '11906596378009';
var hz6d_device = '';
var user_u_cust_id = '';
var user_u_cust_name = '';
var user_u_custom_info = '';


export function getOpenUrl() {

    var _this = this;
    var mobile_config = $53.data('mobileCompanyInfo');
    var uuid_53kf = $53.getCookie('uuid_53kf_' + companyid) != 'null' && $53.getCookie('uuid_53kf_' + companyid) != '' ? $53.getCookie('uuid_53kf_' + companyid) : lua_uuid_53kf;

    try {
        if (mobile_config['zdyurl'] != '' && _this.chat_window != 1) {
            var openUrl = mobile_config['zdyurl'];
            if (openUrl.indexOf('http://') == -1 && openUrl.indexOf('https://') == -1)
                openUrl = talkHost + openUrl;
            if (openUrl.indexOf('?') == -1)
                openUrl += '?';
        } else {
            var openUrl = talkHost + '/m.php?';
        }
    } catch (e) {
        var openUrl = talkHost + '/m.php?';
    }
    var openUrl = openUrl + 'kf_sign=' + kf_sign + '&cid=' + _this.companyId + '&style=' + _this.styleId + '&keyword=' + encodeURIComponent(_this.fromPage) + '&referer=' + encodeURIComponent(window.location.href) + '&guest_id=' + hz6d_guest_id + '&tpl=' + encodeURIComponent($53.data('tpl')) + '&uid=' + encodeURIComponent($53.data('api_uuid')) + '&u_stat_id=' + encodeURIComponent($53.data('u_stat_id')) + '&talktitle=' + encodeURIComponent(document.title) + '&tfrom=50&device=' + hz6d_device + '&uuid_53kf=' + encodeURIComponent(uuid_53kf) + '&u_cust_id=' + encodeURIComponent(user_u_cust_id) + '&u_cust_name=' + encodeURIComponent(user_u_cust_name) + '&u_custom_info=' + encodeURIComponent(user_u_custom_info);
    return openUrl;
}