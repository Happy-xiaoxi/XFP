var noTalkNum = 0;
var CONST_NOTALK_TIP = 0;
var noTalkOver = 0;
var CONST_NOTALK_OVER = 180;





export function checkNoTalk() {
    if (noTalkNum < CONST_NOTALK_TIP) {
        noTalkNum++;
        if (noTalkNum >= 60 && noTalkNum % 60 == 0) {
            $.get('wnn_debug.php', {
                type: 'checknotalk',
                event: '1minute_record',
                noTalkNum: noTalkNum,
                CONST_NOTALK_TIP: CONST_NOTALK_TIP,
                time: new Date().getTime(),
                khnumber: khnumber,
                guest_id: myid,
                id6d: obj_id,
                company_id: company_id
            });
        }
    } else {
        if (noTalkOver == 0) {
            display_sys_msg(disconnect_prompt);
            $.get('wnn_debug.php', {
                type: 'checknotalk',
                event: 'send_disconnect_prompt',
                noTalkNum: noTalkNum,
                CONST_NOTALK_TIP: CONST_NOTALK_TIP,
                time: new Date().getTime(),
                khnumber: khnumber,
                guest_id: myid,
                id6d: obj_id,
                company_id: company_id
            });
        }
        if (noTalkOver < CONST_NOTALK_OVER) {
            noTalkOver++;
        } else {
            closeLink();
            $.get('wnn_debug.php', {
                type: 'checknotalk',
                event: 'closeLink',
                noTalkNum: noTalkNum,
                CONST_NOTALK_TIP: CONST_NOTALK_TIP,
                noTalkOver: noTalkOver,
                time: new Date().getTime(),
                khnumber: khnumber,
                guest_id: myid,
                id6d: obj_id,
                company_id: company_id
            });
        }
    }
}
