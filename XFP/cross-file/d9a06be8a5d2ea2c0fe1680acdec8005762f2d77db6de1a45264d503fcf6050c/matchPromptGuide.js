import {HtmlDecode} from './HtmlDecode.js'
import {getCookie} from './getCookie.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;



export function matchPromptGuide() {
    var prompt_guide_default = new Array();
    var is_match = false;
    var is_talkpage_guide = false;
    var talkpage_de = HtmlDecode(talkpage);
    for (var i = 0; i < prompt_guide_list.length; i++) {
        var prompt_guide_i = prompt_guide_list[i].prompt;
        if (prompt_guide_list[i].title == '其他') {
            prompt_guide_default = prompt_guide_i;
            if (guide_type == 1)
                return prompt_guide_default;
            continue;
        }
        if (typeof prompt_guide_list[i].promote_link != 'undefined' && prompt_guide_list[i].promote_link != '') {
            try {
                if (landpage != '' && prompt_guide_list[i].link_init != '' && landpage.indexOf(prompt_guide_list[i].link_init) !== -1) {
                    prompt_guide = prompt_guide_i;
                    is_match = true;
                    break;
                }
            } catch (e) {
            }
        } else if (typeof prompt_guide_list[i].talkpage_link != 'undefined' && prompt_guide_list[i].talkpage_link != '') {
            try {
                if (talkpage_de != '' && prompt_guide_list[i].talkpage_link != '' && talkpage_de.indexOf(HtmlDecode(prompt_guide_list[i].talkpage_link)) !== -1) {
                    var prompt_guide_talkpage = decodeURIComponent(getCookie('prompt_guide_talkpage_' + company_id));
                    if (prompt_guide_size > 0 && prompt_guide_talkpage != talkpage_de) {
                        wait_client.sendStart();
                        prompt_guide_size = 0;
                    }
                    prompt_guide = prompt_guide_i;
                    is_match = true;
                    is_talkpage_guide = true;
                    document.cookie = 'prompt_guide_talkpage_' + company_id + '=' + UrlEncode(talkpage_de);
                    break;
                }
            } catch (e) {
            }
        } else {
            if (keyword != '' && (prompt_guide_list[i].title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || keyword.toLowerCase().indexOf(prompt_guide_list[i].title.toLowerCase()) !== -1)) {
                prompt_guide = prompt_guide_i;
                is_match = true;
                break;
            }
        }
    }
    if (is_match === false)
        prompt_guide = prompt_guide_default;
    if (!is_talkpage_guide) {
        var prompt_guide_talkpage = getCookie('prompt_guide_talkpage_' + company_id);
        if (prompt_guide_size > 0 && prompt_guide_talkpage != '') {
            wait_client.sendStart();
            prompt_guide_size = 0;
        }
        document.cookie = 'prompt_guide_talkpage_' + company_id + '=';
    }
    return prompt_guide;
}