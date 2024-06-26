export function showCusWebMsgList(msgList) {
    for (var i = 0; i < msgList.length; i++) {
        var msg = msgList[i].remark;
        if (!isLoadVoice(msg)) {
            setTimeout(function () {
                showCusWebMsgList(msgList);
            }, 100);
            return;
        }
    }
    for (var i = 0; i < msgList.length; i++) {
        var msg = msgList[i];
        var send_time = msg.send_time;
        var bname = msg.bname;
        var remark = HtmlDecode(msg.remark);
        var web_talk_id = msg.talk_id;
        if (web_msg_talk_id.indexOf(web_talk_id) == -1) {
            web_msg_talk_id.push(web_talk_id);
        }
        display_kf_msg(UBBCode(remark), bname, undefined, send_time, 'offline');
    }
}
