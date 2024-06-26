







export function submitVisitorForm(obj) {
    if ($(obj).hasClass('submiting'))
        return;
    var parent = $(obj).parent('.phone_visitor_form');
    var visitor_form_items = parent.find('.visitor_form_ques');
    var html = '';
    var name = '', mobile = '', email = '', qq = '', weixin = '';
    for (var i = 0; i < visitor_form_items.length; i++) {
        var item = visitor_form_items.eq(i);
        var value = item.find('input').length > 0 ? item.find('input').val() : item.find('select').val();
        value = value.trim();
        if (item.hasClass('is_must') || item.find('input').val() != '') {
            if (item.hasClass('nomal')) {
                if (visitor_form_check(item.find('input').attr('data-type'), value) == true) {
                    item.find('input').addClass('error_import');
                    item.find('.tip_error').show();
                    return false;
                }
            } else {
                if (item.find('input').length > 0) {
                    if (value == '') {
                        item.find('input').addClass('error_import');
                        item.find('.tip_error').show();
                        return false;
                    }
                } else {
                    if (value == '' || value == item.find('option').eq(0).text()) {
                        item.find('select').addClass('error_import');
                        item.find('.tip_error').show();
                        return false;
                    }
                }
            }
        }
        var key_name = visitor_form[item.attr('data-id')]['name'];
        var field_name = visitor_form[item.attr('data-id')]['field_name'];
        if (field_name == 'name') {
            name = value;
        } else if (field_name == 'mobile') {
            mobile = value;
        } else if (field_name == 'weixin') {
            weixin = value;
        } else if (field_name == 'qq') {
            qq = value;
        } else if (field_name == 'email') {
            email = value;
        }
        html += key_name + '\u16520' + value;
        if (i < visitor_form_items.length - 1) {
            html += '<br/>';
        }
    }
    $(obj).addClass('submiting').text(langs[85]);
    if (name == '' && mobile == '' && weixin == '' && qq == '' && email == '') {
        sendQaMsg(html, 'z', parent.attr('id'));
    } else {
        sendVistorForm(name, mobile, email, qq, weixin, html, parent.attr('id'));
    }
}
