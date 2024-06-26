import {Ob} from './Ob.js';
;
;
;
;







export function mb() {
    var a = Ob('_cc');
    null == a && (e('fresh-cookie', 'true'), a = encodeURIComponent(y));
    var b = new Date();
    b.setTime(b.getTime() + 31536000000);
    b = '=' + a + ';expires=' + b + ';path=/';
    'true' === 'true'.slice(0) && (b += ';secure');
    var c = 'none'.slice(0);
    if ('lax' === c || 'strict' === c || 'none' === c)
        b += ';SameSite=' + c + ';';
    document.cookie = '_cc' + b;
    document.cookie = '_cid_cc' + b;
    e('cookie-_cc', a);
    e('cookie-_cid_cc', a);
}