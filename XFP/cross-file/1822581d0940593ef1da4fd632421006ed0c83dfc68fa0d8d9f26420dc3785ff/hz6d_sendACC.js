
var onliner_zdfq = 0;
var acc_first_time = new Date().getTime();
var http_pro = document.location.protocol == 'https:' ? 'https://' : 'http://';
var acc_host = 'www59.eiisys.com';
var companyid = '72155416';
var hz6d_guest_id = '11906596378009';
var hz6d_guest_ip = '172.104.82.156';
var ipstr = '%E6%97%A5%E6%9C%AC';
var areastr = '%E4%B8%9C%E4%BA%AC%E9%83%BD%2D%E4%B8%9C%E4%BA%AC';
var in_timestamp = '1700824254934';
var hz6d_style_id = '1';
var is_revisit = 0;
var information_switch = '';
var cloud_service = 'www59';
var acc_get_force = false;
var talk_page_now = window.location.href;
var talk_page = window.encodeURIComponent(talk_page_now);
var hz6d_alias_host = 'https://www59.eiisys.com';

export function hz6d_sendACC($53) {
    var acc_browser = $53.getBrowser();
    var acc_os = $53.getOs();

    var kh_status = 0;
    if (onliner_zdfq == 3) {
        kh_status = 3;
    }
    var time = new Date().getTime();
    if (time - acc_first_time > 24 * 60 * 60 * 1000)
        return;
    var curSecond = Math.floor(time / 1000);
    var page_title = document.title;
    var url = http_pro + acc_host + '/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id=' + companyid + '&guest_id=' + hz6d_guest_id + '&status=' + kh_status + '&guest_name=&guest_ip=' + $53.EN(hz6d_guest_ip) + '&guest_ip_info=' + ipstr + '&area=' + areastr + '&from_page=' + $53.EN($53.getCookie('53kf_' + companyid + '_keyword')) + '&talk_page=' + talk_page + '&kf_time=' + in_timestamp + '&bto_id6d=-99&time=' + time + '&ucust_id=' + $53.EN($53.getCookie('ucust_id')) + '&style=' + hz6d_style_id + '&is_mobile=' + $53.isMobile() + '&visitor_type=' + $53.getCookie('visitor_type') + '&is_uv=' + $53.data('is_uv') + '&browser=' + acc_browser + '&os=' + acc_os + '&is_revisit=' + is_revisit + '&page_title=' + $53.EN(page_title);
    if (information_switch == 1) {
        var url = http_pro + acc_host + '/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id=' + companyid + '&guest_id=' + hz6d_guest_id + '&status=' + kh_status + '&guest_name=&guest_ip=' + '&guest_ip_info=' + '&area=' + '&from_page=' + '&talk_page=' + '&kf_time=' + in_timestamp + '&bto_id6d=-99&time=' + time + '&ucust_id=' + $53.EN($53.getCookie('ucust_id')) + '&style=' + hz6d_style_id + '&is_mobile=' + $53.isMobile() + '&visitor_type=' + $53.getCookie('visitor_type') + '&is_uv=' + $53.data('is_uv') + '&browser=' + acc_browser + '&os=' + acc_os + '&is_revisit=' + is_revisit + '&page_title=';
    }
    if (companyid == 72153759)
        url += '&acc_first_time=' + acc_first_time;
    if (cloud_service == 'www111' || hz6d_alias_host.indexOf('w111.53kf.com') !== -1)
        url += '&acc_get_force=' + acc_get_force;
    $53.createScript('hz6d_send_acc', url);
    var acc_times = 20000;
    if (cloud_service == 'www111' || hz6d_alias_host.indexOf('w111.53kf.com') !== -1 || companyid == 72211675 || companyid == 72212262 || companyid == 72212337 || companyid == 72212338 || companyid == 72212339 || companyid == 72212341 || companyid == 72087813)
        acc_times = 1000;
    setTimeout('hz6d_sendACC()', acc_times);
}