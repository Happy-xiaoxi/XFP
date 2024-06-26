import { isRegExp } from "./isRegExp.js";
import { setCookie } from "./setCookie.js";
import { getCookie } from "./getCookie.js";
import { hasCookie } from "./hasCookie.js";
import { lsAvailable } from "./lsAvailable.js";
import { listCookie } from "./listCookie.js";
import { sendData } from "./sendData.js";
import { performAjaxPost } from "./performAjaxPost.js";
import { performSendBeacon } from "./performSendBeacon.js";
import { addEventSimple } from "./addEventSimple.js";
import { removeEventSimple } from "./removeEventSimple.js";
import { isIE } from "./isIE.js";
import { saveInLocalStorage } from "./saveInLocalStorage.js";
import { getFromLocalStorage } from "./getFromLocalStorage.js";
import { removeFromLocalStorage } from "./removeFromLocalStorage.js";
import { sortByProperty } from "./sortByProperty.js";
import { createClientInfo } from "./createClientInfo.js";
import { runExperimentalFP } from "./runExperimentalFP.js";
import { runMediaDeviceInfo } from "./runMediaDeviceInfo.js";
import { createAudioFp } from "./createAudioFp.js";
import { msieDetect } from "./msieDetect.js";
import { CreateCanvasFP } from "./CreateCanvasFP.js";
import { CreateElement } from "./CreateElement.js";
import { encode } from "./encode.js";
import { utf8Encode } from "./utf8Encode.js";
import { SHA1 } from "./SHA1.js";
import { sendMessageToExtension } from "./sendMessageToExtension.js";
import { postMessage } from "./postMessage.js";
import { sendScriptError } from "./sendScriptError.js";
import {init} from './init.js';
import {searchForVideosInWindow} from './searchForVideosInWindow.js';
import {searchForFlowPlayerPlayersInWindow} from './searchForFlowPlayerPlayersInWindow.js';
import {searchForJWPlayerPlayersInWindow} from './searchForJWPlayerPlayersInWindow.js';
import {searchForVideoJSPlayersInWindow} from './searchForVideoJSPlayersInWindow.js';
import {Start} from './Start.js';
import {listenForExtensionMessages} from './listenForExtensionMessages.js';
import {handleExtensionRequest} from './handleExtensionRequest.js';
import {createStartData} from './createStartData.js';
import {processActions} from './processActions.js';
import {sendVideoError} from './sendVideoError.js';
import {trackFP} from './trackFP.js';
import {trackJW} from './trackJW.js';
import {trackVideoJS} from './trackVideoJS.js';
import {getVideoData} from './getVideoData.js';
import {measurePingTimes} from './measurePingTimes.js';
import {makePingRequest} from './makePingRequest.js';
import {HandlePing} from './HandlePing.js';
import {showSurvey} from './showSurvey.js';
import {startIntervalFunctions} from './startIntervalFunctions.js';
import {stopIntervalFunctions} from './stopIntervalFunctions.js';
import {emptyTimeBuffer} from './emptyTimeBuffer.js';
import {SendTimeOnPageBeacon} from './SendTimeOnPageBeacon.js';
import {createCurrentTimeOnPageObject} from './createCurrentTimeOnPageObject.js';
import {getTimeOnPageDataTemplate} from './getTimeOnPageDataTemplate.js';
import {SaveTimeOnPage} from './SaveTimeOnPage.js';
import {processTimeOnPageData} from './processTimeOnPageData.js';
import {getTimeOnPageData} from './getTimeOnPageData.js';
import {initInteractionEvents} from './initInteractionEvents.js';
import {initPanelElements} from './initPanelElements.js';
import {CreateIframe} from './CreateIframe.js';
import {submitData} from './submitData.js';
import {HandleJsonp} from './HandleJsonp.js';
import {onAjaxDataUpdate} from './onAjaxDataUpdate.js';
import {cloneAjaxDataForStressTestScript} from './cloneAjaxDataForStressTestScript.js';
import {prepareAjaxData} from './prepareAjaxData.js';
import {trackVideos} from './trackVideos.js';

