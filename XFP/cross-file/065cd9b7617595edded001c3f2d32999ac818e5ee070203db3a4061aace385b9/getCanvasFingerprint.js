export function getCanvasFingerprint() {
	var t = document.createElement('canvas'),
		n = t.getContext('2d'),
		i = 'http://valve.github.io';
	return (
		(n.textBaseline = 'top'),
		(n.font = "14px 'Arial'"),
		(n.textBaseline = 'alphabetic'),
		(n.fillStyle = '#f60'),
		n.fillRect(125, 1, 62, 20),
		(n.fillStyle = '#069'),
		n.fillText(i, 2, 15),
		(n.fillStyle = 'rgba(102, 204, 0, 0.7)'),
		n.fillText(i, 4, 17),
		t.toDataURL()
	);
}