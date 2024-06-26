
export function HtmlDecode(text) {
    var msg = text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, ''').replace(/&#39;/g, ''').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&mdash;/g, '\u2014');
    return msg;
}
