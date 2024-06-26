
export function setWebmaster() {
    advcake_helper.setCookie(advcake_int.cookie_webmaster, advcake_int.parseWebmaster(), {
        expires: advcake_int.cookie_lifetime,
        domain: advcake_int.domain,
        path: '/'
    });
}
