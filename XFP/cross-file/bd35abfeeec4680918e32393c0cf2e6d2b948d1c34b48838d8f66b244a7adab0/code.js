import { populateNXSTData } from './populateNXSTData.js';
import { addVideoPlayer } from './addVideoPlayer.js';


window.NXSTdata = window.NXSTdata || {};
window.NXSTdata.content = window.NXSTdata.content || {};
window.NXSTdata.page = window.NXSTdata.page || {};
window.NXSTdata.site = window.NXSTdata.site || {};
window.NXSTdata.ads = window.NXSTdata.ads || {};
window.NXSTdata.layout = window.NXSTdata.layout || {};
window.NXSTdata.privacy = window.NXSTdata.privacy || {};
window.NXSTdata.alerts = window.NXSTdata.alerts || {};
window.NXSTdata.location = window.NXSTdata.location || {};

populateNXSTData();

document.addEventListener('DOMContentLoaded', (event) => {
	if (window.NXSTdata.content.title === '') {
		window.NXSTdata.content.title = document.title;
	}

	window.NXSTdata.content.videoPlayerTypes = [];

	addVideoPlayer('div.s2nFriendlyFrame', 'sendtonews');
	addVideoPlayer('div.s2nPlayer', 'sendtonews');
	addVideoPlayer('div.fb-video', 'facebook');
	addVideoPlayer('iframe[src*="youtube.com"]', 'youtube');
	addVideoPlayer('iframe[src*="venn.tv"], iframe[src*="https://venn-dev"]', 'venn');
	addVideoPlayer('div[data-react-component="VideoPlayer"]', 'videojs');
	addVideoPlayer('div[data-react-component="AnvatoVideoPlayer"]', 'akta');
	/* Custom event to signal UDL data has been fully loaded. */
	document.dispatchEvent(new CustomEvent('UniversalDataLayerLoaded'));
});
