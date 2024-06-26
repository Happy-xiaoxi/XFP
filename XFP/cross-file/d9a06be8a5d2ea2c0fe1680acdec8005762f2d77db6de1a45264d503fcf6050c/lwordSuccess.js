var origin_type = 0;
var origin_time = 0;
var talk_type = 0;







export function lwordSuccess() {
    $('.leaveMsg-suc').show().siblings().hide();
    var sec = parseInt($('.leaveMsg-suc').find('.seconds').text());
    var _this = $('.leaveMsg-suc');
    close_ly_window_timer = setInterval(function () {
        sec--;
        _this.find('.seconds').text(sec);
        if (sec <= 0) {
            close_ly_window();
        }
    }, 1000);
    lyClick = false;
    if (origin_type == '1') {
        sendkafka('type', '1', '-1', origin_time);
        origin_type = 0;
    }
    if (talk_type != '1') {
        talk_type = 1;
        sendkafka('type', '1', '1');
    }
}
