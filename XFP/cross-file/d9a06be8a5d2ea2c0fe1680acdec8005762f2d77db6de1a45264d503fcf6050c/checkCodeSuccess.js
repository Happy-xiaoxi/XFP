import {setOnLine} from './setOnLine.js'
import {setOffLine} from './setOffLine.js'
import {submit_lword} from './submit_lword.js';
var m_checkCodeType = 0;



export function checkCodeSuccess(vcode) {
    if (m_checkCodeType == 1) {
        if (hasOnlineKf == '1') {
            setOnLine(true);
        } else {
            setOffLine();
        }
    } else if (m_checkCodeType == 2) {
        submit_lword(vcode);
    }
}