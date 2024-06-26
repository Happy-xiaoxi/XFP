


export function showQuickList(obj, hotArray) {
    var html = new Array();
    var len = hotArray.length;
    if (len != 0) {
        for (var i = 0; i < len; i++) {
            var hot = hotArray[i];
            var id = hot.id;
            var question = hot.question;
            html.push(''' + id + '","' + question.replace(/\\/g, '\\\\').replace(/&quot;/g, '\\&quot;') + '''' + question + ''' + question + '</p>');
        }
    } else {
        html.push('<p>' + langs[48] + '</p>');
    }
    $('.service-help').html(html.join(''));
}
