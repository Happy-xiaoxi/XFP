export function setQstResTimer(fk_msgid) {
    if (fk_msgid != undefined) {
        try {
            m_qstResTimer[fk_msgid] = setTimeout(function () {
                $('#' + fk_msgid).addClass('onError');
                if (company_id == '72012964' || company_id == '72034819' || company_id == '70801702' || company_id == '72221204' || company_id == '72246200') {
                    var data = {
                        from: 'fk',
                        company_id: company_id,
                        type: 'on_error',
                        guest_id: guest_id,
                        msgid: fk_msgid,
                        time: new Date().getTime()
                    };
                    $.ajax({
                        url: http_pro + host + '/tmp_debug.php',
                        type: 'POST',
                        data: data,
                        dataType: 'JSON',
                        success: function (data) {
                        },
                        error: function (data) {
                        }
                    });
                }
            }, 20000);
        } catch (e) {
        }
    }
}
