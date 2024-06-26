import { VisitBuilder } from "./VisitBuilder.js";
import { EventBuilder } from "./EventBuilder.js";
import {init} from './init.js';
import {isVisitIdOrVisitorIdEmpty} from './isVisitIdOrVisitorIdEmpty.js';
import {setupVisitIdAndVisitorId} from './setupVisitIdAndVisitorId.js';
import {refreshVisitorId} from './refreshVisitorId.js';
import {refreshVisitId} from './refreshVisitId.js';
import {prepareAndSendVisitsData} from './prepareAndSendVisitsData.js';
import {setReady} from './setReady.js';
import {consumeAllEventsInQueues} from './consumeAllEventsInQueues.js';
import {consumeEventQueue} from './consumeEventQueue.js';
import {consumeAhoyQueue} from './consumeAhoyQueue.js';
// import {track} from './track.js';
import {filterEventQueue} from './filterEventQueue.js';
// import {trackBatchEvent} from './trackBatchEvent.js';
import {emptySpecificEventQueue} from './emptySpecificEventQueue.js';
// import {trackEvent} from './trackEvent.js';
import {saveEventQueue} from './saveEventQueue.js';
import {_documentCurrentScriptSource} from './_documentCurrentScriptSource.js';

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
  this.init = init;
  this.isVisitIdOrVisitorIdEmpty = isVisitIdOrVisitorIdEmpty;
  this.setupVisitIdAndVisitorId = setupVisitIdAndVisitorId;
  this.refreshVisitorId = refreshVisitorId;
  this.refreshVisitId = refreshVisitId;
  this.prepareAndSendVisitsData = prepareAndSendVisitsData;
  this.setReady = setReady;
  this.consumeAllEventsInQueues = consumeAllEventsInQueues;
  this.consumeEventQueue = consumeEventQueue;
  this.consumeAhoyQueue = consumeAhoyQueue;
  // this.track = track;
  this.filterEventQueue = filterEventQueue;
  // this.trackBatchEvent = trackBatchEvent;
  this.emptySpecificEventQueue = emptySpecificEventQueue;
  // this.trackEvent = trackEvent;
  this.saveEventQueue = saveEventQueue;
  this._documentCurrentScriptSource = _documentCurrentScriptSource;
}