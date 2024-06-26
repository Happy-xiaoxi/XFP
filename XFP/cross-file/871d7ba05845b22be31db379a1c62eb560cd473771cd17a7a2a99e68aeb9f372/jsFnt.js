export function jsFnt(keys, done) {
    return setTimeout(function () {
        var baseFonts = [
                'monospace',
                'sans-serif',
                'serif'
            ], fontList = [
                'Andale Mono',
                'Arial',
                'Arial Black',
                'Arial Hebrew',
                'Arial MT',
                'Arial Narrow',
                'Arial Rounded MT Bold',
                'Arial Unicode MS',
                'Bitstream Vera Sans Mono',
                'Book Antiqua',
                'Bookman Old Style',
                'Calibri',
                'Cambria',
                'Cambria Math',
                'Century',
                'Century Gothic',
                'Century Schoolbook',
                'Comic Sans',
                'Comic Sans MS',
                'Consolas',
                'Courier',
                'Courier New',
                'Geneva',
                'Georgia',
                'Helvetica',
                'Helvetica Neue',
                'Impact',
                'Lucida Bright',
                'Lucida Calligraphy',
                'Lucida Console',
                'Lucida Fax',
                'LUCIDA GRANDE',
                'Lucida Handwriting',
                'Lucida Sans',
                'Lucida Sans Typewriter',
                'Lucida Sans Unicode',
                'Microsoft Sans Serif',
                'Monaco',
                'Monotype Corsiva',
                'MS Gothic',
                'MS Outlook',
                'MS PGothic',
                'MS Reference Sans Serif',
                'MS Sans Serif',
                'MS Serif',
                'MYRIAD',
                'MYRIAD PRO',
                'Palatino',
                'Palatino Linotype',
                'Segoe Print',
                'Segoe Script',
                'Segoe UI',
                'Segoe UI Light',
                'Segoe UI Semibold',
                'Segoe UI Symbol',
                'Tahoma',
                'Times',
                'Times New Roman',
                'Times New Roman PS',
                'Trebuchet MS',
                'Verdana',
                'Wingdings',
                'Wingdings 2',
                'Wingdings 3'
            ], testString = 'mmmmmmmmmmlli', testSize = '72px', h = document.getElementsByTagName('body')[0], baseFontsDiv = document.createElement('div'), fontsDiv = document.createElement('div'), defaultWidth = {}, defaultHeight = {};
        var createSpan = function () {
            var s = document.createElement('span');
            s.style.position = 'absolute';
            s.style.left = '-9999px';
            s.style.fontSize = testSize;
            s.style.fontStyle = 'normal';
            s.style.fontWeight = 'normal';
            s.style.letterSpacing = 'normal';
            s.style.lineBreak = 'auto';
            s.style.lineHeight = 'normal';
            s.style.textTransform = 'none';
            s.style.textAlign = 'left';
            s.style.textDecoration = 'none';
            s.style.textShadow = 'none';
            s.style.whiteSpace = 'normal';
            s.style.wordBreak = 'normal';
            s.style.wordSpacing = 'normal';
            s.innerHTML = testString;
            return s;
        };
        var createSpanWithFonts = function (fontToDetect, baseFont) {
            var s = createSpan();
            s.style.fontFamily = "'" + fontToDetect + "'" + baseFont;
            return s;
        };
        var initializeBaseFontsSpans = function () {
            var spans = [];
            for (var index = 0, length = baseFonts.length; index < length; index++) {
                var s = createSpan();
                s.style.fontFamily = baseFonts[index];
                baseFontsDiv.appendChild(s);
                spans.push(s);
            }
            return spans;
        };
        var initializeFontsSpans = function () {
            var spans = {};
            for (var i = 0, l = fontList.length; i < l; i++) {
                var fontSpans = [];
                for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
                    var s = createSpanWithFonts(fontList[i], baseFonts[j]);
                    fontsDiv.appendChild(s);
                    fontSpans.push(s);
                }
                spans[fontList[i]] = fontSpans;
            }
            return spans;
        };
        var isFontAvailable = function (fontSpans) {
            var detected = false;
            for (var i = 0; i < baseFonts.length; i++) {
                detected = fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]];
                if (detected) {
                    return detected;
                }
            }
            return detected;
        };
        var baseFontsSpans = initializeBaseFontsSpans();
        h.appendChild(baseFontsDiv);
        for (var index = 0, length = baseFonts.length; index < length; index++) {
            defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth;
            defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight;
        }
        var fontsSpans = initializeFontsSpans();
        h.appendChild(fontsDiv);
        var available = [];
        for (var i = 0, l = fontList.length; i < l; i++) {
            if (isFontAvailable(fontsSpans[fontList[i]])) {
                available.push(fontList[i]);
            }
        }
        h.removeChild(fontsDiv);
        h.removeChild(baseFontsDiv);
        keys.data.push({
            key: 'js_fonts',
            value: available
        });
        done(keys);
    }, 1);
}
