var MauticJS = MauticJS || {};








export function setTrackedContact(response) {
    MauticJS.log('response', response);
    if (MauticJS.isWeChat()) {
        if (undefined == window.wxTracking) {
            window.wxTracking = true;
        }
        if ('on' == MauticJS.huoyanOn && location.host != MauticJS.hostname) {
            MauticJS.huoyanTracking();
        }
        if ('on' == MauticJS.clientOn && location.host != MauticJS.hostname && window.wxTracking) {
            if (!MauticJS.mtcSet && response.id) {
                window.wxScope = undefined == window.wxScope || 'base' == window.wxScope ? 'base' : window.wxScope;
                MauticJS.clientInterval = setInterval(function () {
                    MauticJS.log('clear0');
                    var hyopenid = MauticJS.getCookie('hyopenid');
                    MauticJS.log('hyopenid', hyopenid);
                    MauticJS.log('clientScope_test', MauticJS.clientScope);
                    MauticJS.log('second_auth_type_test', MauticJS.second_auth_type);
                    MauticJS.clientTracking(MauticJS.second_auth_type);
                    MauticJS.log('clear3');
                    clearInterval(MauticJS.clientInterval);
                }, 500);
            }
        }
    }
    if (response.id) {
        MauticJS.setCookie('mtc_id', response.id, 365);
        MauticJS.setCookie('mtc_sid', response.sid, 365);
        MauticJS.setCookie('mautic_session_id', response.sid, 365);
        MauticJS.setCookie('mautic_device_id', response.device_id, 365);
        MauticJS.mtcSet = true;
        try {
            localStorage.setItem('mtc_id', response.id);
            localStorage.setItem('mtc_sid', response.sid);
            localStorage.setItem('mautic_session_id', response.sid);
            localStorage.setItem('mautic_device_id', response.device_id);
        } catch (e) {
            console.warn('Browser does not allow storing in local storage');
        }
    }
}
