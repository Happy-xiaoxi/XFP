export function E() {
  var o,
    e = function (e) {
      return (
        o.clearColor(0, 0, 0, 1),
        o.enable(o.DEPTH_TEST),
        o.depthFunc(o.LEQUAL),
        o.clear(o.COLOR_BUFFER_BIT | o.DEPTH_BUFFER_BIT),
        "[" + e[0] + ", " + e[1] + "]"
      );
    };
  if (!(o = F())) return null;
  var l = [],
    t = o.createBuffer();
  o.bindBuffer(o.ARRAY_BUFFER, t);
  var n = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0]);
  o.bufferData(o.ARRAY_BUFFER, n, o.STATIC_DRAW),
    (t.itemSize = 3),
    (t.numItems = 3);
  var a = o.createProgram(),
    r = o.createShader(o.VERTEX_SHADER);
  o.shaderSource(
    r,
    "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
  ),
    o.compileShader(r);
  var i = o.createShader(o.FRAGMENT_SHADER);
  o.shaderSource(
    i,
    "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
  ),
    o.compileShader(i),
    o.attachShader(a, r),
    o.attachShader(a, i),
    o.linkProgram(a),
    o.useProgram(a),
    (a.vertexPosAttrib = o.getAttribLocation(a, "attrVertex")),
    (a.offsetUniform = o.getUniformLocation(a, "uniformOffset")),
    o.enableVertexAttribArray(a.vertexPosArray),
    o.vertexAttribPointer(a.vertexPosAttrib, t.itemSize, o.FLOAT, !1, 0, 0),
    o.uniform2f(a.offsetUniform, 1, 1),
    o.drawArrays(o.TRIANGLE_STRIP, 0, t.numItems);
  try {
    l.push(o.canvas.toDataURL());
  } catch (c) {}
  l.push("extensions:" + (o.getSupportedExtensions() || []).join(";")),
    l.push(
      "webgl aliased line width range:" +
        e(o.getParameter(o.ALIASED_LINE_WIDTH_RANGE))
    ),
    l.push(
      "webgl aliased point size range:" +
        e(o.getParameter(o.ALIASED_POINT_SIZE_RANGE))
    ),
    l.push("webgl alpha bits:" + o.getParameter(o.ALPHA_BITS)),
    l.push(
      "webgl antialiasing:" +
        (o.getContextAttributes().antialias ? "yes" : "no")
    ),
    l.push("webgl blue bits:" + o.getParameter(o.BLUE_BITS)),
    l.push("webgl depth bits:" + o.getParameter(o.DEPTH_BITS)),
    l.push("webgl green bits:" + o.getParameter(o.GREEN_BITS)),
    l.push(
      "webgl max anisotropy:" +
        (function (e) {
          var t =
            e.getExtension("EXT_texture_filter_anisotropic") ||
            e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") ||
            e.getExtension("MOZ_EXT_texture_filter_anisotropic");
          if (t) {
            var n = e.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
            return 0 === n && (n = 2), n;
          }
          return null;
        })(o)
    ),
    l.push(
      "webgl max combined texture image units:" +
        o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS)
    ),
    l.push(
      "webgl max cube map texture size:" +
        o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE)
    ),
    l.push(
      "webgl max fragment uniform vectors:" +
        o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS)
    ),
    l.push(
      "webgl max render buffer size:" + o.getParameter(o.MAX_RENDERBUFFER_SIZE)
    ),
    l.push(
      "webgl max texture image units:" +
        o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS)
    ),
    l.push("webgl max texture size:" + o.getParameter(o.MAX_TEXTURE_SIZE)),
    l.push(
      "webgl max varying vectors:" + o.getParameter(o.MAX_VARYING_VECTORS)
    ),
    l.push("webgl max vertex attribs:" + o.getParameter(o.MAX_VERTEX_ATTRIBS)),
    l.push(
      "webgl max vertex texture image units:" +
        o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
    ),
    l.push(
      "webgl max vertex uniform vectors:" +
        o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS)
    ),
    l.push("webgl max viewport dims:" + e(o.getParameter(o.MAX_VIEWPORT_DIMS))),
    l.push("webgl red bits:" + o.getParameter(o.RED_BITS)),
    l.push("webgl renderer:" + o.getParameter(o.RENDERER)),
    l.push(
      "webgl shading language version:" +
        o.getParameter(o.SHADING_LANGUAGE_VERSION)
    ),
    l.push("webgl stencil bits:" + o.getParameter(o.STENCIL_BITS)),
    l.push("webgl vendor:" + o.getParameter(o.VENDOR)),
    l.push("webgl version:" + o.getParameter(o.VERSION));
  try {
    var s = o.getExtension("WEBGL_debug_renderer_info");
    s &&
      (l.push(
        "webgl unmasked vendor:" + o.getParameter(s.UNMASKED_VENDOR_WEBGL)
      ),
      l.push(
        "webgl unmasked renderer:" + o.getParameter(s.UNMASKED_RENDERER_WEBGL)
      ));
  } catch (c) {}
  return (
    o.getShaderPrecisionFormat &&
      u(["FLOAT", "INT"], function (i) {
        u(["VERTEX", "FRAGMENT"], function (r) {
          u(["HIGH", "MEDIUM", "LOW"], function (a) {
            u(["precision", "rangeMin", "rangeMax"], function (e) {
              var t = o.getShaderPrecisionFormat(
                o[r + "_SHADER"],
                o[a + "_" + i]
              )[e];
              "precision" !== e && (e = "precision " + e);
              var n = [
                "webgl ",
                r.toLowerCase(),
                " shader ",
                a.toLowerCase(),
                " ",
                i.toLowerCase(),
                " ",
                e,
                ":",
                t,
              ].join("");
              l.push(n);
            });
          });
        });
      }),
    G(o),
    l
  );
}