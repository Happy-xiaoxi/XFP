import {UrlEncode} from './UrlEncode.js';
export function replayVote(state, notes) {
    g_comm.SendVote(state, UrlEncode(notes));
}