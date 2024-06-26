
export function customerResponse(q_id, val) {
    if (q_id != '0') {
        $.ajax({
            url: '/client/clientRobot.php',
            data: {
                cmd: 'CR',
                com_id: company_id,
                robot_id: m_robid,
                q_id: q_id,
                val: val,
                guest_id: myid,
                api_robot_id: zsk_api_robot_id,
                api_name: zsk_api_name
            },
            success: function (result) {
            }
        });
    }
}
