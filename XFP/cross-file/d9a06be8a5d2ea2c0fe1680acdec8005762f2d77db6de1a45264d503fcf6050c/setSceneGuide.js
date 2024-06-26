var lnkover = 0;

export function setSceneGuide() {
    changeModule('scene');
    lnkover = 7;
    try {
        scene_client.setParams(http_pro, scene_host, UrlEncode(HtmlDecode(talkpage)), UrlEncode(HtmlDecode(frompage)), search_engine, UrlEncode(keyword), UrlEncode(HtmlDecode(landpage)), tfrom, is_group, open_time, myid, uid, ucust_id, u_stat_id, UrlEncode(channel), UrlEncode(talktitle));
        scene_client.setCallBack('GID_CALL', function (gid) {
            myid = gid;
        });
        scene_client.setCallBack('SLNK_CALL', function (steps_str) {
            if (steps_str != '' && steps_str != undefined) {
                var step_arr = steps_str.split(',');
                if (step_arr.length > scene_step_arr.length) {
                    scene_step_arr = step_arr;
                }
            }
        });
        scene_client.setCallBack('ROA_CALL', function (step, point) {
            if (step != '') {
                var step_temp = step.split('-');
                var option_id = step_temp[0];
                var num = step_temp[1];
                var option_cont = scene_guide_list[option_id].option_cont;
                var action = scene_guide_list[option_id].action;
                if (option_cont.length == num) {
                    if (action == 'tokf') {
                        offToTalk('scene');
                        scene_client.closeLink(true);
                    } else if (action == 'option') {
                        var point_num = step_temp[2];
                        var btn = scene_guide_list[option_id].option_btn[point_num];
                        if (btn) {
                            $('#' + 'scene_' + option_id + '_' + num).hide();
                            display_fk_msg(btn.name);
                            showSceneGuide(btn.point);
                        } else {
                            $.each(scene_guide_list[option_id].option_btn, function (i, v) {
                                if (v.point == point) {
                                    $('#' + 'scene_' + option_id + '_' + num).hide();
                                    display_fk_msg(v.name);
                                    showSceneGuide(point);
                                    return false;
                                }
                            });
                        }
                    }
                } else if (option_cont[num].type == 'form') {
                    $('#' + 'scene_' + option_id + '_' + num).removeClass('guide_f').html('');
                    showSceneGuide(option_id, parseInt(num) + 1);
                }
            }
        });
        scene_client.init();
    } catch (e) {
    }
    showSceneGuide(1);
}
