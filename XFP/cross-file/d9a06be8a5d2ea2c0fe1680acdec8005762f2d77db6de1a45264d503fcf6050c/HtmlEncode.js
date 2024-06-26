


export function HtmlEncode(text) {
    var msg = text.replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/\'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    msg = msg.replace(/\r\n/g, '<br/>');
    msg = msg.replace(/\r|\n/g, '<br/>');
    return msg;
}
