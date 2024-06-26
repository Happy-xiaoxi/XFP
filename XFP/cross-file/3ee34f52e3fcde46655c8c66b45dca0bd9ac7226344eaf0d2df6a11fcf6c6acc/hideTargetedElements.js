
export function hideTargetedElements() {
    var t = function (t, e) {
        hstc.utils.each(hstc.find(e), function (t, e) {
            hstc.utils.isDefined(e._hs_oldStyle) && (e.style.border = e._hs_oldStyle);
        });
    };
    hstc.utils.each(this.clickSelectors, t);
}
