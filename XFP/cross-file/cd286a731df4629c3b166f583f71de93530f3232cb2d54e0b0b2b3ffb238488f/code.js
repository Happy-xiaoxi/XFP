import {injectBsdk} from './injectBsdk.js';
import {retrieveCiFileViaCors} from './retrieveCiFileViaCors.js';
import {processDdrsSvc} from './processDdrsSvc.js';
import {addScript} from './addScript.js';
import {fireToUrl} from './fireToUrl.js';
import {whitelistAssigned} from './whitelistAssigned.js';
import {populateWhitelist} from './populateWhitelist.js';
import {record} from './record.js';
import {regListen} from './regListen.js';
import {iframe} from './iframe.js';
import {prefix} from './prefix.js';
import {filter} from './filter.js';
import {post} from './post.js';
import {postEvent} from './postEvent.js';
import {postLinkTrack} from './postLinkTrack.js';
import {postEventTrack} from './postEventTrack.js';
import {postClickTrack} from './postClickTrack.js';
import {linkTrack} from './linkTrack.js';
import {eventTrack} from './eventTrack.js';
import {clickTrack} from './clickTrack.js';
import {pageEvent} from './pageEvent.js';
import {slideEvent} from './slideEvent.js';
import {sectionEvent} from './sectionEvent.js';
import {downloadEvent} from './downloadEvent.js';
import {clickEvent} from './clickEvent.js';
import {regLinkOverlay} from './regLinkOverlay.js';
import {sendIt} from './sendIt.js';
import {sendALink} from './sendALink.js';
import {sendForm} from './sendForm.js';
import {catchLinkOverlay} from './catchLinkOverlay.js';
import {invite} from './invite.js';
import {in_sample} from './in_sample.js';
import {do_sample} from './do_sample.js';
import {postData} from './postData.js';
import {getVersion} from './getVersion.js';
import {mergeFeatures} from './mergeFeatures.js';
import {getSchemeHost} from './getSchemeHost.js';
import {pause} from './pause.js';
import {random} from './random.js';
import { NolTracker } from './NolTracker.js'




NolTracker.prototype.version = "6.0.108";

NolTracker.prototype.scriptName = (function () {
  try {
    var b = document.getElementsByTagName("script");
    var c = b[b.length - 1].getAttribute("src").match(/[^\/]*$/);
  } catch (a) {}
  return c || "v60.js";
})();
NolTracker.prototype.pmap = [
  ["action", "at", 0],
  ["campaign", "ca", 1],
  ["col_depth", "cd", 0],
  ["conn_type", "ct", 0],
  ["cookies_enabled", "ck", 0],
  ["creative", "cr", 1],
  ["execution", "ce", 1],
  ["flash", "fl", 0],
  ["ip_address", "ip", 0],
  ["is_hp", "hp", 0],
  ["java_enabled", "je", 0],
  ["language", "lg", 0],
  ["ownership", "ou", 1],
  ["page_url", "si", 1],
  ["placement", "pc", 1],
  ["primary_group", "pg", 1],
  ["referrer", "rp", 1],
  ["resource", "rt", 0],
  ["result", "rn", 1],
  ["result_flag", "rf", 0],
  ["revenue", "rv", 0],
  ["sample_size", "ss", 0],
  ["screen_res", "sr", 0],
  ["stream_dur", "sd", 0],
  ["sub_resource", "st", 0],
  ["survey", "sv", 1],
  ["tag_source", "ts", 1],
  ["cookie_overwrite", "id", 0],
  ["timezone", "tz", 0],
];
NolTracker.prototype.feat = {
  check_cookie: 1,
  detect_flash: 0,
  detect_technical: 1,
  document_title: 0,
  check_fraud: 0,
  filters: undefined,
  session_cookie: 0,
  landing_page: 1,
  link_overlay: 0,
  pause_time: 500,
  auto_post: 1,
  sample_rate: 1,
  useLocalStorage: 1,
  surveys_enabled: 0,
};
NolTracker.prototype.CONST = { max_tags: 20 };


NolTracker.prototype.injectBsdk = injectBsdk;
NolTracker.prototype.retrieveCiFileViaCors = retrieveCiFileViaCors;
NolTracker.prototype.processDdrsSvc = processDdrsSvc;
NolTracker.prototype.addScript = addScript;
NolTracker.prototype.fireToUrl = fireToUrl;
NolTracker.prototype.whitelistAssigned = whitelistAssigned;
NolTracker.prototype.populateWhitelist = populateWhitelist;
NolTracker.prototype.record = record;
NolTracker.prototype.regListen = regListen;
NolTracker.prototype.iframe = iframe;
NolTracker.prototype.prefix = prefix;
NolTracker.prototype.filter = filter;
NolTracker.prototype.post = post;
NolTracker.prototype.postEvent = postEvent;
NolTracker.prototype.postLinkTrack = postLinkTrack;
NolTracker.prototype.postEventTrack = postEventTrack;
NolTracker.prototype.postClickTrack = postClickTrack;
NolTracker.prototype.linkTrack = linkTrack;
NolTracker.prototype.eventTrack = eventTrack;
NolTracker.prototype.clickTrack = clickTrack;
NolTracker.prototype.pageEvent = pageEvent;
NolTracker.prototype.slideEvent = slideEvent;
NolTracker.prototype.sectionEvent = sectionEvent;
NolTracker.prototype.downloadEvent = downloadEvent;
NolTracker.prototype.clickEvent = clickEvent;
NolTracker.prototype.regLinkOverlay = regLinkOverlay;
NolTracker.prototype.sendIt = sendIt;
NolTracker.prototype.sendALink = sendALink;
NolTracker.prototype.sendForm = sendForm;
NolTracker.prototype.catchLinkOverlay = catchLinkOverlay;
NolTracker.prototype.invite = invite;
NolTracker.prototype.in_sample = in_sample;
NolTracker.prototype.do_sample = do_sample;
NolTracker.prototype.postData = postData;
NolTracker.prototype.getVersion = getVersion;
NolTracker.prototype.mergeFeatures = mergeFeatures;
NolTracker.prototype.getSchemeHost = getSchemeHost;
NolTracker.prototype.pause = pause;
NolTracker.prototype.random = random;

if (!Array.prototype.push) {
  Array.prototype.push = function () {
    if (arguments) {
      for (var a = 0; a < arguments.length; a++) {
        this[this.length] = arguments[a];
      }
    }
  };
}
if (typeof _rsCI == "string") {
  function _rsEvent() {
    v52v53_trac.eventTrack.apply(v52v53_trac, arguments);
  }
  function _rsLinkTrack() {
    v52v53_trac.linkTrack.apply(v52v53_trac, arguments);
  }
  function _rsClick() {
    v52v53_trac.clickTrack.apply(v52v53_trac, arguments);
  }
  var _rsCC = typeof _rsCC !== "undefined" ? _rsCC : "1";
  var _rsCG = _rsCG || _rsCG == "" ? _rsCG : "0";
  var _rsDN = _rsDN ? _rsDN.split("//")[1].split(".")[0] : "secure-us";
  var v52v53_pvar = { cid: _rsCI, content: _rsCG, server: _rsDN, _rsCC: _rsCC };
  var v52v53_trac = nol_t(v52v53_pvar);
  v52v53_trac.record().post();
}
