export function getElementsBySelector (all_selectors) {
	var selected = [];
	if (!document.getElementsByTagName) return selected;
	all_selectors = all_selectors.replace(/\s*([^\w])\s*/g, '$1');
	var selectors = all_selectors.split(',');
	var getElements = function (context, tag) {
		if (!tag) tag = '*';
		var found = new Array();
		for (var a = 0, len = context.length; (con = context[a]), a < len; a++) {
			var eles;
			if (tag == '*') eles = con.all ? con.all : con.getElementsByTagName('*');
			else eles = con.getElementsByTagName(tag);
			for (var b = 0, leng = eles.length; b < leng; b++) {
				found.push(eles[b]);
			}
		}
		return found;
	};
	COMMA: for (var i = 0, len1 = selectors.length; (selector = selectors[i]), i < len1; i++) {
		var context = new Array(document);
		var inheriters = selector.split(' ');
		SPACE: for (var j = 0, len2 = inheriters.length; (element = inheriters[j]), j < len2; j++) {
			var left_bracket = element.indexOf('[');
			var right_bracket = element.indexOf(']');
			var pos = element.indexOf('#');
			if (pos + 1 && !(pos > left_bracket && pos < right_bracket)) {
				var parts = element.split('#');
				var tag = parts[0];
				var id = parts[1];
				var ele = document.getElementById(id);
				if (!ele || (tag && ele.nodeName.toLowerCase() != tag)) {
					continue COMMA;
				}
				context = new Array(ele);
				continue SPACE;
			}
			pos = element.indexOf('.');
			if (pos + 1 && !(pos > left_bracket && pos < right_bracket)) {
				var parts = element.split('.');
				var tag = parts[0];
				var class_name = parts[1];
				var found = getElements(context, tag);
				context = new Array();
				for (var l = 0, len = found.length; (fnd = found[l]), l < len; l++) {
					if (fnd.className && fnd.className.match(new RegExp('(^|s)' + class_name + '(s|$)')))
						context.push(fnd);
				}
				continue SPACE;
			}
			if (element.indexOf('[') + 1) {
				if (element.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?['"]?([^\]'"]*)['"]?\]$/)) {
					var tag = RegExp.$1;
					var attr = RegExp.$2;
					var operator = RegExp.$3;
					var value = RegExp.$4;
				}
				var found = getElements(context, tag);
				context = new Array();
				for (var l = 0, len = found.length; (fnd = found[l]), l < len; l++) {
					if (operator == '=' && fnd.getAttribute(attr) != value) continue;
					if (operator == '~' && !fnd.getAttribute(attr).match(new RegExp('(^|\\s)' + value + '(\\s|$)')))
						continue;
					if (operator == '|' && !fnd.getAttribute(attr).match(new RegExp('^' + value + '-?'))) continue;
					if (operator == '^' && fnd.getAttribute(attr).indexOf(value) != 0) continue;
					if (
						operator == '$' &&
						fnd.getAttribute(attr).lastIndexOf(value) != fnd.getAttribute(attr).length - value.length
					)
						continue;
					if (operator == '*' && !(fnd.getAttribute(attr).indexOf(value) + 1)) continue;
					else if (!fnd.getAttribute(attr)) continue;
					context.push(fnd);
				}
				continue SPACE;
			}
			var found = getElements(context, element);
			context = found;
		}
		for (var o = 0, len = context.length; o < len; o++) {
			selected.push(context[o]);
		}
	}
	return selected;
}