/* sovrn_stndalne_beacon v0.0.1 
Updated : 2023-07-31 */
import {doNotTrack} from './doNotTrack.js';
import {readCookie} from './readCookie.js';
import {sendBeacon} from './sendBeacon.js';
import {getParams} from './getParams.js';
import {getScriptTag} from './getScriptTag.js';
import {createiFrame} from './createiFrame.js';
import {getBeaconURL} from './getBeaconURL.js';
import {sovrnReady} from './sovrnReady.js';
import {configureConsents} from './configureConsents.js';
import {configureCcpa} from './configureCcpa.js';
import {configureGpp} from './configureGpp.js';
import {callCmpFromSafeframe} from './callCmpFromSafeframe.js';
import {callCmpWhileInIframe} from './callCmpWhileInIframe.js';
import {lookupIabConsent} from './lookupIabConsent.js';
import {lookupCcpaConsent} from './lookupCcpaConsent.js';
import {lookupIabConsentForGpp} from './lookupIabConsentForGpp.js';
import {cmpClient} from './cmpClient.js';

(window.sovrn = window.sovrn || {}), (sovrn.auction = sovrn.auction || {});
let beaconFlag = !1,
  cmpVersion = 0;
(sovrn.auction = {

  cmpCallbacks: {},
  doNotTrack:doNotTrack,
  readCookie:readCookie,
  sendBeacon:sendBeacon,
  getParams:getParams,
  getScriptTag:getScriptTag,
  createiFrame:createiFrame,
  getBeaconURL:getBeaconURL,
  sovrnReady:sovrnReady,
  cmpClient:cmpClient,
  configureConsents:configureConsents,
  configureCcpa:configureCcpa,
  configureGpp:configureGpp,
  callCmpFromSafeframe:callCmpFromSafeframe,
  callCmpWhileInIframe:callCmpWhileInIframe,
  lookupIabConsent:lookupIabConsent,
  // consentDataCallback:consentDataCallback,
  // vendorConsentsCallback:vendorConsentsCallback,
  lookupCcpaConsent:lookupCcpaConsent,
  lookupIabConsentForGpp:lookupIabConsentForGpp

}),
  sovrn.auction.sovrnReady(function () {
    !1 === sovrn.auction.doNotTrack() && sovrn.auction.configureConsents();
  });
