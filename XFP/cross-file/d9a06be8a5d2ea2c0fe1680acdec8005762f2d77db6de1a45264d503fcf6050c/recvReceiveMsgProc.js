import {XMLGetNodesLength} from './XMLGetNodesLength.js';
export function recvReceiveMsgProc(rowList) {
    var rowLength = XMLGetNodesLength(rowList);
    for (var i = 0; i < rowLength; i++) {
        var node = XMLGetNode(rowList, i);
        var type = XMLGetNamedAttr(node, 'type');
        if (type == 's' || type == 'z')
            continue;
        var msg = XMLGetNamedAttr(node, 'msg');
        if (i == 0)
            msg = UBBEncode(msg);
        if (!isLoadVoice(msg)) {
            setTimeout(function () {
                recvReceiveMsgProc(rowList);
            }, 100);
            return;
        }
    }
    for (var i = 0; i < rowLength; i++) {
        var node = XMLGetNode(rowList, i);
        var type = XMLGetNamedAttr(node, 'type');
        var msg = XMLGetNamedAttr(node, 'msg');
        msg = HtmlDecode(msg);
        var msg_time = XMLGetNamedAttr(node, 'msg_time');
        var talkname = XMLGetNamedAttr(node, 'kfname');
        var msgid = XMLGetNamedAttr(node, 'msgid');
        var head_url = XMLGetNamedAttr(node, 'head_url');
        if (type == 'X' || type == 'K' || type == 'Q') {
            display_robot_answer_othertype('from_ghqst', JSON.parse(msg), type == 'X' ? 'option' : type == 'K' ? 'card' : type == 'Q' ? 'form' : '', '', msg_time, head_url);
            continue;
        }
        if (i == 0)
            msg = UBBEncode(msg);
        if (type == 's' || type == 'z')
            continue;
        if (type == 'n') {
            var form_info = JSON.parse(msg);
            showVisitorForm(form_info.title, form_info.ids, form_info.mustids, 'formid_' + msgid);
            continue;
        }
        if (type == 'I') {
            showServiceQRcode(msg, msgid, talkname, head_url);
            continue;
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
                        display_kf_msg(cinfoHtml);
                    } else {
                        display_fk_msg(cinfoHtml);
                    }
                }
                continue;
            }
        } catch (e) {
            continue;
        }
        if (msg.indexOf('down_file.php?') != -1 && msg.indexOf('file=upload/files') != -1) {
            var reg = new RegExp('(\\[URL=(.+?)])(.+?)(\\[\\/URL\\])', 'gim');
            var name, url;
            msg = msg.replace(reg, function ($1, $2, $3, $4) {
                name = $4;
                url = $3;
                return $1;
            });
            if (type == 'p' || type == 'r' || type == 'h') {
                display_fil_msg(name, url, obj_id);
            } else {
                display_fil_msg(name, url, myid);
            }
            continue;
        }
        if (talkname == '')
            talkname = langs[45];
        msg = UBBCode(msg);
        msg = msg.replace(/(<br>)/g, '<br>');
        if (type == 'h') {
            msg = setupFilter(msg);
        }
        if (type == 'p' || type == 'r' || type == 'h' || type == 'q' || type == 'k' || type == 'b' || type == 'j' || type == 'm' || type == 'u') {
            if (msg) {
                if (msg.indexOf('http://kfs3') != -1 || msg.indexOf('https://kfs3') != -1) {
                    displayAsVideoAudio(msg, undefined, msg_time, 'kf', talkname);
                } else {
                    display_kf_msg(msg, talkname, undefined, msg_time, msgid);
                }
            }
        } else if (type == 'f') {
            display_kf_msg(langs[86], talkname, undefined, msg_time);
        } else if (type == 'J') {
            display_fk_msg_drawer(JSON.parse(msg), msg_time);
        } else {
            if (msg.indexOf('http://kfs3') != -1 || msg.indexOf('https://kfs3') != -1) {
                displayAsVideoAudio(msg, undefined, msg_time, 'fk', talkname);
            } else {
                display_fk_msg(msg, undefined, msg_time);
            }
        }
        ghqstHeadlogoChange(head_url, msgid);
    }
    setTimeout(function () {
        basic.scrollPage();
    }, 100);
}