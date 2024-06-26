var notalk_nowtime = 0;
var notalk_overtime = -1;
var notalk_timeout;



export function checkNewNotalk() {
    if (notalk_nowtime < notalk_overtime) {
        console.log(notalk_nowtime);
        notalk_nowtime++;
        if (notalk_nowtime == notalk_overtime) {
            getRobotReply('', true);
            clearInterval(notalk_timeout);
        }
    }
}
