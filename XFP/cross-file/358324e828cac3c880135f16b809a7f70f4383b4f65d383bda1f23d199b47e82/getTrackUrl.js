export function getTrackUrl(encode) {
    encode = encode || true;
    var url = advcake_helper.getCookie(advcake_int.cookie_track_url) || '';
    return encode ? encodeURIComponent(url) : url;
}
