import { CookieJar } from "./CookieJar.js";
import { LocalJar } from "./LocalJar.js";
import { Tracker } from "./Tracker.js";
import { Helpers } from "./Helpers.js";
import { Models } from "./Models.js";
import { AhoyConfigFactory } from "./AhoyConfigFactory.js";


var cookieJar = new CookieJar();

var ahoySendBatchEvent = true;
var AhoyConfig = new AhoyConfigFactory();
var helpers = new Helpers();
var models = new Models();
var visitStorage = new CookieJar();
var eventStorage;
if (AhoyConfig.isUseLocalStorage) {
  eventStorage = new LocalJar();
} else {
  eventStorage = new CookieJar();
}
window.ahoy = new Tracker(
  visitStorage,
  eventStorage,
  helpers,
  models,
  AhoyConfig
);
window.ahoy.init();
