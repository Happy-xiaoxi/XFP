

export function verifyCode(res, event) {
    var e = event || window.event;
    mouse = new MouseEvent(e);
    if (res.guestid < 0)
        res.guestid = 0;
    var xpos = mouse.x;
    var ypos = mouse.y;
    var url = http_pro + 'imgcode.53kf.com/imgcode.jsp';
    var str = 'action=CODE&operate=verify_code';
    str += '&pictureid=' + res.pictureid;
    str += '&from=' + res.from;
    str += '&guestid=' + res.guestid;
    str += '&companyid=' + res.companyid;
    str += '&time=' + Date.parse(new Date());
    str += '&xpos=' + xpos;
    str += '&ypos=' + ypos;
    refreshcode('POST', url, str);
}
