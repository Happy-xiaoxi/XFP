import { populateAdSlots } from './populateAdSlots.js';
import { populateIdentity } from './populateIdentity.js';
import { populatePrivacy } from './populatePrivacy.js';
import { setPermutiveGeoDataInUDL } from './setPermutiveGeoDataInUDL.js';
import { populatePage } from './populatePage.js';
export function populateNXSTData() {
	/* Call populate functions for NXSTData */
	populatePage();
	populateAdSlots();
	populatePrivacy();
	populateIdentity();
	setPermutiveGeoDataInUDL();
}