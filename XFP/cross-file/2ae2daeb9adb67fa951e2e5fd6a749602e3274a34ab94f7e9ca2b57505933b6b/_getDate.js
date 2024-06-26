export function getDate() {
    var currentdate = new Date();
    month = currentdate.getMonth() + 1;
    if (month < 10) {
      month = "0" + month;
    }
    day = currentdate.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    hours = currentdate.getHours();
    if (hours < 10) {
      hours = "0" + hours;
    }
    minutes = currentdate.getMinutes();
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    second = currentdate.getSeconds();
    if (second < 10) {
      second = "0" + second;
    }
    var datetime =
      currentdate.getFullYear() +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      second;
    return datetime;
  }