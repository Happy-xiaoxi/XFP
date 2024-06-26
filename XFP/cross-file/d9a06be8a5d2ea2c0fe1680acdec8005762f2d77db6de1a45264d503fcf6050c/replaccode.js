








export function replaccode(res) {
    var src = http_pro + 'imgcode.53kf.com/imgcode.jsp';
    src += '?action=CODE';
    src += '&guestid=' + res.guestid;
    src += '&pictureid=' + res.pictureid;
    src += '&from=' + res.from;
    src += '&operate=show_code';
    src += '&codeid=' + res.codeid;
    src += '&companyid=' + res.companyid;
    src += '&time=' + new Date().getTime();
    $('#code_img').attr('src', src);
    $('#code_img').unbind('click').bind('click', { res: res }, function (event) {
        verifyCode(res, event);
    });
    $('#char0').html('"' + decodeURI(res.char0) + '"');
    $('#char1').html('"' + decodeURI(res.char1) + '"');
    $('#char0').attr('style', 'width:10%;font-size:medium;background:#FFF;border:0px;');
    $('#char1').attr('style', 'width:10%;font-size:medium;background:#FFF;border:0px;');
}
