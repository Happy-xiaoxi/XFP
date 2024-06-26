import {setNoTalkVariable} from './setNoTalkVariable.js';
export function send_FIL(filename, type, size) {
    setNoTalkVariable();
    g_comm.SendFile(filename, type, size);
    try {
        clearTimeout(carousel_id);
    } catch (e) {
    }
}