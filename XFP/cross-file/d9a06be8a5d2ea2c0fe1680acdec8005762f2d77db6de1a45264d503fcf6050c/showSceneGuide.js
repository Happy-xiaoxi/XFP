var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;


export function showSceneGuide(option_id, num) {
    if (adminHeaderUrl != '')
        kf_header = adminHeaderUrl;
    var option_cont = scene_guide_list[option_id].option_cont;
    var action = scene_guide_list[option_id].action;
    var option_btn = scene_guide_list[option_id].option_btn;
    if (num == undefined)
        num = 0;
    function show_scene() {
        if (option_cont.length > 0) {
            var scene_tmp = option_id + '-' + num;
            if (option_cont.length == num) {
                if (action != 'option') {
                    var time = new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);
                    var expires = new Date();
                    expires.setTime(time);
                    document.cookie = 'scene_guide_' + company_id + '=1; expires=' + expires.toGMTString();
                }
                if (action == 'tokf') {
                    offToTalk('scene');
                    scene_client.closeLink(true);
                } else if (action == 'option') {
                    var is_display = false;
                    $.each(scene_step_arr, function (i, v) {
                        if (v.indexOf(scene_tmp) !== -1) {
                            var btn_num = v.split('-')[2];
                            if (option_btn[btn_num]) {
                                display_fk_msg(option_btn[btn_num].name);
                                showSceneGuide(option_btn[btn_num].point);
                                is_display = true;
                                return false;
                            }
                        }
                    });
                    if (!is_display) {
                        playSound();
                        display_scene_option(option_btn, option_id, num);
                    }
                } else {
                    scene_client.closeLink(true);
                }
            } else {
                if (option_cont[num].type == 'message') {
                    playSound();
                    display_kf_msg(UBBCode(UBBEncode(option_cont[num].cont)), admin_bname);
                    if ($.inArray(scene_tmp, scene_step_arr) != -1) {
                        num++;
                        show_scene();
                    } else {
                        try {
                            scene_client.sendRoa(UrlEncode(UBBEncode(option_cont[num].cont)), scene_tmp, 'p');
                            num++;
                            setTimeout(function () {
                                show_scene();
                            }, 1000);
                        } catch (e) {
                        }
                    }
                } else {
                    if ($.inArray(scene_tmp, scene_step_arr) != -1) {
                        display_kf_msg('');
                        num++;
                        show_scene();
                    } else {
                        playSound();
                        display_scene_form(option_cont[num].cont, option_id, num);
                    }
                }
            }
        } else {
            sendLNK();
        }
    }
    show_scene();
}
