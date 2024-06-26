export function pageUrl() {
    return p.inXOIframe() ? g.referrer : e.location.href;
}
