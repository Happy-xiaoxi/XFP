var ImKfNoTalkNum = 0;
var lnkover = 0;

export function checkImKfNoTalk() {
    if (ImKfNoTalkNum < imkf_no_talk_time) {
        ImKfNoTalkNum++;
    } else {
        if (lnkover == 1)
            closeLink();
    }
}
