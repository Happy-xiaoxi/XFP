import {setOffLine} from './setOffLine.js';
var m_busyCnt = 0;
var lnkover = 0;



export function waitCountProc(cnt) {
    if (cnt < 0) {
        setOffLine();
    } else {
        m_busyCnt = parseInt(cnt) + 1;
        if (lnkover == 5) {
            $('.personNum').html(m_busyCnt);
        }
    }
}