;
;
export function vb(a) {
    var b = null;
    try {
        var c = document.createElement('<object id="dialogHelperId" classid="clsid:3050f819-98b5-11cf-bb82-00aa00bdce0b" width="0" height="0"></object>');
        document.body.appendChild(c);
        setTimeout(function () {
            b = a();
            var d = document.getElementById('dialogHelperId');
            if (d && d.fonts) {
                for (var g = 1; g <= d.fonts.count; g++)
                    e('ie-font-' + d.fonts(g), 'true');
                b(!0);
            } else
                b(!1);
            document.body.removeChild(c);
        }, 500);
    } catch (d) {
        null == b && (b = a()), b(!1), k(d);
    }
}