export function print(input) {
  var me = this;
  return me.ln[me.language] && me.ln[me.language][input.toLowerCase()]
    ? me.ln[me.language][input.toLowerCase()]
    : input;
}