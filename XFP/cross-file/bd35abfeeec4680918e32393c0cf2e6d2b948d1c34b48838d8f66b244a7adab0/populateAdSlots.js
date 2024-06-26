export function populateAdSlots() {
	/* Define ad slot fetching function. */
	const getAdSlots = () =>
		window.googletag
			.pubads()
			.getSlots()
			.map((slot) => slot.getTargeting('pos')[0]) || [];
	/* Proceed if GPT is up. */
	if (window.googletag && googletag.pubadsReady) {
		/* Fetch slots. */
		window.NXSTdata.ads.adSlots = getAdSlots();
		/* Register event listener for future slot requests. */
		window.googletag.pubads().addEventListener('slotRequested', (event) => {
			window.NXSTdata.ads.adSlots = getAdSlots();
		});
	} else {
		/* Assign a value if previously did not assigned. */
		window.NXSTdata.ads.adSlots = window.NXSTdata.ads.adSlots || [];
		/* Poll GPT until available. */
		setTimeout(populateAdSlots, 100);
	}
}