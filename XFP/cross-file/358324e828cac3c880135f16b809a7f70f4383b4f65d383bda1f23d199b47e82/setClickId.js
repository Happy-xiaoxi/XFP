
export function setClickId() {
    advcake_helper.setCookie(advcake_int.cookie_params, advcake_int.parseClickId(), {
        expires: advcake_int.cookie_lifetime,
        domain: advcake_int.domain,
        path: '/'
    });
}
