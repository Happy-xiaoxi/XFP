export function W(a) {
  return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)");
}