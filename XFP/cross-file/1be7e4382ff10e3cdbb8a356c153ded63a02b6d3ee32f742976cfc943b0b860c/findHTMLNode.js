export function findHTMLNode (nodeInfo) {
	for (i = 0; i < nodeInfo.length; i++) {
		if (nodeInfo[i].css == undefined) return false;
		var found = this.getElementsBySelector(nodeInfo[i].css);
		if (found && found.length > 0) {
			if (nodeInfo[i].item == undefined)
				for (j = 0; j < found.length; j++) {
					this.addKeyword(found[j].text != undefined ? found[j].text : found[j].innerHTML);
				}
			else if (nodeInfo[i].item != undefined && found[nodeInfo[i].item] != undefined)
				this.addKeyword(
					found[nodeInfo[i].item].text != undefined
						? found[nodeInfo[i].item].text
						: found[nodeInfo[i].item].innerHTML
				);
		}
		return false;
	}
}