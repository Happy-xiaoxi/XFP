

export function appendTrackedContact(data) {
    if (window.localStorage) {
        if (mtcId = localStorage.getItem('mtc_id')) {
            data['mautic_device_id'] = localStorage.getItem('mautic_device_id');
        }
    }
    return data;
}
