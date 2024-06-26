;
;
export function formatContent(content) {
    var _this = this;
    content = content.replace(/\.\.\//g, _this.talkHost + '/');
    content = content.replace(/class=".*?"/g, '');
    content = content.replace(/event="\{(.*?)\}"/g, function (match, contents) {
        return _this.getEvent(contents.split('|'));
    });
    if (typeof _this.icon_award.award_name != 'undefined') {
        content = content.replace(/{jh6d_award_name}/g, _this.icon_award.award_name);
    }
    return content;
}