import {uuid} from './uuid.js';
export function uuidx() {
  let idx = uuid();
  return new Date().format("yyyyMMdd") + idx.substr(0, 8);
}