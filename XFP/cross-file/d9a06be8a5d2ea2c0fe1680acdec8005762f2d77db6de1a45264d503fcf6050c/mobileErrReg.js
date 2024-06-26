



export function mobileErrReg(msg) {
    var reg = new RegExp(/[\d]+(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{7})(?!\d)+/gi);
    var reg1 = new RegExp(/[\d]+(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{9})(?!\d)+/gi);
    var mobileIsErr = '';
    if (!reg.test(msg)) {
        var reg_num10 = new RegExp(/[^\d]?(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{7})(?!\d)+/gi);
        mobileIsErr = reg_num10.test(msg) ? '10' : '';
    }
    if (!reg1.test(msg)) {
        var reg_num12 = new RegExp(/[^\d]?(1(3[0-9]|4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-9])\d{9})(?!\d)+/gi);
        if (mobileIsErr != '10') {
            mobileIsErr = reg_num12.test(msg) ? '12' : '';
        }
    }
    return mobileIsErr;
}
