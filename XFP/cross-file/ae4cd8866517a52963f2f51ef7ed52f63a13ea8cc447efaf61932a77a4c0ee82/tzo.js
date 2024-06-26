
export function tzo(keys) {
    keys.data.push({
        key: 'timezone_offset',
        value: new Date().getTimezoneOffset()
    });
    return keys;
}
