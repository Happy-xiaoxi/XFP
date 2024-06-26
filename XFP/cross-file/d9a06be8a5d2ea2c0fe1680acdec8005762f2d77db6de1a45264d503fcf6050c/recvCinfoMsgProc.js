


export function recvCinfoMsgProc(logo, title, content, curl, msgType) {
    var cinfoHtml = getCinfoHtml(logo, title, content, curl);
    if (cinfoHtml != '') {
        if (msgType == 'p') {
            display_kf_msg(cinfoHtml);
        } else {
            display_fk_msg(cinfoHtml);
        }
    }
}
