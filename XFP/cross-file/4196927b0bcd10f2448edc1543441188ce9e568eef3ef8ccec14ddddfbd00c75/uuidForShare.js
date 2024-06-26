export function uuidForShare() {
  let idx = uuid();
  return idx.substr(0, 10);
}