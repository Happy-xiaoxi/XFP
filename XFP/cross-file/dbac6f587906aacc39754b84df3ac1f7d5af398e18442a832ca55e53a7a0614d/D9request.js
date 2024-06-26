import { ajax } from "./ajax.js";
import { getLgcUrl } from "./getLgcUrl.js";

export function D9request(D9_device) {
	var json = encodeURIComponent(JSON.stringify(D9_device));
	var send = '&tbx=' + encodeURIComponent(json);
	ajax(getLgcUrl(), send);
}