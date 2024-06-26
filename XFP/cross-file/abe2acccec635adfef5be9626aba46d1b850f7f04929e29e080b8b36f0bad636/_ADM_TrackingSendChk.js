import { _ADMTrackingsend } from "./_ADMTrackingsend";

export function _ADM_TrackingSendChk() {
			__ADMisActive = __ADMwdVis() ? 1 : 0;
			var a = Math.floor(new Date().getTime() / 1e3);
			if (1 == __ADMisActive || 120 <= a - __ADMTimeTk) (__ADMTimeTk = a), _ADMTrackingsend('p');
			chkadmTrackingt =
				999 > _admBrV
					? window.setTimeout('ADM_TrackingSendChk()', 2e4)
					: window.setTimeout('ADM_TrackingSendChk()', 6e4);
		}