
export function beforeFirstEventDelivery(f) {
    MauticJS.preEventDeliveryQueue.push(f);
}
