var kfNoTalkNum = 0;
var m_kfNoTalkTimer = 0;
var noTalkNum = 0;
var noTalkOver = 0;

export function setKfNoTalkVariable() {
    kfNoTalkNum = 0;
    clearInterval(m_kfNoTalkTimer);
    noTalkNum = 0;
    noTalkOver = 0;
}
