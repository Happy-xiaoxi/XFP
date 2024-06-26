export function s(t) {
	for (var o = [], e = Object.keys(t), i = 0; i < e.length; i++)
	  (t[e[i]].keyType = e[i]), o.push(t[e[i]]);
	return o;
  }