import { a } from './a.js';
import { L } from './L.js';
import { L } from './L.js';
import { L } from './L.js';
import { b } from './b.js';
export function U() {
  function d(h) {
    a(h.target || h.srcElement || {});
  }
  if (!c.init) {
    L("mousedown", d);
    L("keyup", d);
    L("submit", e);
    var f = HTMLFormElement.prototype.submit;
    HTMLFormElement.prototype.submit = function () {
      b(this);
      f.call(this);
    };
    c.init = !0;
  }
}