var typtime = 8;
var sendtyp_type = 0;
export function setupTypingProc(mode) {
    if (mode == CONST_TYPE_MODE_WITHOUT_MSG) {
        typtime = 8;
    } else {
        typtime = 4;
    }
    sendtyp_type = mode;
}
