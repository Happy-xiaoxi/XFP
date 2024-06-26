
export function setPartner() {
    advcake_helper.setCookie(advcake_int.cookie_partner, advcake_int.parsePartner(), {
        expires: advcake_int.cookie_lifetime,
        domain: advcake_int.domain,
        path: '/'
    });
}
