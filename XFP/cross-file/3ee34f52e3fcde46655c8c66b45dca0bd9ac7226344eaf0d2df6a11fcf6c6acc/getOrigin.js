export function getOrigin() {
    return this.loc.origin ? this.loc.origin : this.loc.protocol + '//' + this.getHostName() + (this.loc.port ? ':' + this.loc.port : '');
}
