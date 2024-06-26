import {getTime} from './getTime.js';
var settyptime = 0;



export function sendTypMsg() {
    if (getTime() - settyptime >= 8) {
        clearTYP();
    }
    sendTYP();
}