var DotmetricsJSON;
"object" !== typeof DotmetricsJSON && (DotmetricsJSON = window.JSON);
// DotmetricsJSON = window.JSON;
function z(w) {
  this.foundVideoPlayers = [];
  this.SearchForNewVideoPlayersInterval = 5e3;
  this.newVideoFoundCallback = w;
  this.init = init;
  this.trackVideos = trackVideos;
  this.searchForVideosInWindow = searchForVideosInWindow;
  this.searchForFlowPlayerPlayersInWindow = searchForFlowPlayerPlayersInWindow;
  this.searchForJWPlayerPlayersInWindow = searchForJWPlayerPlayersInWindow;
  this.searchForVideoJSPlayersInWindow = searchForVideoJSPlayersInWindow;
}
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
var y = new (function () {
  this.SettingsObject = window.DotMetricsSettings;
  this.boundBeacon = navigator.sendBeacon.bind(navigator);
  this.Core = new A(this.SettingsObject);
  this.EnterPageEventData = null;
  this.TimeOnPage = 0;
  this.LastSentTimeOnPage = -1;
  this.TimeBuffer = 0;
  this.TimeTreshold = 18e5;
  this.surveyLink = this.LoadTimeStamp = "";
  this.DeviceGuidId = this.UserId = this.DeviceId = null;
  this.deviceInfoSent = !1;
  this.postIndex = 0;
  this.surveyDone = this.Done = !1;
  this.ajaxTimer = null;
  this.panel = !1;
  this.panelHouseholdId = this.panelUserId = null;
  this.videos = {};
  this.foundVideoPlayers = [];
  this.SaveTimeOnPageInterval = 1e4;
  this.MaxTimeOnPageItemsInLocalStorage = 32;
  this.fbInstantArticle = !1;
  this.lastInteraction =
    this.saveTimeOnPageIntervalFunctionId =
    this.timeBufferIntervalInstanceId =
      null;
  this.domainCookie = this.SettingsObject.DomainCookie;

  this._timeData = [];
  this._requestedPingsNum = this._currentRequestNum = 0;
  this._onPingMeasurmentsDone = null;
  this._pingStartTime = 0;
  this.Start = Start;
  this.listenForExtensionMessages = listenForExtensionMessages;
  this.handleExtensionRequest = handleExtensionRequest;
  this.createStartData = createStartData;
  this.processActions = processActions;
  this.sendVideoError = sendVideoError;
  this.trackFP = trackFP;
  this.trackJW = trackJW;
  this.trackVideoJS = trackVideoJS;
  this.getVideoData = getVideoData;
  this.measurePingTimes = measurePingTimes;
  this.makePingRequest = makePingRequest;
  this.HandlePing = HandlePing;
  this.showSurvey = showSurvey;
  this.startIntervalFunctions = startIntervalFunctions;
  this.stopIntervalFunctions = stopIntervalFunctions;
  this.emptyTimeBuffer = emptyTimeBuffer;
  this.SendTimeOnPageBeacon = SendTimeOnPageBeacon;
  this.createCurrentTimeOnPageObject = createCurrentTimeOnPageObject;
  this.getTimeOnPageDataTemplate = getTimeOnPageDataTemplate;
  this.SaveTimeOnPage = SaveTimeOnPage;
  this.processTimeOnPageData = processTimeOnPageData;
  this.getTimeOnPageData = getTimeOnPageData;
  this.initInteractionEvents = initInteractionEvents;
  this.initPanelElements = initPanelElements;
  this.CreateIframe = CreateIframe;
  this.submitData = submitData;
  this.HandleJsonp = HandleJsonp;
  this.onAjaxDataUpdate = onAjaxDataUpdate;
  this.cloneAjaxDataForStressTestScript = cloneAjaxDataForStressTestScript;
  this.prepareAjaxData = prepareAjaxData;
  this.trackVideos = trackVideos;
  var w = !1;

})();
window.DotMetricsObj = {
  onAjaxDataUpdate: function () {
    y.onAjaxDataUpdate();
  },
  HandleJsonp: function (w) {
    y.HandleJsonp(w);
  },
  HandlePing: function (w) {
    y.HandlePing(w);
  },
};
top.location == self.location &&
  setTimeout(function () {
    y.Start();
  }, 100);
