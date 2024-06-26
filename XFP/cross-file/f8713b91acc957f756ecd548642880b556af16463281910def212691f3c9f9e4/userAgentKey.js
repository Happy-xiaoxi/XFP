export function userAgentKey(e) {
    return this.options.excludeUserAgent || e.addPreprocessedComponent({
        key: 'user_agent',
        value: getUserAgent()
    }), e;
}

export function getUserAgent() {
    return navigator.userAgent;
}
