;
;
export function Cb() {
    for (var a = document.getElementsByTagName('script'), b, c = 0; c < a.length; c++)
        if (a[c].src.includes('/cc.js')) {
            b = a[c];
            break;
        }
    a = b.src.replace(/cc.js.*/, 'uba.js');
    b = document.createElement('script');
    b.setAttribute('src', a);
    document.head.appendChild(b);
}