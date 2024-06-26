


























export function UBBCode(strContent) {
    if (navigator.appName == 'Microsoft Internet Explorer' && navigator.appVersion.match(/MSIE \d\.\d/) == 'MSIE 5.0') {
        if (strContent.indexOf('[IMG]') >= 0) {
            var con = strContent.substr(5, strContent.indexOf('[/IMG]') - 5);
            strContent = '<IMG SRC="' + con + '">';
        }
        if (strContent.indexOf('[URL=') >= 0) {
            var tlink = strContent.substr(5, strContent.indexOf(']') - 5);
            var text = strContent.substr(strContent.indexOf(']') + 1, strContent.length - 6 - strContent.indexOf(']') - 1);
            strContent = '<A HREF="' + tlink + '" TARGET=_blank>' + text + '</A>';
        }
        if (strContent.indexOf('[MOBILE]') >= 0) {
            var tlink = strContent.substr(8, strContent.indexOf('[/MOBILE]') - 8);
            strContent = text;
        }
        if (strContent.indexOf('[PHONE]') >= 0) {
            var tlink = strContent.substr(7, strContent.indexOf('[/PHONE]') - 7);
            strContent = text;
        }
        if (strContent.indexOf('[EMAIL]') >= 0) {
            var tlink = strContent.substr(7, strContent.indexOf('[/EMAIL]') - 7);
            strContent = text;
        }
    } else {
        var r2 = new RegExp('(\\[URL=(.+?)])(.+?)(\\[\\/URL\\])', 'gim');
        var r3 = new RegExp('(\\[IMG])(\\S+?)(\\[\\/IMG\\])', 'gim');
        var r4 = new RegExp('(\\[QQ])(\\d+?)(\\[\\/QQ\\])', 'gim');
        var r5 = new RegExp('&amp', 'gim');
        var r6 = new RegExp('(\\[MOBILE])(\\d+?)(\\[\\/MOBILE\\])', 'gim');
        var r7 = new RegExp('(\\[PHONE])([\\d\\-]+?)(\\[\\/PHONE\\])', 'gim');
        var r8 = new RegExp('(\\[EMAIL])(\\S+?)(\\[\\/EMAIL\\])', 'gim');
        var r9 = new RegExp('(\\[voice])(\\S+?)(\\[\\/voice\\])', 'gim');
        strContent = strContent.replace(r2, function ($1, $2, $3, $4, $5) {
            if ($3.indexOf('http://') == -1 && $3.indexOf('https://') == -1) {
                $3 = http_pro + $3;
            }
            return '<A HREF="' + $3 + '" TARGET="_blank" style="text-decoration:underline; color:inherit;">' + $4 + '</A>';
        });
        strContent = strContent.replace(r3, '<IMG border="0" SRC="$2">');
        strContent = strContent.replace(r4, '''');
        strContent = strContent.replace(r6, '$2');
        strContent = strContent.replace(r7, '$2');
        strContent = strContent.replace(r8, '$2');
        strContent = strContent.replace(r9, function ($1, $2, $3) {
            try {
                audio_num++;
                audio_vars['audio_' + audio_num] = new BenzAMRRecorder();
                audio_vars['audio_' + audio_num].initWithUrl($3);
                return '<div class="audiobtn" id="audio_' + audio_num + '"><span class="audio_log" alt=""><span></div>';
            } catch (e) {
                return '<div class="audiobtn unaudio_play"><span class="audio_log" alt=""><span></div>';
            }
        });
    }
    strContent = strContent.replace(/\{(.[^#.-\/]*)#(.[^#.-\/]*)#\}/gi, function ($1, $2, $3) {
        return '''' + http_pro + host + '/img/face/' + $2 + '/' + $2.replace('_min', '') + '_' + $3 + '.gif?8" border="0">';
    });
    return strContent;
}
