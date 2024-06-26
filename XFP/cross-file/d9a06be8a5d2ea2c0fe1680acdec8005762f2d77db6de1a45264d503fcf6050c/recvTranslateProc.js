export function recvTranslateProc(trans_msg, msg_id) {
    try {
        onTranslateProc(trans_msg, msg_id);
    } catch (e) {
    }
}
