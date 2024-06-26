;
;
export function getEvent(eventArr) {
    var _this = this;
    var eventStr = '';
    switch (eventArr[0]) {
    case 'close':
        eventStr = 'onclick="' + _this.app_name + '\'\'';
        break;
    case 'talk':
        if (_this.chat_type == 0) {
            var params = '';
            if (eventArr[2] == 'group') {
                params += '&zdkf_type=3&kf=' + eventArr[3];
            } else if (eventArr[2] == 'kf') {
                var workInfo = _this.getWorkerInfo(eventArr[3]);
                params += '&zdkf_type=1&kf=' + $53.EN(workInfo['worker_id']);
            } else {
                params += '&zdkf_type=' + $53.data('zdkf_type') + '&kf=' + $53.EN($53.data('kf')) + '&kflist=' + $53.data('kflist');
                var addLinkParams = $53.data('add_link_params');
                if (addLinkParams != null)
                    params += addLinkParams;
            }
            eventStr = 'onclick="' + _this.app_name + '\'\'\'' + params + '\'';
        } else {
            if (document.getElementById('mini_chat') != null && document.getElementById('mini_chat').length > 0)
                eventStr = 'onclick="' + _this.app_name + "''''''";
            else
                eventStr = 'onclick="' + _this.app_name + "''''";
        }
        break;
    case 'qq':
        eventStr = '\'' + eventArr[1] + '\'';
        break;
    case 'tel':
        eventStr = '\'' + eventArr[1] + '\'';
        break;
    case 'msgTip':
        eventStr = '<img hidden src="" onerror="' + _this.app_name + '\'\'';
        break;
    case 'lottoShow':
        eventStr = 'onclick="' + _this.app_name + "''''";
        break;
    case 'lottoHide':
        eventStr = 'onclick="' + _this.app_name + "''''";
        break;
    case 'justNum':
        eventStr = 'onclick="' + _this.app_name + "''''";
        break;
    case 'lottoChange':
        var award_id = 0;
        if (typeof _this.icon_award.award_id != 'undefined')
            award_id = _this.icon_award.award_id;
        eventStr = 'onclick="' + _this.app_name + "'''''" + award_id + '\'';
        break;
    case 'onFocus':
        eventStr = 'onfocus="' + _this.app_name + "''''";
        break;
    case 'onBlur':
        eventStr = 'onblur="' + _this.app_name + "''''";
        break;
    default:
        break;
    }
    return eventStr;
}