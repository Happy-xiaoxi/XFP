









export function init() {
    this.type = f.iframeType();
    this.inSOIframe() && (e = f.getTopWin(), g = e.document);
    e._33Across || (e._33Across = {});
    e._33Across.state || (e._33Across.state = {
        icDone: 0,
        deDone: 0,
        dxDone: 0,
        ivDone: !1
    });
    this.protocol = 'https://';
    f.init();
    this.isolated = f.isolated();
    ha.init();
    k.init();
    f.clog('xoi=' + this.inXOIframe() + ', soi=' + this.inSOIframe() + ', iso=' + this.isolated);
    e._33Across.pvTs || (e._33Across.pvTs = Date.now());
}
