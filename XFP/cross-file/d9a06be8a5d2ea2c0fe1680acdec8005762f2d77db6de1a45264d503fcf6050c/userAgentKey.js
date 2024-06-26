
export function userAgentKey(keys) {
    if (!this.options.excludeUserAgent) {
        keys.addPreprocessedComponent({
            key: 'user_agent',
            value: this.getUserAgent()
        });
    }
    return keys;
}
