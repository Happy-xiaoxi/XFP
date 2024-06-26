export function addPixelInIframe (url) {
	var tag = document.createElement('iframe');
	tag.width = 0;
	tag.height = 0;
	tag.src = 'https://ct.sddan.com/CT.d?imgUrl=' + encodeURIComponent(url);
	tag.frameborder = 0;
	tag.style.display = 'none';
	this.appendElemToBody(tag);
};