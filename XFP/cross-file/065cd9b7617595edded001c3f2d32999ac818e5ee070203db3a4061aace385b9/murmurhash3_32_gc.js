export function murmurhash3_32_gc(n, t) {
	var o, h, r, s, f, e, i, u;
	for (o = n.length & 3, h = n.length - o, r = t, f = 3432918353, e = 461845907, u = 0; u < h; )
		(i =
			(n.charCodeAt(u) & 255) |
			((n.charCodeAt(++u) & 255) << 8) |
			((n.charCodeAt(++u) & 255) << 16) |
			((n.charCodeAt(++u) & 255) << 24)),
			++u,
			(i = ((i & 65535) * f + ((((i >>> 16) * f) & 65535) << 16)) & 4294967295),
			(i = (i << 15) | (i >>> 17)),
			(i = ((i & 65535) * e + ((((i >>> 16) * e) & 65535) << 16)) & 4294967295),
			(r ^= i),
			(r = (r << 13) | (r >>> 19)),
			(s = ((r & 65535) * 5 + ((((r >>> 16) * 5) & 65535) << 16)) & 4294967295),
			(r = (s & 65535) + 27492 + ((((s >>> 16) + 58964) & 65535) << 16));
	i = 0;
	switch (o) {
		case 3:
			i ^= (n.charCodeAt(u + 2) & 255) << 16;
		case 2:
			i ^= (n.charCodeAt(u + 1) & 255) << 8;
		case 1:
			i ^= n.charCodeAt(u) & 255;
			i = ((i & 65535) * f + ((((i >>> 16) * f) & 65535) << 16)) & 4294967295;
			i = (i << 15) | (i >>> 17);
			i = ((i & 65535) * e + ((((i >>> 16) * e) & 65535) << 16)) & 4294967295;
			r ^= i;
	}
	return (
		(r ^= n.length),
		(r ^= r >>> 16),
		(r = ((r & 65535) * 2246822507 + ((((r >>> 16) * 2246822507) & 65535) << 16)) & 4294967295),
		(r ^= r >>> 13),
		(r = ((r & 65535) * 3266489909 + ((((r >>> 16) * 3266489909) & 65535) << 16)) & 4294967295),
		(r ^= r >>> 16),
		r >>> 0
	);
}