;
;
export function qsV(n, t) {
    t = t ? t : document.location + '';
    try {
        return new RegExp('[\\?\\&\\#]' + n + '[\\=]([^\\&\\?\\=\\#]+)').exec(t)[1];
    } catch (i) {
    }
    return '';
}