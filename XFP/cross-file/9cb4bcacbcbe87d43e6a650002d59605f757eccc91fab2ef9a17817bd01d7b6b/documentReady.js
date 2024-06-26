


export function documentReady(f) {
    /in/.test(document.readyState) ? setTimeout(function () {
        MauticJS.documentReady(f);
    }, 9) : f();
}
