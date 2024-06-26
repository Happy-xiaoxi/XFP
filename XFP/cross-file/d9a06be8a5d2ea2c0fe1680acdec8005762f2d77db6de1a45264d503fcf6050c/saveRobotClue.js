import {UrlEncode} from './UrlEncode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;







export function saveRobotClue(data) {
    var url = '/client/set_robot_msg.php';
    var postdata = 'mobile=' + data.mobile + '&phone=' + data.phone + '&email=' + data.email + '&qq=' + data.qq + '&weixin=' + data.wechat + '&company_id=' + company_id + '&guest_id=' + myid + '&talk_id=' + myfirst_tempid + '&land_page=' + UrlEncode(landpage) + '&referer=' + UrlEncode(talkpage) + '&referer1=' + UrlEncode(frompage) + '&ucust_id=' + ucust_id + '&u_stat_id=' + u_stat_id + '&tfrom=' + tfrom + '&style_id=' + style_id + '&uid=' + uid + '&open_time=' + open_time + '&channel=' + UrlEncode(channel) + '&se=' + UrlEncode(search_engine) + '&kw=' + UrlEncode(keyword);
    $.ajax({
        type: 'POST',
        url: url,
        data: postdata,
        success: function (data) {
        }
    });
}