export function sendHit() {
    advcake_helper.pixel(advcake_int.hitUrl, {
        'sid': advcake_int.getSessionId(),
        't_tid': advcake_int.getTrackId(),
        't_dp': advcake_int.getClickId(),
        'wid': advcake_int.getWebmaster(),
        'par': advcake_int.getPartner(),
        'ref': advcake_int.getReferrer().substr(0, 1350),
        't_t': advcake_int.getQueryMedium(),
        't_if': advcake_int.isIframe(),
        't_s': advcake_int.getQuerySource(),
        'if_p': advcake_int.getIframeLand(),
        'ih': innerHeight,
        'iw': innerWidth,
        's_w': screen.width,
        's_h': screen.height,
        'land': advcake_int.getLand().substr(0, 1350)
    });
}
