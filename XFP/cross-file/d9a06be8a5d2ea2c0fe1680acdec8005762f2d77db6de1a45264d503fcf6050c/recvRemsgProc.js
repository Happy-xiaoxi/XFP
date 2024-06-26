export function recvRemsgProc(msgid) {
    try {
        if ($('#' + msgid).length >= 1) {
            $('#' + msgid).remove();
        }
    } catch (e) {
    }
}
