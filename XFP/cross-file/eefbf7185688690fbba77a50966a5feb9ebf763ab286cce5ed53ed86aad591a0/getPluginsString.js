;
;
export function getPluginsString() {
    return this.isIE() && this.ie_activex ? this.getIEPluginsString() : this.getRegularPluginsString();
}