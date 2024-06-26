
export function getCusWebMsg() {
    $.ajax({
        type: 'POST',
        url: 'impl/rpc_cus_web_msg.php',
        data: 'type=mobile&check_id=11917718fe939f3106d35a30074bcd30&company_id=' + company_id + '&guest_id=' + myid,
        dataType: 'JSON',
        success: function (data) {
            if (data.code == '200' && data.msg.length > 0) {
                showCusWebMsgList(data.msg);
            }
        }
    });
}
