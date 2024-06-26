export function uuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
    let r = (Math.random() * 16) | 0,
      v = a === "x" ? r : (r & 3) | 8;
    return v.toString(16);
  });
}