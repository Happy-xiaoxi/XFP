export function LocalJar() {
  this.setData = function (name, value, ttl) {
    var expiredDate = new Date();
    if (ttl) {
      expiredDate.setMinutes(expiredDate.getMinutes() + ttl);
    } else {
      expiredDate.setFullYear(expiredDate.getFullYear() + 2);
    }
    window.localStorage.setItem(name, [value, expiredDate]);
  };
  this.getData = function (name) {
    var values = window.localStorage.getItem(name);
    if (!values) {
      return null;
    }
    var splittedValues = values.split(",");
    var expiredDate = splittedValues.splice(splittedValues.length - 1)[0];
    var value = splittedValues.join(",");
    if (new Date() > new Date(expiredDate)) {
      this.deleteData(name);
      return null;
    }
    return value;
  };
  this.deleteData = function (name) {
    return window.localStorage.removeItem(name);
  };
}