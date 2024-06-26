;
;
export function loadSwfAndDetectFonts(done) {
    var hiddenCallback = '___fp_swf_loaded';
    window[hiddenCallback] = function (fonts) {
        done(fonts);
    };
    var id = this.options.swfContainerId;
    this.addFlashDivNode();
    var flashvars = { onReady: hiddenCallback };
    var flashparams = {
        allowScriptAccess: 'always',
        menu: 'false'
    };
    swfobject.embedSWF(this.options.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {});
}