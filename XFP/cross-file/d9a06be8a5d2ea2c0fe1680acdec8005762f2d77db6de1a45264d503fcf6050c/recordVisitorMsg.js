


export function recordVisitorMsg(msg) {
    var reg = new RegExp(/[\d]+(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{8})(?!\d)+/gi);
    if (!reg.test(msg)) {
        var mobileList = msg.match(/[^\d]?(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{8})(?!\d)+/gi, msg);
        if (mobileList && !upDownMsgHasQQ()) {
            mobile_record = mobileList[mobileList.length - 1];
        }
        var cityList = msg.match();
        if (cityList) {
            city_record = cityList[cityList.length - 1];
        }
    }
}
