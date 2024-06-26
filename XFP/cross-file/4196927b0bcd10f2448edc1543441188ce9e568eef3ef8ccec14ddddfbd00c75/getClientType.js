import {getTerminal} from './getTerminal.js';
export function getClientType() {
  return getTerminal() || "";
}