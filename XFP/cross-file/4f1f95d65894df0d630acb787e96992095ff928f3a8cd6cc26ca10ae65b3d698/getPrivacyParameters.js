export function getPrivacyParameters() {
    return ('string' == typeof ha.uspString ? '&us_privacy=' + ha.uspString : '') + ('string' == typeof k.gppString ? '&gpp=' + k.gppString : '') + (Array.isArray(k.gppSid) && 0 < k.gppSid.length ? '&gpp_sid=' + k.gppSid.join(',') : '');
}
