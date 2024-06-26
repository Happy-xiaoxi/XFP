import {UrlEncode} from './UrlEncode.js'
import {HtmlDecode} from './HtmlDecode.js';
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var lnkover = 0;















export function infoMandate() {
    try {
        sessionStorage.setItem(arg + '_user_info', '1');
    } catch (e) {
        console.log('no session');
    }
    information_state = '1';
    var data = {};
    data['cmd'] = 'GRYSSQ';
    data['khid'] = myid;
    data['dwid'] = company_id;
    data['frompage'] = UrlEncode(HtmlDecode(frompage));
    data['talkpage'] = UrlEncode(HtmlDecode(talkpage));
    data['landpage'] = UrlEncode(HtmlDecode(landpage));
    data['channel'] = UrlEncode(channel);
    data['search'] = UrlEncode(search_engine);
    data['keyword'] = UrlEncode(keyword);
    data['talktitle'] = UrlEncode(talktitle);
    data['first_tempid'] = myfirst_tempid;
    data['stat_id'] = u_stat_id;
    data['style'] = style;
    data['time'] = new Date().getTime();
    if (lnkover == 4) {
        robot_client.sendGRYSSQ(data);
    }
    if (lnkover == 7) {
        scene_client.sendGRYSSQ(data);
    }
    if (lnkover == 6) {
        wait_client.sendGRYSSQ(data);
    }
    if (lnkover == 1)
        g_comm.SendGRYSSQ();
}