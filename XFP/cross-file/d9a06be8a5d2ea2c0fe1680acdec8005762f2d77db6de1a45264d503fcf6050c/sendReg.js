import {UrlEncode} from './UrlEncode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;




export function sendReg(obj) {
    if ($(obj).hasClass('prevent-btn'))
        return false;
    var zdyzc_obj = {};
    var reg_data = {
        name: '',
        email: '',
        mobile: '',
        qq: '',
        weixin: '',
        company: '',
        addr: ''
    };
    for (var key = 0; key < fkzc_fields.length; key++) {
        var reg_field = fkzc_fields[key].field_name;
        var reg_value = $.trim($('#reg_' + fkzc_fields[key].field_name).val());
        var reg_ismust = fkzc_fields[key].isMust;
        var reg_iszdy = fkzc_fields[key].isZdy;
        if (!check_input('reg', reg_field, reg_ismust))
            return;
        if (reg_iszdy == 1) {
            zdyzc_obj[fkzc_fields[key].name] = reg_value;
        } else {
            reg_data[reg_field] = UrlEncode(reg_value);
        }
    }
    $(obj).text('').addClass('loading');
    try {
        zdyzc_obj = JSON.stringify(zdyzc_obj);
    } catch (e) {
        zdyzc_obj = '';
    }
    var zdyzc_str = UrlEncode(zdyzc_obj);
    var senddata = 'action=import&name=' + reg_data.name + '&email=' + reg_data.email + '&mobile=' + reg_data.mobile + '&qq=' + reg_data.qq + '&weixin=' + reg_data.weixin + '&company=' + reg_data.company + '&addr=' + reg_data.addr + '&company_id=' + company_id + '&guest_id=' + guest_id + '&id6d=' + adminId6d + '&arg=' + arg + '&guest_uid=' + ucust_id + '&zdyzc_str=' + zdyzc_str + '&talk_page=' + talkpage + '&tfrom=' + tfrom + '&device=1';
    $.ajax({
        type: 'GET',
        url: 'impl/guest_info.php?' + senddata,
        success: function (msg) {
            setOnLine(false);
            is_reg = '1';
        },
        error: function (e) {
            basic.toastOut(langs[31]);
            $('#to_link').text(langs[4]).removeClass('loading');
        }
    });
}