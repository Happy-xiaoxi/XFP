export function getAdBlock() {
    var e = document.createElement('div');
    e.innerHTML = '&nbsp;', e.className = 'adsbox';
    var t = !1;
    try {
        document.body.appendChild(e), t = 0 === document.getElementsByClassName('adsbox')[0].offsetHeight, document.body.removeChild(e);
    } catch (e) {
        t = !1;
    }
    return t;
}
