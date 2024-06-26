export function K() {
  var a = {},
    b = G.google_tag_data;
  G.google_tag_data = void 0 === b ? a : b;
  return G.google_tag_data;
}