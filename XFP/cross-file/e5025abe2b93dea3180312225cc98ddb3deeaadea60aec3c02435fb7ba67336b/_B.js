export function B(e) {
  var t = [],
    n = document.createElement("canvas");
  (n.width = 2e3), (n.height = 200), (n.style.display = "inline");
  var a = n.getContext("2d");
  return (
    a.rect(0, 0, 10, 10),
    a.rect(2, 2, 6, 6),
    t.push(
      "canvas winding:" +
        (!1 === a.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
    ),
    (a.textBaseline = "alphabetic"),
    (a.fillStyle = "#f60"),
    a.fillRect(125, 1, 62, 20),
    (a.fillStyle = "#069"),
    e.dontUseFakeFontInCanvas
      ? (a.font = "11pt Arial")
      : (a.font = "11pt no-real-font-123"),
    a.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15),
    (a.fillStyle = "rgba(102, 204, 0, 0.2)"),
    (a.font = "18pt Arial"),
    a.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45),
    (a.globalCompositeOperation = "multiply"),
    (a.fillStyle = "rgb(255,0,255)"),
    a.beginPath(),
    a.arc(50, 50, 50, 0, 2 * Math.PI, !0),
    a.closePath(),
    a.fill(),
    (a.fillStyle = "rgb(0,255,255)"),
    a.beginPath(),
    a.arc(100, 50, 50, 0, 2 * Math.PI, !0),
    a.closePath(),
    a.fill(),
    (a.fillStyle = "rgb(255,255,0)"),
    a.beginPath(),
    a.arc(75, 100, 50, 0, 2 * Math.PI, !0),
    a.closePath(),
    a.fill(),
    (a.fillStyle = "rgb(255,0,255)"),
    a.arc(75, 75, 75, 0, 2 * Math.PI, !0),
    a.arc(75, 75, 25, 0, 2 * Math.PI, !0),
    a.fill("evenodd"),
    n.toDataURL && t.push("canvas fp:" + n.toDataURL()),
    t
  );
}