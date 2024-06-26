export function customEntropyFunction(e) {
    return 'function' == typeof this.options.customFunction && e.addPreprocessedComponent({
        key: 'custom',
        value: this.options.customFunction()
    }), e;
}
