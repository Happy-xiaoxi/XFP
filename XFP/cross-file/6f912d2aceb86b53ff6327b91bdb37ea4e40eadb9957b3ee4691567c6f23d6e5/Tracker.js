import { VisitBuilder } from "./VisitBuilder.js";
import { EventBuilder } from "./EventBuilder.js";

export function Tracker(visitStorage, eventStorage, helpers, models, config) {
  this.visitStorage = visitStorage;
  this.eventStorage = eventStorage;
  this.helpers = helpers;
  this.models = models;
  this.config = config;
  this.batchIntervalId = null;
  this.visitId = null;
  this.visitorId = null;
  this.falconVersion = null;
  this.isReady = false;
  this.queue = [];
  this.eventQueue = [];
  this.canStringify =
    typeof JSON !== "undefined" && typeof JSON.stringify !== "undefined"; // NO QA PLS
  this.visitBuilder = new VisitBuilder(models);
  this.eventBuilder = new EventBuilder(helpers, models);
  this.init = function () {
    var falconVersion = this._documentCurrentScriptSource();
    if (falconVersion) {
      this.falconVersion = falconVersion.substring(
        falconVersion.indexOf("ahoy-"),
        falconVersion.indexOf(".js")
      );
    } else {
      this.falconVersion = "unknown";
    }
    if (this.isVisitIdOrVisitorIdEmpty()) {
      this.setupVisitIdAndVisitorId();
      this.prepareAndSendVisitsData();
    } else {
      this.refreshVisitId();
      this.setReady();
    }
    this.consumeAllEventsInQueues();
  };
  this.isVisitIdOrVisitorIdEmpty = function () {
    this.visitId = this.visitStorage.getData("ahoy_visit")
      ? this.visitStorage.getData("ahoy_visit")
      : window.ahoyUserDefinedConfig.visitId;
    this.visitorId = this.visitStorage.getData("ahoy_visitor")
      ? this.visitStorage.getData("ahoy_visitor")
      : window.ahoyUserDefinedConfig.visitorId;
    return !this.visitId || !this.visitorId;
  };
  this.setupVisitIdAndVisitorId = function () {
    this.refreshVisitorId();
    this.refreshVisitId();
  };
  this.refreshVisitorId = function () {
    if (!this.visitorId) {
      this.visitorId = this.helpers.generateUUID();
      this.visitId = null;
    }
    this.visitStorage.setData(
      "ahoy_visitor",
      this.visitorId,
      this.config.visitorTtl
    );
    window.ahoyUserDefinedConfig.visitorId = this.visitorId;
  };
  this.refreshVisitId = function () {
    if (!this.visitId) {
      this.visitId = this.helpers.generateUUID();
    }
    this.visitStorage.setData("ahoy_visit", this.visitId, this.config.visitTtl);
    window.ahoyUserDefinedConfig.visitId = this.visitId;
  };
  this.prepareAndSendVisitsData = function () {
    var jsonData = this.visitBuilder.construct({
      visit_token: this.visitId,
      visitor_token: this.visitorId,
      falcon_version: this.falconVersion,
    });
    this.helpers.post(
      this.config.visitsUrl,
      JSON.stringify(jsonData),
      this.setReady
    );
  };
  this.setReady = function () {
    var queue = this.queue || window.ahoy.queue;
    var callback = queue.shift();
    while (callback) {
      callback();
      callback = queue.shift();
    }
    this.isReady = true;
  };
  this.consumeAllEventsInQueues = function () {
    try {
      this.eventQueue = JSON.parse(
        this.eventStorage.getData("ahoy_events") || "[]"
      );
    } catch (e) {
      // do nothing
    }
    this.consumeEventQueue();
    this.consumeAhoyQueue();
    this.visitId = this.visitStorage.getData("ahoy_visit")
      ? this.visitStorage.getData("ahoy_visit")
      : window.ahoyUserDefinedConfig.visitId;
  };
  this.consumeEventQueue = function () {
    if (this.config.isSendBatchEvent) {
      this.trackBatchEvent();
      this.batchIntervalId = setInterval(
        this.trackBatchEvent.bind(this),
        this.config.batchInterval
      );
    } else {
      for (var i = 0; i < this.eventQueue.length; i++) {
        this.trackEvent(this.eventQueue[i]);
      }
    }
  };
  this.consumeAhoyQueue = function () {
    if (window.ahoy_q !== undefined) {
      for (var c = 0; c < window.ahoy_q.length; c++) {
        var name = window.ahoy_q[c][0];
        var properties = window.ahoy_q[c][1];
        this.track(name, properties);
      }
      window.ahoy_q = [];
    }
  };
  this.track = function (name, properties) {
    /* if this.visitId is null, then throw it away (?) */
    if (!this.canStringify) {
      return;
    }
    var event = this.eventBuilder.construct({
      name: name,
      visit_token: this.visitId,
      visitor_token: this.visitorId,
      falcon_version: this.falconVersion,
      properties: properties,
    });
    this.eventQueue.push(event);
    this.saveEventQueue();
    if (!this.config.isSendBatchEvent) {
      setTimeout(
        function () {
          this.trackEvent(event);
        }.bind(this),
        500
      );
    }
    // keep visit alive
    this.visitStorage.setData("ahoy_visit", this.visitId, this.config.visitTtl);
    this.isReady = true;
  };
  this.filterEventQueue = function (deliveredEvents) {
    this.eventQueue = this.eventQueue.filter(function (event) {
      return !deliveredEvents.some(function (deliveredEvent) {
        return event.id === deliveredEvent.id;
      });
    });
    this.saveEventQueue();
  };
  this.trackBatchEvent = function () {
    if (this.eventQueue.length !== 0) {
      var eventsToDeliver = this.eventQueue.slice();
      this.helpers.post(
        this.config.batchEventsUrl,
        JSON.stringify(eventsToDeliver),
        this.filterEventQueue.bind(this, eventsToDeliver)
      );
    }
  };
  this.emptySpecificEventQueue = function (event) {
    if (this.eventQueue !== undefined) {
      for (var i = 0; i < this.eventQueue.length; i++) {
        if (this.eventQueue[i].id == event.id) {
          this.eventQueue.splice(i, 1);
          break;
        }
      }
      this.saveEventQueue();
    }
  };
  this.trackEvent = function (event) {
    var callback = function () {
      this.emptySpecificEventQueue(event);
    }.bind(this);
    if (this.isReady) {
      this.helpers.post(this.config.eventsUrl, JSON.stringify(event), callback);
    } else {
      this.queue.push(
        function () {
          this.helpers.post(
            this.config.eventsUrl,
            JSON.stringify(event),
            callback
          );
        }.bind(this)
      );
    }
  };
  this.saveEventQueue = function () {
    // TODO add stringify method for IE 7 and under
    if (this.canStringify) {
      // We limit the cookie size, because some browser, seems doesn't have any limit for cookie
      // which can be problematic for our varnish
      // Ref 1: http://browsercookielimits.squawky.net/
      // Ref 2: https://s3.amazonaws.com/prod.tracker2/resource/73911429/tcp.log?response-content-disposition=inline&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJEX3ET63U5T77TYA%2F20170202%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20170202T094342Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=925cf381392b1eec606b7e643885e55715b89602a4b2d3b23b2f39e20989974d
      // And because the cookie is encoded, we will check the encoded length instead plain length
      if (
        this.config.isUseLocalStorage ||
        (JSON.stringify(this.eventQueue).length <=
          this.config.cookieSizeLimit &&
          this.helpers.jsonToParams(this.eventQueue).length <=
            this.config.cookieSizeLimit)
      ) {
        try {
          this.eventStorage.setData(
            "ahoy_events",
            JSON.stringify(this.eventQueue),
            1
          );
        } catch (err) {
          if (
            err instanceof DOMException &&
            err.name === "QuotaExceededError"
          ) {
            this.trackBatchEvent();
            return;
          }
          throw err;
        }
      }
    }
  };
  this._documentCurrentScriptSource = function () {
    if (document.currentScript) {
      return document.currentScript.src;
    } else {
      return null;
    }
  };
}