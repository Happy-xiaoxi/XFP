;
;
export function setPosition() {
    var _this = this;
    var icon_left = _this.isOnline ? _this.on_left : _this.off_left;
    var icon_bottom = 100 - (_this.isOnline ? _this.on_top : _this.off_top);
    if (_this.m_icon_type == '7') {
        icon_left = 0;
        icon_bottom = 0;
    }
    var iconElm = _this.iconElm;
    if (iconElm.firstChild.hasAttribute('53kf_icon_versions')) {
        var client_width = document.body.clientWidth || document.documentElement.clientWidth;
        iconElm.firstChild.style.fontSize = 10 * client_width / 375 + 'px';
    }
    var icon_width, icon_height;
    if (iconElm.firstChild.id == 'lotto_icon') {
        icon_width = iconElm.firstChild.style.width;
        icon_height = iconElm.firstChild.style.height;
    } else {
        icon_width = iconElm.offsetWidth == 0 ? iconElm.firstChild.offsetWidth : iconElm.offsetWidth;
        icon_height = iconElm.offsetHeight == 0 ? iconElm.firstChild.offsetHeight : iconElm.offsetHeight;
    }
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (iconElm.firstChild) {
        iconElm.firstChild.style.position = 'fixed';
        iconElm.firstChild.style.marginLeft = '0px';
        iconElm.firstChild.style.marginTop = '0px';
        iconElm.firstChild.style.height = icon_height + 'px';
        iconElm.firstChild.style.left = (w - icon_width) * (icon_left / 100) + 'px';
        iconElm.firstChild.style.bottom = (h - icon_height) * (icon_bottom / 100) + 'px';
    }
    if (typeof _this.icon_award.activity_name != 'undefined') {
        _this.lot.positionIcon(_this.lotto_left, _this.lotto_top);
    }
}