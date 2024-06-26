
export function snapshot_fun(type) {
    var time_later = 1;
    if (type == 'hide') {
        try {
            top.postMessage('53kf_min_window', '*');
            time_later = 200;
        } catch (e) {
        }
    }
    setTimeout(function () {
        window.snapShot_obj = document.getElementById('snapShot_obj');
        snapShot_obj.host = snapshot_host;
        snapShot_obj.id6d = snapshot_rand_num;
        snapShot_obj.start();
    }, time_later);
}
