var m_leftTime = 0;
var m_autoTimer = 0;
var m_isShowInertactMenu = false;








export function setOnLine(checkreg) {
    if (checkreg) {
        if (reg == '1' && is_reg != '1') {
            changeModule('reg');
            return;
        }
    }
    if (kflist == 'on') {
        showKfList();
        if (zdkf_auto != 'off') {
            m_leftTime = zdkf_auto;
            autoLink();
            m_autoTimer = setInterval('autoLink()', 1000);
        }
    } else {
        if (robotassign == '1' && robot_id != '') {
            showzsk(robot_id);
            return;
        }
        if (robotassign == '2' && prompt_cookie == '') {
            showPromptGuide();
            if (!m_isShowInertactMenu) {
                m_isShowInertactMenu = true;
                try {
                    menu.init(pc_inertact_menu);
                } catch (e) {
                }
            }
            return;
        }
        if (robotassign == '3' && scene_cookie == '') {
            setSceneGuide();
            return;
        }
        robotassign = '0';
        sendLNK();
    }
}
