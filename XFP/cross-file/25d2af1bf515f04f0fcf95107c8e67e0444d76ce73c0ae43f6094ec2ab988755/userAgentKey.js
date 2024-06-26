export function userAgentKey(e) {
    return this.options.excludeUserAgent || e.addPreprocessedComponent({
        key: 'user_agent',
        value: this.getUserAgent()
    }), e;
}
