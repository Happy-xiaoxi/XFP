





export function getTime2() {
    var date = new Date();
    var hour = '000' + date.getHours();
    var min = '000' + date.getMinutes();
    var sec = '000' + date.getSeconds();
    hour = hour.substr(hour.length - 2);
    min = min.substr(min.length - 2);
    sec = sec.substr(sec.length - 2);
    return hour + ':' + min + ':' + sec;
}
