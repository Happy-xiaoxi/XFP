export function userAgentKey(keys) {
    if (!this.options.excludeUserAgent) {
        keys.push({
            key: 'user_agent',
            value: this.getUserAgent()
        });
    }
    console.log("ua")
    return keys;
}