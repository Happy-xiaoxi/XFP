import {offToTalk} from './offToTalk.js';
var m_isShowInertactMenu = false;


export function robotToTalk() {
    robot_menu.menuHide();
    m_isShowInertactMenu = false;
    offToTalk('robot');
}