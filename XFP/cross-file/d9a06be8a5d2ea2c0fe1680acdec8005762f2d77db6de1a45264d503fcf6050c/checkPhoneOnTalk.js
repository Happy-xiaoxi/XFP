



export function checkPhoneOnTalk(msg) {
    var send_qst = true;
    var mobi_reg = new RegExp('(\\[MOBILE])(\\d+?)(\\[\\/MOBILE\\])', 'im');
    var mobile = msg.match(mobi_reg);
    if (mobile) {
        mobile = mobile[2];
        sendCheckPhone(mobile, 'send');
        return send_qst;
    }
    var code = '';
    var code_reg = new RegExp('[\\d]+([\\d]{6})(?!\\d)', 'gim');
    if (!code_reg.test(msg)) {
        code_reg = new RegExp('[^\\d]?([\\d]{6})(?!\\d)', 'im');
        code = msg.match(code_reg);
    }
    if (code) {
        code = code[1];
        for (var i = 0; i < checkPhoneArr.length; i++) {
            if (checkPhoneArr[i].sendtimes < 4 && checkPhoneArr[i].is_check == false) {
                checkPhoneArr[i].sendtimes++;
                sendCheckPhone(checkPhoneArr[i].mobile, 'check', code);
                send_qst = false;
            }
        }
    }
    return send_qst;
}
