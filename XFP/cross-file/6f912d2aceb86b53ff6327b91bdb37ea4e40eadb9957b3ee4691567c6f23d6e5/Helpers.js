export function Helpers() {
  //NO QA PLS
  this.post = function (url, jsonData, callback) {
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
  };
  this.extend = function (out) {
    out = out || {};
    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];
      if (!obj) continue;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === "object")
            out[key] = this.extend(out[key], obj[key]);
          else out[key] = obj[key];
        }
      }
    }
    return out;
  };
  this.jsonToParams = function (json) {
    return Object.keys(json)
      .map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(json[k]);
      })
      .join("&");
  };
  // http://stackoverflow.com/a/8809472
  this.generateUUID = function () {
    var d = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == "x" ? r : (r & 3) | 8).toString(16);
      }
    );
    return uuid;
  };
  this.isNull = function (target) {
    return target === null || target === undefined;
  };
}