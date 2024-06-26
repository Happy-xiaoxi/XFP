

export function isJsLink(msg) {
    var href_link = msg.match(/\[.[url|URL].=[A-Za-z0-9].*?\].*?\[\/.[url|URL].\]/g);
    if (href_link) {
        var href_url = msg.toLowerCase().match(/\[.[url|URL].=.*?\]/g);
        if (href_url) {
            var href_len = href_url.length;
            for (var i = 0; i < href_len; i++) {
                var href_java = href_url[i].match(/javascript:/g);
                if (href_java)
                    return true;
            }
        }
    }
    return false;
}
