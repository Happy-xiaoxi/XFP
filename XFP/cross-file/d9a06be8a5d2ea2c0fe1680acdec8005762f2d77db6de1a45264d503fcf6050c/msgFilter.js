export function msgFilter(msg) {
    for (var i = 1; i < 32; i++) {
        special_char = String.fromCharCode(i);
        if (msg.indexOf(special_char) != -1 && i != 13 && i != 10) {
            reg_special = new RegExp(special_char, 'ig');
            msg = msg.replace(reg_special, '');
        }
    }
    while (/onerror|onclick|onload|onmouse|onkey|unescape|decodeuri|eval|expression|\\/gim.test(msg)) {
        msg = msg.replace(/onerror|onclick|onload|onmouse|onkey|unescape|decodeuri|eval|expression|\\/gim, '');
    }
    return msg;
}
