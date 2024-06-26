export function sendBigdataLogs() {
  if (navigator.sendBeacon) {
    let tmpLogs = window.bigdataLogs.splice(-20);
    if (tmpLogs.length > 0) {
      let logsMap = {};
      for (let j in tmpLogs) {
        let obj = tmpLogs[j];
        if (obj) {
          let u = obj.url;
          let log_list = logsMap[u];
          if (log_list) {
            log_list.push(obj.log);
          } else {
            log_list = [];
            log_list.push(obj.log);
            logsMap[u] = log_list;
          }
        }
      }
      for (let url in logsMap) {
        let logLine = JSON.stringify(logsMap[url]);
        navigator.sendBeacon(url, logLine);
      }
    }
  }
  setTimeout("sendBigdataLogs()", 1000);
}