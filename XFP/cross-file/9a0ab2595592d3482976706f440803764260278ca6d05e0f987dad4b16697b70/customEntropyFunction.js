;
;
export function customEntropyFunction(keys) {
    if (typeof this.options.customFunction === 'function') {
        keys.push({
            key: 'custom',
            value: this.options.customFunction()
        });
    }
    return keys;
}