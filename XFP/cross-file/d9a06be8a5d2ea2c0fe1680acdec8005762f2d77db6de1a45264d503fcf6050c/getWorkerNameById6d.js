
export function getWorkerNameById6d(id6d) {
    var name = langs[45];
    for (var i = 0; i < m_joinNames.length; i++) {
        var obj = m_joinNames[i];
        if (obj.jid6d == id6d) {
            return obj.name;
        }
    }
    $.ajax({
        type: 'POST',
        url: 'impl/rpc_worker_info_new.php',
        data: 'company_id=' + company_id + '&id6d=' + id6d + '&check_id=11917718fe939f3106d35a30074bcd30',
        dataType: 'json',
        async: false,
        success: function (result) {
            if (result.ecode == 0) {
                var data = result.data;
                name = data['bname'];
                m_joinNames.push({
                    jid6d: id6d,
                    name: name
                });
            }
        }
    });
    return name;
}
