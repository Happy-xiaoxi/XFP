import {createCodeValidateFreeze} from './createCodeValidateFreeze.js'
import {createCodeValidateDiv} from './createCodeValidateDiv.js';
export function codeInfo(res) {
    var obj = document.getElementById('validate_freeze');
    if (obj != null) {
        replaccode(res);
    } else {
        var height = document.body.clientHeight;
        var width = document.body.clientWidth;
        createCodeValidateFreeze('validate_freeze', 0, 0, height, width);
        createCodeValidateDiv(height, width, res);
    }
}