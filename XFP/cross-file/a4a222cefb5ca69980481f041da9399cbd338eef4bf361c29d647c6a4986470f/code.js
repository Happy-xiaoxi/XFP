import {collectSignals} from './collectSignals.js';
import {d9api} from './d9api.js';
import {d9legacy} from './d9legacy.js';

const coreElementId = "d9-core-3f4f3476-b53a-4039-b585-9ac99c6a1f31";
var container =
  document.currentScript || document.getElementById(coreElementId);
var isApi = container && container.id === coreElementId;
var d9d = collectSignals();
if (!isApi) {
  d9legacy(window.D9v, window.D9r, "d9.flashtalking.com", d9d);
} else {
  window.d9api = d9api;
  if (window.d9registry) {
    window.d9registry.run();
  }
}

