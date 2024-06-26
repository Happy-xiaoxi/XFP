
export function advcakeEvents(data) {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
        return;
    }
    if (typeof window.advcakeCorrection === 'function') {
        data = window.advcakeCorrection(data);
    }
    if (typeof data !== 'undefined') {
        if (typeof window.advcakeOrder === 'function') {
            window.advcakeOrder(data);
        }
    }
}
