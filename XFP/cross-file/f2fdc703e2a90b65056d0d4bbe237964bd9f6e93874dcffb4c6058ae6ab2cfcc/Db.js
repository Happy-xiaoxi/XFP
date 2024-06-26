;
;
export function Db() {
    var a = localStorage.getItem('afaToken');
    if (null == a || '' === a)
        a = Jb(), localStorage.setItem('afaToken', a);
    e('afaToken', a);
    for (var a = document.getElementsByTagName('script'), b, c = 0; c < a.length; c++)
        if (a[c].src.includes('/cc.js')) {
            b = a[c];
            break;
        }
    b = b.src.replace(/cc.js.*/, 'afa.js');
    a = document.createElement('script');
    a.setAttribute('src', b);
    a.setAttribute('id', 'afaScript');
    document.head.appendChild(a);
}