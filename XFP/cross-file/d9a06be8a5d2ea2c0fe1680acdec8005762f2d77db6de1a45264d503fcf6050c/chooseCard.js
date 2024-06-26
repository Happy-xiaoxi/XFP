import {UrlEncode} from './UrlEncode.js'
import {UBBEncode} from './UBBEncode.js'
import {showSceneGuide} from './showSceneGuide.js';
export function chooseCard(point, step, obj) {
    $(obj).parent().hide();
    var msg = $(obj).html();
    display_fk_msg(msg);
    scene_client.sendRoa(UrlEncode(UBBEncode(msg)), step, 'g', point);
    showSceneGuide(point);
}