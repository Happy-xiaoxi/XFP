export function checkCommon() {
    console.log('checkCommon');
    return advcake_helper.get_q(advcake_int.utm_source) !== '' || advcake_helper.get_q('gclid') || advcake_helper.get_q('yclid');
}
