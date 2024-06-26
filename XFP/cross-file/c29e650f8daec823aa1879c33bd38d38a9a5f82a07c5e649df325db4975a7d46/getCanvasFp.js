
export function getCanvasFp() {
    var e = [], t = document.createElement('canvas');
    t.width = 2000, t.height = 200, t.style.display = 'inline';
    var r = t.getContext('2d');
    return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), e.push('canvas winding:' + (!1 === r.isPointInPath(5, 5, 'evenodd') ? 'yes' : 'no')), r.textBaseline = 'alphabetic', r.fillStyle = '#f60', r.fillRect(125, 1, 62, 20), r.fillStyle = '#069', this.options.dontUseFakeFontInCanvas ? r.font = '11pt Arial' : r.font = '11pt no-real-font-123', r.fillText('Cwm fjordbank glyphs vext quiz, \u25603', 2, 15), r.fillStyle = 'rgba(102, 204, 0, 0.2)', r.font = '18pt Arial', r.fillText('Cwm fjordbank glyphs vext quiz, \u25603', 4, 45), r.globalCompositeOperation = 'multiply', r.fillStyle = 'rgb(255,0,255)', r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = 'rgb(0,255,255)', r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = 'rgb(255,255,0)', r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = 'rgb(255,0,255)', r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill('evenodd'), t.toDataURL && e.push('canvas fp:' + t.toDataURL()), e.join('~');
}
