



export function setOffLine() {
    if (kflist == 'on') {
        if (robot_id != '') {
            showzsk(robot_id);
            return;
        }
    } else {
        if (frobotassign == '1' && frobot_id != '') {
            showzsk(frobot_id);
            return;
        }
        if (frobotassign == '2' && scene_cookie == '') {
            setSceneGuide();
            return;
        }
    }
    showLword();
}
