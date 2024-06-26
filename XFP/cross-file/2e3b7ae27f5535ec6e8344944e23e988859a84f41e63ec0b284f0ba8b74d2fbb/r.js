export function r(t) {
  try {
    Object.keys(t).length
      ? window.localStorage.setItem(e, JSON.stringify(t))
      : window.localStorage.removeItem(e);
  } catch (t) {}
}

export function i() {
    try {
      return Object.keys(window.localStorage);
    } catch (t) {
      return [];
    }
  }