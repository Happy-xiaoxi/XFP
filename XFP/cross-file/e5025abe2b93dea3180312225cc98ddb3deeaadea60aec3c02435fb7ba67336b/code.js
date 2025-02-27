// Fingerprintjs2 - Copyright (c) 2020 Valentin Vasilyev (valentin.vasilyev@outlook.com)
// Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
import {f} from './_nf.js';
import {g} from './_ng.js';
import {h} from './_h.js';
import {m} from './_nm.js';
import {p} from './_np.js';
import {d} from './_nd.js';
import {l} from './_nl.js';
import {u} from './_u.js';
import {s} from './_ns.js';
import {n} from './_nn.js';
import {a} from './_na.js';
import {r} from './_nr.js';
import {i} from './_ni.js';
import {o} from './_no.js';
import {c} from './_nc.js';
import {T} from './_T.js';
import {A} from './_A.js';
import {v} from './_v.js';
import {S} from './_S.js';
import {C} from './_C.js';
import {w} from './_w.js';
import {y} from './_y.js';
import {t} from './_nt.js';
import {B} from './_B.js';
import {E} from './_E.js';
import {x} from './_x.js';
import {O} from './_O.js';
import {M} from './_M.js';
import {b} from './_nb.js';
import {P} from './_P.js';
import {L} from './_L.js';
import {I} from './_I.js';
import {k} from './_k.js';
import {R} from './_R.js';
import {D} from './_D.js';
import {N} from './_N.js';
import {_} from './__.js';
import {F} from './_F.js';
import {G} from './_G.js';

// function _convertFunc1(e, t) {
//   "use strict";
//   e.Fingerprint2 = t()
  // "undefined" != typeof window && "function" == typeof define && define.amd
  //   ? define(t)
  //   : "undefined" != typeof module && module.exports
  //   ? (module.exports = t())
  //   : e.exports
  //   ? (e.exports = t())
  //   : (e.Fingerprint2 = t());
// };

// _convertFunc1(this, _convertFunc2)
_convertFunc2()

