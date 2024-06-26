import {showAutoLink} from './';
var m_leftTime = 0;
// 
// 
// 
export function autoLink() {
    if (m_leftTime < 0) {
        hiddenAutoLink();
        sendLNK();
    } else {
        showAutoLink(m_leftTime);
        m_leftTime--;
    }
}