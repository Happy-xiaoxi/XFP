import {createCodeFreeze} from './createCodeFreeze.js'
import {UrlEncode} from './UrlEncode.js';
var m_checkCodeType = 0;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var lwordSuccessTimer = 0;













export function submit_lword(vcode) {
    if ($('#submit_lword').hasClass('prevent-btn'))
        return false;
    if (lyClick)
        return false;
    var fielddata = '';
    var zdyzc_obj = {};
    for (var key = 0; key < fkly_fields.length; key++) {
        var ly_field = fkly_fields[key].field_name;
        var ly_value = $.trim($('#ly_' + fkly_fields[key].field_name).val());
        var ly_ismust = fkly_fields[key].isMust;
        var ly_iszdy = fkly_fields[key].isZdy;
        if (!check_input('ly', ly_field, ly_ismust))
            return;
        if (ly_iszdy == 1) {
            zdyzc_obj[fkly_fields[key].name] = ly_value;
        } else {
            if (ly_field == 'mobile')
                ly_field = 'phone';
            if (ly_field == 'weixin')
                ly_field = 'wechat';
            fielddata += '&ly_' + ly_field + '=' + UrlEncode(ly_value);
        }
    }
    if (ly_captcha != '2' && vcode == undefined) {
        m_checkCodeType = 2;
        createCodeFreeze(myid, 1, company_id);
        return;
    }
    lyClick = true;
    $('#submit_lword').text(' ').addClass('loading');
    var ly_content = $.trim($('#ly_content').val());
    try {
        zdyzc_obj = JSON.stringify(zdyzc_obj);
    } catch (e) {
        zdyzc_obj = '';
    }
    fielddata += '&ly_content=' + UrlEncode(ly_content) + '&zdyzc_str=' + UrlEncode(zdyzc_obj);
    var url = 'lword.php';
    var senddata = 'action=import&ly_first=true&company_id=' + company_id + '&tempid=' + mytempid + '&guest_id=' + myid + '&land_page=' + UrlEncode(landpage) + '&referer=' + UrlEncode(talkpage) + '&referer1=' + UrlEncode(frompage) + '&ly_mode=3&ly_object=' + m_lwordObject + '&ucust_id=' + ucust_id + '&u_stat_id=' + u_stat_id + '&uid=' + uid + '&tfrom=' + tfrom + '&style_id=' + style_id + '&style=' + style + '&vcode=' + vcode + '&channel=' + UrlEncode(channel) + fielddata;
    $.ajax({
        type: 'POST',
        url: url,
        data: senddata,
        success: function (data) {
            var ret = strToObj(data);
            if (parseInt(ret.guestid) > 0) {
                myid = ret.guestid;
                setCookie('guest_id', myid);
            }
        },
        error: function () {
            try {
                clearTimeout(lwordSuccess);
            } catch (e) {
            }
            basic.toastOut(langs[31]);
            $('#submit_lword').text(langs[6]).removeClass('loading');
            lyClick = false;
            clearTimeout();
        }
    });
    lwordSuccessTimer = setTimeout(function () {
        lwordSuccess();
    }, 2000);
}