//fingerprint js start
import {choosenSelect} from './_choosenSelect.js';
import {isMobile} from './_isMobile.js';
import {onLoadSuccessTrigger} from './_onLoadSuccessTrigger.js';
import {findHighestZIndex} from './_findHighestZIndex.js';
import {validateDomain} from './_validateDomain.js';
import {reSetTabIndex} from './_reSetTabIndex.js';
import {disableTabIndex} from './_disableTabIndex.js';
import {showLoading} from './_showLoading.js';
import {hideLoading} from './_hideLoading.js';
import {deleteCookie} from './_deleteCookie.js';
import {setCookie} from './_setCookie.js';
import {getCookie} from './_getCookie.js';
import {getReferrer} from './_getReferrer.js';
import {forceUserLocation} from './_forceUserLocation.js';
import {getUTMParameters} from './_getUTMParameters.js';
import {getUTM} from './_getUTM.js';
import {getRefURL} from './_getRefURL.js';
import {getDynamicParameters} from './_getDynamicParameters.js';
import {getFootPrint} from './_getFootPrint.js';
import {getSessionPrint} from './_getSessionPrint.js';
import {getLocation} from './_getLocation.js';
import {registerTime} from './_registerTime.js';
import {registerView} from './_registerView.js';
import {onLocationSuccess} from './_onLocationSuccess.js';
import {onLocationDiscovery} from './_onLocationDiscovery.js';
import {onLocationError} from './_onLocationError.js';
import {getRandomId} from './_getRandomId.js';
import {getQueryStringByName} from './_getQueryStringByName.js';
import {showError} from './_showError.js';
import {hideError} from './_hideError.js';
import {isNumber} from './_isNumber.js';
import {isNumberMobile} from './_isNumberMobile.js';
import {isEmail} from './_isEmail.js';
import {showModalPopUp} from './_showModalPopUp.js';
import {hideModalPopUp} from './_hideModalPopUp.js';
import {isHidden} from './_isHidden.js';
import {isDescendant} from './_isDescendant.js';
import {validateExtension} from './_validateExtension.js';
import {filterModels} from './_filterModels.js';
import {playThanksAudio} from './_playThanksAudio.js';
import {removeLnGTag} from './_removeLnGTag.js';
import { _convertFunc1 } from './_convertFunc1.js';

// !(function (e, t, i) {
//   "use strict";
//   "function" == typeof define && define.amd
//     ? define(i)
//     : "undefined" != typeof module && module.exports
//     ? (module.exports = i())
//     : t.exports
//     ? (t.exports = i())
//     : (t.Fingerprint2 = i());
// })(0, this, _convertFunc1);

this.Fingerprint2 = _convertFunc1()

