
export function getUserCard() {
    $.ajax({
        type: 'POST',
        url: 'impl/rpc_user_card.php?client=pc',
        data: 'check_id=11917718fe939f3106d35a30074bcd30&company_id=' + company_id + '&guest_id=' + myid,
        dataType: 'json',
        success: function (data) {
            if (data.ecode == 0) {
                setLyItemsValue(data.info);
            }
        }
    });
}
