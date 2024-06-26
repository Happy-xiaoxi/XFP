export function checkCake() {
    console.log('checkCake');
    return advcake_helper.get_q(advcake_int.utm_source) === 'advcake' || advcake_helper.get_q('advcake');
}
