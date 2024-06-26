






export function injectSicIframe(a, b, c) {
    var d = {
        width: a.width + 'px',
        height: a.height + 'px',
        border: '0 none',
        margin: '0'
    };
    c && this.extend(d, c);
    c = this.newEle('iframe', {
        referrerPolicy: 'unsafe-url',
        src: 'about:blank',
        frameBorder: '0',
        frameSpacing: '0',
        scrolling: 'no'
    }, d);
    this.insertEle(c, b);
    a.iframeId = this.eleId(c);
    a.sicWindow = c.contentWindow;
    a = c.contentWindow.document;
    a.open();
    a.write('<!DOCTYPE html><html><head><style type="text/css">*{margin:0;padding:0;}</style></head><body><script type="text/javascript">window.Tynt = window.parent.Tynt;</script><script type="text/javascript" src="' + this._sicUrl + '"></script></body></html>');
    a.close();
}
