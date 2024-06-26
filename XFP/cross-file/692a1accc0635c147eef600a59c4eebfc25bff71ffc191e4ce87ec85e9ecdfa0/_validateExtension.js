export function validateExtension(fileName, supportedExtensions) {
	var ext = fileName[_$_e9d9[63]](_$_e9d9[189])[_$_e9d9[188]]()[_$_e9d9[187]]();
	if ($[_$_e9d9[190]](ext, supportedExtensions) == -1) {
	  return false;
	}
	return true;
  }