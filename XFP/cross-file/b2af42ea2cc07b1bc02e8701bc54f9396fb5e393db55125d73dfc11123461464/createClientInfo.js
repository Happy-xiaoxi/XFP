export function createClientInfo(a) {
  function c() {
    h = q.detect(f[m]) ? h + "1" : h + "0";
    m++;
    m >= f.length
      ? ((e.FontString = h),
        (p.clientInfo = e),
        (l = new Date().getTime() - l),
        (p.clientInfoTimingData.fontInfoTime = l),
        p.runExperimentalFP(a))
      : setTimeout(function () {
          c();
        }, 30);
  }
  if (this.clientInfo) a && a();
  else {
    this.clientInfoTimingData = {};
    var d = new Date().getTime(),
      f =
        "cursive;monospace;serif;sans-serif;fantasy;Arial;Arial Black;Arial Narrow;Arial Rounded MT Bold;Bookman Old Style;Bradley Hand ITC;Century;Century Gothic;Comic Sans MS;Courier;Courier New;Georgia;Gentium;Impact;King;Lucida Console;Lalit;Modena;Monotype Corsiva;Papyrus;Tahoma;TeX;Times;Times New Roman;Trebuchet MS;Verdana;Verona;Bell MT;Berlin Sans FB;Corbel;Kalinga;Miriam Regular;Modern Standard;Segoe UI;Segoe Print;Inconsolata;Droid Sans Mono;Anonymous Pro;Liberation Mono;Terminus;Rosario;Roboto Slab;Oswald;Stalemate;Crimson Text;Gravitas One;Jura;League Gothic;Fjord;Proxima Nova;Trivia Grotesk;Pluto Sans;Museo Sans;Futura;Al Bayan;American Typewriter;Andale Mono;Apple Casual;Apple Chancery;Apple Garamond;Apple Gothic;Apple LiGothic;Apple LiSung;Apple Myungjo;Apple Symbols;.AquaKana;Arial Hebrew;Ayuthaya;Baghdad;Baskerville;Beijing;BiauKai;Big Caslon;Brush Script;Chalkboard;Chalkduster;Charcoal;Charcoal CY;Chicago;Cochin;Comic Sans;Cooper;Copperplate;Corsiva Hebrew;DecoType Naskh;Devanagari;Didot;Euphemia UCAS;Fang Song;Gadget;Geeza Pro;Geezah;Geneva;Geneva CY;Gill Sans;Gujarati;Gung Seoche;Gurmukhi;Hangangche;HeadlineA;Hei;Helvetica;Helvetica CY;Helvetica Neue;Herculanum;Hiragino Kaku Gothic Pro;Hiragino Kaku Gothic ProN;Hiragino Kaku Gothic Std;Hiragino Kaku Gothic StdN;Hiragino Maru Gothic Pro;Hiragino Maru Gothic ProN;Hiragino Mincho Pro;Hiragino Mincho ProN;Hoefler Text;Inai Mathi;Jung Gothic;Kai;Keyboard;Krungthep;KufiStandard GK;LastResort;LiHei Pro;LiSong Pro;Lucida Grande;Marker Felt;Menlo;Monaco;Monaco CY;Mshtakan;Nadeem;New Peninim;New York;NISC GB18030;Optima;Osaka;Palatino;PC Myungjo;Pilgiche;Plantagenet Cherokee;Raanana;Sand;Sathu;Seoul;Shin Myungjo Neue;Silom;Skia;Song;ST FangSong;ST Heiti;ST Kaiti;ST Song;Symbol;Tae Graphic;Taipei;Techno;Textile;Thonburi;Times CY;Zapf Chancery;Zapf Dingbats;Zapfino;Abadi MT Condensed Light;Aharoni;Aldhabi;Andalus;Angsana New;AngsanaUPC;Aparajita;Arabic Typesetting;Arial Nova;Batang;BatangChe;Book Antiqua;Browallia New;BrowalliaUPC;Calibri;Calibri Light;Calisto MT;Cambria;Cambria Math;Candara;Consolas;Constantia;Copperplate Gothic Bold;Copperplate Gothic Light;Cordia New;CordiaUPC;DaunPenh;David;Dengxian;DFKai-SB;DilleniaUPC;DokChampa;Dotum;DotumChe;Ebrima;Estrangelo Edessa;EucrosiaUPC;Euphemia;FangSong;Franklin Gothic Medium;FrankRuehl;FreesiaUPC;Gabriola;Gadugi;Gautami;Georgia Pro;Gill Sans Nova;Gisha;Gulim;GulimChe;Gungsuh;GungsuhChe;IrisUPC;Iskoola Pota;JasmineUPC;KaiTi;Kartika;Khmer UI;KodchiangUPC;Kokila;Lao UI;Latha;Leelawadee;Leelawadee UI;Levenim MT;LilyUPC;Lucida Handwriting Italic;Lucida Sans Unicode;Malgun Gothic;Mangal;Manny ITC;Marlett;Meiryo;Meiryo UI;Microsoft Himalaya;Microsoft JhengHei;Microsoft JhengHei UI;Microsoft New Tai Lue;Microsoft PhagsPa;Microsoft Sans Serif;Microsoft Tai Le;Microsoft Uighur;Microsoft YaHei;Microsoft YaHei UI;Microsoft Yi Baiti;MingLiU, PMingLiU;MingLiU-ExtB, PMingLiU-ExtB;MingLiU_HKSCS;MingLiU_HKSCS-ExtB;Miriam, Miriam Fixed;Mongolian Baiti;MoolBoran;MS Gothic, MS PGothic;MS Mincho, MS PMincho;MS UI Gothic;MV Boli;Myanmar Text;Narkisim;Neue Haas Grotesk Text Pro;News Gothic MT;Nirmala UI;NSimSun;Nyala;Palatino Linotype;Raavi;Rockwell Nova;Rod;Sakkal Majalla;Sanskrit Text;Segoe MDL2 Assets;Segoe Script;Segoe UI v5.00[3];Segoe UI v5.01[4];Segoe UI v5.27[5];Segoe UI v5.35;Segoe UI Emoji;Segoe UI Historic[6];Segoe UI Symbol;Shonar Bangla;Shruti;SimHei;SimKai;Simplified Arabic;SimSun;SimSun-ExtB;Sitka Banner;Sitka Display;Sitka Heading;Sitka Small;Sitka Subheading;Sitka Text;Sylfaen;Traditional Arabic;Tunga;Urdu Typesetting;Utsaah;Vani;Verdana Pro;Vijaya;Vrinda;Webdings;Westminster;Wingdings;Yu Gothic;Yu Gothic UI;Yu Mincho;Abyssinica SIL;Bitstream Charter;Century Schoolbook L;Courier 10 Pitch;DejaVu Sans;DejaVu Sans Condensed;DejaVu Sans Light;DejaVu Sans Mono;DejaVu Serif;DejaVu Serif Condensed;Dingbats;Droid Arabic Kufi;Droid Arabic Naskh;Droid Naskh Shift Alt;Droid Sans;Droid Sans Arabic;Droid Sans Armenian;Droid Sans Ethiopic;Droid Sans Fallback;Droid Sans Georgian;Droid Sans Hebrew;Droid Sans Japanese;Droid Serif;FreeMono;FreeSans;FreeSerif;Gargi;Garuda;KacstArt;KacstBook;KacstDecorative;KacstDigital;KacstFarsi;KacstLetter;KacstNaskh;KacstOffice;KacstOne;KacstPen;KacstPoster;KacstQurn;KacstScreen;KacstTitle;KacstTitleL;Kedage;Khmer OS;Khmer OS System;Kinnari;Laksaman;Liberation Sans;Liberation Sans Narrow;Liberation Serif;LKLUG;Lohit Bengali;Lohit Devanagari;Lohit Gujarati;Lohit Punjabi;Lohit Tamil;Loma;Mallige;Meera;mry_KacstQurn;Mukti Narrow;NanumBarunGothic;NanumGothic;NanumMyeongjo;Nimbus Mono L;Nimbus Roman No9 L;Nimbus Sans L;Norasi;OpenSymbol;Padauk;Padauk Book;Phetsarath OT;Pothana2000;Purisa;Rachana;Rekha;Saab;Sawasdee;STIX;STIXGeneral;TakaoPGothic;Tibetan Machine Uni;Tlwg Typist;Tlwg Typo;TlwgMono;TlwgTypewriter;Ubuntu;Ubuntu Condensed;Ubuntu Light;Ubuntu Mono;Umpush;URW Bookman L;URW Chancery L;URW Gothic L;URW Palladio L;utkal;Vemana2000;Waree;WenQuanYi Micro Hei;WenQuanYi Micro Hei Mono;Academy Engraved LET;Apple Color Emoji;AppleGothic;Bangla Sangam MN;Bodoni 72;Bodoni 72 Oldstyle;Bodoni 72 Smallcaps;Bodoni Ornaments;Bradley Hand;Chalkboard SE;Devanagari Sangam MN;Gujarati Sangam MN;Gurmukhi MN;Heiti SC;Heiti TC;Kailasa;Kannada Sangam MN;Malayalam Sangam MN;Marion;Noteworthy;Oriya Sangam MN;Party LET;Sinhala Sangam MN;Snell Roundhand;Tamil Sangam MN;Telugu Sangam MN".split(
          ";"
        ),
      e = {};
    e.AppCodeName = window.navigator.appCodeName;
    e.AppName = window.navigator.appName;
    e.Version = window.navigator.appVersion;
    e.Language = window.navigator.language;
    e.Platform = window.navigator.platform;
    e.Product = window.navigator.product;
    e.ProductSub = window.navigator.productSub;
    e.UserAgent = window.navigator.userAgent;
    e.Vendor = window.navigator.vendor;
    e.VendorSub = window.navigator.vendorSub;
    e.BuildId = window.navigator.buildID;
    e.OsCpu = window.navigator.oscpu;
    e.Screen = {};
    e.Screen.AvailableWidth = window.screen.availWidth;
    e.Screen.AvailableHeight = window.screen.availHeight;
    e.Screen.PixelDepth = window.screen.pixelDepth;
    e.Screen.ColorDepth = window.screen.colorDepth;
    var g =
      window.devicePixelRatio ||
      window.screen.deviceXDPI / window.screen.logicalXDPI;
    e.Screen.Width = Math.round(window.screen.width * g);
    e.Screen.Height = Math.round(window.screen.height * g);
    null == e.Screen.Width && (e.Screen.Width = e.Screen.AvailableWidth);
    null == e.Screen.Height && (e.Screen.Height = e.Screen.AvailableHeight);
    e.Plugins = [];
    if (window.ActiveXObject) {
      g = /[0-9]+/;
      var k = {
        flash: "ShockwaveFlash.ShockwaveFlash",
        pdf: "AcroPDF.PDF",
        silverlight: "AgControl.AgControl",
        quicktime: "QuickTime.QuickTime",
      };
      for (r in k) {
        var n = this.msieDetect(k[r]);
        n &&
          ((n = ((n = g.exec(n)) && n[0]) || ""),
          (n = {}),
          (n.Name = k[r]),
          (n.FileName = ""),
          e.Plugins.push(n));
      }
    } else
      for (var m = 0; m < window.navigator.plugins.length; m++) {
        var r = window.navigator.plugins[m];
        g = {};
        g.Name = r.name;
        g.FileName = r.filename;
        e.Plugins.push(g);
      }
    e.MimeTypes = [];
    for (m = 0; (r = window.navigator.mimeTypes[m]); m++)
      (g = {}),
        (g.Type = r.type),
        (g.Suffixes = r.suffixes),
        e.MimeTypes.push(g);
    d = new Date().getTime() - d;
    this.clientInfoTimingData.basicInfoTime = d;
    d = new Date().getTime();
    e.Canvas = this.CreateCanvasFP();
    d = new Date().getTime() - d;
    this.clientInfoTimingData.canvasInfoTime = d;
    var h = "",
      q = new (function () {
        var a = ["monospace", "sans-serif", "serif"],
          c = document.getElementsByTagName("body")[0],
          b = document.createElement("span");
        b.style.fontSize = "72px";
        b.innerHTML = "mmmmmmmmmmlli";
        var d = {},
          f = {},
          e;
        for (e in a)
          (b.style.fontFamily = a[e]),
            c.appendChild(b),
            (d[a[e]] = b.offsetWidth),
            (f[a[e]] = b.offsetHeight),
            c.removeChild(b);
            this.detect = function (e) {
          var g = !1,
            h;
          for (h in a) {
            b.style.fontFamily = e + "," + a[h];
            c.appendChild(b);
            var q = b.offsetWidth != d[a[h]] || b.offsetHeight != f[a[h]];
            c.removeChild(b);
            g = g || q;
          }
          return g;
        };
      })(),
      p = this;
    m = 0;
    var l = new Date().getTime();
    setTimeout(function () {
      c();
    }, 20);
  }
}