function _convertFunc2() {
  "use strict";
  "undefined" == typeof Array.isArray &&
    (Array.isArray = function (e) {
      return "[object Array]" === Object.prototype.toString.call(e);
    });
    var e = {
      preprocessor: null,
      audio: { timeout: 1e3, excludeIOS11: !0 },
      fonts: {
        swfContainerId: "fingerprintjs2",
        swfPath: "flash/compiled/FontList.swf",
        userDefinedFonts: [],
        extendedJsFonts: !1,
      },
      screen: { detectScreenOrientation: !0 },
      plugins: { sortPluginsFor: [/palemoon/i], excludeIE: !1 },
      extraComponents: [],
      excludes: {
        enumerateDevices: !0,
        pixelRatio: !0,
        doNotTrack: !0,
        fontsFlash: !0,
      },
      NOT_AVAILABLE: "not available",
      ERROR: "error",
      EXCLUDED: "excluded",
    };
 
    var U = [
      {
        key: "userAgent",
        getData: function (e) {
          e(navigator.userAgent);
        },
      },
      {
        key: "webdriver",
        getData: function (e, t) {
          e(
            null == navigator.webdriver ? t.NOT_AVAILABLE : navigator.webdriver
          );
        },
      },
      {
        key: "language",
        getData: function (e, t) {
          e(
            navigator.language ||
              navigator.userLanguage ||
              navigator.browserLanguage ||
              navigator.systemLanguage ||
              t.NOT_AVAILABLE
          );
        },
      },
      {
        key: "colorDepth",
        getData: function (e, t) {
          e(window.screen.colorDepth || t.NOT_AVAILABLE);
        },
      },
      {
        key: "deviceMemory",
        getData: function (e, t) {
          e(navigator.deviceMemory || t.NOT_AVAILABLE);
        },
      },
      {
        key: "pixelRatio",
        getData: function (e, t) {
          e(window.devicePixelRatio || t.NOT_AVAILABLE);
        },
      },
      {
        key: "hardwareConcurrency",
        getData: function (e, t) {
          e(S(t));
        },
      },
      {
        key: "screenResolution",
        getData: function (e, t) {
          e(a(t));
        },
      },
      {
        key: "availableScreenResolution",
        getData: function (e, t) {
          e(r(t));
        },
      },
      {
        key: "timezoneOffset",
        getData: function (e) {
          e(new Date().getTimezoneOffset());
        },
      },
      {
        key: "timezone",
        getData: function (e, t) {
          window.Intl && window.Intl.DateTimeFormat
            ? e(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
            : e(t.NOT_AVAILABLE);
        },
      },
      {
        key: "sessionStorage",
        getData: function (e, t) {
          e(T(t));
        },
      },
      {
        key: "localStorage",
        getData: function (e, t) {
          e(A(t));
        },
      },
      {
        key: "indexedDb",
        getData: function (e, t) {
          e(v(t));
        },
      },
      {
        key: "addBehavior",
        getData: function (e) {
          e(!(!document.body || !document.body.addBehavior));
        },
      },
      {
        key: "openDatabase",
        getData: function (e) {
          e(!!window.openDatabase);
        },
      },
      {
        key: "cpuClass",
        getData: function (e, t) {
          e(C(t));
        },
      },
      {
        key: "platform",
        getData: function (e, t) {
          e(w(t));
        },
      },
      {
        key: "doNotTrack",
        getData: function (e, t) {
          e(y(t));
        },
      },
      {
        key: "plugins",
        getData: function (e, t) {
          R() ? (t.plugins.excludeIE ? e(t.EXCLUDED) : e(o(t))) : e(i(t));
        },
      },
      {
        key: "canvas",
        getData: function (e, t) {
          I() ? e(B(t)) : e(t.NOT_AVAILABLE);
        },
      },
      {
        key: "webgl",
        getData: function (e, t) {
          k() ? e(E()) : e(t.NOT_AVAILABLE);
        },
      },
      {
        key: "webglVendorAndRenderer",
        getData: function (e) {
          k() ? e(x()) : e();
        },
      },
      {
        key: "adBlock",
        getData: function (e) {
          e(O());
        },
      },
      {
        key: "hasLiedLanguages",
        getData: function (e) {
          e(M());
        },
      },
      {
        key: "hasLiedResolution",
        getData: function (e) {
          e(b());
        },
      },
      {
        key: "hasLiedOs",
        getData: function (e) {
          e(P());
        },
      },
      {
        key: "hasLiedBrowser",
        getData: function (e) {
          e(L());
        },
      },
      {
        key: "touchSupport",
        getData: function (e) {
          e(t());
        },
      },
      {
        key: "fonts",
        getData: function (e, t) {
          var u = ["monospace", "sans-serif", "serif"],
            d = [
              "Andale Mono",
              "Arial",
              "Arial Black",
              "Arial Hebrew",
              "Arial MT",
              "Arial Narrow",
              "Arial Rounded MT Bold",
              "Arial Unicode MS",
              "Bitstream Vera Sans Mono",
              "Book Antiqua",
              "Bookman Old Style",
              "Calibri",
              "Cambria",
              "Cambria Math",
              "Century",
              "Century Gothic",
              "Century Schoolbook",
              "Comic Sans",
              "Comic Sans MS",
              "Consolas",
              "Courier",
              "Courier New",
              "Geneva",
              "Georgia",
              "Helvetica",
              "Helvetica Neue",
              "Impact",
              "Lucida Bright",
              "Lucida Calligraphy",
              "Lucida Console",
              "Lucida Fax",
              "LUCIDA GRANDE",
              "Lucida Handwriting",
              "Lucida Sans",
              "Lucida Sans Typewriter",
              "Lucida Sans Unicode",
              "Microsoft Sans Serif",
              "Monaco",
              "Monotype Corsiva",
              "MS Gothic",
              "MS Outlook",
              "MS PGothic",
              "MS Reference Sans Serif",
              "MS Sans Serif",
              "MS Serif",
              "MYRIAD",
              "MYRIAD PRO",
              "Palatino",
              "Palatino Linotype",
              "Segoe Print",
              "Segoe Script",
              "Segoe UI",
              "Segoe UI Light",
              "Segoe UI Semibold",
              "Segoe UI Symbol",
              "Tahoma",
              "Times",
              "Times New Roman",
              "Times New Roman PS",
              "Trebuchet MS",
              "Verdana",
              "Wingdings",
              "Wingdings 2",
              "Wingdings 3",
            ];
          if (t.fonts.extendedJsFonts) {
            d = d.concat([
              "Abadi MT Condensed Light",
              "Academy Engraved LET",
              "ADOBE CASLON PRO",
              "Adobe Garamond",
              "ADOBE GARAMOND PRO",
              "Agency FB",
              "Aharoni",
              "Albertus Extra Bold",
              "Albertus Medium",
              "Algerian",
              "Amazone BT",
              "American Typewriter",
              "American Typewriter Condensed",
              "AmerType Md BT",
              "Andalus",
              "Angsana New",
              "AngsanaUPC",
              "Antique Olive",
              "Aparajita",
              "Apple Chancery",
              "Apple Color Emoji",
              "Apple SD Gothic Neo",
              "Arabic Typesetting",
              "ARCHER",
              "ARNO PRO",
              "Arrus BT",
              "Aurora Cn BT",
              "AvantGarde Bk BT",
              "AvantGarde Md BT",
              "AVENIR",
              "Ayuthaya",
              "Bandy",
              "Bangla Sangam MN",
              "Bank Gothic",
              "BankGothic Md BT",
              "Baskerville",
              "Baskerville Old Face",
              "Batang",
              "BatangChe",
              "Bauer Bodoni",
              "Bauhaus 93",
              "Bazooka",
              "Bell MT",
              "Bembo",
              "Benguiat Bk BT",
              "Berlin Sans FB",
              "Berlin Sans FB Demi",
              "Bernard MT Condensed",
              "BernhardFashion BT",
              "BernhardMod BT",
              "Big Caslon",
              "BinnerD",
              "Blackadder ITC",
              "BlairMdITC TT",
              "Bodoni 72",
              "Bodoni 72 Oldstyle",
              "Bodoni 72 Smallcaps",
              "Bodoni MT",
              "Bodoni MT Black",
              "Bodoni MT Condensed",
              "Bodoni MT Poster Compressed",
              "Bookshelf Symbol 7",
              "Boulder",
              "Bradley Hand",
              "Bradley Hand ITC",
              "Bremen Bd BT",
              "Britannic Bold",
              "Broadway",
              "Browallia New",
              "BrowalliaUPC",
              "Brush Script MT",
              "Californian FB",
              "Calisto MT",
              "Calligrapher",
              "Candara",
              "CaslonOpnface BT",
              "Castellar",
              "Centaur",
              "Cezanne",
              "CG Omega",
              "CG Times",
              "Chalkboard",
              "Chalkboard SE",
              "Chalkduster",
              "Charlesworth",
              "Charter Bd BT",
              "Charter BT",
              "Chaucer",
              "ChelthmITC Bk BT",
              "Chiller",
              "Clarendon",
              "Clarendon Condensed",
              "CloisterBlack BT",
              "Cochin",
              "Colonna MT",
              "Constantia",
              "Cooper Black",
              "Copperplate",
              "Copperplate Gothic",
              "Copperplate Gothic Bold",
              "Copperplate Gothic Light",
              "CopperplGoth Bd BT",
              "Corbel",
              "Cordia New",
              "CordiaUPC",
              "Cornerstone",
              "Coronet",
              "Cuckoo",
              "Curlz MT",
              "DaunPenh",
              "Dauphin",
              "David",
              "DB LCD Temp",
              "DELICIOUS",
              "Denmark",
              "DFKai-SB",
              "Didot",
              "DilleniaUPC",
              "DIN",
              "DokChampa",
              "Dotum",
              "DotumChe",
              "Ebrima",
              "Edwardian Script ITC",
              "Elephant",
              "English 111 Vivace BT",
              "Engravers MT",
              "EngraversGothic BT",
              "Eras Bold ITC",
              "Eras Demi ITC",
              "Eras Light ITC",
              "Eras Medium ITC",
              "EucrosiaUPC",
              "Euphemia",
              "Euphemia UCAS",
              "EUROSTILE",
              "Exotc350 Bd BT",
              "FangSong",
              "Felix Titling",
              "Fixedsys",
              "FONTIN",
              "Footlight MT Light",
              "Forte",
              "FrankRuehl",
              "Fransiscan",
              "Freefrm721 Blk BT",
              "FreesiaUPC",
              "Freestyle Script",
              "French Script MT",
              "FrnkGothITC Bk BT",
              "Fruitger",
              "FRUTIGER",
              "Futura",
              "Futura Bk BT",
              "Futura Lt BT",
              "Futura Md BT",
              "Futura ZBlk BT",
              "FuturaBlack BT",
              "Gabriola",
              "Galliard BT",
              "Gautami",
              "Geeza Pro",
              "Geometr231 BT",
              "Geometr231 Hv BT",
              "Geometr231 Lt BT",
              "GeoSlab 703 Lt BT",
              "GeoSlab 703 XBd BT",
              "Gigi",
              "Gill Sans",
              "Gill Sans MT",
              "Gill Sans MT Condensed",
              "Gill Sans MT Ext Condensed Bold",
              "Gill Sans Ultra Bold",
              "Gill Sans Ultra Bold Condensed",
              "Gisha",
              "Gloucester MT Extra Condensed",
              "GOTHAM",
              "GOTHAM BOLD",
              "Goudy Old Style",
              "Goudy Stout",
              "GoudyHandtooled BT",
              "GoudyOLSt BT",
              "Gujarati Sangam MN",
              "Gulim",
              "GulimChe",
              "Gungsuh",
              "GungsuhChe",
              "Gurmukhi MN",
              "Haettenschweiler",
              "Harlow Solid Italic",
              "Harrington",
              "Heather",
              "Heiti SC",
              "Heiti TC",
              "HELV",
              "Herald",
              "High Tower Text",
              "Hiragino Kaku Gothic ProN",
              "Hiragino Mincho ProN",
              "Hoefler Text",
              "Humanst 521 Cn BT",
              "Humanst521 BT",
              "Humanst521 Lt BT",
              "Imprint MT Shadow",
              "Incised901 Bd BT",
              "Incised901 BT",
              "Incised901 Lt BT",
              "INCONSOLATA",
              "Informal Roman",
              "Informal011 BT",
              "INTERSTATE",
              "IrisUPC",
              "Iskoola Pota",
              "JasmineUPC",
              "Jazz LET",
              "Jenson",
              "Jester",
              "Jokerman",
              "Juice ITC",
              "Kabel Bk BT",
              "Kabel Ult BT",
              "Kailasa",
              "KaiTi",
              "Kalinga",
              "Kannada Sangam MN",
              "Kartika",
              "Kaufmann Bd BT",
              "Kaufmann BT",
              "Khmer UI",
              "KodchiangUPC",
              "Kokila",
              "Korinna BT",
              "Kristen ITC",
              "Krungthep",
              "Kunstler Script",
              "Lao UI",
              "Latha",
              "Leelawadee",
              "Letter Gothic",
              "Levenim MT",
              "LilyUPC",
              "Lithograph",
              "Lithograph Light",
              "Long Island",
              "Lydian BT",
              "Magneto",
              "Maiandra GD",
              "Malayalam Sangam MN",
              "Malgun Gothic",
              "Mangal",
              "Marigold",
              "Marion",
              "Marker Felt",
              "Market",
              "Marlett",
              "Matisse ITC",
              "Matura MT Script Capitals",
              "Meiryo",
              "Meiryo UI",
              "Microsoft Himalaya",
              "Microsoft JhengHei",
              "Microsoft New Tai Lue",
              "Microsoft PhagsPa",
              "Microsoft Tai Le",
              "Microsoft Uighur",
              "Microsoft YaHei",
              "Microsoft Yi Baiti",
              "MingLiU",
              "MingLiU_HKSCS",
              "MingLiU_HKSCS-ExtB",
              "MingLiU-ExtB",
              "Minion",
              "Minion Pro",
              "Miriam",
              "Miriam Fixed",
              "Mistral",
              "Modern",
              "Modern No. 20",
              "Mona Lisa Solid ITC TT",
              "Mongolian Baiti",
              "MONO",
              "MoolBoran",
              "Mrs Eaves",
              "MS LineDraw",
              "MS Mincho",
              "MS PMincho",
              "MS Reference Specialty",
              "MS UI Gothic",
              "MT Extra",
              "MUSEO",
              "MV Boli",
              "Nadeem",
              "Narkisim",
              "NEVIS",
              "News Gothic",
              "News GothicMT",
              "NewsGoth BT",
              "Niagara Engraved",
              "Niagara Solid",
              "Noteworthy",
              "NSimSun",
              "Nyala",
              "OCR A Extended",
              "Old Century",
              "Old English Text MT",
              "Onyx",
              "Onyx BT",
              "OPTIMA",
              "Oriya Sangam MN",
              "OSAKA",
              "OzHandicraft BT",
              "Palace Script MT",
              "Papyrus",
              "Parchment",
              "Party LET",
              "Pegasus",
              "Perpetua",
              "Perpetua Titling MT",
              "PetitaBold",
              "Pickwick",
              "Plantagenet Cherokee",
              "Playbill",
              "PMingLiU",
              "PMingLiU-ExtB",
              "Poor Richard",
              "Poster",
              "PosterBodoni BT",
              "PRINCETOWN LET",
              "Pristina",
              "PTBarnum BT",
              "Pythagoras",
              "Raavi",
              "Rage Italic",
              "Ravie",
              "Ribbon131 Bd BT",
              "Rockwell",
              "Rockwell Condensed",
              "Rockwell Extra Bold",
              "Rod",
              "Roman",
              "Sakkal Majalla",
              "Santa Fe LET",
              "Savoye LET",
              "Sceptre",
              "Script",
              "Script MT Bold",
              "SCRIPTINA",
              "Serifa",
              "Serifa BT",
              "Serifa Th BT",
              "ShelleyVolante BT",
              "Sherwood",
              "Shonar Bangla",
              "Showcard Gothic",
              "Shruti",
              "Signboard",
              "SILKSCREEN",
              "SimHei",
              "Simplified Arabic",
              "Simplified Arabic Fixed",
              "SimSun",
              "SimSun-ExtB",
              "Sinhala Sangam MN",
              "Sketch Rockwell",
              "Skia",
              "Small Fonts",
              "Snap ITC",
              "Snell Roundhand",
              "Socket",
              "Souvenir Lt BT",
              "Staccato222 BT",
              "Steamer",
              "Stencil",
              "Storybook",
              "Styllo",
              "Subway",
              "Swis721 BlkEx BT",
              "Swiss911 XCm BT",
              "Sylfaen",
              "Synchro LET",
              "System",
              "Tamil Sangam MN",
              "Technical",
              "Teletype",
              "Telugu Sangam MN",
              "Tempus Sans ITC",
              "Terminal",
              "Thonburi",
              "Traditional Arabic",
              "Trajan",
              "TRAJAN PRO",
              "Tristan",
              "Tubular",
              "Tunga",
              "Tw Cen MT",
              "Tw Cen MT Condensed",
              "Tw Cen MT Condensed Extra Bold",
              "TypoUpright BT",
              "Unicorn",
              "Univers",
              "Univers CE 55 Medium",
              "Univers Condensed",
              "Utsaah",
              "Vagabond",
              "Vani",
              "Vijaya",
              "Viner Hand ITC",
              "VisualUI",
              "Vivaldi",
              "Vladimir Script",
              "Vrinda",
              "Westminster",
              "WHITNEY",
              "Wide Latin",
              "ZapfEllipt BT",
              "ZapfHumnst BT",
              "ZapfHumnst Dm BT",
              "Zapfino",
              "Zurich BlkEx BT",
              "Zurich Ex BT",
              "ZWAdobeF",
            ]);
          }
          d = (d = d.concat(t.fonts.userDefinedFonts)).filter(function (e, t) {
            return d.indexOf(e) === t;
          });
          var n = document.getElementsByTagName("body")[0],
            r = document.createElement("div"),
            f = document.createElement("div"),
            a = {},
            i = {},
            g = function () {
              var e = document.createElement("span");
              return (
                (e.style.position = "absolute"),
                (e.style.left = "-9999px"),
                (e.style.fontSize = "72px"),
                (e.style.fontStyle = "normal"),
                (e.style.fontWeight = "normal"),
                (e.style.letterSpacing = "normal"),
                (e.style.lineBreak = "auto"),
                (e.style.lineHeight = "normal"),
                (e.style.textTransform = "none"),
                (e.style.textAlign = "left"),
                (e.style.textDecoration = "none"),
                (e.style.textShadow = "none"),
                (e.style.whiteSpace = "normal"),
                (e.style.wordBreak = "normal"),
                (e.style.wordSpacing = "normal"),
                (e.innerHTML = "mmmmmmmmmmlli"),
                e
              );
            },
            o = function (e) {
              for (var t = !1, n = 0; n < u.length; n++)
                if (
                  (t =
                    e[n].offsetWidth !== a[u[n]] ||
                    e[n].offsetHeight !== i[u[n]])
                )
                  return t;
              return t;
            },
            l = (function () {
              for (var e = [], t = 0, n = u.length; t < n; t++) {
                var a = g();
                (a.style.fontFamily = u[t]), r.appendChild(a), e.push(a);
              }
              return e;
            })();
          n.appendChild(r);
          for (var s = 0, c = u.length; s < c; s++)
            (a[u[s]] = l[s].offsetWidth), (i[u[s]] = l[s].offsetHeight);
          var h = (function () {
            for (var e, t, n, a = {}, r = 0, i = d.length; r < i; r++) {
              for (var o = [], l = 0, s = u.length; l < s; l++) {
                var c =
                  ((e = d[r]),
                  (t = u[l]),
                  (n = void 0),
                  ((n = g()).style.fontFamily = "'" + e + "'," + t),
                  n);
                f.appendChild(c), o.push(c);
              }
              a[d[r]] = o;
            }
            return a;
          })();
          n.appendChild(f);
          for (var m = [], p = 0, T = d.length; p < T; p++)
            o(h[d[p]]) && m.push(d[p]);
          n.removeChild(f), n.removeChild(r), e(m);
        },
        pauseBefore: !0,
      },
      {
        key: "fontsFlash",
        getData: function (t, e) {
          return D()
            ? N()
              ? e.fonts.swfPath
                ? void _(function (e) {
                    t(e);
                  }, e)
                : t("missing options.fonts.swfPath")
              : t("flash not installed")
            : t("swf object not loaded");
        },
        pauseBefore: !0,
      },
      {
        key: "audio",
        getData: function (a, e) {
          var t = e.audio;
          if (
            t.excludeIOS11 &&
            navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)
          )
            return a(e.EXCLUDED);
          var n =
            window.OfflineAudioContext || window.webkitOfflineAudioContext;
          if (null == n) return a(e.NOT_AVAILABLE);
          var r = new n(1, 44100, 44100),
            i = r.createOscillator();
          (i.type = "triangle"), i.frequency.setValueAtTime(1e4, r.currentTime);
          var o = r.createDynamicsCompressor();
          u(
            [
              ["threshold", -50],
              ["knee", 40],
              ["ratio", 12],
              ["reduction", -20],
              ["attack", 0],
              ["release", 0.25],
            ],
            function (e) {
              o[e[0]] !== undefined &&
                "function" == typeof o[e[0]].setValueAtTime &&
                o[e[0]].setValueAtTime(e[1], r.currentTime);
            }
          ),
            i.connect(o),
            o.connect(r.destination),
            i.start(0),
            r.startRendering();
          var l = setTimeout(function () {
            return (
              console.warn(
                'Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' +
                  navigator.userAgent +
                  '".'
              ),
              (r.oncomplete = function () {}),
              (r = null),
              a("audioTimeout")
            );
          }, t.timeout);
          r.oncomplete = function (e) {
            var t;
            try {
              clearTimeout(l),
                (t = e.renderedBuffer
                  .getChannelData(0)
                  .slice(4500, 5e3)
                  .reduce(function (e, t) {
                    return e + Math.abs(t);
                  }, 0)
                  .toString()),
                i.disconnect(),
                o.disconnect();
            } catch (n) {
              return void a(n);
            }
            a(t);
          };
        },
      },
      {
        key: "enumerateDevices",
        getData: function (t, e) {
          if (!n()) return t(e.NOT_AVAILABLE);
          navigator.mediaDevices
            .enumerateDevices()
            .then(function (e) {
              t(
                e.map(function (e) {
                  return (
                    "id=" +
                    e.deviceId +
                    ";gid=" +
                    e.groupId +
                    ";" +
                    e.kind +
                    ";" +
                    e.label
                  );
                })
              );
            })
            ["catch"](function (e) {
              t(e);
            });
        },
      },
    ],
    V = function (e) {
      throw new Error(
        "'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200"
      );
    };
  return (
    (V.get = function (a, r) {
      (function (e, t) {
        if (null == t) return;
        var n, a;
        for (a in t)
          null == (n = t[a]) ||
            Object.prototype.hasOwnProperty.call(e, a) ||
            (e[a] = n);
      })((a = r ? a || {} : ((r = a), {})), e),
        (a.components = a.extraComponents.concat(U));
      var i = {
          data: [],
          addPreprocessedComponent: function (e, t) {
            "function" == typeof a.preprocessor && (t = a.preprocessor(e, t)),
              i.data.push({ key: e, value: t });
          },
        },
        o = -1,
        l = function (e) {
          if ((o += 1) >= a.components.length) r(i.data);
          else {
            var t = a.components[o];
            if (a.excludes[t.key]) l(!1);
            else {
              if (!e && t.pauseBefore)
                return (
                  --o,
                  void setTimeout(function () {
                    l(!0);
                  }, 1)
                );
              try {
                t.getData(function (e) {
                  i.addPreprocessedComponent(t.key, e), l(!1);
                }, a);
              } catch (n) {
                i.addPreprocessedComponent(t.key, String(n)), l(!1);
              }
            }
          }
        };
      l(!1);
    }),
    (V.getPromise = function (n) {
      return new Promise(function (e, t) {
        V.get(n, e);
      });
    }),
    (V.getV18 = function (i, o) {
      return (
        null == o && ((o = i), (i = {})),
        V.get(i, function (e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var a = e[n];
            if (a.value === (i.NOT_AVAILABLE || "not available"))
              t.push({ key: a.key, value: "unknown" });
            else if ("plugins" === a.key)
              t.push({
                key: "plugins",
                value: s(a.value, function (e) {
                  var t = s(e[2], function (e) {
                    return e.join ? e.join("~") : e;
                  }).join(",");
                  return [e[0], e[1], t].join("::");
                }),
              });
            else if (
              -1 !== ["canvas", "webgl"].indexOf(a.key) &&
              Array.isArray(a.value)
            )
              t.push({ key: a.key, value: a.value.join("~") });
            else if (
              -1 !==
              [
                "sessionStorage",
                "localStorage",
                "indexedDb",
                "addBehavior",
                "openDatabase",
              ].indexOf(a.key)
            ) {
              if (!a.value) continue;
              t.push({ key: a.key, value: 1 });
            } else
              a.value
                ? t.push(
                    a.value.join ? { key: a.key, value: a.value.join(";") } : a
                  )
                : t.push({ key: a.key, value: a.value });
          }
          var r = l(
            s(t, function (e) {
              return e.value;
            }).join("~~~"),
            31
          );
          o(r, t);
        })
      );
    }),
    (V.x64hash128 = l),
    (V.VERSION = "2.1.2"),
    V
  );
}