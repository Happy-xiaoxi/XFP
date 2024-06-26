var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;


export function checkMyid(type) {
    if (guest_id_from_get != 0 && guest_id_from_get != myid || server_guest_id != myid) {
        if (type == 'api') {
            var url = '/client/reset_kfapi_guest.php';
            var postdata = 'company_id=' + company_id + '&guest_id=' + myid + '&guest_id_from_get=' + guest_id_from_get;
            if (guest_id_from_get == 0)
                postdata = 'company_id=' + company_id + '&guest_id=' + myid + '&guest_id_from_get=' + server_guest_id;
            $.ajax({
                type: 'POST',
                url: url,
                data: postdata,
                success: function (data) {
                }
            });
        } else if (type == 'acc') {
            g_comm.SendGidc(guest_id_from_get);
        }
    }
}
