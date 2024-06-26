import {checkCookie} from './checkCookie.js'
import {createCodeFreeze} from './createCodeFreeze.js';
var m_checkCodeType = 0;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;



export function checkFireWall() {
    if (fire_set == '1' && fire_level >= 1) {
        if (checkCookie() === false)
            is_verify = '1';
        if (is_verify == '1') {
            if (verify_code == 0) {
                changeModule('stop');
            } else {
                m_checkCodeType = 1;
                createCodeFreeze(myid, 1, company_id);
            }
            return false;
        }
    }
    return true;
}