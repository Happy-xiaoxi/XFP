export function do_sample () {
	if (this.in_sample() === true) {
	  this.invite();
	}
	return this;
  }