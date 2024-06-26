
export function checkDomain(advcake_int) {
    console.log('checkDomain')
    // console.log(window.advcake_attempt)
    // console.log(location.host)
    // console.log("advcake_int: ",advcake_int.domain.substring(1))
    // console.log(location.host.indexOf(advcake_int.domain.substring(1)));
    if (window.advcake_attempt < 5 && location.host && location.host.indexOf(advcake_int.domain.substring(1)) === -1) {
        window.advcake_attempt++;
        throw 'incorrect_domain';
    }
}
