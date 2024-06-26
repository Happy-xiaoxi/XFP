var code_key = '';
var codeLang = {
    0: 'Validation failed.Click again.',
    1: 'Validation failed.Click again.',
    2: 'Click ',
    3: 'Refresh'
};






export function callBackCode(res) {
    if (res.result === 'success') {
        var char = 'char' + res.times;
        $('#' + char).attr('style', 'font-weight:bold;color:red;width:10%;font-size:medium;background:#FFF;border:0px;');
        if (res.times == 1) {
            code_key = res.code_key;
            destroyCodeDiv();
            checkCodeSuccess(res.vcode);
        }
    } else {
        if (res.status == 2)
            alert(codeLang[0]);
        else
            alert(codeLang[1]);
        fireCode_img(res.pictureid, res.from, res.type, res.guestid, res.companyid);
    }
}
