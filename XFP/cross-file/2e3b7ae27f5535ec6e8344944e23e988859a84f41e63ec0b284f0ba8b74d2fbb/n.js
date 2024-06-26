export function n() {
    try {
      var t = window.localStorage.getItem(e);
      return t ? JSON.parse(t) : null;
    } catch (t) {
      return null;
    }
  }