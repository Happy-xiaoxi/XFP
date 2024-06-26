
export function getUrlParams(param, url) {
    if (url == undefined) {
        url = location.search;
    }
    var params_arr = url.split('&');
    for (var i = 0; i < params_arr.length; i++) {
        if (params_arr[i].indexOf(param) != -1) {
            var temp = params_arr[i].split('=');
            return temp[1];
        }
    }
    return '';
}
