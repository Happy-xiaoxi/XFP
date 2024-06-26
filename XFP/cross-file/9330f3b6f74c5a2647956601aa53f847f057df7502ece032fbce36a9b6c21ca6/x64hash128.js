







export function x64hash128(key, seed) {
    key = key || '';
    seed = seed || 0;
    var remainder = key.length % 16;
    var bytes = key.length - remainder;
    var h1 = [
        0,
        seed
    ];
    var h2 = [
        0,
        seed
    ];
    var k1 = [
        0,
        0
    ];
    var k2 = [
        0,
        0
    ];
    var c1 = [
        2277735313,
        289559509
    ];
    var c2 = [
        1291169091,
        658871167
    ];
    for (var i = 0; i < bytes; i = i + 16) {
        k1 = [
            key.charCodeAt(i + 4) & 255 | (key.charCodeAt(i + 5) & 255) << 8 | (key.charCodeAt(i + 6) & 255) << 16 | (key.charCodeAt(i + 7) & 255) << 24,
            key.charCodeAt(i) & 255 | (key.charCodeAt(i + 1) & 255) << 8 | (key.charCodeAt(i + 2) & 255) << 16 | (key.charCodeAt(i + 3) & 255) << 24
        ];
        k2 = [
            key.charCodeAt(i + 12) & 255 | (key.charCodeAt(i + 13) & 255) << 8 | (key.charCodeAt(i + 14) & 255) << 16 | (key.charCodeAt(i + 15) & 255) << 24,
            key.charCodeAt(i + 8) & 255 | (key.charCodeAt(i + 9) & 255) << 8 | (key.charCodeAt(i + 10) & 255) << 16 | (key.charCodeAt(i + 11) & 255) << 24
        ];
        k1 = this.x64Multiply(k1, c1);
        k1 = this.x64Rotl(k1, 31);
        k1 = this.x64Multiply(k1, c2);
        h1 = this.x64Xor(h1, k1);
        h1 = this.x64Rotl(h1, 27);
        h1 = this.x64Add(h1, h2);
        h1 = this.x64Add(this.x64Multiply(h1, [
            0,
            5
        ]), [
            0,
            1390208809
        ]);
        k2 = this.x64Multiply(k2, c2);
        k2 = this.x64Rotl(k2, 33);
        k2 = this.x64Multiply(k2, c1);
        h2 = this.x64Xor(h2, k2);
        h2 = this.x64Rotl(h2, 31);
        h2 = this.x64Add(h2, h1);
        h2 = this.x64Add(this.x64Multiply(h2, [
            0,
            5
        ]), [
            0,
            944331445
        ]);
    }
    k1 = [
        0,
        0
    ];
    k2 = [
        0,
        0
    ];
    switch (remainder) {
    case 15:
        k2 = this.x64Xor(k2, this.x64LeftShift([
            0,
            key.charCodeAt(i + 14)
        ], 48));
    case 14:
        k2 = this.x64Xor(k2, this.x64LeftShift([
            0,
            key.charCodeAt(i + 13)
        ], 40));
    case 13:
        k2 = this.x64Xor(k2, this.x64LeftShift([
            0,
            key.charCodeAt(i + 12)
        ], 32));
    case 12:
        k2 = this.x64Xor(k2, this.x64LeftShift([
            0,
            key.charCodeAt(i + 11)
        ], 24));
    case 11:
        k2 = this.x64Xor(k2, this.x64LeftShift([
            0,
            key.charCodeAt(i + 10)
        ], 16));
    case 10:
        k2 = this.x64Xor(k2, this.x64LeftShift([
            0,
            key.charCodeAt(i + 9)
        ], 8));
    case 9:
        k2 = this.x64Xor(k2, [
            0,
            key.charCodeAt(i + 8)
        ]);
        k2 = this.x64Multiply(k2, c2);
        k2 = this.x64Rotl(k2, 33);
        k2 = this.x64Multiply(k2, c1);
        h2 = this.x64Xor(h2, k2);
    case 8:
        k1 = this.x64Xor(k1, this.x64LeftShift([
            0,
            key.charCodeAt(i + 7)
        ], 56));
    case 7:
        k1 = this.x64Xor(k1, this.x64LeftShift([
            0,
            key.charCodeAt(i + 6)
        ], 48));
    case 6:
        k1 = this.x64Xor(k1, this.x64LeftShift([
            0,
            key.charCodeAt(i + 5)
        ], 40));
    case 5:
        k1 = this.x64Xor(k1, this.x64LeftShift([
            0,
            key.charCodeAt(i + 4)
        ], 32));
    case 4:
        k1 = this.x64Xor(k1, this.x64LeftShift([
            0,
            key.charCodeAt(i + 3)
        ], 24));
    case 3:
        k1 = this.x64Xor(k1, this.x64LeftShift([
            0,
            key.charCodeAt(i + 2)
        ], 16));
    case 2:
        k1 = this.x64Xor(k1, this.x64LeftShift([
            0,
            key.charCodeAt(i + 1)
        ], 8));
    case 1:
        k1 = this.x64Xor(k1, [
            0,
            key.charCodeAt(i)
        ]);
        k1 = this.x64Multiply(k1, c1);
        k1 = this.x64Rotl(k1, 31);
        k1 = this.x64Multiply(k1, c2);
        h1 = this.x64Xor(h1, k1);
    }
    h1 = this.x64Xor(h1, [
        0,
        key.length
    ]);
    h2 = this.x64Xor(h2, [
        0,
        key.length
    ]);
    h1 = this.x64Add(h1, h2);
    h2 = this.x64Add(h2, h1);
    h1 = this.x64Fmix(h1);
    h2 = this.x64Fmix(h2);
    h1 = this.x64Add(h1, h2);
    h2 = this.x64Add(h2, h1);
    return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8);
}
