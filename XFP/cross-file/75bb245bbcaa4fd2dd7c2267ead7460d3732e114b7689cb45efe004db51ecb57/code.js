/*! jssdk 2023-10-02 10:01, 4f0eca16edf7ed30db42128420e4c94ae72045ad */

import { b } from './b.js'
import { a } from './a.js';
import {_createBait} from './__createBait.js';
import {_destroyBait} from './__destroyBait.js';
import {_checkBait} from './__checkBait.js';
import {getDomain} from './_getDomain.js';
import {setBannerSettings} from './_setBannerSettings.js';
import {ready} from './_ready.js';
import {onIFrameLoadHandler} from './_onIFrameLoadHandler.js';
import {setPerformanceTrackPixel} from './_setPerformanceTrackPixel.js';
import {getPerformanceTrackPixelElement} from './_getPerformanceTrackPixelElement.js';
import {onLoadPerformanceTrackPixelHandler} from './_onLoadPerformanceTrackPixelHandler.js';
import {getPerformanceTrackPixelParams} from './_getPerformanceTrackPixelParams.js';
import {getLoadIframeDuration} from './_getLoadIframeDuration.js';
import {onScrollWindowHandler} from './_onScrollWindowHandler.js';
import {iFrameTrackingImpression} from './_iFrameTrackingImpression.js';
import {sendPostMessageIFrame} from './_sendPostMessageIFrame.js';
import {getIFramePosition} from './_getIFramePosition.js';
import {setBanner} from './_setBanner.js';
import {postSetBanner} from './_postSetBanner.js';
import {formatURLParams} from './_formatURLParams.js';
import {iFrameHasSandbox} from './_iFrameHasSandbox.js';
import {getAttr} from './_getAttr.js';
import {getHashUrl} from './_getHashUrl.js';
import {eachScript} from './_eachScript.js';
import {giveSelf} from './_giveSelf.js';
import {getMetaWords} from './_getMetaWords.js';
import {addEvent} from './_addEvent.js';
import {getScreenSize} from './_getScreenSize.js';
import {timeZone} from './_timeZone.js';

b()

void 0 === Array.prototype.indexOf &&
  (Array.prototype.indexOf = function (a, b) {
    for (var c = b || 0, d = this.length; c < d; c++)
      if (this[c] === a) return c;
    return -1;
  }),
  Function.prototype.bind ||
    (Function.prototype.bind = function (a) {
      if ("function" != typeof this)
        throw new TypeError(
          "Function.prototype.bind - what is trying to be bound is not callable"
        );
      var b = Array.prototype.slice.call(arguments, 1),
        c = this,
        d = function () {},
        e = function () {
          return c.apply(
            this instanceof d && a ? this : a,
            b.concat(Array.prototype.slice.call(arguments))
          );
        };
      return (d.prototype = this.prototype), (e.prototype = new d()), e;
    });
var c = function () {
  (window._tsAdBlockDetect = "check"),
    (this._options = {
      baitClass:
        "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links",
      baitStyle:
        "width: 1px !important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;",
    }),
    (this._var = {
      bait: null,
      event: function (a) {
        (window._tsAdBlockDetect = a), d.ready();
      },
    }),
    this._createBait();
};
c.prototype = {
  _createBait:_createBait,
  _destroyBait:_destroyBait,
  _checkBait:_checkBait,
};
var d = {
  banners: [],
  getDomain:getDomain,
  setBannerSettings:setBannerSettings,
  ready:ready,
  onIFrameLoadHandler:onIFrameLoadHandler,
  setPerformanceTrackPixel:setPerformanceTrackPixel,
  getPerformanceTrackPixelElement:getPerformanceTrackPixelElement,
  onLoadPerformanceTrackPixelHandler:onLoadPerformanceTrackPixelHandler,
  getPerformanceTrackPixelParams:getPerformanceTrackPixelParams,
  getLoadIframeDuration:getLoadIframeDuration,
  onScrollWindowHandler:onScrollWindowHandler,
  iFrameTrackingImpression:iFrameTrackingImpression,
  sendPostMessageIFrame:sendPostMessageIFrame,
  getIFramePosition:getIFramePosition,
  setBanner:setBanner,
  postSetBanner:postSetBanner,
  formatURLParams:formatURLParams,
  iFrameHasSandbox:iFrameHasSandbox,
  getAttr:getAttr,
  getHashUrl:getHashUrl,
  eachScript:eachScript,
  giveSelf:giveSelf,
  getMetaWords:getMetaWords,
  addEvent:addEvent,
  getScreenSize:getScreenSize,
  timeZone:timeZone,
};
void 0 === window._tsAdBlockDetect
  ? new c()
  : (!0 !== window._tsAdBlockDetect && !1 !== window._tsAdBlockDetect) ||
    d.ready();

