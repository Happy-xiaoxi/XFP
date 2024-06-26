






export function sendCinfo() {
    if (comeinfo.logo != '' && comeinfo.title != '' && comeinfo.content != '' && comeinfo.curl != '') {
        try {
            clearTimeout(carousel_id);
        } catch (e) {
        }
        g_comm.SendCinfoMsg(encodeURIComponent(comeinfo.logo), encodeURIComponent(comeinfo.title), encodeURIComponent(comeinfo.content), encodeURIComponent(comeinfo.curl));
        display_fk_msg(getCinfoHtml(comeinfo.logo, comeinfo.title, comeinfo.content, comeinfo.curl));
    }
}
