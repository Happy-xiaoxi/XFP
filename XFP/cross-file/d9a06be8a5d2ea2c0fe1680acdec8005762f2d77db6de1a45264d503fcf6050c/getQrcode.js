
export function getQrcode() {
    $.ajax({
        type: 'POST',
        url: 'impl/rpc_get_qrcode.php',
        data: 'company_id=' + company_id + '&id6d=' + obj_id + '&guest_id=' + myid + '&talk_id=' + mytempid + '&style_id=' + style_id + '&style=' + style + '&kf_list=' + worker_ids,
        dataType: 'json',
        success: function (result) {
            if (result.status == 'success') {
                qrcode_url = result.url;
                if (qrcode_url)
                    addQrcode();
            } else {
                console.log(result.errmsg);
            }
        }
    });
}
