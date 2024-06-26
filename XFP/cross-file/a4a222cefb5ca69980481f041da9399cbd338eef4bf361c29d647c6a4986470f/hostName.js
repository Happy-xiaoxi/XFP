export function hostName(urlString) {
  try {
    var url = new URL(urlString);
    return url.hostname;
  } catch (e) {}
}