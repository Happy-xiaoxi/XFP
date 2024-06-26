import {UrlEncode} from './UrlEncode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var talk_type = 0;













export function sendkafka(type, device, number, time, vote) {
    var talk_time = '0';
    if (time)
        talk_time = time;
    var senddata = '';
    if (type == 'type') {
        var is_swh = 0;
        var curUrl = window.location.href;
        if (curUrl.indexOf('is_swh=1') != -1)
            is_swh = 1;
        senddata = '&type=' + type + '&talk_id=' + mytempid + '&company_id=' + company_id + '&guest_id=' + myid + '&talk_type=' + talk_type + '&talk_time=' + talk_time + '&device=' + device + '&guest_ip_info=' + UrlEncode(guest_ip_info) + '&talk_page=' + UrlEncode(talkpage) + '&talk_quality=0&number=' + number + '&se=' + UrlEncode(search_engine) + '&kw=' + UrlEncode(keyword) + '&referer=' + UrlEncode(frompage) + '&is_swh=' + is_swh + '&land_page=' + UrlEncode(landpage);
    } else if (type == 'vote') {
        senddata = '&type=' + type + '&talk_id=' + myfirst_tempid + '&company_id=' + company_id + '&id6d=' + obj_id + '&talk_time=' + talk_time + '&number=' + number + '&vote=' + vote + '&device=' + device;
    } else if (type == 'talk_info') {
        senddata = '&type=talk_info&uid=' + uid + '&talk_id=' + myfirst_tempid + '&company_id=' + company_id + '&guest_id=' + myid + '&open_time=' + open_time + '&device=' + device + '&guest_ip_info=' + UrlEncode(guest_ip_info) + '&talk_page=' + UrlEncode(talkpage) + '&se=' + UrlEncode(search_engine) + '&kw=' + UrlEncode(keyword) + '&referer=' + UrlEncode(frompage) + '&id6d=' + obj_id + '&tFrom=' + tfrom;
    }
    $.ajax({
        type: 'POST',
        url: 'company_collection.php',
        data: senddata,
        dataType: 'json',
        success: function (data) {
            if (data.result == 'succeed' && talk_type == '3') {
                origin_time = data.talk_time;
            }
        }
    });
}