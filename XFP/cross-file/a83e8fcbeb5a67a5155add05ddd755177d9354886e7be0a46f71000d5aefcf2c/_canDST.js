 export function _canDST() {
    var e = new Date(this.getFullYear(), 0, 1),
      t = new Date(this.getFullYear(), 6, 1);
    return e.getTimezoneOffset() != t.getTimezoneOffset();
  }