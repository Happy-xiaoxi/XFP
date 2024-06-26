
export function getRobotMenuData() {
    $.ajax({
        type: 'POST',
        url: 'https://aibot.53kf.com/chatrobot_manage/recommend_phrase',
        data: {
            rbt_id: robotList[m_robid].api_robot_id,
            message: '',
            company_id: company_id,
            talk_id: myfirst_tempid,
            token: 'Aj|uU620cjJ`53kf'
        },
        dataType: 'json',
        success: function (result) {
            console.log(result);
            if (result.code == 200) {
                robot_menu.init(result.data.recommend);
            }
        },
        error: function (e) {
            console.log(e);
        }
    });
}
