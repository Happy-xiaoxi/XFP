
export function setSessionId() {
    if (advcake_int.getSessionId() === undefined) {
        advcake_helper.setCookie(advcake_int.cookie_session_id, advcake_helper.guid(), {
            expires: advcake_int.cookie_lifetime,
            domain: advcake_int.domain,
            path: '/'
        });
    }
}
