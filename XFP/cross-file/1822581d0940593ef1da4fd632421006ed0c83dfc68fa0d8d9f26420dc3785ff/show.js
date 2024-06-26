;
;
export function show() {
    var _this = this;
    _this.iconElm.style.display = 'block';
    if (_this.iconElm.innerHTML != '')
        _this.setPosition();
}