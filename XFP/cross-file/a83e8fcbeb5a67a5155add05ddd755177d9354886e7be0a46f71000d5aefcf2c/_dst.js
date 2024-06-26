export function _dst() {
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
  }