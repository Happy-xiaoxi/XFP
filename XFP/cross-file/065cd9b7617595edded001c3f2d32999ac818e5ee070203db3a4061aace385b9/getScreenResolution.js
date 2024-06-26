export function getScreenResolution() {
	return this.screen_orientation
		? screen.height > screen.width
			? [screen.height, screen.width]
			: [screen.width, screen.height]
		: [screen.height, screen.width];
}