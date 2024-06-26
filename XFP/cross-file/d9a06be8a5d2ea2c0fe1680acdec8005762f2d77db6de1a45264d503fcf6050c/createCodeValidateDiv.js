var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var codeLang = {
    0: 'Validation failed.Click again.',
    1: 'Validation failed.Click again.',
    2: 'Click ',
    3: 'Refresh'
};






export function createCodeValidateDiv(height, width, res) {
    var validate_str = document.createElement('div');
    validate_str.id = 'code_div';
    validate_str.style.width = '300px';
    validate_str.style.height = '225px';
    validate_str.style.position = 'absolute';
    validate_str.style.fontSize = '12px';
    validate_str.style.textAlign = 'center';
    validate_str.style.backgroundColor = '#FFF';
    validate_str.style.zIndex = 9999;
    var str = '<img style="margin:10px;" id="code_img" alt="正在加载..." src="img/loadingcode.gif">';
    str += '<div style="text-align:center;position:absolute;bottom:20%;width:100%;padding-top:15px;margin:0 auto;">';
    str += '<font size="3px" style="margin-left:5px;font-weight:normal;">' + codeLang[2] + '</font>';
    str += '<label id="char0" style="height;10px;width:35px;font-size:medium;background:#FFF;border:0px;display:inline-block;*display:inline;*zoom:1;" border="0">"&quot;' + decodeURI(res.char0) + '&quot;"';
    str += '</label>';
    str += '\u3001';
    str += '<label id="char1" style="height;10px;width:35px;font-size:medium;background:#FFF;border:0px;display:inline-block;*display:inline;*zoom:1;" border="0">"&quot;' + decodeURI(res.char1) + '&quot;"';
    str += '</label>';
    str += '</div>';
    str += '<div style="margin:0 auto;margin-left:10%;position:absolute;bottom:7%;width:80%;border:1px solid #ccc;height:0px;">';
    str += '</div>';
    str += ''' + res.pictureid + '''' + res.from + '''' + res.type + '''' + res.guestid + '''' + res.companyid + ''' + codeLang[3] + '">';
    str += '</a>';
    validate_str.innerHTML = str;
    var validate_freeze = document.getElementById('validate_freeze');
    document.body.insertBefore(validate_str, validate_freeze);
    replaccode(res);
}
