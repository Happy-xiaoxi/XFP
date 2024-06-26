;
;
export function setMsgTip(obj) {
    var _this = this;
    var tipElm = obj.parentNode;
    tipElm.style.display = 'none';
    var msg_tip_count = 0;
    _this._53Api.push('msg_callback', function () {
        tipElm.style.display = 'block';
        msg_tip_count += 1;
        if (_this.m_icon_type == '7') {
            tipElm.innerHTML = 'Ϣ ' + msg_tip_count;
        } else {
            tipElm.innerHTML = msg_tip_count;
        }
    });
    if (typeof icon_msg_tip_hide != 'function') {
        window.icon_msg_tip_hide = function () {
            tipElm.style.display = 'none';
            msg_tip_count = 0;
            if (_this.m_icon_type == '7') {
                tipElm.innerHTML = 'Ϣ ' + msg_tip_count;
            } else {
                tipElm.innerHTML = msg_tip_count;
            }
        };
    }
}