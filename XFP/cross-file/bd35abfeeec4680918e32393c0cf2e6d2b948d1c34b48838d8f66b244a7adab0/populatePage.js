import { uuid4 } from "./uuid4.js";
export function populatePage() {
	/* Define query parameter fetching function. */
	const getQueryParams = () => {
		/* Define value parsing function. */
		const parseValue = (value) => {
			try {
				return JSON.parse(value);
			} catch (error) {
				return value;
			}
		};
		/* Read parameters. */
		const search = window.location.search || '';
		const params = new URLSearchParams(search.startsWith('?') ? search : `?${search}`);
		/* Parse and return parameters. */
		return [...params.entries()].reduce(
			(obj, [key, value]) => ({
				...obj,
				[key]: obj.hasOwnProperty(key)
					? /* Convert existing key to array, or append to array. */
					  [...(Array.isArray(obj[key]) ? obj[key] : [obj[key]]), parseValue(value)]
					: /* Add parsed value. */
					  parseValue(value),
			}),
			{}
		);
	};
	/* Create and assign a unique ID. */
	window.NXSTdata.page.uniqueId = uuid4();
	/* Assign values. */
	window.NXSTdata.page.fullUrl = window.document.location.href || '';
	window.NXSTdata.page.queryParams = getQueryParams() || {};
	window.NXSTdata.page.urlHash = window.document.location.hash || '';
	window.NXSTdata.page.referrer =
		window.NXSTdata.page.queryParams.referrer || window.NXSTdata.page.queryParams.referrer === ''
			? window.NXSTdata.page.queryParams.referrer
			: document.referrer;
}