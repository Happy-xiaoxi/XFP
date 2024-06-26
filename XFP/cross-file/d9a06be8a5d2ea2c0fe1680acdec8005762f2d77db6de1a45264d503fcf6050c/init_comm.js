export function init_comm() {
    try {
        g_comm = new CXMLClientKh(http_pro + host, '/sendmsg.jsp', true);
        callback_talk();
    } catch (e) {
    }
}
