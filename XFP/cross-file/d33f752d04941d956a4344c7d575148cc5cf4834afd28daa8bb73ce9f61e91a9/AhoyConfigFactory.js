import {getVisitUrl} from './getVisitUrl.js';
import {getEventUrl} from './getEventUrl.js';
import {getBatchEventUrl} from './getBatchEventUrl.js';
// import {getEnvironment} from './getEnvironment.js';
// import {testLocalStorage} from './testLocalStorage.js';

export function AhoyConfigFactory() {
  window.ahoyUserDefinedConfig = window.ahoyUserDefinedConfig || {};
  var config = {};
  config.visitTtl = window.ahoyUserDefinedConfig.visitTtl || 30; // 30 minutes
  config.visitorTtl =
    window.ahoyUserDefinedConfig.visitorTtl || 2 * 365 * 24 * 60; // 2 years
  config.cookieSizeLimit = window.ahoyUserDefinedConfig.cookieSizeLimit || 3e3;
  config.batchInterval = window.ahoyUserDefinedConfig.batchInterval || 3e3;
  config.userId = window.ahoyUserDefinedConfig.userId || undefined;
  // config.appName = window.ahoyUserDefinedConfig.appName || undefined;
  // config.page = window.location.pathname;
  // config.hostname = window.location.hostname;
  config.plentyHostname = {
    production:
      window.ahoyUserDefinedConfig.plentyHostnameProduction ||
      "https://plenty.vidio.com",
    staging:
      window.ahoyUserDefinedConfig.plentyHostnameStaging ||
      "https://staging-plenty.vidio.com",
    development:
      window.ahoyUserDefinedConfig.plentyHostnameDevelopment ||
      "http://127.0.0.1:5009",
  };
  config.getVisitUrl = getVisitUrl;
  config.getEventUrl = getEventUrl;
  config.getBatchEventUrl = getBatchEventUrl;
  // config.getEnvironment = getEnvironment;
  // config.testLocalStorage = testLocalStorage;
  // config.isUseLocalStorage = config.testLocalStorage();
  config.isSendBatchEvent =
  config.isUseLocalStorage && window.ahoyUserDefinedConfig.sendBatch;
  config.visitsUrl = config.getVisitUrl();
  config.eventsUrl = config.getEventUrl();
  config.batchEventsUrl = config.getBatchEventUrl();
  return config;
};