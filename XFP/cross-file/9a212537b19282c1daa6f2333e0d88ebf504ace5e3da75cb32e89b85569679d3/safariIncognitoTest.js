export function safariIncognitoTest(_0x134c33) {
    var _0x3e2a91 = String(Math[_0xfc28('0x25')]());
    try {
        window['indexedDB'][_0xfc28('0xb3')](_0x3e2a91, 1)[_0xfc28('0xd8')] = function (_0x5c76ed) {
            void 0 === _0x5c76ed[_0xfc28('0xa2')] && _0x134c33(!1);
            var _0x51815d = _0x5c76ed[_0xfc28('0xa2')][_0xfc28('0xd9')];
            try {
                _0x51815d[_0xfc28('0xda')](_0xfc28('0xa6'), { autoIncrement: !0 })[_0xfc28('0xdb')](new Blob()), _0x134c33(!1);
            } catch (_0x56e2cb) {
                var _0xe3d640 = _0x56e2cb;
                if (_0x56e2cb instanceof Error && void 0 !== _0x56e2cb[_0xfc28('0xdc')] && (_0xe3d640 = _0x56e2cb[_0xfc28('0xdc')]), 'string' != typeof _0xe3d640)
                    return _0x134c33(!1);
                var _0x38f6c4 = /BlobURLs are not yet supported/[_0xfc28('0xa6')](_0xe3d640);
                return _0x134c33(_0x38f6c4);
            } finally {
                _0x51815d[_0xfc28('0xdd')](), window[_0xfc28('0xde')][_0xfc28('0xdf')](_0x3e2a91);
            }
        };
    } catch (_0x3ab610) {
        return _0x134c33(!1);
    }
}
