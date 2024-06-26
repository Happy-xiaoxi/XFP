export function getCanvasFp() {
    var e = [],
      t = document.createElement("canvas");
    (t.width = 2e3), (t.height = 200), (t.style.display = "inline");
    var n = t.getContext("2d");
    return (
      n.rect(0, 0, 10, 10),
      n.rect(2, 2, 6, 6),
      e.push(
        "canvas winding:" +
          (!1 === n.isPointInPath(5, 5, "evenodd") ? "yes" : "no")
      ),
      (n.textBaseline = "alphabetic"),
      (n.fillStyle = "#f60"),
      n.fillRect(125, 1, 62, 20),
      (n.fillStyle = "#069"),
      this.options.dontUseFakeFontInCanvas
        ? (n.font = "11pt Arial")
        : (n.font = "11pt no-real-font-123"),
      n.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 2, 15),
      (n.fillStyle = "rgba(102, 204, 0, 0.2)"),
      (n.font = "18pt Arial"),
      n.fillText("Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ", 4, 45),
      (n.globalCompositeOperation = "multiply"),
      (n.fillStyle = "rgb(255,0,255)"),
      n.beginPath(),
      n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
      n.closePath(),
      n.fill(),
      (n.fillStyle = "rgb(0,255,255)"),
      n.beginPath(),
      n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
      n.closePath(),
      n.fill(),
      (n.fillStyle = "rgb(255,255,0)"),
      n.beginPath(),
      n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
      n.closePath(),
      n.fill(),
      (n.fillStyle = "rgb(255,0,255)"),
      n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
      n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
      n.fill("evenodd"),
      e.push("canvas fp:" + t.toDataURL()),
      e.join("~")
    );
  }