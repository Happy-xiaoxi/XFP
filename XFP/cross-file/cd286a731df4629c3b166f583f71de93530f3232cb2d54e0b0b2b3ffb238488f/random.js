export function random () {
	var b = 714025;
	var c = 4096;
	var a = 150889;
	if (typeof this.random_seed === "undefined") {
	  this.random_seed = new Date().getTime() % b;
	}
	this.random_seed = (this.random_seed * c + a) % b;
	return this.random_seed / b;
  }