export function isDescendant(parent, child) {
	var node = child[_$_e9d9[186]];
	while (node != null) {
	  if (node == parent) {
		return true;
	  }
	  node = node[_$_e9d9[186]];
	}
	return false;
  }