
export function setLastMsg(info) {
    for (var i = 0; i < info.length; i++) {
        var msg = info[i].msg;
        if (i == 0)
            msg = UBBEncode(msg);
        if (!isLoadVoice(msg)) {
            setTimeout(function () {
                setLastMsg(info);
            }, 100);
            return;
        }
    }
    var is_show_web_msg = false;
    if (web_msg_talk_id.indexOf(last_talk_id) == -1)
        is_show_web_msg = true;
    for (var i = 0; i < info.length; i++) {
        var msg = info[i].msg;
        msg = HtmlDecode(msg);
        if (i == 0)
            msg = UBBEncode(msg);
        var msg_time = info[i].msg_time;
        var id6d = info[i].id6d;
        var talkname = obj_name;
        if (id6d != obj_id) {
            talkname = getWorkerNameById6d(id6d);
        }
        var type = info[i].type;
        if (type == 'f') {
            display_kf_msg(langs[86], talkname, undefined, msg_time, undefined, 'last');
            return;
        }
        var imageText = new RegExp('(\\[imageText])([\\s\\S]+?)(\\[\\/imageText\\])', 'gim');
        var cinfo_msg = msg.replace(imageText, function ($1, $2, $3) {
            return $3;
        });
        try {
            if (cinfo_msg != '')
                cinfo_msg = $.parseJSON(cinfo_msg);
        } catch (e) {
        }
        try {
            if (cinfo_msg.logo != undefined && cinfo_msg.title != undefined && cinfo_msg.content != undefined && cinfo_msg.curl != undefined) {
                var cinfoHtml = getCinfoHtml(cinfo_msg.logo, cinfo_msg.title, cinfo_msg.content, cinfo_msg.curl);
                if (cinfoHtml != '') {
                    if (type == 'p') {
                        display_kf_msg(cinfoHtml, talkname, undefined, msg_time, undefined, 'last');
                    } else {
                        display_fk_msg(cinfoHtml, undefined, msg_time, 'last');
                    }
                }
                continue;
            }
        } catch (e) {
            continue;
        }
        msg = UBBCode(info[i].msg);
        msg = msg.replace(/(<br>)/g, '<br>');
        if (type == 'K' || type == 'X' || type == 'Q') {
            display_kf_msg(msg, talkname, undefined, msg_time, undefined, 'last', undefined, undefined, type);
        }
        if (type == 'p' || type == 'h' || type == 'a' || type == 'b' || type == 'j' || type == 'm' || type == 'u' || is_show_web_msg && type == 'r') {
            display_kf_msg(msg, talkname, undefined, msg_time, undefined, 'last');
        }
        if (type == 'g' || type == 'q' || type == 'k' || type == 'l') {
            display_fk_msg(msg, undefined, msg_time, 'last');
        }
    }
}
