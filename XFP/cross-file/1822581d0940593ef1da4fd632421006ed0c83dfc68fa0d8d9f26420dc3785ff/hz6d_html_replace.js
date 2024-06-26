;
;
export function hz6d_html_replace(html) {
    if (html.indexOf('{hz6d_keyword}') == -1) {
        return html.replace(/%7Bhz6d_keyword%7D/gim, encodeURIComponent(hz6d_from_page_new) + '&tfrom=1');
    } else {
        return html.replace(/{hz6d_keyword}/gim, hz6d_from_page_new + '&tfrom=1');
    }
}