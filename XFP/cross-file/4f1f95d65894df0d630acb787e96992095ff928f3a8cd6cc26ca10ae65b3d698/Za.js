
export function Za(a, b, c, d) {
    var l = function (a, b, c, d, l) {
        a.size = b || '';
        a.size ? (b = b.split('x'), a.width = b[0], a.height = b[1]) : (a.width = '0', a.height = '0');
        a.targetId = c || '';
        a.product = d || 'inpage';
        l ? a.distro = l : 'inview' == a.product && (a.distro = 'RCIV');
        a.iframeId = null;
        a.sicWindow = null;
    };
    22 == a.length ? (this.publisherId = a, this.options = c || {}, l(this, this.options.size || '1x1', this.options.targetId || '', b)) : l(this, a, b, c, d);
}
