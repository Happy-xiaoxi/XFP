export function CreateCanvasFP() {
  var a = document.createElement("canvas");
  if (a.getContext && a.getContext("2d")) {
    a.width = 250;
    a.height = 250;
    document.getElementById("fingerprint-output");
    for (var b = a.getContext("2d"), d = 0; d < a.width / 2; d++)
      b.moveTo(2 * d, 0),
        b.lineTo(4 * d, a.height),
        (b.strokeStyle = "rgba(0, 0, 0, 0.1)"),
        b.stroke();
    b.font = "40px 'Arial'";
    for (d = 0; 3 > d; d++)
      (b.fillStyle = "#41b4e7"),
        b.fillText("Dotmetrics", 10, 50 * d + 75),
        (b.fillStyle = "rgba(255, 255, 255, 0.7)"),
        b.fillText("Dotmetrics", 20, 50 * d + 75);
    a = a.toDataURL("image/jpeg", 1);
    return this.SHA1(a).toString();
  }
  return null;
}