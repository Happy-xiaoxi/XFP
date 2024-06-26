export function advcakeOrder(data) {
    try {
        if (parseInt(data.pageType) === 6) {
            var order = {
                id: data.leadInfo.id,
                totalPrice: data.leadInfo.totalPrice,
                leadName: data.leadInfo.name,
                trackId: advcake_int.getTrackId(),
                url: advcake_int.getTrackUrl(),
                localTime: advcake_helper.getDate(),
                clientType: data.user.type,
                email: data.user.email,
                dataAdvcake: JSON.stringify(data)
            };
            if (data.leadInfo.hasOwnProperty('coupon')) {
                order.coupon = data.leadInfo.coupon;
            }
            if (data.leadInfo.hasOwnProperty('tax')) {
                order.tax = data.leadInfo.tax;
            }
            if (data.leadInfo.hasOwnProperty('shipping')) {
                order.shipping = data.leadInfo.shipping;
            }
            advcake_helper.post(advcake_int.postbackUrl, order);
        }
    } catch (e) {
    }
}
