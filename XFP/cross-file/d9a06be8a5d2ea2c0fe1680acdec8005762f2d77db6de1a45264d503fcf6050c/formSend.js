import {UrlEncode} from './UrlEncode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;

export function formSend(id, num, obj) {
    if (formSendClick)
        return;
    $('.pc_talk_content').find('.error_import').removeClass('error_import');
    var $parent = $(obj).parents('.guide_form');
    var qqreg = new RegExp(/^[1-9][0-9]{4,10}$/);
    var wxreg = new RegExp(/^[-_a-zA-Z0-9]{6,20}$/);
    var phonereg = new RegExp(/^[1][3|4|5|6|7|8|9][0-9]{9}$/);
    var emailreg = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
    var verreg = new RegExp(/^[0-9]{6}$/);
    var cardreg = new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/);
    var nameval = '';
    var phoneval = '';
    var wxval = '';
    var qqval = '';
    var addval = '';
    var emailval = '';
    var cardval = '';
    var customval = '';
    var verval = '';
    var content = '';
    var vercode = 0;
    if ($parent.find('.input_name').length > 0) {
        nameval = $.trim($parent.find('.input_name').val());
        if (nameval == '') {
            $parent.find('.input_name').addClass('error_import');
            return false;
        }
        content += 'xx' + nameval + '<br/>';
    }
    if ($parent.find('.input_phone').length > 0) {
        phoneval = $.trim($parent.find('.input_phone').val());
        if (phoneval == '' || !phonereg.test(phoneval)) {
            $parent.find('.input_phone').addClass('error_import');
            return false;
        }
        content += '手机:&nbsp;' + phoneval + '<br/>';
    }
    if ($parent.find('.phone_ver_code').length > 0 && $parent.find('.phone_ver_code').is(':visible')) {
        vercode = 1;
        if ($parent.find('.input_vercode').length < 1) {
            basic.toastOut(langs[88]);
            return false;
        } else {
            verval = $.trim($parent.find('.input_vercode').val());
            if (verval == '' || !verreg.test(verval)) {
                $parent.find('.input_vercode').addClass('error_import');
                return false;
            }
        }
    }
    if ($parent.find('.input_wechat').length > 0) {
        wxval = $.trim($parent.find('.input_wechat').val());
        if (wxval == '' || !wxreg.test(wxval)) {
            $parent.find('.input_wechat').addClass('error_import');
            return false;
        }
        content += '' + wxval + '<br/>';
    }
    if ($parent.find('.input_qq').length > 0) {
        qqval = $.trim($parent.find('.input_qq').val());
        if (qqval == '' || !qqreg.test(qqval)) {
            $parent.find('.input_qq').addClass('error_import');
            return false;
        }
        content += '' + qqval + '<br/>';
    }
    if ($parent.find('.input_address').length > 0) {
        addval = $.trim($parent.find('.input_address').val());
        if (addval == '') {
            $parent.find('.input_address').addClass('error_import');
            return false;
        }
        content += '' + addval + '<br/>';
    }
    if ($parent.find('.input_email').length > 0) {
        emailval = $.trim($parent.find('.input_email').val());
        if (emailval == '' || !emailreg.test(emailval)) {
            $parent.find('.input_email').addClass('error_import');
            return false;
        }
        content += '' + emailval + '<br/>';
    }
    if ($parent.find('.input_card').length > 0) {
        cardval = $.trim($parent.find('.input_card').val());
        if (cardval == '' || !cardreg.test(cardval)) {
            $parent.find('.input_card').addClass('error_import');
            return false;
        }
        content += '' + cardval + '<br/>';
    }
    if ($parent.find('.input_custom').length > 0) {
        var customArr = [];
        try {
            $parent.find('.input_custom').each(function (index, el) {
                if ($.trim($(el).val()) == '') {
                    $(el).addClass('error_import');
                    throw new Error('fail');
                }
                customArr.push($(el).attr('placeholder') + ':' + $(el).val());
            });
        } catch (e) {
            return false;
        }
        customval = customArr.join();
        content += '' + customval + '<br/>';
    }
    if (content == '')
        return;
    var sendData = 'company_id=' + company_id + '&guest_id=' + myid + '&style_id=' + style_id + '&name=' + nameval + '&email=' + emailval + '&card=' + cardval + '&mobile=' + phoneval + '&qq=' + qqval + '&weixin=' + wxval + '&addr=' + addval + '&custom=' + customval + '&device=1&action=save&vercode=' + vercode + '&landpage=' + UrlEncode(landpage) + '&talkpage=' + UrlEncode(talkpage) + '&frompage=' + UrlEncode(frompage) + '&se=' + UrlEncode(search_engine) + '&kw=' + UrlEncode(keyword) + '&channel=' + UrlEncode(channel);
    if (verval != '')
        sendData += '&code=' + verval;
    formSendClick = true;
    $(obj).html('<span class="preview_loding"></span>');
    $.ajax({
        type: 'POST',
        url: 'client/scene_form.php',
        data: sendData,
        dataType: 'json',
        success: function (data) {
            $(obj).html('<%$lang_htm[16]%>');
            formSendClick = false;
            if (data.code == 0) {
                sendFormMsg(obj, id, num, content);
            } else if (data.code == 2) {
                $parent.find('.input_vercode').addClass('error_import');
            } else if (data.code == 3) {
                basic.toastOut(langs[88]);
            } else {
                basic.toastOut(langs[31]);
            }
        },
        error: function () {
            formSendClick = false;
            $(obj).html(langs[89]);
            basic.toastOut(langs[31]);
        }
    });
}