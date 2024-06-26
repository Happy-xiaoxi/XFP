export function objectToQuery(B) {
  let args = "";
  for (let i in B) {
    if (args !== "") {
      args += "&";
    }
    args += i + "=" + encodeURIComponent(B[i]);
  }
  return args;
}