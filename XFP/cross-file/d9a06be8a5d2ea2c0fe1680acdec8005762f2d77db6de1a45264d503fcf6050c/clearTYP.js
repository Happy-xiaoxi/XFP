import {getTime} from './getTime.js';
var settyptime = 0;


export function clearTYP() {
    settyptime = getTime();
    $('.kf_input').removeClass('is_inputting');
}