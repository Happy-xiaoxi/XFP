import { D9request } from './D9request.js';
import { getLgcUrl } from './getLgcUrl.js';
import { getConnectUrl } from './getConnectUrl.js';
import { ajax } from './ajax.js';
import { getProperty } from './getProperty.js';

export function d9legacy(D9v, D9r, tagHost, signals) {
	D9r = D9r || {};
	var device = {};
	device.D9_1 = signals.D9_110;
	device.D9_6 = signals.D9_130;
	device.D9_7 = signals.D9_131;
	device.D9_8 = signals.D9_132;
	device.D9_9 = signals.D9_133;
	device.D9_10 = signals.D9_134;
	device.D9_61 = signals.D9_138;
	device.D9_67 = signals.D9_139;
	device.D9_18 = {};
	device.D9_16 = signals.D9_111;
	if (signals.D9_101 || signals.D9_111) {
		device.D9_4 = { width: signals.D9_101, height: signals.D9_102 };
	}
	if (window.navigator) {
		device.D9_14 = signals.D9_120;
		device.D9_15 = signals.D9_121;
		device.D9_19 = signals.D9_122;
		device.D9_123 = signals.D9_123;
	}
	device.D9_33 = signals.D9_150;
	device.D9_34 = signals.D9_151;
	device.D9_30 = [];
	device.D9_52 = {};
	device.D9_57 = typeof D9r.callback === 'function';
	device.D9_58 = D9r;
	device.D9_59 = D9v;
	device.D9_63 = signals.D9_140;
	device.D9_64 = signals.D9_103;
	device.D9_66 = signals.D9_141;
	D9request(device);
}
