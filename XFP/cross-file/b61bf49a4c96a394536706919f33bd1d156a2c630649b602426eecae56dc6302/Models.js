import {getUserFromDefinedConfig} from './getUserFromDefinedConfig.js';
import {getUserFromVidioCookie} from './getUserFromVidioCookie.js';
import {getUserFromMeta} from './getUserFromMeta.js';
import {getUserFromCookie} from './getUserFromCookie.js';
import {getPlatform} from './getPlatform.js';
import {hostname} from './hostname.js';
import {getLoggedInUserId} from './getLoggedInUserId.js'

export function Models() {
  this.getAppName = function () {
    var domainSegments = this.hostname().split(".");
    return domainSegments.length > 2
      ? domainSegments.reverse()[1]
      : domainSegments[0];
  };
  this.getLoggedInUserId = getLoggedInUserId;
  this.getUserFromDefinedConfig = getUserFromDefinedConfig;
  this.getUserFromVidioCookie = getUserFromVidioCookie;
  this.getUserFromMeta = getUserFromMeta;
  this.getUserFromCookie = getUserFromCookie;
  this.getPlatform = getPlatform;
  this.hostname = hostname;
}