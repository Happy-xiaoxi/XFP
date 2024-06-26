;
;
export function talk(params) {
    var _this = this;
    _this.setSession(_this.companyId + '_invite_times', 0);
    location.href = _this.getOpenUrl() + params;
}