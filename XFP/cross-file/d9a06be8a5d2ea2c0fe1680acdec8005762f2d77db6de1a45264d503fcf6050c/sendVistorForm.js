import {UrlEncode} from './UrlEncode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;







export function sendVistorForm(name, mobile, email, qq, weixin, html, formid) {
    var sendData = 'company_id=' + company_id + '&guest_id=' + myid + '&name=' + name + '&email=' + email + '&mobile=' + mobile + '&qq=' + qq + '&weixin=' + weixin + '&device=1&action=save&vercode=0&id6d=' + obj_id + '&landpage=' + UrlEncode(landpage) + '&talkpage=' + UrlEncode(talkpage) + '&frompage=' + UrlEncode(frompage) + '&se=' + UrlEncode(search_engine) + '&kw=' + UrlEncode(keyword) + '&channel=' + UrlEncode(channel);
    $.ajax({
        type: 'POST',
        url: 'client/scene_form.php',
        data: sendData,
        dataType: 'json',
        success: function (data) {
            if (data.code == '0') {
                sendQaMsg(html, 'z', formid);
            } else {
                $('#' + formid).find('.visitor_form_submit').text(langs[81]).removeClass('submiting');
                basic.toastOut(langs[31]);
            }
        },
        error: function () {
            $('#' + formid).find('.visitor_form_submit').text(langs[81]).removeClass('submiting');
            basic.toastOut(langs[31]);
        }
    });
}