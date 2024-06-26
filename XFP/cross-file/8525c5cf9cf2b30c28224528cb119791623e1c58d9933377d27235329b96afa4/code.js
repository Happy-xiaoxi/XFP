//tealium universal tag - utag.36 ut4.0.202311160427, Copyright 2023 Tealium.com Inc. All Rights Reserved.
import {f} from './f.js';
import {this_value} from './this_value.js';
// import {quote} from './quote.js';
import {str} from './str.js';
import {deepCopy} from './deepCopy.js';
import {get_account_profile} from './get_account_profile.js';
// import {infixParameters} from './infixParameters.js';
import {is_in_sample_group} from './is_in_sample_group.js';
import {get_performance_timing} from './get_performance_timing.js';
import {validateProtocol} from './validateProtocol.js';
import {send} from './send.js';

if (typeof JSON !== "object") {
  JSON = {};
}
var rx_one = /^[\],:{}\s]*$/,
  rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
  rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  rx_four = /(?:^|:|,)(?:\s*\[)+/g,
  rx_escapable =
    /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
  rx_dangerous =
    /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

if (typeof Date.prototype.toJSON !== "function") {
  Date.prototype.toJSON = function () {
    return isFinite(this.valueOf())
      ? this.getUTCFullYear() +
          "-" +
          f(this.getUTCMonth() + 1) +
          "-" +
          f(this.getUTCDate()) +
          "T" +
          f(this.getUTCHours()) +
          ":" +
          f(this.getUTCMinutes()) +
          ":" +
          f(this.getUTCSeconds()) +
          "Z"
      : null;
  };
  Boolean.prototype.toJSON = this_value;
  Number.prototype.toJSON = this_value;
  String.prototype.toJSON = this_value;
}
var gap, indent, meta, rep;

if (typeof JSON.stringify !== "function") {
  meta = {
    "\b": "\\b",
    "\t": "\\t",
    "\n": "\\n",
    "\f": "\\f",
    "\r": "\\r",
    '"': '\\"',
    "\\": "\\\\",
  };
  JSON.stringify = function (value, replacer, space) {
    var i;
    gap = "";
    indent = "";
    if (typeof space === "number") {
      for (i = 0; i < space; i += 1) {
        indent += " ";
      }
    } else if (typeof space === "string") {
      indent = space;
    }
    rep = replacer;
    if (
      replacer &&
      typeof replacer !== "function" &&
      (typeof replacer !== "object" || typeof replacer.length !== "number")
    ) {
      throw new Error("JSON.stringify");
    }
    return str("", { "": value });
  };
}

try {
	var id  = "36", 
	loader = "ups.yoda",u;
    try {
      u = utag.o[loader].sender[id] = { id: id };
    } catch (e) {
      u = utag.sender[id];
    }
    utag.globals = window.utag.globals || {};
    u.toBoolean = function (val) {
      val = String(val) || "";
      return (
        val === true ||
        val.toLowerCase() === "true" ||
        val.toLowerCase() === "on"
      );
    };
    u.ev = { all: 1 };
    u.server_domain = "tealiumiq.com";
    u.server_prefix = "";
    u.tag_config_server = "";
    u.tag_config_sampling = "100" || "100";
    if (utag.cfg.utagdb) {
      u.tag_config_sampling = "100";
    }
    u.tag_config_region = "default" || "default";
    u.region = "";
    u.performance_timing_count = 0;
    u.event_url = "//collect.tealiumiq.com/event";
    u.account = utag.cfg.utid.split("/")[0];
    u.data_source = "nx31mn";
    u.profile = "" || utag.cfg.utid.split("/")[1];
    u.visitor_service_override = "";
    u.request_increment = 1;
    u.iab_v20_compliance = true;
    u.tc_string = "";
    u.use_sendBeacon = "true";
    u.use_event_endpoint = "false";
    u.use_event_endpoint = u.toBoolean(u.use_event_endpoint);
    u.tealium_cookie_domain = "";
    u.tealium_cookie_expiry = "";
    if (u.tag_config_server.indexOf("-collect." + u.server_domain) > 1) {
      u.server_prefix = u.tag_config_server.split(
        "collect." + u.server_domain
      )[0];
      if (u.tag_config_server.indexOf("/i.gif") < 0) {
        u.tag_config_server =
          "https://" +
          [
            u.server_prefix + "collect." + u.server_domain,
            u.account,
            u.profile,
            "2",
            "i.gif",
          ].join("/");
      }
    }
    if (u.tag_config_server === "") {
      if (u.use_event_endpoint) {
        u.tag_config_server = u.event_url;
      } else if (u.tag_config_region === "default") {
        u.tag_config_server =
          "https://" +
          [
            u.server_prefix + "collect." + u.server_domain,
            u.account,
            u.profile,
            "2",
            "i.gif",
          ].join("/");
      } else {
        u.tag_config_server =
          "https://" +
          [
            u.server_prefix +
              "collect-" +
              u.tag_config_region +
              "." +
              u.server_domain,
            u.account,
            u.profile,
            "2",
            "i.gif",
          ].join("/");
      }
    }
    if (u.tag_config_server.indexOf("-collect-") > -1) {
      u.server_prefix = u.tag_config_server.split("collect-")[0];
    }
    if (
      u.tag_config_region !== "default" &&
      u.tag_config_server.indexOf(
        u.server_prefix + "collect." + u.server_domain
      ) > 0
    ) {
      u.tag_config_server = u.tag_config_server.replace(
        u.server_prefix + "collect." + u.server_domain,
        u.server_prefix +
          "collect-" +
          u.tag_config_region +
          "." +
          u.server_domain
      );
      u.region = u.tag_config_region;
    }
    u.data_enrichment = "frequent";
    u.profile_specific_vid = 0;
    u.enrichment_polling = 1;
    u.enrichment_polling_delay = 500;
    u.do_enrichment = function () {};
    u.deepCopy = deepCopy;
    var q = u.tag_config_server.indexOf("?");
    if (q > 0 && q + 1 == u.tag_config_server.length) {
      u.tag_config_server = u.tag_config_server.replace("?", "");
    }
    u.server_list = u.tag_config_server.split("|");
    u.enrichment_enabled = {};
    u.use_sendBeacon = u.toBoolean(u.use_sendBeacon);
    u.get_account_profile = get_account_profile;

    u.is_in_sample_group = is_in_sample_group;
    u.get_performance_timing = get_performance_timing;
    u.validateProtocol = validateProtocol;
    u.map = {};
    u.extend = [];
    u.send = send;
    try {
      utag.o[loader].loader.LOAD(id);
    } catch (e) {
      utag.loader.LOAD(id);
    }

} catch (e) {
  utag.DB(e);
}
