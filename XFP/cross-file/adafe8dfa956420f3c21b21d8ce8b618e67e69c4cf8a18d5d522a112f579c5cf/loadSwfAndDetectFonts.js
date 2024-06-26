export function loadSwfAndDetectFonts(e) {
    var t = '___fp_swf_loaded';
    window[t] = function (t) {
        e(t);
    };
    var r = this.options.swfContainerId;
    this.addFlashDivNode();
    var n = { onReady: t };
    window.swfobject.embedSWF(this.options.swfPath, r, '1', '1', '9.0.0', !1, n, {
        allowScriptAccess: 'always',
        menu: 'false'
    }, {});
}
