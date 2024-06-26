
export function showTargetedElements() {
    hstc.utils.each(this.clickSelectors, function (t, e) {
        hstc.utils.each(hstc.find(e), function (t, e) {
            e._hs_oldStyle = e.style.border;
            e.style.border = 'dotted 2px red';
        });
    });
}
