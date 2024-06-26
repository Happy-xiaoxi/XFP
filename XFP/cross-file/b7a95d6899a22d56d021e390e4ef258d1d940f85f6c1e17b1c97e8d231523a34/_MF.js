export function F(e) {
  var t = e.match(
    /iPod|iPhone|iPad|Android|BlackBerry|Windows Phone OS|webOS|Symbian|mobile/g
  );
  if (t && t.length > 0) return t[0];
}