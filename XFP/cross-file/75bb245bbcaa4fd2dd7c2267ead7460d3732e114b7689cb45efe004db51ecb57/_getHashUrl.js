export function getHashUrl(a) {
    var b = location.hash;
    return b.substr(b.indexOf(a)).split("&")[0].split("=")[1] || null;
  }