

export function fireCode_img(pictureid, from, type, guestid, company_id) {
    var url = http_pro + 'imgcode.53kf.com/imgcode.jsp';
    var str = 'action=CODE&operate=get_code';
    str += '&type=' + type;
    str += '&guestid=' + guestid;
    str += '&pictureid=' + pictureid;
    str += '&from=' + from;
    str += '&companyid=' + company_id;
    str += '&time=' + Date.parse(new Date());
    refreshcode('POST', url, str);
}
