export function _ADMTrackingsend(a) {
    window._AdmGetGa = function () {
        return '';
    };
    window._AdmGetGa = function () {
        var f = '';
        try {
            var h = window.performance || window.webkitPerformance;
            if ((h = h && h.timing)) {
                var m = h.navigationStart;
                f =
                    ';' +
                    [
                        h.loadEventStart - m,
                        h.domainLookupEnd - h.domainLookupStart,
                        h.connectEnd - h.connectStart,
                        h.responseStart - h.requestStart,
                        h.responseEnd - h.responseStart,
                        h.fetchStart - m,
                        h.domInteractive - m,
                        h.domContentLoadedEventStart - m,
                    ].join(';');
            }
            return ';' + ADM_AdsTracking.getCookie('_ga') + f;
        } catch (k) {}
        return '';
    };
    var b =
        (function () {
            var f = '',
                h = {},
                m = '';
            try {
                f = window.decodeURIComponent(window._ADM_Channel || '');
            } catch (n) {}
            try {
                var k = ADM_AdsTracking.getCookie('_ck_user'),
                    l = {};
                if (k && -1 != k.indexOf('{')) {
                    try {
                        l = JSON.parse(k);
                    } catch (n) {}
                    '' != f && (h.channel = f);
                    f = 0;
                    if ('undefined' != typeof l.expiredate)
                        try {
                            f = 0 < new Date(l.expiredate).getTime() - new Date().getTime() ? 1 : 0;
                        } catch (n) {}
                    h.isvip = f;
                    'undefined' != typeof l.id && ((h.uid = l.id), (m = window.btoa(JSON.stringify(h))));
                }
            } catch (n) {}
            return m;
        })() || '';
    if ('undefined' == typeof window.__ADMTrackingSendUrl) {
        var c = '';
        c =
            ('https:' == document.location.protocol ? 'https:' : 'http:') +
            '//' +
            checkAdmdomainAds('lg1.logging.admicro.vn') +
            '/_tracking1.gif?dg=' +
            __admloadPageIdc;
        c += '&fl=' + paramBrowser.flashVersion();
        c += '&je=' + paramBrowser.javaEnabled;
        c += '&sr=' + paramBrowser.screen_Resolution;
        c += '&sc=' + paramBrowser.screen_Color;
        c += '&hn=' + paramBrowser.hostname;
        c += '&p=' + paramBrowser.zenURL.encode(paramBrowser.url());
        c +=
            '&r=' +
            ('' == paramBrowser.referrer
                ? paramBrowser.referrer
                : paramBrowser.zenURL.encode(paramBrowser.referrer));
        c =
            'undefined' != typeof _Analytics_Channel && '' != _Analytics_Channel
                ? c + ('&cat=' + encodeURIComponent(decodeURIComponent(_Analytics_Channel)))
                : 'undefined' != typeof _ADM_Channel && '' != _ADM_Channel
                ? c + ('&cat=' + encodeURIComponent(decodeURIComponent(_ADM_Channel)))
                : c + '&cat=';
        -1 != paramBrowser.hostname.indexOf('enbac.com') &&
            (g = '' != ADM_AdsTracking.getCookie('province_id') ? ADM_AdsTracking.getCookie('province_id') : 0);
        -1 != paramBrowser.hostname.indexOf('rongbay.com') &&
            (g = '' != ADM_AdsTracking.getCookie('cityid') ? ADM_AdsTracking.getCookie('cityid') : 0);
        -1 != paramBrowser.hostname.indexOf('muachung.vn') &&
            (g =
                '' != ADM_AdsTracking.getCookie('muachung_cityMC')
                    ? ADM_AdsTracking.getCookie('muachung_cityMC')
                    : 0);
        c += '&g=' + g;
        window.__ADMTrackingSendUrl = c;
    }
    c =
        window.__ADMTrackingSendUrl +
        logposurlview +
        '&i=' +
        encodeURIComponent(
            a +
                ';' +
                __admPageloadid +
                ';' +
                window.__ADMScrollcounter +
                ';' +
                window.__ADMScrollEnd +
                ';' +
                __ADMisActive +
                ';' +
                __ADMMouse +
                ';' +
                __ADMTouch +
                ';' +
                (wPrototype.wdWidth() + 'x' + wPrototype.wdHeight()) +
                ';' +
                window.__ifr +
                ';' +
                ('undefined' == typeof ADS_CHECKER ? 0 : 1) +
                ';' +
                __admloadPageId +
                ';' +
                __admloadPageIdc +
                _AdmGetGa()
        ) +
        '&rdm=' +
        Math.random();
    '' != b && (c += '&xtr=' + encodeURIComponent(b));
    if ('s' == a) {
        var d = document.createElement('iframe');
        d.src = c + ADM_AdsTracking.getParam();
        d.style.width = '12px';
        d.style.height = '12px';
        d.style.visibility = 'hidden';
        d.style.position = 'absolute';
        d.style.left = '0px';
        d.style.bottom = '0px';
        d.style.border = 'none';
        d.target = 'admTrackmain';
        d.name = 'admIframeTracking';
        d.id = 'admIframeTracking';
        AdmonDomReady(function () {
            document.body.appendChild(d);
        });
        a = function (f) {
            if (-1 != f.origin.indexOf('logging.admicro.vn') && ((f = f.data), 'object' == typeof f))
                try {
                    '__CRT' == f[0] && (f[0] = '__create'),
                        '__UF' == f[0] && (f[0] = '__ui'),
                        '__C' != f[0] && ADM_AdsTracking.check(f[0], f[1], '', '/');
                } catch (h) {}
        };
        window.addEventListener
            ? window.addEventListener('message', a, !1)
            : window.attachEvent('onmessage', a, !1);
    } else {
        var e = new Image();
        e.src = c + ADM_AdsTracking.getParam();
        'v' == a &&
            (e.onerror = function () {
                try {
                    new Image().src = (e.src + '').replace('lg1.logging.admicro.vn', 'amcdn.vn');
                } catch (f) {}
            });
    }
}