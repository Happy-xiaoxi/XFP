export function getTime() {
    var dd = new Date();
    return Math.floor(dd.getTime() / 1000);
}
