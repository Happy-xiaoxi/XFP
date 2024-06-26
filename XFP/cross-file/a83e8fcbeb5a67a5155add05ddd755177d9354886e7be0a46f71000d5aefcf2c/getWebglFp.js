export function getWebglFp() {
    var e,
      t = function (t) {
        return (
          e.clearColor(0, 0, 0, 1),
          e.enable(e.DEPTH_TEST),
          e.depthFunc(e.LEQUAL),
          e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
          "[" + t[0] + ", " + t[1] + "]"
        );
      };
    if (!(e = this.getWebglCanvas())) return null;
    var n = [],
      i = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, i);
    var a = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
    e.bufferData(e.ARRAY_BUFFER, a, e.STATIC_DRAW),
      (i.itemSize = 3),
      (i.numItems = 3);
    var o = e.createProgram(),
      r = e.createShader(e.VERTEX_SHADER);
    e.shaderSource(
      r,
      "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
    ),
      e.compileShader(r);
    var s = e.createShader(e.FRAGMENT_SHADER);
    e.shaderSource(
      s,
      "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
    ),
      e.compileShader(s),
      e.attachShader(o, r),
      e.attachShader(o, s),
      e.linkProgram(o),
      e.useProgram(o),
      (o.vertexPosAttrib = e.getAttribLocation(o, "attrVertex")),
      (o.offsetUniform = e.getUniformLocation(o, "uniformOffset")),
      e.enableVertexAttribArray(o.vertexPosArray),
      e.vertexAttribPointer(o.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0),
      e.uniform2f(o.offsetUniform, 1, 1),
      e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems),
      null != e.canvas && n.push(e.canvas.toDataURL()),
      n.push("extensions:" + e.getSupportedExtensions().join(";")),
      n.push(
        "webgl aliased line width range:" +
          t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))
      ),
      n.push(
        "webgl aliased point size range:" +
          t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))
      ),
      n.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
      n.push(
        "webgl antialiasing:" +
          (e.getContextAttributes().antialias ? "yes" : "no")
      ),
      n.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
      n.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
      n.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
      n.push(
        "webgl max anisotropy:" +
          (function (e) {
            var t,
              n =
                e.getExtension("EXT_texture_filter_anisotropic") ||
                e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
                e.getExtension("MOZ_EXT_texture_filter_anisotropic");
            return n
              ? ((t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)),
                0 === t && (t = 2),
                t)
              : null;
          })(e)
      ),
      n.push(
        "webgl max combined texture image units:" +
          e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
      ),
      n.push(
        "webgl max cube map texture size:" +
          e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)
      ),
      n.push(
        "webgl max fragment uniform vectors:" +
          e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)
      ),
      n.push(
        "webgl max render buffer size:" +
          e.getParameter(e.MAX_RENDERBUFFER_SIZE)
      ),
      n.push(
        "webgl max texture image units:" +
          e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)
      ),
      n.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
      n.push(
        "webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)
      ),
      n.push(
        "webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)
      ),
      n.push(
        "webgl max vertex texture image units:" +
          e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      ),
      n.push(
        "webgl max vertex uniform vectors:" +
          e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)
      ),
      n.push(
        "webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))
      ),
      n.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
      n.push("webgl renderer:" + e.getParameter(e.RENDERER)),
      n.push(
        "webgl shading language version:" +
          e.getParameter(e.SHADING_LANGUAGE_VERSION)
      ),
      n.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
      n.push("webgl vendor:" + e.getParameter(e.VENDOR)),
      n.push("webgl version:" + e.getParameter(e.VERSION));
    try {
      var l = e.getExtension("WEBGL_debug_renderer_info");
      l &&
        (n.push(
          "webgl unmasked vendor:" + e.getParameter(l.UNMASKED_VENDOR_WEBGL)
        ),
        n.push(
          "webgl unmasked renderer:" + e.getParameter(l.UNMASKED_RENDERER_WEBGL)
        ));
    } catch (e) {}
    return e.getShaderPrecisionFormat
      ? (n.push(
          "webgl vertex shader high float precision:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision
        ),
        n.push(
          "webgl vertex shader high float precision rangeMin:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin
        ),
        n.push(
          "webgl vertex shader high float precision rangeMax:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax
        ),
        n.push(
          "webgl vertex shader medium float precision:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT)
              .precision
        ),
        n.push(
          "webgl vertex shader medium float precision rangeMin:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin
        ),
        n.push(
          "webgl vertex shader medium float precision rangeMax:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax
        ),
        n.push(
          "webgl vertex shader low float precision:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision
        ),
        n.push(
          "webgl vertex shader low float precision rangeMin:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin
        ),
        n.push(
          "webgl vertex shader low float precision rangeMax:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax
        ),
        n.push(
          "webgl fragment shader high float precision:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT)
              .precision
        ),
        n.push(
          "webgl fragment shader high float precision rangeMin:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin
        ),
        n.push(
          "webgl fragment shader high float precision rangeMax:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax
        ),
        n.push(
          "webgl fragment shader medium float precision:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT)
              .precision
        ),
        n.push(
          "webgl fragment shader medium float precision rangeMin:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT)
              .rangeMin
        ),
        n.push(
          "webgl fragment shader medium float precision rangeMax:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT)
              .rangeMax
        ),
        n.push(
          "webgl fragment shader low float precision:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision
        ),
        n.push(
          "webgl fragment shader low float precision rangeMin:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin
        ),
        n.push(
          "webgl fragment shader low float precision rangeMax:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax
        ),
        n.push(
          "webgl vertex shader high int precision:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision
        ),
        n.push(
          "webgl vertex shader high int precision rangeMin:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin
        ),
        n.push(
          "webgl vertex shader high int precision rangeMax:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax
        ),
        n.push(
          "webgl vertex shader medium int precision:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision
        ),
        n.push(
          "webgl vertex shader medium int precision rangeMin:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin
        ),
        n.push(
          "webgl vertex shader medium int precision rangeMax:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax
        ),
        n.push(
          "webgl vertex shader low int precision:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision
        ),
        n.push(
          "webgl vertex shader low int precision rangeMin:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin
        ),
        n.push(
          "webgl vertex shader low int precision rangeMax:" +
            e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax
        ),
        n.push(
          "webgl fragment shader high int precision:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision
        ),
        n.push(
          "webgl fragment shader high int precision rangeMin:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin
        ),
        n.push(
          "webgl fragment shader high int precision rangeMax:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax
        ),
        n.push(
          "webgl fragment shader medium int precision:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT)
              .precision
        ),
        n.push(
          "webgl fragment shader medium int precision rangeMin:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin
        ),
        n.push(
          "webgl fragment shader medium int precision rangeMax:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax
        ),
        n.push(
          "webgl fragment shader low int precision:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision
        ),
        n.push(
          "webgl fragment shader low int precision rangeMin:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin
        ),
        n.push(
          "webgl fragment shader low int precision rangeMax:" +
            e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax
        ),
        n.join("~"))
      : n.join("~");
  }