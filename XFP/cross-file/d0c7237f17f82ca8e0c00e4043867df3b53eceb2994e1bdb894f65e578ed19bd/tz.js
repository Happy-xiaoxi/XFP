

export function tz(keys) {
    var value = null;
    if (window.Intl && window.Intl.DateTimeFormat) {
        value = new window.Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    keys.data.push({
        key: 'timezone',
        value: value
    });
    return keys;
}
