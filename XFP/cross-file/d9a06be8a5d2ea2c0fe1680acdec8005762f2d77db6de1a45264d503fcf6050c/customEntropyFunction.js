
export function customEntropyFunction(keys) {
    if (typeof this.options.customFunction === 'function') {
        keys.addPreprocessedComponent({
            key: 'custom',
            value: this.options.customFunction()
        });
    }
    return keys;
}
