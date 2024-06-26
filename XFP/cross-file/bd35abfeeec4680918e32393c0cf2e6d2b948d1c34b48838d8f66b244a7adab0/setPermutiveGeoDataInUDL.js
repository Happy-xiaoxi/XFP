export function setPermutiveGeoDataInUDL() {
	const permutiveDataEnrichersName = 'permutive-data-enrichers';
	// try to get permutive data enrichers from localStorage
	const localPermutiveDataEnrichers = localStorage.getItem(permutiveDataEnrichersName);
	// if data is already on the localStorage just run the handler else hook it
	if (localPermutiveDataEnrichers) {
		setItemHandler(permutiveDataEnrichersName, localPermutiveDataEnrichers);
	} else {
		// hook into localStorage and set permutive data enricher on the UDL
		hookInto(localStorage, 'setItem', setItemHandler);
	}
	// handler for permutive's data enrichers
	function setItemHandler(key, value) {
		if (key !== permutiveDataEnrichersName) {
			return;
		}

		// get data from local storage
		const { data = {} } = JSON.parse(value)['enricher:geoip'];
		// store data into the UDL
		NXSTdata.location.geoCity = data.geo_info.city || '';
		NXSTdata.location.geoContinent = data.geo_info.continent || '';
		NXSTdata.location.geoCountry = data.geo_info.country || '';
		NXSTdata.location.geoRegion = data.geo_info.province || '';
		NXSTdata.location.isp = data.isp_info.isp || '';
		NXSTdata.location.ispOrganization = data.isp_info.organization || '';
	}
	/**
	 * hookInto
	 *
	 * This will hook into a function of an object so we can check the arguments
	 * used when it is called any time and do some calculations on those arguments.
	 *
	 * @param {object} targetObject Object where the function is function is
	 * @param {string} functionName The name of the function you want to target
	 * @param {function} handler The hook function that will handle the arguments
	 * @returns {undefined}
	 */
	function hookInto(targetObject, functionName, handler = () => {}) {
		// save the original function
		const backupFunction = targetObject[functionName];
		// overwrite the original function and set the handler
		targetObject[functionName] = function (...args) {
			// handle the arguments with the custom handler
			handler(...args);
			// trigger the original function as normal
			backupFunction.apply(targetObject, args);
		};
	}
}