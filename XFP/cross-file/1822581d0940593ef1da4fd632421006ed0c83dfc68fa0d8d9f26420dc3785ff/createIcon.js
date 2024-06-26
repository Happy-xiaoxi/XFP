;
;
export function createIcon() {
    var _this = this;
    $53.creElm({
        'style': 'position:fixed;display:none;font-family:Microsoft YaHei,Arial;z-index:1000000;width:auto;height:auto',
        'id': 'mobile_icon_div',
        'innerHTML': _this.isOnline ? _this.on_content : _this.off_content
    }, 'div');
    _this.iconElm = document.getElementById('mobile_icon_div');
}