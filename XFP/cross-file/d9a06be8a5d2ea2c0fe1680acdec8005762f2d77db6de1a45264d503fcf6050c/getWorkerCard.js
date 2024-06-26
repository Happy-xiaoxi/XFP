var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;

export function getWorkerCard() {
    var postdata = 'company_id=' + company_id + '&id6d=' + obj_id + '&check_id=11917718fe939f3106d35a30074bcd30';
    if (obj_id == 0) {
        postdata = postdata + '&worker_id=' + worker_id;
    }
    $.ajax({
        type: 'POST',
        url: 'impl/rpc_worker_info_new.php',
        data: postdata,
        dataType: 'json',
        success: function (result) {
            if (result.ecode == 0) {
                var data = result.data;
                showWorkerCard(data);
            }
        }
    });
}
