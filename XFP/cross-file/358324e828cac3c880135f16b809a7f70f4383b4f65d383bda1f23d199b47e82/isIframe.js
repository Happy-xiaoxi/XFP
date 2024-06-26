export function isIframe() {
    return window !== window.top ? 1 : 0;
}
