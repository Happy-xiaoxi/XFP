export function run () {
	if (arguments.callee.done) return;
	arguments.callee.done = true;
	var args = {
		ri: this.requestID,
		pa: this.partnerID,
		si: this.siteID,
		su: this.subID,
		userID: this.userID,
		v: 1,
		t: this.stripAccent(document.title)
			.replace(/[^\w -.]/g, '')
			.replace(/[ ]{2,}/g, ' ')
			.substr(0, 150),
		k: this.keywords,
		u: window.location.href,
		r: document.referrer,
		s: this.searchKeywords,
	};
}