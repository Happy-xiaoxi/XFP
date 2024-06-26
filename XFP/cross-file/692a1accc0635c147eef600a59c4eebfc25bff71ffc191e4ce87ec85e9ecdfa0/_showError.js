export function showError(obj, message, selector) {
	$(obj)[_$_e9d9[166]](_$_e9d9[165]);
	$(obj)[_$_e9d9[168]](_$_e9d9[167]);
	selector = typeof selector !== _$_e9d9[124] ? selector : _$_e9d9[51];
	if (selector[_$_e9d9[16]] != 0) {
	  $(selector)[_$_e9d9[50]]();
	  $(selector)[_$_e9d9[169]](message);
	} else {
	  $(obj)
		[_$_e9d9[172]](_$_e9d9[171])
		[_$_e9d9[149]](_$_e9d9[170])
		[_$_e9d9[50]]();
	  $(obj)
		[_$_e9d9[172]](_$_e9d9[171])
		[_$_e9d9[149]](_$_e9d9[170])
		[_$_e9d9[169]](message);
	}
  }