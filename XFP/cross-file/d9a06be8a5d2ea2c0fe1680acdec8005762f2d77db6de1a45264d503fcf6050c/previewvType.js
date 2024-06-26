import {UrlEncode} from './UrlEncode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;

export function previewvType(obj) {
    var qqreg = new RegExp(/^[1-9][0-9]{4,10}$/);
    var wxreg = new RegExp(/^[-_a-zA-Z0-9]{6,20}$/);
    var phonereg = new RegExp(/^[1][3|4|5|6|7|8|9][0-9]{9}$/);
    var emailreg = new RegExp(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
    var idcardreg = new RegExp(/^[1-9][0-9]{15,20}$/);
    var nameval = '';
    var phoneval = '';
    var wxval = '';
    var qqval = '';
    var emailval = '';
    var addval = '';
    var cardval = '';
    var customval = '';
    var customArr = [];
    var vercode = 0;
    var content = '';
    var code_arr = new Array();
    try {
        $(obj).parent().parent().find('.form_input_input').each(function (index, ele) {
            if ($(ele).attr('data-val') == '') {
                nameval = $.trim($(ele).find('input').val());
                if (nameval == '') {
                    $(ele).find('input').addClass('error_import');
                    throw new Error('fail');
                }
                content += '' + nameval + '<br/>';
            } else if ($(ele).attr('data-val') == '') {
                phoneval = $.trim($(ele).find('input').val());
                if (phoneval == '' || !phonereg.test(phoneval)) {
                    $(ele).find('input').addClass('error_import');
                    throw new Error('fail');
                }
                content += '' + phoneval + '<br/>';
                code_arr.push('1');
            } else if ($(ele).attr('data-val') == '') {
                wxval = $.trim($(ele).find('input').val());
                if (wxval == '' || !wxreg.test(wxval)) {
                    $(ele).find('input').addClass('error_import');
                    throw new Error('fail');
                }
                content += '' + wxval + '<br/>';
                code_arr.push('5');
            } else if ($(ele).attr('data-val') == 'Q Q') {
                qqval = $.trim($(ele).find('input').val());
                if (qqval == '' || !qqreg.test(qqval)) {
                    $(ele).find('input').addClass('error_import');
                    throw new Error('fail');
                }
                content += ';' + qqval + '<br/>';
                code_arr.push('4');
            } else if ($(ele).attr('data-val') == '') {
                emailval = $.trim($(ele).find('input').val());
                if (emailval == '' || !emailreg.test(emailval)) {
                    $(ele).find('input').addClass('error_import');
                    throw new Error('fail');
                }
                content += '' + emailval + '<br/>';
                code_arr.push('3');
            } else if ($(ele).attr('data-val') == '') {
                addval = $.trim($(ele).find('input').val());
                if (addval == '') {
                    $(ele).find('input').addClass('error_import');
                    throw new Error('fail');
                }
                content += '' + addval + '<br/>';
            } else {
                customArr.push($(ele).attr('data-val') + ':' + $(ele).find('input').val());
                if ($.trim($(ele).find('input').val()) == '') {
                    $(ele).find('input').addClass('error_import');
                    throw new Error('fail');
                }
                content += '' + $(ele).attr('data-val') + ':' + $(ele).find('input').val() + '<br/>';
            }
        });
    } catch (e) {
        return false;
    }
    var sendData = 'company_id=' + company_id + '&guest_id=' + myid + '&style_id=' + style_id + '&name=' + nameval + '&email=' + emailval + '&card=' + cardval + '&mobile=' + phoneval + '&qq=' + qqval + '&weixin=' + wxval + '&addr=' + addval + '&custom=' + customArr.join() + '&device=1&action=save&vercode=' + vercode + '&landpage=' + UrlEncode(landpage) + '&talkpage=' + UrlEncode(talkpage) + '&frompage=' + UrlEncode(frompage) + '&se=' + UrlEncode(search_engine) + '&kw=' + UrlEncode(keyword) + '&channel=' + UrlEncode(channel);
    $.ajax({
        type: 'POST',
        url: 'client/robot_form.php',
        data: sendData,
        dataType: 'json',
        success: function (data) {
            if (data.code == 0) {
                robot_client.sendRoa(content, 'Z', code_arr.join(','));
                qstRobotMsg(UBBCode(UBBEncode($(obj).attr('data_success'))), 'u');
            } else if (data.code == 2) {
                basic.toastOut('');
                return false;
            } else if (data.code == 3) {
                basic.toastOut(langs[88]);
                return false;
            } else {
                basic.toastOut(langs[31]);
                return false;
            }
        },
        error: function () {
            formSendClick = false;
            $(obj).html(langs[89]);
            basic.toastOut(langs[31]);
        }
    });
    return true;
}