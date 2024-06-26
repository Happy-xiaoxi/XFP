var e = 0;
export function getWebglFp() {
    function t(t) {
        return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), '[' + t[0] + ', ' + t[1] + ']';
    }
    if (!(e = getWebglCanvas()))
        return null;
    var r = [], n = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, n);
    var i = new Float32Array([
        -0.2,
        -0.9,
        0,
        0.4,
        -0.26,
        0,
        0,
        0.732134444,
        0
    ]);
    e.bufferData(e.ARRAY_BUFFER, i, e.STATIC_DRAW), n.itemSize = 3, n.numItems = 3;
    var a = e.createProgram(), o = e.createShader(e.VERTEX_SHADER);
    e.shaderSource(o, 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'), e.compileShader(o);
    var s = e.createShader(e.FRAGMENT_SHADER);
    e.shaderSource(s, 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'), e.compileShader(s), e.attachShader(a, o), e.attachShader(a, s), e.linkProgram(a), e.useProgram(a), a.vertexPosAttrib = e.getAttribLocation(a, 'attrVertex'), a.offsetUniform = e.getUniformLocation(a, 'uniformOffset'), e.enableVertexAttribArray(a.vertexPosArray), e.vertexAttribPointer(a.vertexPosAttrib, n.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(a.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, n.numItems);
    try {
        r.push(e.canvas.toDataURL());
    } catch (e) {
    }
    r.push('extensions:' + (e.getSupportedExtensions() || []).join(';')), r.push('webgl aliased line width range:' + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push('webgl aliased point size range:' + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push('webgl alpha bits:' + e.getParameter(e.ALPHA_BITS)), r.push('webgl antialiasing:' + (e.getContextAttributes().antialias ? 'yes' : 'no')), r.push('webgl blue bits:' + e.getParameter(e.BLUE_BITS)), r.push('webgl depth bits:' + e.getParameter(e.DEPTH_BITS)), r.push('webgl green bits:' + e.getParameter(e.GREEN_BITS)), r.push('webgl max anisotropy:' + function (e) {
        var t = e.getExtension('EXT_texture_filter_anisotropic') || e.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || e.getExtension('MOZ_EXT_texture_filter_anisotropic');
        if (t) {
            var r = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            return 0 === r && (r = 2), r;
        }
        return null;
    }(e)), r.push('webgl max combined texture image units:' + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push('webgl max cube map texture size:' + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push('webgl max fragment uniform vectors:' + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push('webgl max render buffer size:' + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push('webgl max texture image units:' + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push('webgl max texture size:' + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push('webgl max varying vectors:' + e.getParameter(e.MAX_VARYING_VECTORS)), r.push('webgl max vertex attribs:' + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push('webgl max vertex texture image units:' + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push('webgl max vertex uniform vectors:' + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push('webgl max viewport dims:' + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push('webgl red bits:' + e.getParameter(e.RED_BITS)), r.push('webgl renderer:' + e.getParameter(e.RENDERER)), r.push('webgl shading language version:' + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push('webgl stencil bits:' + e.getParameter(e.STENCIL_BITS)), r.push('webgl vendor:' + e.getParameter(e.VENDOR)), r.push('webgl version:' + e.getParameter(e.VERSION));
    try {
        var l = e.getExtension('WEBGL_debug_renderer_info');
        l && (r.push('webgl unmasked vendor:' + e.getParameter(l.UNMASKED_VENDOR_WEBGL)), r.push('webgl unmasked renderer:' + e.getParameter(l.UNMASKED_RENDERER_WEBGL)));
    } catch (e) {
    }
    return e.getShaderPrecisionFormat ? (r.push('webgl vertex shader high float precision:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), r.push('webgl vertex shader high float precision rangeMin:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), r.push('webgl vertex shader high float precision rangeMax:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), r.push('webgl vertex shader medium float precision:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), r.push('webgl vertex shader medium float precision rangeMin:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push('webgl vertex shader medium float precision rangeMax:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push('webgl vertex shader low float precision:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), r.push('webgl vertex shader low float precision rangeMin:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), r.push('webgl vertex shader low float precision rangeMax:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), r.push('webgl fragment shader high float precision:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), r.push('webgl fragment shader high float precision rangeMin:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), r.push('webgl fragment shader high float precision rangeMax:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), r.push('webgl fragment shader medium float precision:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), r.push('webgl fragment shader medium float precision rangeMin:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push('webgl fragment shader medium float precision rangeMax:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push('webgl fragment shader low float precision:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), r.push('webgl fragment shader low float precision rangeMin:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), r.push('webgl fragment shader low float precision rangeMax:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), r.push('webgl vertex shader high int precision:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), r.push('webgl vertex shader high int precision rangeMin:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), r.push('webgl vertex shader high int precision rangeMax:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), r.push('webgl vertex shader medium int precision:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), r.push('webgl vertex shader medium int precision rangeMin:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), r.push('webgl vertex shader medium int precision rangeMax:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), r.push('webgl vertex shader low int precision:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), r.push('webgl vertex shader low int precision rangeMin:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), r.push('webgl vertex shader low int precision rangeMax:' + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), r.push('webgl fragment shader high int precision:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), r.push('webgl fragment shader high int precision rangeMin:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), r.push('webgl fragment shader high int precision rangeMax:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), r.push('webgl fragment shader medium int precision:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), r.push('webgl fragment shader medium int precision rangeMin:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), r.push('webgl fragment shader medium int precision rangeMax:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), r.push('webgl fragment shader low int precision:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), r.push('webgl fragment shader low int precision rangeMin:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), r.push('webgl fragment shader low int precision rangeMax:' + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), r.join('~')) : r.join('~');
}

export function getWebglCanvas() {
    var e = document.createElement('canvas'), t = null;
    try {
        t = e.getContext('webgl') || e.getContext('experimental-webgl');
    } catch (e) {
    }
    return t || (t = null), t;
}
