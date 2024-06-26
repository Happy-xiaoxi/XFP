import {getCookie} from './getCookie.js';
var isoldkf = 0;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;




export function setOldKf() {
    if (isoldkf == 0 && getCookie('isoldkf_' + company_id + '_' + myid) != 1) {
        var exp = new Date();
        exp.setTime(exp.getTime() + 10 * 365 * 24 * 60 * 60 * 1000);
        document.cookie = 'isoldkf_' + company_id + '_' + myid + '=1;expires=' + exp.toGMTString();
        isoldkf = 1;
    }
}