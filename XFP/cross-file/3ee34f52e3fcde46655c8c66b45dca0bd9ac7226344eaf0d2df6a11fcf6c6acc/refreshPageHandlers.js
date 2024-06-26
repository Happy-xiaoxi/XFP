export function refreshPageHandlers() {
    for (var t = 0; t < this.clickSelectors.length; t++)
        this._resetClickHandler(this.clickSelectors[t]);
}
