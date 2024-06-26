export function recvQstProc(fk_msgid) {
    try {
        if (fk_msgid.indexOf('WU_FILE_') != -1) {
            $('#' + fk_msgid).find('.uploadStatus').text(langs[14]).css('color', '#1E88E5');
            if ($('#' + fk_msgid).find('.upload-image').length) {
                var url = $('#' + fk_msgid).data('url');
                $('#' + fk_msgid).html(''' + url + ''');
            }
        } else if (fk_msgid.indexOf('formid_') != -1) {
            fkMsgCallBack(fk_msgid, 'form');
            changeFormStatus(fk_msgid, true);
        } else {
            fkMsgCallBack(fk_msgid, 'msg');
            $('#' + fk_msgid).removeClass('info-status');
            try {
                clearTimeout(m_qstResTimer[fk_msgid]);
                m_qstResTimer[fk_msgid] = null;
            } catch (e) {
            }
        }
    } catch (e) {
    }
}
