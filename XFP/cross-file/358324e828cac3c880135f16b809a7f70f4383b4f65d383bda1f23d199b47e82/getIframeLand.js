export function getIframeLand(encode) {
    encode = encode || true;
    var iframe_land = '';
    try {
        if (advcake_int.isIframe()) {
            iframe_land = window.top.location.href;
        }
    } catch (e) {
    }
    return encode ? encodeURIComponent(iframe_land) : iframe_land;
}
