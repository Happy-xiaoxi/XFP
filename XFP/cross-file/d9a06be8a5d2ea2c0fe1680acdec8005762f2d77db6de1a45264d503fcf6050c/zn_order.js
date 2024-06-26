import {sendLNK} from './sendLNK.js';
var lnkover = 0;
var isset_prompt_cookie = 0;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;



export function zn_order() {
    if (lnkover == 6 && isset_prompt_cookie == 0) {
        var time = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
        var expires = new Date();
        expires.setTime(time);
        document.cookie = 'prompt_guide_' + company_id + '=1; expires=' + expires.toGMTString();
        try {
            if (window.localStorage) {
                window.localStorage.setItem('prompt_guide_' + company_id, '1');
                window.localStorage.setItem('prompt_guide_' + company_id + '__expired', expires.setTime(time));
            }
        } catch (error) {
        }
        isset_prompt_cookie = 1;
        sendLNK();
    }
}