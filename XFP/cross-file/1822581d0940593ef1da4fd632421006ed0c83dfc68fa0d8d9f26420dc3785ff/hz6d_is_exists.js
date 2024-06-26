;
;
export function hz6d_is_exists(html, kf) {
    if (typeof hz6d_showContent == 'function' && hz6d_showContent && typeof hz6d_ID('hz6d_chatting_iframes') != undefined) {
        hz6d_showContent(kf);
    } else {
        eval(decodeURIComponent(html));
    }
}