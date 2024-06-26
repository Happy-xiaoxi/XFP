export function tyntIds() {
    return this.unique(Tynt).join('~');
}
