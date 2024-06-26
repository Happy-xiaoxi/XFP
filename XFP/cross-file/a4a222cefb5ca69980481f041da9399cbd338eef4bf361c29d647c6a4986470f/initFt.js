import {get} from './get.js';
import {murmurhash3_32_gc} from './murmurhash3_32_gc.js';
import {hasLocalStorage} from './hasLocalStorage.js';
import {hasSessionStorage} from './hasSessionStorage.js';
import {hostName} from './hostName.js';
import {location} from './location.js';
import {getPlugins} from './getPlugins.js';
import {getMimeTypes} from './getMimeTypes.js';

export function initFt(r) {
    var ft = {};
    function setResultObject(i, s) {
      if (i !== undefined && r !== undefined) {
        r["D9_".concat(i.toString())] = s;
      }
    }
    var FtBh = function (options) {
      var nativeForEach, nativeMap;
      nativeForEach = Array.prototype.forEach;
      nativeMap = Array.prototype.map;
      this.each = function (obj, iterator, context) {
        if (obj === null) {
          return;
        }
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else {
          if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
              if (iterator.call(context, obj[i], i, obj) === {}) {
                return;
              }
            }
          } else {
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                if (iterator.call(context, obj[key], key, obj) === {}) {
                  return;
                }
              }
            }
          }
        }
      };
      this.map = function (obj, iterator, context) {
        var results = [];
        if (obj == null) {
          return results;
        }
        if (nativeMap && obj.map === nativeMap) {
          return obj.map(iterator, context);
        }
        this.each(obj, function (value, index, list) {
          results[results.length] = iterator.call(context, value, index, list);
        });
        return results;
      };
      if (typeof options == "object") {
        this.hasher = options.hasher;
        this.indexProperties = options.indexProperties;
      } else {
        if (typeof options == "function") {
          this.hasher = options;
        }
      }
    };
    FtBh.prototype = {
      get: get,
      murmurhash3_32_gc: murmurhash3_32_gc,
      hasLocalStorage: hasLocalStorage,
      hasSessionStorage: hasSessionStorage,
    };
    ft.isM = function (p, t) {
      return (
        (!!p && p === "iPhone") ||
        p === "iPad" ||
        (p.substr(0, 7) === "Linux a" && t > 0)
      );
    };
    ft.bh = function () {
      return new FtBh().get();
    };
    ft.bh64 = function () {
      return new FtBh({
        indexProperties: true,
        hasher: function (s) {
          return btoa(s);
        },
      }).get();
    };
    ft.encodeURIComponent = function (value) {
      if (value === undefined || value === null) {
        return value;
      }
      return encodeURIComponent(value);
    };
    ft.location = location;
    ft.referrer = function () {
      var r = ft.hostName(document.referrer);
      if (r === ft.location()) {
        r = "";
      }
      if (!r) {
        r = "";
      }
      return r;
    };
    ft.hostName = hostName;
    ft.flashVersion = function (m) {
      setResultObject(138, "8d56ea4f64f4828c32e1dca6d84d0532");
      if (m) {
        return null;
      }
      try {
        try {
          var obj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
          try {
            obj.AllowScriptAccess = "always";
          } catch (e) {
            return "6.0.0";
          }
        } catch (e) {}
        return new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
          .GetVariable("$version")
          .replace(/\D+/g, ".")
          .match(/^.?(.+),?$/)[1];
      } catch (e) {
        try {
          if (
            navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin
          ) {
            return (
              navigator.plugins["Shockwave Flash 2.0"] ||
              navigator.plugins["Shockwave Flash"]
            ).description
              .replace(/\D+/g, ".")
              .match(/^.?(.+),?$/)[1];
          }
        } catch (e) {}
      }
      return null;
    };
    ft.acrobatVersion = function (m) {
      setResultObject(139, "d10e54cb41fb43c5945b4d01b9bde1da");
      if (m) {
        return null;
      }
      if (window.ActiveXObject) {
        var obj = null;
        try {
          obj = new ActiveXObject("AcroPDF.PDF");
        } catch (e) {}
        if (!obj) {
          try {
            obj = new ActiveXObject("PDF.PdfCtrl");
          } catch (e) {
            return null;
          }
        }
        if (obj) {
          var version = obj.GetVersions().split(",");
          version = version[0].split("=");
          version = parseFloat(version[1]);
          return version;
        } else {
          return null;
        }
      } else {
        for (var i = 0; i < navigator.plugins.length; i++) {
          if (navigator.plugins[i].name.indexOf("Adobe Acrobat") != -1) {
            return navigator.plugins[i].description
              .replace(/\D+/g, ".")
              .match(/^.?(.+),?$/)[1];
          }
        }
        return null;
      }
    };
    ft.silverlightVersion = function (m) {
      if (m) {
        return null;
      }
      var parts = Array("", "", "", "");
      var nav = navigator.plugins["Silverlight Plug-In"];
      if (nav) {
        for (var i = 0; i < 4; i++) {
          parts[i] = parseInt(nav.description.split(".")[i]).toString();
        }
      } else {
        try {
          var control = new ActiveXObject("AgControl.AgControl");
          var vers = Array(1, 0, 0, 0);
          loopMatch(control, vers, 0, 1);
          loopMatch(control, vers, 1, 1);
          loopMatch(control, vers, 2, 10000);
          loopMatch(control, vers, 2, 1000);
          loopMatch(control, vers, 2, 100);
          loopMatch(control, vers, 2, 10);
          loopMatch(control, vers, 2, 1);
          loopMatch(control, vers, 3, 1);
          for (var i = 0; i < 4; i++) {
            parts[i] = vers[i].toString();
          }
        } catch (e) {
          return null;
        }
      }
      return parts.join(".");
      function loopMatch(control, vers, idx, inc) {
        while (IsSupported(control, vers)) {
          vers[idx] += inc;
        }
        vers[idx] -= inc;
      }
      function IsSupported(control, ver) {
        return control.isVersionSupported(
          ver[0] + "." + ver[1] + "." + ver[2] + "." + ver[3]
        );
      }
    };
    ft.getPlugins = getPlugins;
    ft.getMimeTypes = getMimeTypes;
    return ft;
  }