import {initFt} from './initFt.js';

export function collectSignals() {
    var s = {};
    var ft = initFt(s);
    var d = new Date();
    s.D9_101 = window.screen ? window.screen.width : undefined;
    s.D9_102 = window.screen ? window.screen.height : undefined;
    s.D9_103 = window.devicePixelRatio;
    s.D9_110 = d.getTime();
    s.D9_111 = d.getTimezoneOffset();
    s.D9_120 = navigator.platform;
    s.D9_121 = navigator.language || navigator.browserLanguage;
    s.D9_122 = navigator.appCodeName;
    s.D9_123 = navigator.maxTouchPoints || 0;
    var m = ft.isM(s.D9_120, s.D9_123);
    s.D9_130 = ft.flashVersion(m);
    s.D9_131 = ft.acrobatVersion(m);
    s.D9_132 = ft.silverlightVersion(m);
    s.D9_133 = ft.getMimeTypes(m);
    s.D9_134 = ft.getPlugins(m);
    s.D9_140 = ft.encodeURIComponent(ft.location());
    s.D9_141 = ft.encodeURIComponent(ft.referrer());
    s.D9_150 = ft.bh64();
    s.D9_151 = ft.bh();
    return s;
  }