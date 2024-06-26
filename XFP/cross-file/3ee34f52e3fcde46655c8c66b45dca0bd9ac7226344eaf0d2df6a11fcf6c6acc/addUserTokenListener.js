
export function addUserTokenListener(t) {
    this.utk && this.utk.visitor && t(this.utk.visitor);
    this.userTokenListeners.push(t);
}
