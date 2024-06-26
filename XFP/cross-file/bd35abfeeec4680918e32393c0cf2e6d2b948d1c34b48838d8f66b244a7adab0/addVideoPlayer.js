
export function addVideoPlayer(selector, name) {
	const videoCount = document.querySelectorAll(selector).length;
	if (videoCount) {
		window.NXSTdata.content.videoPlayerTypes.push(name);
		if ('akta' !== name && 'videojs' !== name) {
			window.NXSTdata.content.videoCount += videoCount;
		}
	}
}