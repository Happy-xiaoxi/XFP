
function A(w) {
  this.formPostCount = this.pingSendCount = this.dataSendCount = 0;
  this.callLimit = 10;
  this.SettingsObject = w;
  var a = !1;
  this.experimentalFP = this.clientInfoTimingData = this.clientInfo = null;
  this.isRegExp = isRegExp;
  this.setCookie = setCookie;
  this.getCookie = getCookie;
  this.hasCookie = hasCookie;
  this.lsAvailable = lsAvailable;
  this.listCookie = listCookie;
  this.sendData = sendData;
  this.performAjaxPost = performAjaxPost;
  this.performSendBeacon = performSendBeacon;
  this.addEventSimple = addEventSimple;
  this.removeEventSimple = removeEventSimple;
  this.isIE = isIE;
  this.saveInLocalStorage = saveInLocalStorage;
  this.getFromLocalStorage = getFromLocalStorage;
  this.removeFromLocalStorage = removeFromLocalStorage;
  this.sortByProperty = sortByProperty;
  this.createClientInfo = createClientInfo;
  this.runExperimentalFP = runExperimentalFP;
  this.runMediaDeviceInfo = runMediaDeviceInfo;
  this.createAudioFp = createAudioFp;
  this.msieDetect = msieDetect;
  this.CreateCanvasFP = CreateCanvasFP;
  this.CreateElement = CreateElement;
  this.encode = encode;
  this.utf8Encode = utf8Encode;
  this.SHA1 = SHA1;
  this.sendMessageToExtension = sendMessageToExtension;
  this.postMessage = postMessage;
  this.sendScriptError = sendScriptError;
}