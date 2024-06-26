var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;

export function sendCheckPhone(mobile, action, code) {
    var postData = {
        company_id: company_id,
        style_id: style_id,
        action: action,
        mobile: mobile
    };
    if (action == 'check') {
        postData.code = code;
        postData.first_tempid = myfirst_tempid;
        postData.guest_id = myid;
        postData.id6d = obj_id;
    }
    $.ajax({
        type: 'post',
        url: 'client/checkPhoneOnTalk.php',
        data: postData,
        dataType: 'json',
        success: function (data) {
            if (data.code == 0) {
                if (action == 'send') {
                    display_sys_msg(langs[92]);
                    var has = false;
                    for (var i = 0; i < checkPhoneArr.length; i++) {
                        if (checkPhoneArr[i].mobile == mobile) {
                            checkPhoneArr[i].sendtimes = 0;
                            has = true;
                        }
                    }
                    if (!has) {
                        var checkPhoneTemp = {
                            mobile: mobile,
                            sendtimes: 0,
                            is_check: false
                        };
                        checkPhoneArr.push(checkPhoneTemp);
                    }
                } else {
                    for (var i = 0; i < checkPhoneArr.length; i++) {
                        if (checkPhoneArr[i].mobile == mobile) {
                            checkPhoneArr[i].is_check = true;
                        }
                    }
                }
            }
        }
    });
}
