import {getTime2} from './getTime2.js';
export function showServiceQRcode(msg, msgid, talkname, head_url) {
    var msgStr = msg.replace('<br>', '').replace('&lt;br&gt;', '').replace('[/IMG]', '').split('[IMG]')[0];
    var imgUrl = msg.replace('<br>', '').replace('&lt;br&gt;', '').replace('[/IMG]', '').split('[IMG]')[1];
    var headUrl = head_url ? head_url : kf_header;
    var str = '<div class="pc-service" ' + msgid + '><div class="pc-service-left" style="display: inline-block;"><img src="' + headUrl + '" alt="' + langs[11] + '"></div><div class="pc-service-right" ><p><label>' + talkname + '</label><span>' + getTime2() + '</span></p><div style="overflow-x:auto;"><div class="service-qrcode-box"><div class="msg-box" title="' + msgStr + '">' + msgStr + '</div><div class="img-box"><div class="img-border"><img class="qrcode-picture" src="' + imgUrl + '"></div></div></div></div></div></div>';
    $('.pc_talk_content').append(str);
    basic.scrollPage();
}