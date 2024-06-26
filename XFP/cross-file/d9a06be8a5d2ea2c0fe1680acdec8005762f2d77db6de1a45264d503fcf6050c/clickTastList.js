

export function clickTastList(obj) {
    var msg = $(obj).find('span').text();
    getRobotReply(msg);
}
