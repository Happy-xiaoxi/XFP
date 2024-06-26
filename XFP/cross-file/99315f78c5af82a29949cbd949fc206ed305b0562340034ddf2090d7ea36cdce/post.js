export function post(url, jsonData, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (
      request.readyState === 4 &&
      (request.status === 200 || request.status === 400)
    ) {
      callback();
    }
  };
  request.open("POST", url, true);
  request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  request.send(jsonData);
}