try {
  var ce = new window.CustomEvent("test");
  if ((ce.preventDefault(), !0 !== ce.defaultPrevented))
    throw Error("Could not prevent default");
} catch (e) {
  var CustomEvent = function (e, t) {
    var i, a;
    return (
      (t = t || { bubbles: !1, cancelable: !1, detail: void 0 }),
      (i = document.createEvent("CustomEvent")).initCustomEvent(
        e,
        t.bubbles,
        t.cancelable,
        t.detail
      ),
      (a = i.preventDefault),
      (i.preventDefault = function () {
        a.call(this);
        try {
          Object.defineProperty(this, "defaultPrevented", {
            get: function () {
              return !0;
            },
          });
        } catch (e) {
          this.defaultPrevented = !0;
        }
      }),
      i
    );
  };
  (CustomEvent.prototype = window.Event.prototype),
    (window.CustomEvent = CustomEvent);
}
//fingerprint js end
//SYSTEM JS START
var _$_e9d9 = [
  "\x4F\x6F\x70\x73\x2C\x20\x6E\x6F\x74\x68\x69\x6E\x67\x20\x66\x6F\x75\x6E\x64\x21",
  "\x31\x30\x30\x25",
  "\x63\x68\x6F\x73\x65\x6E",
  "\x75\x73\x65\x72\x41\x67\x65\x6E\x74",
  "\x76\x65\x6E\x64\x6F\x72",
  "\x6F\x70\x65\x72\x61",
  "\x74\x65\x73\x74",
  "\x73\x75\x62\x73\x74\x72",
  "\x63\x68\x6F\x73\x65\x6E\x3A\x75\x70\x64\x61\x74\x65\x64",
  "\x74\x72\x69\x67\x67\x65\x72",
  "\x7A\x2D\x69\x6E\x64\x65\x78",
  "\x63\x73\x73",
  "\x65\x61\x63\x68",
  "\x2A",
  "\x6C\x6F\x63\x61\x6C\x68\x6F\x73\x74",
  "\x74\x6F\x79\x6F\x74\x61\x62\x68\x61\x72\x61\x74",
  "\x6C\x65\x6E\x67\x74\x68",
  "\x69\x6E\x64\x65\x78\x4F\x66",
  "\x68\x72\x65\x66",
  "\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
  "\x2D\x31",
  "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x54\x61\x67\x4E\x61\x6D\x65",
  "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64",
  "\x74\x61\x67\x4E\x61\x6D\x65",
  "\x67\x65\x74",
  "\x49\x4E\x50\x55\x54",
  "\x41",
  "\x54\x45\x58\x54\x41\x52\x45\x41",
  "\x53\x45\x4C\x45\x43\x54",
  "\x74\x61\x62\x49\x6E\x64\x65\x78",
  "\x64\x61\x74\x61",
  "\x74\x61\x62\x69\x6E\x64\x65\x78",
  "\x72\x65\x6D\x6F\x76\x65\x41\x74\x74\x72",
  "\x61\x74\x74\x72",
  "\x74\x6F\x70",
  "\x68\x65\x69\x67\x68\x74",
  "\x6F\x75\x74\x65\x72\x48\x65\x69\x67\x68\x74",
  "\x23\x6C\x6F\x61\x64\x65\x72",
  "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70",
  "\x6D\x61\x78",
  "\x70\x78",
  "\x6C\x65\x66\x74",
  "\x77\x69\x64\x74\x68",
  "\x6F\x75\x74\x65\x72\x57\x69\x64\x74\x68",
  "\x73\x63\x72\x6F\x6C\x6C\x4C\x65\x66\x74",
  "\x61\x62\x73",
  "\x7A\x49\x6E\x64\x65\x78",
  "\x23\x6D\x61\x73\x6B",
  "\x66\x61\x73\x74",
  "\x66\x61\x64\x65\x54\x6F",
  "\x73\x68\x6F\x77",
  "",
  "\x68\x69\x64\x65",
  "\x23\x6D\x61\x73\x6B\x2C\x20\x2E\x77\x69\x6E\x64\x6F\x77",
  "\x63\x6F\x6F\x6B\x69\x65",
  "\x3D\x3B\x65\x78\x70\x69\x72\x65\x73\x3D\x54\x68\x75\x2C\x20\x30\x31\x20\x4A\x61\x6E\x20\x31\x39\x37\x30\x20\x30\x30\x3A\x30\x30\x3A\x30\x31\x20\x47\x4D\x54\x3B\x70\x61\x74\x68\x3D\x2F",
  "\x67\x65\x74\x54\x69\x6D\x65",
  "\x73\x65\x74\x54\x69\x6D\x65",
  "\x65\x78\x70\x69\x72\x65\x73\x3D",
  "\x74\x6F\x55\x54\x43\x53\x74\x72\x69\x6E\x67",
  "\x3D",
  "\x3B",
  "\x3B\x70\x61\x74\x68\x3D\x2F",
  "\x73\x70\x6C\x69\x74",
  "\x73\x75\x62\x73\x74\x72\x69\x6E\x67",
  "\x63\x68\x61\x72\x41\x74",
  "\x20",
  "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2B\x2F\x3D",
  "\x5F\x75\x74\x66\x38\x5F\x65\x6E\x63\x6F\x64\x65",
  "\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74",
  "\x5F\x6B\x65\x79\x53\x74\x72",
  "\x72\x65\x70\x6C\x61\x63\x65",
  "\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65",
  "\x5F\x75\x74\x66\x38\x5F\x64\x65\x63\x6F\x64\x65",
  "\x0A",
  "\x61\x6A\x61\x78\x53\x74\x61\x72\x74",
  "\x64\x69\x73\x70\x61\x74\x63\x68\x45\x76\x65\x6E\x74",
  "\x61\x6A\x61\x78\x53\x74\x6F\x70",
  "\x61\x6A\x61\x78\x53\x65\x74\x75\x70",
  "\x72\x65\x61\x64\x79",
  "\x72\x65\x66\x65\x72\x72\x65\x72",
  "\x68\x6F\x73\x74\x6E\x61\x6D\x65",
  "\x72\x65\x66\x3D",
  "\x65\x6E\x63\x6F\x64\x65",
  "\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x49\x64",
  "\x67\x70\x73",
  "\x75\x74\x6D\x5F\x63\x61\x6D\x70\x61\x69\x67\x6E",
  "\x75\x74\x6D\x5F\x73\x6F\x75\x72\x63\x65",
  "\x75\x74\x6D\x5F\x6D\x65\x64\x69\x75\x6D",
  "\x75\x74\x6D\x5F\x74\x65\x72\x6D",
  "\x75\x74\x6D\x5F\x63\x6F\x6E\x74\x65\x6E\x74",
  "\x61\x67\x65\x6E\x63\x79\x5F\x63\x6F\x64\x65",
  "\x75\x74\x6D",
  "\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
  "\x64\x65\x63\x6F\x64\x65",
  "\x70\x61\x72\x73\x65",
  "\x72\x65\x66",
  "\x73\x70",
  "\x66\x70",
  "\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x20\x63\x61\x63\x68\x65\x64",
  "\x6C\x6F\x67",
  "\x73\x74\x61\x74\x65\x49\x64",
  "\x63\x69\x74\x79\x49\x64",
  "\x63\x61\x63\x68\x65\x64",
  "\x6C\x61\x74",
  "\x6C\x6F\x6E\x67",
  "\x65\x6D\x70\x74\x79",
  "\x67\x65\x74\x74\x69\x6E\x67\x20\x6E\x65\x77\x20\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
  "\x67\x65\x74\x43\x75\x72\x72\x65\x6E\x74\x50\x6F\x73\x69\x74\x69\x6F\x6E",
  "\x67\x65\x6F\x6C\x6F\x63\x61\x74\x69\x6F\x6E",
  "\x3C\x54\x69\x6D\x65\x53\x70\x65\x6E\x74\x2F\x3E",
  "\x70\x61\x72\x73\x65\x58\x4D\x4C",
  "\x46\x6F\x6F\x74\x50\x72\x69\x6E\x74",
  "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74",
  "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64",
  "\x64\x6F\x63\x75\x6D\x65\x6E\x74\x45\x6C\x65\x6D\x65\x6E\x74",
  "\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65",
  "\x53\x65\x73\x73\x69\x6F\x6E\x50\x72\x69\x6E\x74",
  "\x49\x64",
  "\x54\x69\x6D\x65\x49\x6E\x53\x65\x63\x6F\x6E\x64\x73",
  "\x73\x65\x72\x69\x61\x6C\x69\x7A\x65\x54\x6F\x53\x74\x72\x69\x6E\x67",
  "\x73\x65\x6E\x64\x42\x65\x61\x63\x6F\x6E",
  "\x48\x54\x4D\x4C\x45\x6C\x65\x6D\x65\x6E\x74",
  "\x73\x61\x66\x61\x72\x69",
  "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64",
  "\x70\x75\x73\x68\x4E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E",
  "\x74\x6F\x53\x74\x72\x69\x6E\x67",
  "\x5B\x6F\x62\x6A\x65\x63\x74\x20\x53\x61\x66\x61\x72\x69\x52\x65\x6D\x6F\x74\x65\x4E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x5D",
  "\x64\x6F\x63\x75\x6D\x65\x6E\x74\x4D\x6F\x64\x65",
  "\x6E\x61\x76\x69\x67\x61\x74\x6F\x72",
  "\x6D\x61\x74\x63\x68",
  "\x69\x6D\x67",
  "\x73\x72\x63",
  "\x31\x2E\x30\x2F\x61\x70\x69\x2F\x64\x79\x6E\x61\x6D\x69\x63\x2F\x74\x69\x6D\x65\x73\x70\x65\x6E\x74\x68\x61\x63\x6B\x2F",
  "\x2F",
  "\x50\x4F\x53\x54",
  "\x31\x2E\x30\x2F\x61\x70\x69\x2F\x64\x79\x6E\x61\x6D\x69\x63\x2F\x74\x69\x6D\x65\x73\x70\x65\x6E\x74",
  "\x78\x6D\x6C",
  "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x6D\x6C",
  "\x61\x6A\x61\x78",
  "\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E",
  "\x31\x2E\x30\x2F\x61\x70\x69\x2F\x64\x79\x6E\x61\x6D\x69\x63\x2F\x74\x69\x6D\x65\x73\x70\x65\x6E\x74\x62\x65\x61\x63\x6F\x6E",
  "\x31\x2E\x30\x2F\x61\x70\x69\x2F\x64\x79\x6E\x61\x6D\x69\x63\x2F\x76\x69\x65\x77",
  "\x63\x6F\x6F\x72\x64\x73",
  "\x31\x2E\x30\x2F\x61\x70\x69\x2F\x63\x69\x74\x79\x2F\x67\x70\x73\x2F",
  "\x6C\x61\x74\x69\x74\x75\x64\x65",
  "\x6C\x6F\x6E\x67\x69\x74\x75\x64\x65",
  "\x74\x65\x78\x74",
  "\x43\x69\x74\x79\x20\x3E\x20\x53\x74\x61\x74\x65\x20\x3E\x20\x49\x64",
  "\x66\x69\x6E\x64",
  "\x43\x69\x74\x79\x20\x3E\x20\x49\x64",
  "\x6C\x69\x76\x65",
  "\x6F\x6E\x44\x79\x6E\x61\x6D\x69\x63\x52\x65\x61\x64\x79",
  "\x73\x75\x63\x63\x65\x73\x73",
  "\x65\x72\x72\x6F\x72",
  "\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4A\x4B\x4C\x4D\x4E\x4F\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5A\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6A\x6B\x6C\x6D\x6E\x6F\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7A\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39",
  "\x72\x61\x6E\x64\x6F\x6D",
  "\x66\x6C\x6F\x6F\x72",
  "\x5C\x24\x26",
  "\x5B\x3F\x26\x5D",
  "\x28\x3D\x28\x5B\x5E\x26\x23\x5D\x2A\x29\x7C\x26\x7C\x23\x7C\x24\x29",
  "\x65\x78\x65\x63",
  "\x66\x6F\x72\x6D\x61\x74",
  "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65",
  "\x2C",
  "\x76\x61\x6C\x69\x64",
  "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73",
  "\x69\x6E\x76\x61\x6C\x69\x64",
  "\x61\x64\x64\x43\x6C\x61\x73\x73",
  "\x68\x74\x6D\x6C",
  "\x2E\x66\x6F\x72\x6D\x2D\x65\x72\x72\x6F\x72\x2D\x6D\x73\x67",
  "\x64\x69\x76",
  "\x63\x6C\x6F\x73\x65\x73\x74",
  "\x77\x68\x69\x63\x68",
  "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74",
  "\x76\x61\x6C\x75\x65",
  "\x74\x61\x72\x67\x65\x74",
  "\x49\x6E\x76\x61\x6C\x69\x64\x20\x6C\x69\x63\x65\x6E\x73\x65\x20\x6B\x65\x79\x20\x66\x6F\x72\x20\x74\x68\x69\x73\x20\x64\x6F\x6D\x61\x69\x6E\x2C\x20\x52\x65\x63\x6F\x6D\x70\x69\x6C\x65\x20\x73\x63\x72\x69\x70\x74\x21",
  "\x23",
  "\x65\x61\x73\x65\x4F\x75\x74\x53\x69\x6E\x65",
  "\x6F\x66\x66\x73\x65\x74",
  "\x2D",
  "\x73\x6C\x6F\x77",
  "\x61\x6E\x69\x6D\x61\x74\x65",
  "\x2C\x20\x2E\x77\x69\x6E\x64\x6F\x77",
  "\x6F\x66\x66\x73\x65\x74\x50\x61\x72\x65\x6E\x74",
  "\x70\x61\x72\x65\x6E\x74\x4E\x6F\x64\x65",
  "\x74\x6F\x4C\x6F\x77\x65\x72\x43\x61\x73\x65",
  "\x70\x6F\x70",
  "\x2E",
  "\x69\x6E\x41\x72\x72\x61\x79",
];


