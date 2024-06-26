export function has() {
    return hstc.utils.isDefined(this.context.getNavigator().cookieEnabled) || 'cookie' in this.context.getDocument() && this.context.getDocument().cookie.length > 0;
}
