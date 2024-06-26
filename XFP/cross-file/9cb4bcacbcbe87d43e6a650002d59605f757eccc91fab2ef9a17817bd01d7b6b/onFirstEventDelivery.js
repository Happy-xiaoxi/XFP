
export function onFirstEventDelivery(f) {
    MauticJS.postEventDeliveryQueue.push(f);
}
