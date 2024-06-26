import {getUrlParams} from './getUrlParams.js';
export function is_cswh() {
    var iscswh = getUrlParams('iscswh');
    if (iscswh == '1') {
        robotassign = 0;
        reg = 0;
        kflist = 'off';
    }
}