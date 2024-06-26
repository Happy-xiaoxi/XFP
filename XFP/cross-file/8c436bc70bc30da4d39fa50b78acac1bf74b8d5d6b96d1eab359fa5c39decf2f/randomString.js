export default function randomString(length) {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ".split("");
  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}