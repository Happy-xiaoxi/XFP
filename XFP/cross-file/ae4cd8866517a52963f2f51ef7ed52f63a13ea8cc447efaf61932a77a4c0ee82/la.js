
export function la(keys) {
    keys.data.push({
        key: 'language',
        value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || ''
    });
    return keys;
}
