export function getCurrentHref(t) {
    return t ? this.getOrigin().toLowerCase() + t : this.loc.href.toLowerCase();
}
