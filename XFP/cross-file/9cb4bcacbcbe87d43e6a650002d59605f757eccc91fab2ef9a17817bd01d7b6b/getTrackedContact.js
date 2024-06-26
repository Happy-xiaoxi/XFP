var MauticJS = MauticJS || {};

export function getTrackedContact() {
    if (MauticJS.mtcSet) {
        return;
    }
    MauticJS.makeCORSRequest('GET', MauticJS.contactIdUrl, {}, function (response, xhr) {
        MauticJS.setTrackedContact(response);
    });
}
