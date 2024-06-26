export function createXHR () {
  return this.standardXHR() || this.activeXHR();
}