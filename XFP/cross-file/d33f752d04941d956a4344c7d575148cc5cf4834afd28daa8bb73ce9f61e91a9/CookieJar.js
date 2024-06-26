
import {setData} from './setData.js';
import {getData} from './getData.js';
import {deleteData} from './deleteData.js';
import {getCookieDomain} from './getCookieDomain.js';
// import {deleteAhoyCookie} from './deleteAhoyCookie.js';
// import {isCookiesEnabled} from './isCookiesEnabled.js';
import {_constructCookieString} from './_constructCookieString.js';
// import {_isIP} from './_isIP.js';
// import {_getHostname} from './_getHostname.js';

export function CookieJar() {
  this.setData = setData;
  this.getData = getData;
  this.deleteData = deleteData;
  this.getCookieDomain = getCookieDomain;
  // this.deleteAhoyCookie = deleteAhoyCookie;
  // this.isCookiesEnabled = isCookiesEnabled;
  this._constructCookieString = _constructCookieString;
  // this._isIP = _isIP;
  // this._getHostname = _getHostname;

}
