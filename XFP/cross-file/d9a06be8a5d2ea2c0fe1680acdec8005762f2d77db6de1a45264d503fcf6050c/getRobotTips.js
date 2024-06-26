var robotTipsTime = 0;






export function getRobotTips() {
    var word = $.trim(kindeditor.html());
    if (word == '') {
        hideRobotTips();
        return;
    }
    var now = new Date();
    if (now.getTime() < robotTipsTime)
        return;
    robotTipsTime = now.getTime() + 100;
    $.ajax({
        url: '/client/clientRobot.php',
        data: {
            cmd: 'ACQ',
            com_id: company_id,
            robot_id: m_robid,
            word: word,
            guest_id: myid,
            api_robot_id: zsk_api_robot_id,
            api_name: zsk_api_name
        },
        success: function (result) {
            var result = eval('(' + result + ')');
            if (result.total > 0)
                showRobotTips(result);
        }
    });
}
