export function populateIdentity() {
	/* Assign default values. */
	window.NXSTdata.identity = {
		gaClientId: '',
		blueconicId: '',
		nexstarId: '',
		segmentUserId: '',
		__cookie_check: 10, // Control variable
		...window.NXSTdata.identity,
	};
	/* Create control variables for cookie checks. */
	const must_cookies = ['BCSessionID', '_ga'];
	let should_check = must_cookies.length;
	const check_limit_reached = window.NXSTdata.identity.__cookie_check <= 0;
	/* Fetch cookies. */
	const cookies = document.cookie;
	/* Traverse cookies. */
	cookies.split(';').map((item) => {
		/* Fetch key - value pair. */
		const [key, ...val_arr] = item.trim().split('=');
		const value = val_arr.join('=');
		/* Adjust control variables. */
		if (must_cookies.includes(key)) {
			should_check = should_check - 1;
		}
		/* Act based on key. */
		if (key === 'BCSessionID') {
			/* Assign string value. */
			window.NXSTdata.identity.blueconicId = value;
		} else if (key === '_ga') {
			/* Assign string value. */
			window.NXSTdata.identity.gaClientId = value.split('.').splice(2).join('.');
		} else if (key === 'nxst_id') {
			/* Assign string value. */
			window.NXSTdata.identity.nexstarId = value;
		}
	});

	/* Try to assign SegmentID as NexstarID. If not available, fallback to BlueConicID. */
	window.NXSTdata.identity.segmentUserId = window.NXSTdata.identity.nexstarId || window.NXSTdata.identity.blueconicId;

	/* Register repeated function call if it fired too early. */
	if (should_check && !check_limit_reached) {
		/* Update stored control variable. */
		window.NXSTdata.identity.__cookie_check = window.NXSTdata.identity.__cookie_check - 1;
		/* Schedule function call. */
		window.setTimeout(populateIdentity, 100);
	} else {
		/* Remove stored control variable. */
		delete window.NXSTdata.identity.__cookie_check;
	}

	/* As requested on WC-1709. If we have the toggle `blueconic_deprioritization`
       on, we should use the ndn cookie for the nexstarId. */
	if (document.getElementById('blueconic_deprioritization')) {
		window.NXSTdata.identity.nexstarId = window.zzz_ndn;
	}
}