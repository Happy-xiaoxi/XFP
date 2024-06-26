export function makePingRequest() {
  this._pingStartTime = new Date().getTime();
  var a =
    0 == this._timeData.length
      ? { ctd: 0, cl: 0 }
      : this._timeData[this._timeData.length - 1];
  a.ct = this._pingStartTime;
  this.Core.sendData(this.SettingsObject.PingUrl, a);
}