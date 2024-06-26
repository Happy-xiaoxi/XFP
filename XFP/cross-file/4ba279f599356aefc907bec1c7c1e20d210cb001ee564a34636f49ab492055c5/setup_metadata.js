export function setup_metadata(e) {
	(_webdigObj.catalogs =
	  e.wdc || _webdigObj.getMeta("catalogs") || _webdigObj.catalogs),
	  (_webdigObj.contentid = e.wdci || _webdigObj.getMeta("contentid")),
	  (_webdigObj.filetype = _webdigObj.getMeta("filetype")),
	  (_webdigObj.pagetype = _webdigObj.getMeta("pagetype")),
	  (_webdigObj.publishedtype = _webdigObj.getMeta("publishedtype")),
	  (_webdigObj.publishdate = _webdigObj.getMeta("publishdate")),
	  (_webdigObj.author = _webdigObj.getMeta("author")),
	  (_webdigObj.editor = _webdigObj.getMeta("editor")),
	  (_webdigObj.reporter = _webdigObj.getMeta("reporter")),
	  (_webdigObj.subject = _webdigObj.getMeta("subject")),
	  (_webdigObj.source = _webdigObj.source || _webdigObj.getMeta("source")),
	  (_webdigObj.sourcetype = _webdigObj.getMeta("sourcetype")),
	  (_webdigObj.pageversion = _webdigObj.getMeta("pageversion")),
	  (_webdigObj.partner = _webdigObj.getMeta("partner")),
	  (_webdigObj.speical = _webdigObj.getMeta("webterren_speical")),
	  (_webdigObj.dept = _webdigObj.getMeta("dept")),
	  (_webdigObj.sec = _webdigObj.pro || function () {}),
	  _webdigObj.sec(),
	  (_webdigObj.url = (function () {
		var t = "";
		return (
		  (t = "_wdc=" + escape(_webdigObj.catalogs) + "&"),
		  _webdigObj.subject && (t += "_wds=" + escape(_webdigObj.subject) + "&"),
		  (t +=
			"_wdt=" +
			escape(_webdigObj.filetype ? _webdigObj.filetype : 0) +
			escape(_webdigObj.publishedtype ? _webdigObj.publishedtype : 0) +
			escape(_webdigObj.pagetype ? _webdigObj.pagetype : 0) +
			"&"),
		  _webdigObj.contentid
			? e.sub_page_id
			  ? (t +=
				  "_wdci=" +
				  escape(_webdigObj.contentid + "-" + e.sub_page_id) +
				  "&")
			  : (t += "_wdci=" + escape(_webdigObj.contentid) + "&")
			: e.sub_page_id && (t += "_wdci=" + escape(e.sub_page_id) + "&"),
		  _webdigObj.publishdate &&
			(t += "_wdp=" + escape(_webdigObj.publishdate) + "&"),
		  _webdigObj.author &&
			((t += "_wda=" + escape(_webdigObj.author) + "&"),
			(t += "_wdmd=" + escape(_webdigObj.author) + "&")),
		  _webdigObj.editor && (t += "_wda2=" + escape(_webdigObj.editor) + "&"),
		  _webdigObj.reporter &&
			(t += "_wdr=" + escape(_webdigObj.reporter) + "&"),
		  _webdigObj.source && (t += "_wdori=" + escape(_webdigObj.source) + "&"),
		  _webdigObj.sourcetype &&
			(t += "_wdot=" + escape(_webdigObj.sourcetype) + "&"),
		  _webdigObj.speical &&
			(t += "_wdsp=" + escape(_webdigObj.speical) + "&"),
		  _webdigObj.pageversion &&
			(t += "_wdvs=" + escape(_webdigObj.pageversion) + "&"),
		  _webdigObj.partner &&
			(t += "_wdqd=" + escape(_webdigObj.partner) + "&"),
		  _webdigObj.dept && (t += "_wddp=" + escape(_webdigObj.dept) + "&"),
		  t
		);
	  })());
  }