;
;
export function hz6d_is_exist(html) {
    if (typeof hz6d_showContent == 'function' && hz6d_showContent && typeof hz6d_ID('hz6d_chatting_iframes') != undefined) {
        hz6d_showContent();
    } else {
        var new_clic = html.replace(/#liyc#/g, '\'');
        eval(decodeURIComponent(new_clic));
    }
}