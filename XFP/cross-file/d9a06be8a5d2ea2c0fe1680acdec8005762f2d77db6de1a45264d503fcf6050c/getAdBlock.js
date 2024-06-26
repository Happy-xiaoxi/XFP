
export function getAdBlock() {
    var ads = document.createElement('div');
    ads.innerHTML = '&nbsp;';
    ads.className = 'adsbox';
    var result = false;
    try {
        document.body.appendChild(ads);
        result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0;
        document.body.removeChild(ads);
    } catch (e) {
        result = false;
    }
    return result;
}
