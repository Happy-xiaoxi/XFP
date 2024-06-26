import {getTime} from './getTime.js';
var settyptime = 0;


export function setTYP() {
    settyptime = getTime();
    $('.kf_input').addClass('is_inputting');
}