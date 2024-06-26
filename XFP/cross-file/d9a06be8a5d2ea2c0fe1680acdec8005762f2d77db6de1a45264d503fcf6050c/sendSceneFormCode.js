
export function sendSceneFormCode(mobile) {
    $.ajax({
        type: 'POST',
        url: 'client/scene_form.php',
        data: 'action=send&company_id=' + company_id + '&guest_id=' + myid + '&mobile=' + mobile,
        dataType: 'json',
        success: function (data) {
        },
        error: function () {
        }
    });
}
