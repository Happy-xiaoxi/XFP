import {UrlEncode} from './UrlEncode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;








export function sendKafkaNew(type, cmd, clue_type, msg) {
    var now = new Date();
    var talk_time = now.getTime();
    senddata = '&type=' + type + '&guest_id=' + myid + '&talk_id=' + myfirst_tempid + '&company_id=' + company_id + '&id6d=' + obj_id + '&style_id=' + style_id + '&talk_time=' + talk_time + '&kw=' + UrlEncode(keyword) + '&se=' + UrlEncode(search_engine) + '&from_page=' + UrlEncode(frompage) + '&land_page=' + UrlEncode(landpage) + '&talk_page=' + UrlEncode(talkpage) + '&guest_ip_info=' + UrlEncode(guest_ip_info) + '&device=1';
    if (cmd != '' && cmd != undefined) {
        senddata = senddata + '&cmd=' + cmd;
    }
    if (clue_type != '' && clue_type != undefined) {
        senddata = senddata + '&clue_type=' + clue_type;
    }
    if (msg != '' && msg != undefined) {
        senddata = senddata + '&msg=' + msg;
    }
    $.ajax({
        type: 'POST',
        url: 'company_collection.php',
        data: senddata,
        dataType: 'json',
        success: function (data) {
        }
    });
}