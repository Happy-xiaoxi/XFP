import {UrlEncode} from './UrlEncode.js'
import {HtmlDecode} from './HtmlDecode.js'
import {UBBEncode} from './UBBEncode.js';
var isSendLNK = false;
var sendLNKTimes = 0;
var prompt_guide_timer = 0;
var company_id = 'test', guest_id = '10086', style, style_id = 5214, remote_port = 80;
var m_refreshTimer = 0;
var origin_type = 0;
var origin_time = 0;




















export function sendLNK() {
    if (fk_debug) {
        $.ajax({
            type: 'POST',
            url: http_pro + host + '/tmp_debug.php',
            data: {
                action: 'webcompany.js-sendLNK',
                from: 'fk',
                cid: company_id
            },
            success: function (data) {
            }
        });
    }
    if (isSendLNK)
        return;
    if (is_get_guest_id == '1' && sendLNKTimes < 12) {
        sendLNKTimes++;
        setTimeout(function () {
            sendLNK();
        }, 500);
        return;
    }
    if (prompt_guide_timer)
        clearTimeout(prompt_guide_timer);
    try {
        wait_client.closeLink();
    } catch (e) {
    }
    try {
        task_robot_obj.backRobotGuide();
        robot_client.closeLink(true);
    } catch (e) {
    }
    var now_time = Date.parse(new Date()) / 1000;
    if (now_time - lnkopentime > 540) {
        refreshLNK();
        return;
    }
    isSendLNK = true;
    g_comm.SetKhInfo(myid, UrlEncode(HtmlDecode(frompage)), UrlEncode(HtmlDecode(talkpage)), UrlEncode(talktitle), UrlEncode(lnk_param), tfrom, search_engine, UrlEncode(keyword), UrlEncode(HtmlDecode(landpage)));
    g_comm.OpenLink(company_id, worker_ids, 0, UrlEncode(UBBEncode(conn_prompt)));
    m_refreshTimer = setTimeout('refreshLNK()', 20000);
    if (origin_type == '1') {
        sendkafka('type', '1', '-1', origin_time);
        origin_type = 0;
    }
}