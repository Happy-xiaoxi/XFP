
export function setTrackId() {
    if (advcake_int.checkCommon() || advcake_int.getTrackId() === '') {
        advcake_helper.setCookie(advcake_int.cookie_track_id, advcake_helper.guid(), {
            expires: advcake_int.cookie_lifetime,
            domain: advcake_int.domain,
            path: '/'
        });
    }
}
