export function setTrackUrl() {
    advcake_helper.setCookie(advcake_int.cookie_track_url, location.href, {
        expires: advcake_int.cookie_lifetime,
        domain: advcake_int.domain,
        path: '/'
    });
}
