;
;
export function getWebglCanvas() {
    var canvas = document.createElement('canvas');
    var gl = null;
    try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    } catch (e) {
    }
    if (!gl) {
        gl = null;
    }
    return gl;
}