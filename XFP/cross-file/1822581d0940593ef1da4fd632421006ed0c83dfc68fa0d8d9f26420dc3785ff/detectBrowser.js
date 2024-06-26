;
;
export function detectBrowser() {
    var ret = 'ie6';
    var user_agent = navigator.userAgent;
    if (user_agent.indexOf('compatible') > -1) {
        if (user_agent.indexOf('MSIE 6.0') > -1) {
            ret = 'ie6';
        } else if (user_agent.indexOf('MSIE 7.0') > -1) {
            ret = 'ie7';
        } else if (user_agent.indexOf('MSIE 8.0') > -1) {
            ret = 'ie8';
        }
        if (user_agent.indexOf('360') > -1) {
            ret = '360';
        }
    } else if (user_agent.indexOf('Gecko') > -1) {
        ret = 'firefox';
    }
    if (user_agent.indexOf('TheWorld') > -1) {
        ret = 'TheWorld';
    }
    return ret;
}