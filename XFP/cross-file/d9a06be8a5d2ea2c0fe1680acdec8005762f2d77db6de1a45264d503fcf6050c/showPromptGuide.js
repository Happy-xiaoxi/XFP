var is_show_prompt = false;
var lnkover = 0;

export function showPromptGuide() {
    if (is_show_prompt === true)
        return;
    is_show_prompt = true;
    if (adminHeaderUrl != '')
        kf_header = adminHeaderUrl;
    if (typeof kefuCodeList[adminId6d] == 'undefined') {
        admin_wx_code = '';
    } else {
        admin_wx_code = kefuCodeList[adminId6d];
    }
    changeModule('talk');
    lnkover = 6;
    try {
        wait_client.setParams(http_pro, wait_host, UrlEncode(HtmlDecode(talkpage)), UrlEncode(HtmlDecode(frompage)), search_engine, keyword, UrlEncode(HtmlDecode(landpage)), tfrom, is_group, open_time, uid, myid, UrlEncode(channel));
        wait_client.setCallBack('GID_CALL', function (gid) {
            myid = gid;
        });
        wait_client.init();
        var prompt_guide = new Array();
        prompt_guide = matchPromptGuide();
        if (prompt_guide.length == 0) {
            sendLNK();
            return;
        }
        var num = 0;
        function set_time_prompt() {
            if (prompt_guide.length > 0) {
                playSound();
                display_kf_msg(setupFilter(UBBCode(UBBEncode(prompt_guide[num].prompt_content))), admin_bname);
                wait_client.sendRoa(setupFilter(UBBCode(UBBEncode(prompt_guide[num].prompt_content))), num + 1);
                prompt_guide_show_time = new Date().getTime();
                try {
                    top.postMessage('53kf_new_msg', '*');
                } catch (e) {
                }
                if (num == 0 && keyword == '' && (search_engine.indexOf('百度') !== false || search_engine.toLowerCase().indexOf('baidu') !== false)) {
                    wait_client.setCallBack('RQKW_CALL', function (kw, kw2) {
                        keyword = kw;
                        prompt_guide = matchPromptGuide();
                        num++;
                        if (num >= prompt_guide.length)
                            return;
                        if (num < prompt_guide_size)
                            var next_time = num * 50;
                        else
                            var next_time = parseInt(prompt_guide[num].time) * 1000 + num * 50;
                        var now_time = new Date().getTime();
                        var getwd_time = now_time - prompt_guide_show_time;
                        if (next_time > getwd_time)
                            next_time = next_time - getwd_time;
                        else
                            next_time = 0;
                        prompt_guide_timer = setTimeout(set_time_prompt, next_time);
                    });
                    wait_client.sendGetKw();
                    return;
                }
            } else {
                return;
            }
            num++;
            if (num >= prompt_guide.length)
                return;
            if (num < prompt_guide_size)
                var next_time = num * 50;
            else
                var next_time = parseInt(prompt_guide[num].time) * 1000 + num * 50;
            prompt_guide_timer = setTimeout(set_time_prompt, next_time);
        }
        if (prompt_guide_size == 0)
            var prompt_guide_time = parseInt(prompt_guide[num].time) * 1000;
        else
            var prompt_guide_time = 0;
        prompt_guide_timer = setTimeout(set_time_prompt, prompt_guide_time);
    } catch (e) {
    }
}
