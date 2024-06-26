
export function strToObj(str) {
    var tmp = new Object();
    var tmp2 = new Object();
    var ret = new Object();
    tmp = str.split(';');
    for (var i = 0; i < tmp.length; i++) {
        tmp2 = tmp[i].split(':');
        ret[tmp2[0]] = tmp2[1];
    }
    return ret;
}
