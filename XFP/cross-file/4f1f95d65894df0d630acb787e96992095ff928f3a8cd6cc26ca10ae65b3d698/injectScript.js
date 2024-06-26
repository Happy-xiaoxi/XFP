


export function injectScript(a, b, c) {
    b = b || window;
    a = this.newEle('script', {
        async: 'async',
        referrerPolicy: 'unsafe-url',
        type: 'text/javascript',
        src: a
    }, null, b);
    this.insertEle(a, c || b.document.getElementsByTagName('script')[0]);
}
