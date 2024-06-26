export function testLocalStorage() {
  try {
    window.localStorage.setItem("test", 1);
    window.localStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
}