


export function changeUpDownMsg(msg) {
    if (upDownMsg.length < 3) {
        upDownMsg.push(msg);
    } else {
        upDownMsg.shift();
        upDownMsg.push(msg);
    }
}