var Base64 = {
  _keyStr: _$_e9d9[67],
  encode: function (input) {
    var output = _$_e9d9[51];
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    input = Base64[_$_e9d9[68]](input);
    while (i < input[_$_e9d9[16]]) {
      chr1 = input[_$_e9d9[69]](i++);
      chr2 = input[_$_e9d9[69]](i++);
      chr3 = input[_$_e9d9[69]](i++);
      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;
      if (isNaN(chr2)) {
        enc3 = enc4 = 64;
      } else {
        if (isNaN(chr3)) {
          enc4 = 64;
        }
      }
      output =
        output +
        this[_$_e9d9[70]][_$_e9d9[65]](enc1) +
        this[_$_e9d9[70]][_$_e9d9[65]](enc2) +
        this[_$_e9d9[70]][_$_e9d9[65]](enc3) +
        this[_$_e9d9[70]][_$_e9d9[65]](enc4);
    }
    return output;
  },
  decode: function (input) {
    var output = _$_e9d9[51];
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input[_$_e9d9[71]](/[^A-Za-z0-9\+\/\=]/g, _$_e9d9[51]);
    while (i < input[_$_e9d9[16]]) {
      enc1 = this[_$_e9d9[70]][_$_e9d9[17]](input[_$_e9d9[65]](i++));
      enc2 = this[_$_e9d9[70]][_$_e9d9[17]](input[_$_e9d9[65]](i++));
      enc3 = this[_$_e9d9[70]][_$_e9d9[17]](input[_$_e9d9[65]](i++));
      enc4 = this[_$_e9d9[70]][_$_e9d9[17]](input[_$_e9d9[65]](i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String[_$_e9d9[72]](chr1);
      if (enc3 != 64) {
        output = output + String[_$_e9d9[72]](chr2);
      }
      if (enc4 != 64) {
        output = output + String[_$_e9d9[72]](chr3);
      }
    }
    output = Base64[_$_e9d9[73]](output);
    return output;
  },
  _utf8_encode: function (string) {
    string = string[_$_e9d9[71]](/\r\n/g, _$_e9d9[74]);
    var utftext = _$_e9d9[51];
    for (var n = 0; n < string[_$_e9d9[16]]; n++) {
      var c = string[_$_e9d9[69]](n);
      if (c < 128) {
        utftext += String[_$_e9d9[72]](c);
      } else {
        if (c > 127 && c < 2048) {
          utftext += String[_$_e9d9[72]]((c >> 6) | 192);
          utftext += String[_$_e9d9[72]]((c & 63) | 128);
        } else {
          utftext += String[_$_e9d9[72]]((c >> 12) | 224);
          utftext += String[_$_e9d9[72]](((c >> 6) & 63) | 128);
          utftext += String[_$_e9d9[72]]((c & 63) | 128);
        }
      }
    }
    return utftext;
  },
  _utf8_decode: function (utftext) {
    var string = _$_e9d9[51];
    var i = 0;
    var c = (c1 = c2 = 0);
    while (i < utftext[_$_e9d9[16]]) {
      c = utftext[_$_e9d9[69]](i);
      if (c < 128) {
        string += String[_$_e9d9[72]](c);
        i++;
      } else {
        if (c > 191 && c < 224) {
          c2 = utftext[_$_e9d9[69]](i + 1);
          string += String[_$_e9d9[72]](((c & 31) << 6) | (c2 & 63));
          i += 2;
        } else {
          c2 = utftext[_$_e9d9[69]](i + 1);
          c3 = utftext[_$_e9d9[69]](i + 2);
          string += String[_$_e9d9[72]](
            ((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63)
          );
          i += 3;
        }
      }
    }
    return string;
  },
};
$(document)[_$_e9d9[79]](function () {
  $[_$_e9d9[78]]({
    "\x62\x65\x66\x6F\x72\x65\x53\x65\x6E\x64": function () {
      var evt = new CustomEvent(_$_e9d9[75]);
      window[_$_e9d9[76]](evt);
    },
    "\x63\x6F\x6D\x70\x6C\x65\x74\x65": function () {
      var evt = new CustomEvent(_$_e9d9[77]);
      window[_$_e9d9[76]](evt);
    },
  });
  getDynamicParameters();
  getUTMParameters();
  getReferrer();
});
var gpsOptions = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 };

Number[_$_e9d9[163]][_$_e9d9[162]] = function () {
  x = this[_$_e9d9[126]]();
  var lastThree = x[_$_e9d9[64]](x[_$_e9d9[16]] - 3);
  var otherNumbers = x[_$_e9d9[64]](0, x[_$_e9d9[16]] - 3);
  if (otherNumbers != _$_e9d9[51]) {
    lastThree = _$_e9d9[164] + lastThree;
  }
  return (
    otherNumbers[_$_e9d9[71]](/\B(?=(\d{2})+(?!\d))/g, _$_e9d9[164]) + lastThree
  );
};

//SYSTEM JS END

(isSafari = !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) ||
  (function () {
    function t() {
      if (!H && document.body) {
        H = !0;
        var t = document.body,
          e = document.documentElement,
          a = window.innerHeight,
          o = t.scrollHeight;
        if (
          ((M = document.compatMode.indexOf("CSS") >= 0 ? e : t),
          (w = t),
          E.keyboardSupport && h("keydown", i),
          top != self)
        )
          T = !0;
        else if (o > a && (t.offsetHeight <= a || e.offsetHeight <= a)) {
          var s,
            n = document.createElement("div");
          if (
            ((n.style.cssText =
              "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" +
              M.scrollHeight +
              "px"),
            document.body.appendChild(n),
            (C = function () {
              s ||
                (s = setTimeout(function () {
                  A ||
                    ((n.style.height = "0"),
                    (n.style.height = M.scrollHeight + "px"),
                    (s = null));
                }, 500));
            }),
            setTimeout(C, 10),
            h("resize", C),
            (k = new I(C)).observe(t, {
              attributes: !0,
              childList: !0,
              characterData: !1,
            }),
            M.offsetHeight <= a)
          ) {
            var r = document.createElement("div");
            (r.style.clear = "both"), t.appendChild(r);
          }
        }
        E.fixedBackground ||
          A ||
          ((t.style.backgroundAttachment = "scroll"),
          (e.style.backgroundAttachment = "scroll"));
      }
    }
    function e(t, e, a) {
      var i, o;
      if (
        ((i = (i = e) > 0 ? 1 : -1),
        (o = (o = a) > 0 ? 1 : -1),
        (O.x !== i || O.y !== o) && ((O.x = i), (O.y = o), (N = []), (P = 0)),
        1 != E.accelerationMax)
      ) {
        var s = Date.now() - P;
        if (s < E.accelerationDelta) {
          var n = (1 + 50 / s) / 2;
          n > 1 && ((e *= n = Math.min(n, E.accelerationMax)), (a *= n));
        }
        P = Date.now();
      }
      if (
        (N.push({
          x: e,
          y: a,
          lastX: 0 > e ? 0.99 : -0.99,
          lastY: 0 > a ? 0.99 : -0.99,
          start: Date.now(),
        }),
        !L)
      ) {
        var r = t === document.body,
          l = function (i) {
            for (var o = Date.now(), s = 0, n = 0, d = 0; d < N.length; d++) {
              var c = N[d],
                h = o - c.start,
                p = h >= E.animationTime,
                v = p ? 1 : h / E.animationTime;
              E.pulseAlgorithm && (v = m(v));
              var u = (c.x * v - c.lastX) >> 0,
                b = (c.y * v - c.lastY) >> 0;
              (s += u),
                (n += b),
                (c.lastX += u),
                (c.lastY += b),
                p && (N.splice(d, 1), d--);
            }
            r
              ? window.scrollBy(s, n)
              : (s && (t.scrollLeft += s), n && (t.scrollTop += n)),
              e || a || (N = []),
              N.length ? X(l, t, 1e3 / E.frameRate + 1) : (L = !1);
          };
        X(l, t, 0), (L = !0);
      }
    }
    function a(a) {
      H || t();
      var i = a.target,
        o = r(i);
      if (
        !o ||
        a.defaultPrevented ||
        a.ctrlKey ||
        v(w, "embed") ||
        (v(i, "embed") && /\.pdf/i.test(i.src)) ||
        v(w, "object")
      )
        return !0;
      var n,
        l = -a.wheelDeltaX || a.deltaX || 0,
        d = -a.wheelDeltaY || a.deltaY || 0;
      return (
        W &&
          (a.wheelDeltaX &&
            u(a.wheelDeltaX, 120) &&
            (l = (-a.wheelDeltaX / Math.abs(a.wheelDeltaX)) * 120),
          a.wheelDeltaY &&
            u(a.wheelDeltaY, 120) &&
            (d = (-a.wheelDeltaY / Math.abs(a.wheelDeltaY)) * 120)),
        l || d || (d = -a.wheelDelta || 0),
        1 === a.deltaMode && ((l *= 40), (d *= 40)),
        !(
          E.touchpadSupport ||
          !(n = d) ||
          (z.length || (z = [n, n, n]),
          (n = Math.abs(n)),
          z.push(n),
          z.shift(),
          clearTimeout(x),
          (x = setTimeout(function () {
            window.localStorage && (localStorage.SS_deltaBuffer = z.join(","));
          }, 1e3)),
          b(120) || b(100))
        ) ||
          (Math.abs(l) > 1.2 && (l *= E.stepSize / 120),
          Math.abs(d) > 1.2 && (d *= E.stepSize / 120),
          e(o, l, d),
          a.preventDefault(),
          void s())
      );
    }
    function i(t) {
      var a = t.target,
        i =
          t.ctrlKey ||
          t.altKey ||
          t.metaKey ||
          (t.shiftKey && t.keyCode !== B.spacebar);
      document.contains(w) || (w = document.activeElement);
      var o = /^(button|submit|radio|checkbox|file|color|image)$/i;
      if (
        /^(textarea|select|embed|object)$/i.test(a.nodeName) ||
        (v(a, "input") && !o.test(a.type)) ||
        v(w, "video") ||
        (function (t) {
          var e = t.target,
            a = !1;
          if (-1 != document.URL.indexOf("www.youtube.com/watch"))
            do
              if (
                (a =
                  e.classList && e.classList.contains("html5-video-controls"))
              )
                break;
            while ((e = e.parentNode));
          return a;
        })(t) ||
        a.isContentEditable ||
        t.defaultPrevented ||
        i ||
        ((v(a, "button") || (v(a, "input") && o.test(a.type))) &&
          t.keyCode === B.spacebar)
      )
        return !0;
      var n = 0,
        l = 0,
        d = r(w),
        c = d.clientHeight;
      switch ((d == document.body && (c = window.innerHeight), t.keyCode)) {
        case B.up:
          l = -E.arrowScroll;
          break;
        case B.down:
          l = E.arrowScroll;
          break;
        case B.spacebar:
          l = -(t.shiftKey ? 1 : -1) * c * 0.9;
          break;
        case B.pageup:
          l = -0.9 * c;
          break;
        case B.pagedown:
          l = 0.9 * c;
          break;
        case B.home:
          l = -d.scrollTop;
          break;
        case B.end:
          var h = d.scrollHeight - d.scrollTop - c;
          l = h > 0 ? h + 10 : 0;
          break;
        case B.left:
          n = -E.arrowScroll;
          break;
        case B.right:
          n = E.arrowScroll;
          break;
        default:
          return !0;
      }
      e(d, n, l), t.preventDefault(), s();
    }
    function o(t) {
      w = t.target;
    }
    function s() {
      clearTimeout(_),
        (_ = setInterval(function () {
          R = {};
        }, 1e3));
    }
    function n(t, e) {
      for (var a = t.length; a--; ) R[j(t[a])] = e;
      return e;
    }
    function r(t) {
      var e = [],
        a = document.body,
        i = M.scrollHeight;
      do {
        var o = R[j(t)];
        if (o) return n(e, o);
        if ((e.push(t), i === t.scrollHeight)) {
          var s = (d(M) && d(a)) || c(M);
          if ((T && l(M)) || (!T && s)) return n(e, K());
        } else if (l(t) && c(t)) return n(e, t);
      } while ((t = t.parentElement));
    }
    function l(t) {
      return t.clientHeight + 10 < t.scrollHeight;
    }
    function d(t) {
      return (
        "hidden" !== getComputedStyle(t, "").getPropertyValue("overflow-y")
      );
    }
    function c(t) {
      var e = getComputedStyle(t, "").getPropertyValue("overflow-y");
      return "scroll" === e || "auto" === e;
    }
    function h(t, e) {
      window.addEventListener(t, e, !1);
    }
    function p(t, e) {
      window.removeEventListener(t, e, !1);
    }
    function v(t, e) {
      return (t.nodeName || "").toLowerCase() === e.toLowerCase();
    }
    function u(t, e) {
      return Math.floor(t / e) == t / e;
    }
    function b(t) {
      return u(z[0], t) && u(z[1], t) && u(z[2], t);
    }
    function f(t) {
      var e, a;
      return (
        1 > (t *= E.pulseScale)
          ? (e = t - (1 - Math.exp(-t)))
          : ((t -= 1), (e = (a = Math.exp(-1)) + (1 - Math.exp(-t)) * (1 - a))),
        e * E.pulseNormalize
      );
    }
    function m(t) {
      return t >= 1
        ? 1
        : 0 >= t
        ? 0
        : (1 == E.pulseNormalize && (E.pulseNormalize /= f(1)), f(t));
    }
    function g(t) {
      for (var e in t) D.hasOwnProperty(e) && (E[e] = t[e]);
    }
    var y,
      w,
      k,
      C,
      _,
      x,
      S,
      D = {
        frameRate: 150,
        animationTime: 400,
        stepSize: 100,
        pulseAlgorithm: !0,
        pulseScale: 4,
        pulseNormalize: 1,
        accelerationDelta: 50,
        accelerationMax: 3,
        keyboardSupport: !0,
        arrowScroll: 50,
        touchpadSupport: !1,
        fixedBackground: !0,
        excluded: "",
      },
      E = D,
      A = !1,
      T = !1,
      O = { x: 0, y: 0 },
      H = !1,
      M = document.documentElement,
      z = [],
      W = /^Mac/.test(navigator.platform),
      B = {
        left: 37,
        up: 38,
        right: 39,
        down: 40,
        spacebar: 32,
        pageup: 33,
        pagedown: 34,
        end: 35,
        home: 36,
      },
      N = [],
      L = !1,
      P = Date.now(),
      j =
        ((y = 0),
        function (t) {
          return t.uniqueID || (t.uniqueID = y++);
        }),
      R = {};
    window.localStorage &&
      localStorage.SS_deltaBuffer &&
      (z = localStorage.SS_deltaBuffer.split(","));
    var Y,
      X =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (t, e, a) {
          window.setTimeout(t, a || 1e3 / 60);
        },
      I =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver,
      K = function () {
        if (!S) {
          var t = document.createElement("div");
          (t.style.cssText = "height:10000px;width:1px;"),
            document.body.appendChild(t);
          var e = document.body.scrollTop;
          document.documentElement.scrollTop,
            window.scrollBy(0, 1),
            (S =
              document.body.scrollTop != e
                ? document.body
                : document.documentElement),
            window.scrollBy(0, -1),
            document.body.removeChild(t);
        }
        return S;
      },
      q = window.navigator.userAgent,
      U = /Edge/.test(q),
      F = /chrome/i.test(q) && !U,
      V = /safari/i.test(q) && !U,
      G = /mobile/i.test(q);
    "onwheel" in document.createElement("div")
      ? (Y = "wheel")
      : "onmousewheel" in document.createElement("div") && (Y = "mousewheel"),
      Y && (F || V) && !G && (h(Y, a), h("mousedown", o), h("load", t)),
      (g.destroy = function () {
        k && k.disconnect(),
          p(Y, a),
          p("mousedown", o),
          p("keydown", i),
          p("resize", C),
          p("load", t);
      }),
      window.SmoothScrollOptions && g(window.SmoothScrollOptions),
      "object" == typeof exports
        ? (module.exports = g)
        : (window.SmoothScroll = g);
  })(),
  $(document).ready(function () {
    "use strict";
    var t = {
      adaptationWidth: 767,
      init: function () {
        this.cacheDom(),
          this.bindEvents(),
          this.calculateDistance(),
          this.setResizeOptions(),
          this.stickToTop(),
          (window.oncontextmenu = function () {});
      },
      cacheDom: function () {
        (this.$document = $(document)),
          (this.$window = $(window)),
          (this.$html = $("html")),
          (this.$body = $("body")),
          (this.$html_body = $("html, body")),
          (this.$page_contents = $("#page-contents")),
          (this.$owl_carousel = this.$body.find(".owl-carousel")),
          (this.$news_ticker = this.$body.find("#js-news")),
          (this.$solid_menus = $(".solid-menus")),
          (this.$navbar = this.$body.find(".navbar")),
          (this.$navbar_nav_li_a = this.$body.find(
            ".navbar-nav > li > a.dropdown-toggle"
          )),
          (this.$navbar_push = this.$body.find(".navbar-push")),
          (this.$navbar_off = this.$body.find(".navbar-off-canvas")),
          (this.$navbar_collapse_push = this.$body.find(
            ".navbar-push .navbar-collapse"
          )),
          (this.$navbar_collapse_off = this.$body.find(
            ".navbar-off-canvas .navbar-collapse"
          )),
          (this.$navbar_toggle = this.$body.find(".navbar-toggle")),
          (this.$tab_nav = this.$body.find(".tab-nav")),
          (this.$tab_nav_links = this.$body.find(".tab-nav > li > a")),
          (this.$tab_nav_links_click_strict = this.$body.find(
            ".tab-nav.tab-nav-click-strict > li > a"
          )),
          (this.$navbar_nav = this.$body.find(".navbar-nav")),
          (this.$navbar_header = this.$body.find(".navbar-header")),
          (this.$dropdown = this.$body.find(".dropdown")),
          (this.$dropdown_custom = this.$body.find(".dropdown-custom")),
          (this.$dropdown_autoheight = this.$body.find(".dropdown-autoheight")),
          (this.$dropdown_menu = this.$body.find(".dropdown-menu")),
          (this.$sub_marker = this.$dropdown_menu.find(".sub-marker")),
          (this.$sprite_list = this.$body.find(".s-list-sprite > li > a")),
          (this.$tile_container = this.$body.find(".tile-container")),
          (this.$top_social_links = this.$body.find("#top-social a")),
          (this.$mini_menu = this.$body.find(".mini-menu")),
          (this.$mini_nav = this.$body.find(".mini-nav")),
          (this.$a_w_title = this.$body.find("a[data-title]")),
          (this.$pure_sticky = this.$body.find("#sticky")),
          (this.$sticky = this.$body.find("#sticky.navbar-static-top"));
      },
      bindEvents: function () {
        this.$body.on(
          "click mouseenter",
          ".tab-nav > li > a",
          this.setActiveTab
        ),
          this.$body.on(
            "click mouseenter mouseleave",
            ".dropdown",
            this.showDropDown
          ),
          this.$body.on(
            "click mouseenter",
            ".dropdown.dropdown-convey-width",
            this.conveyWidth
          ),
          this.$body.on(
            "click mouseenter",
            ".dropdown.dropdown-convey-height",
            this.conveyHeight
          ),
          this.$document.on(
            "click",
            ".navbar .dropdown-menu",
            this.stopPropagation
          ),
          this.$body.on(
            "click",
            ".navbar-click .dropdown-right, .navbar-click .dropdown-left",
            this.setActiveMenu
          ),
          this.$body.on(
            "click mouseenter",
            ".dropdown-autoheight",
            this.calculateHeight
          ),
          this.$body.on("click", ".sub-marker", this.setMenuActive),
          this.$window.on("resize", this.setResizeOptions.bind(this)),
          this.$window.on("scroll", this.scrollSettings.bind(this)),
          this.$document.on("click", "html", this.clickOutsideNav),
          this.$body.on(
            "mouseenter mouseleave",
            "#top-social a",
            this.topSocial
          ),
          this.$body.on(
            "mouseenter mouseleave click",
            ".mini-nav",
            this.showDropDownMini
          ),
          this.$body.on("mouseleave", ".mini-nav", this.removeBlockSettings),
          this.$body.on("click", ".prev-default", function (t) {
            t.preventDefault();
          }),
          this.$body.on(
            "click",
            ".navbar-push .navbar-toggle",
            this.noOverflow.bind(this)
          ),
          this.$body.on(
            "click",
            ".navbar-off-canvas .navbar-toggle",
            this.noOverflow.bind(this)
          ),
          this.$body.on(
            "click",
            ".off-canvas-close p a",
            this.normalizeNav.bind(this)
          );
      },
      stopPropagation: function (t) {
        t.stopPropagation();
      },
      setActiveTab: function (t) {
        var e = $(this),
          a = e.attr("data-tabs"),
          i = e.parent(),
          o = i.siblings(),
          s = e
            .parents(".tab-nav")
            .siblings(".tab-container")
            .children("div#" + a);
        (("mouseenter" == t.type &&
          e.parents(".tab-nav").hasClass("tab-nav-hover")) ||
          "click" == t.type) &&
          (i.addClass("ui-tabs-active"),
          o.removeClass("ui-tabs-active"),
          s.addClass("l-block").siblings().removeClass("l-block"));
      },
      showDropDown: function (e) {
        var a = $(this);
        ("mouseenter" == e.type && t.$navbar.hasClass("navbar-hover")) ||
        ("click" == e.type && t.$navbar.hasClass("navbar-click"))
          ? t.setDropAnimation(a)
          : "mouseleave" == e.type &&
            t.$navbar.hasClass("navbar-hover") &&
            (t.$dropdown.removeClass("open"),
            t.$mini_nav.find(".dropdown-menu").removeClass("l-block"));
      },
      showDropDownMini: function (e) {
        var a = $(this);
        a.hasClass("navbar-hover") || a.hasClass("navbar-click")
          ? "mouseenter" == e.type && t.$mini_nav.hasClass("navbar-hover")
            ? (a.find(".dropdown-menu").addClass("l-block"),
              t.setDropAnimation(a))
            : "click" == e.type && t.$mini_nav.hasClass("navbar-click")
            ? (a.find(".dropdown-menu").addClass("l-block"),
              t.setDropAnimation(a),
              a
                .parent()
                .siblings()
                .find(".dropdown-menu")
                .removeClass("l-block"))
            : "mouseleave" == e.type && t.removeBlockSettings()
          : (a.find(".dropdown-menu").addClass("l-block"),
            t.setDropAnimation(a),
            a
              .parent()
              .siblings()
              .find(".dropdown-menu")
              .removeClass("l-block"));
      },
      setActiveMenu: function (e) {
        var a = $(this);
        a.hasClass("dropdown-parent") &&
          (a
            .find(
              ".dropdown-right .dropdown-menu, .dropdown-left .dropdown-menu"
            )
            .removeClass("l-block"),
          a
            .siblings(".dropdown-parent")
            .find(".dropdown-menu")
            .removeClass("l-block")),
          a.children(".dropdown-menu").toggleClass("l-block"),
          t.showDropDown(a),
          e.stopPropagation();
      },
      calculateHeight: function (e) {
        var a = $(this),
          i = a.find(".col-autoheight"),
          o = a.find(".dropdown-menu"),
          s = o.attr("data-adjust") ? o.attr("data-adjust") : Number(0),
          n = o.outerHeight();
        window.innerWidth > t.adaptationWidth
          ? (o.css("height", n), i.css("height", n - s))
          : (o.css("height", "auto !important"),
            i.css("height", "auto !important"));
      },
      conveyWidth: function (e) {
        var a = $(this),
          i = a.find(".dropdown-menu"),
          o = $(".dropdown.dropdown-convey-width").find(".dropdown-menu"),
          s = a.children(".dropdown-menu").outerWidth();
        window.innerWidth > t.adaptationWidth
          ? i.css("width", s)
          : o.css("width", "auto");
      },
      conveyHeight: function (e) {
        var a = $(this),
          i = a.children(".dropdown-menu"),
          o = a.parent(".dropdown-menu").outerHeight();
        window.innerWidth > t.adaptationWidth
          ? i.css("height", o)
          : i.css("height", "100%");
      },
      calculateDistance: function (e) {
        this.$dropdown_custom.each(function () {
          var e = $(this).children(".dropdown-menu"),
            a = Number(e.attr("data-offset-y"));
          window.innerWidth > t.adaptationWidth
            ? e.css("top", a)
            : e.css("top", "auto");
        });
      },
      setResizeOptions: function () {
        window.innerWidth <= t.adaptationWidth
          ? (this.removeBlockSettings(),
            this.conveyWidth(),
            this.$navbar.removeClass("navbar-hover").addClass("navbar-click"),
            this.$tab_nav.removeClass("tab-nav-hover"),
            this.$tab_nav_links_click_strict.removeClass("prev-default"),
            this.$sub_marker
              .addClass("prev-default")
              .removeClass("allow-default"),
            this.$navbar_nav_li_a.removeClass("disabled"))
          : (this.navOptions(),
            this.tabOptions(),
            this.calculateDistance(),
            this.$tab_nav_links_click_strict.addClass("prev-default"),
            this.$sub_marker
              .removeClass("prev-default")
              .addClass("allow-default"),
            this.$navbar_nav_li_a.addClass("disabled"),
            this.normalizeNav()),
          window.innerWidth <= 991 && window.innerWidth > t.adaptationWidth
            ? this.activateTitle()
            : this.$a_w_title.removeAttr("title");
      },
      scrollSettings: function () {},
      stickToTop: function () {
        var t = this;
        this.checkExistence(this.$sticky) &&
          this.$sticky.waypoint({
            handler: function (e) {
              "down" == e
                ? t.$sticky
                    .removeClass("navbar-static-top")
                    .addClass("navbar-fixed-top")
                : "up" == e &&
                  t.$sticky
                    .removeClass("navbar-fixed-top")
                    .addClass("navbar-static-top");
            },
          });
      },
      normalizeNav: function () {
        this.checkExistence(this.$navbar_push) &&
          (this.$body.removeClass("no-overflow"),
          this.$body.removeClass("no-scroll"),
          this.$page_contents.removeClass("body-push-right"),
          this.$navbar_collapse_push.removeClass("collapse-push-right in"),
          this.$navbar
            .removeClass("navbar-fixed-top")
            .addClass("navbar-static-top")),
          this.checkExistence(this.$navbar_off) &&
            (this.$body.removeClass("no-overflow"),
            this.$body.removeClass("no-scroll"),
            this.$page_contents.removeClass("body-push-right"),
            this.$navbar_collapse_off.removeClass("collapse-push-right in"),
            this.$pure_sticky.length > 0 &&
              this.$navbar
                .removeClass("navbar-fixed-top")
                .addClass("navbar-static-top")),
          this.$page_contents.off("touchmove");
      },
      navOptions: function () {
        this.$navbar.hasClass("navbar-click-strict")
          ? this.$navbar.addClass("navbar-click").removeClass("navbar-hover")
          : this.$navbar.removeClass("navbar-click").addClass("navbar-hover"),
          this.checkExistence(this.$navbar_push) &&
            (this.$body.removeClass("no-overflow"),
            this.$page_contents.removeClass("move-right"));
      },
      tabOptions: function () {
        this.$tab_nav.hasClass("tab-nav-click-strict")
          ? this.$tab_nav.removeClass("tab-nav-hover")
          : this.$tab_nav.addClass("tab-nav-hover");
      },
      clickOutsideNav: function (e) {
        0 == $(e.target).closest("#nav-section").length &&
          t.removeBlockSettings();
      },
      removeBlockSettings: function () {
        t.$dropdown_menu.removeClass("l-block");
      },
      setMenuActive: function (t) {
        $(this).hasClass("allow-default") || t.preventDefault();
      },
      setDropAnimation: function (t) {
        var e = t.attr("data-animation") ? t.attr("data-animation") : "fadeIn";
        t.find(".dropdown-menu")
          .first()
          .removeClass("animated")
          .addClass("animated " + e);
      },
      topSocial: function (e) {
        var a = $(this),
          i = a.data("hover-width"),
          o = a.data("hover-bg");
        "mouseenter" == e.type
          ? a.css({ width: i, "background-color": o })
          : "mouseleave" == e.type &&
            t.$top_social_links.css({
              width: "40",
              "background-color": "transparent",
            });
      },
      activateTitle: function () {
        this.checkExistence(this.$a_w_title) &&
          this.$a_w_title.each(function () {
            var t = $(this),
              e = t.data("title");
            t.attr("title", e);
          });
      },
      noOverflow: function () {
        this.checkExistence(this.$navbar_push) &&
          (this.$navbar_collapse_push.toggleClass("collapse-push-right"),
          this.$body.toggleClass("no-overflow"),
          this.$page_contents.toggleClass("body-push-right")),
          this.checkExistence(this.$navbar_off) &&
            (this.$navbar_collapse_push.toggleClass("collapse-push-right"),
            this.$body.toggleClass("no-overflow"),
            this.$page_contents.toggleClass("body-push-right")),
          this.$page_contents.hasClass("body-push-right")
            ? (this.$page_contents.on("touchmove", function (t) {
                t.preventDefault();
              }),
              this.$navbar
                .addClass("navbar-fixed-top")
                .removeClass("navbar-static-top"))
            : (this.$page_contents.off("touchmove"),
              this.$navbar
                .removeClass("navbar-fixed-top")
                .addClass("navbar-static-top"));
      },
      checkExistence: function (t) {
        return t.length > 0;
      },
    };
    t.init(),
      $("#position-settings").on("click", "button", function () {
        var t = $(this).attr("data-pos"),
          e = $("#wrapper"),
          a = $("#solidMenus"),
          i = $("#row-carousel"),
          o = $(".navbar"),
          s = $("#navbar-inner-container"),
          n = ($("#main-carousel"), $("#page-contents"));
        switch (
          (a.removeClass("container-fluid container"),
          s.removeClass("container-fluid container"),
          o.removeClass("navbar-static-top navbar-fixed-top"),
          n.removeClass("container-fluid container"),
          t)
        ) {
          case "default":
            e.css({ "padding-top": "20px", "padding-bottom": "20px" }),
              a.addClass("container-fluid").removeAttr("style"),
              s.addClass("container-fluid"),
              i.removeAttr("style").hide(),
              n.addClass("container-fluid");
            break;
          case "fixed-top":
            e.css("padding-top", "0"),
              a
                .addClass("container-fluid")
                .css({ "padding-left": 0, "padding-right": 0 }),
              s.addClass("container-fluid"),
              o.addClass("navbar-fixed-top"),
              i.css({ padding: "15px", "margin-top": "55px" }),
              n.addClass("container-fluid").css({ "margin-top": "50px" });
            break;
          case "fixed-top-short":
            e.css("padding-top", "0"),
              a
                .addClass("container-fluid")
                .css({ "padding-left": 0, "padding-right": 0 }),
              s.addClass("container"),
              o.addClass("navbar-fixed-top"),
              i.css({ padding: "15px", "margin-top": "55px" }).hide(),
              n.addClass("container-fluid").css({ "margin-top": "50px" });
        }
      });
  }),
  (function () {
    var t = document.getElementsByTagName("head")[0],
      e = document.createElement("script");
    (e.type = "text/javascript"),
      (e.src = "https://static.toyotabharat.com/js/sessionHandling.js"),
      t.appendChild(e);
  })();
var API_BASEURL_SYSTEM = "https://webapi.toyotabharat.com/";
$("#headerContent").load("/common/header.html"),
  $("#footerContent").load("/common/footer.html"),
  $("#applyLoanModal").load("/common/finance-disclaimer-popup.html"),
  $("#tnc").load("/common/terms-conditions-popup.html"),
  $("#snav").load("/common/sticky-navigation.html", function () {
    $(".productCheckout").click(function () {
      $("#popup-container").toggleClass("stickyProductIcon"),
        $(this).toggleClass("stickyCloseIcon");
    });
  });
