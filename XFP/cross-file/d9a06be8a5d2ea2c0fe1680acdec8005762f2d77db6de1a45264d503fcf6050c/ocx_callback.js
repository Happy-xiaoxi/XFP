
export function ocx_callback(a, b, c) {
    try {
        top.postMessage('53kf_show_window', '*');
    } catch (e) {
    }
    if (a == 200) {
        var img_url = 'http://' + snapshot_host + '/upload/snapshot/' + b + '/' + c;
        var urlcode = '[IMG]' + img_url + '[/IMG]';
        to_insert_img_obj.sendimgmsg(urlcode);
    }
}
