export function getGeneralInfo() {
	var e = _wdVersion.WD + "-" + _wdVersion.CN;
	return (
	  "?z=" +
	  _wdUID +
	  "&a=" +
	  curtime.getTime().toString(16) +
	  "&b=" +
	  fesc(_wdDT) +
	  "&B=" +
	  _wdCS +
	  "&c=" +
	  fesc(_wdSL) +
	  "&d=" +
	  fesc(_wdRP) +
	  "&e=" +
	  _wdDU +
	  "&f=" +
	  _wdSID +
	  "&H=" +
	  fesc(_wdHost) +
	  "&E=" +
	  _wdErr +
	  "&V=" +
	  e
	);
  }