



export function handleCustMsg(type) {
    if (custmsg != '') {
        if (type == 'lnk') {
            sendmsg(custmsg);
        } else if (type == 'lword') {
            $('#ly_content').val(custmsg);
            $('#submit_lword').removeClass('prevent-send');
        } else if (type == 'robot') {
            sendmsg(custmsg);
        }
        custmsg = '';
    }
}
