export function recvReqstProc(file_cancel_id, msg) {
    try {
        if ($('#' + file_cancel_id).length >= 1) {
            $('#' + file_cancel_id).remove();
        } else {
            if (msg.indexOf('down_file.php?file=upload/files') != -1 || msg.indexOf('http://kfs3') != -1 || msg.indexOf('https://kfs3') != -1) {
                var reg = new RegExp('(\\[URL=(.+?)])(.+?)(\\[\\/URL\\])', 'gim');
                var url;
                msg = msg.replace(reg, function ($1, $2, $3, $4) {
                    url = $3;
                    return $1;
                });
                $('.file_cancel').each(function () {
                    if (msg.indexOf('down_file.php?file=upload/files') != -1) {
                        if ($(this).find('a').attr('href') == url) {
                            $(this).remove();
                            return false;
                        }
                    } else {
                        url = HtmlDecode(url);
                        if ($(this).find('audio').attr('src') == url) {
                            $(this).remove();
                            return false;
                        } else if ($(this).find('video').attr('src') == url) {
                            $(this).remove();
                            return false;
                        }
                    }
                });
            }
        }
    } catch (e) {
    }
}
