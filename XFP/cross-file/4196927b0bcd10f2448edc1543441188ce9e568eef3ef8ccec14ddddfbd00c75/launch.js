import {send} from './send.js';
export function launch() {
  let that = this;
  let params = that.params();
  params.e_t = "launch";
  params.rdt = "3";
  send(that.server, params);
}