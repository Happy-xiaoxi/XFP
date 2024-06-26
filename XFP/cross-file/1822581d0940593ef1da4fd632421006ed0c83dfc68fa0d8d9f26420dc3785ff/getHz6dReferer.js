;
;
export function getHz6dReferer() {
    var referer = '';
    var hz6d_request = $53.getUrlParam();
    var hz6d_tglink = false;
    var search_engine_list = {
        'baidu': 'wd=',
        'haosou': 'q=',
        'sogou': 'query=',
        'google': 'q=',
        'youdao': 'q=',
        'sm': 'q='
    };
    if (hz6d_request['tgse'] && hz6d_request['tgkwd']) {
        hz6d_tglink = 'http://www.' + hz6d_request['tgse'] + '.com/s?' + search_engine_list[hz6d_request['tgse']] + decodeURIComponent(hz6d_request['tgkwd']);
    }
    if (hz6d_tglink) {
        referer = hz6d_tglink;
    } else {
        referer = document.referrer;
    }
    return referer;
}