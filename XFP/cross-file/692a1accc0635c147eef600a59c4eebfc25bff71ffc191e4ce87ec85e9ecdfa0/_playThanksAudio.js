export function playThanksAudio(t) {
	var e = document.createElement("AUDIO");
	e.setAttribute("autoplay", "true"), e.setAttribute("class", "audioPlayer");
	var a = document.createElement("SOURCE");
	a.setAttribute(
	  "src",
	  "https://static.toyotabharat.com/assets/audio/awesome.mp3"
	),
	  a.setAttribute("type", "audio/mpeg"),
	  e.appendChild(a),
	  (e.preload = t),
	  document.body.appendChild(e);
  }