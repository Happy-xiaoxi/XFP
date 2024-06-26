export function getHeadless() {
  return this.rB().length > 0
    ? 1
    : navigator.userAgent.toLocaleLowerCase().indexOf("headless") > -1
    ? 1
    : 0;
}