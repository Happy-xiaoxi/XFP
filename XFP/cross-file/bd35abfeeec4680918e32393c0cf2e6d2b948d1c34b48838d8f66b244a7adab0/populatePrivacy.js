export function populatePrivacy() {
	/* Assign default values. */
	window.NXSTdata.privacy = {
		activeRules: [],
		usPrivacyString: '',
		essentialCookies: true,
		limitNexstar: false,
		limitOthers: false,
		consentCookieSetDate: '',
		ccpaAlertClosed: false,
		__cookie_check: 10, // Control variable
		saleOfPersonalData: '',
		oneTrustActiveGroups: '',
		...window.NXSTdata.privacy,
	};
	/* Determine if CCPA is active. */
	if (window.__inScopeForCCPA && !window.NXSTdata.privacy.activeRules.includes('ccpa')) {
		window.NXSTdata.privacy.activeRules.push('ccpa');
		/* Sort to normalize order. */
		window.NXSTdata.privacy.activeRules.sort();
	}
	/* Create control variables for cookie checks. */
	const must_cookies = ['usprivacy', 'ConsentCookies', 'CookieSetDate', 'AlertBanner', 'nxst_id', 'OptanonConsent'];
	let should_check = must_cookies.length;
	const check_limit_reached = window.NXSTdata.privacy.__cookie_check <= 0;
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
		if (key === 'usprivacy') {
			/* Assign string value. */
			window.NXSTdata.privacy.usPrivacyString = value;
		} else if (key === 'ConsentCookies') {
			/* Parse stored JSON. */
			const {
				strictly_necessary = window.NXSTdata.privacy.essentialCookies,
				block_nexstar = window.NXSTdata.privacy.limitNexstar,
				block_others = window.NXSTdata.privacy.limitOthers,
			} = JSON.parse(value);
			/* Assign boolean values. */
			window.NXSTdata.privacy.essentialCookies = !!strictly_necessary;
			window.NXSTdata.privacy.limitNexstar = !!block_nexstar;
			window.NXSTdata.privacy.limitOthers = !!block_others;
		} else if (key === 'CookieSetDate') {
			/* Parse date into array of strings with padding. */
			const numberStringList = value
				.match(/\d+/g)
				.map((item, index) => item.toString(10).padStart(index === 0 ? 4 : 2, '0'));
			/* Assign string value. */
			window.NXSTdata.privacy.consentCookieSetDate = numberStringList.join('-');
		} else if (key === 'AlertBanner') {
			/* Assign string value. */
			window.NXSTdata.privacy.ccpaAlertClosed = value === 'closed';
		} else if (key === 'nxst_id') {
			/* Ensure uniqueness. */
			if (!window.NXSTdata.privacy.activeRules.includes('nexstarid')) {
				/* Add Nexstar ID to active rules. */
				window.NXSTdata.privacy.activeRules.push('nexstarid');
				/* Sort to normalize order. */
				window.NXSTdata.privacy.activeRules.sort();
			}
		} else if (key === 'OptanonConsent') {
			let groups = [];
			decodeURIComponent(value)
				.split('&')
				.map((i) => {
					const [k, ...val_arr] = i.trim().split('=');
					const value = val_arr.join('=');
					if (k == 'groups') {
						groups = value.split(',').map((group) => {
							return group.split(':');
						});
					}
				});
			const activeGroups = groups.filter((group) => {
				return Boolean(parseInt(group[group.length - 1]));
			});
			window.NXSTdata.privacy.saleOfPersonalData = Boolean(
				groups.find((group) => {
					const key = group[0] || '';
					const value = Boolean(parseInt(group[1]));
					if (key === 'SPD_BG') {
						return value;
					}
				})
			);
			window.NXSTdata.privacy.oneTrustActiveGroups = activeGroups
				.map((group) => {
					return group[0];
				})
				.join(',');
		}
	});
	/* Register repeated function call if it fired too early. */
	if (should_check && !check_limit_reached) {
		/* Update stored control variable. */
		window.NXSTdata.privacy.__cookie_check = window.NXSTdata.privacy.__cookie_check - 1;
		/* Schedule function call. */
		window.setTimeout(populatePrivacy, 100);
	} else {
		/* Remove stored control variable. */
		delete window.NXSTdata.privacy.__cookie_check;
	}
}