export function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else var expires = "";
  value = value.replace(/\=/g, "~");
  document.cookie = name + "=" + escape(value) + expires + "; path=/";
}