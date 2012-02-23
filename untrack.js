function toArr(collection) {
	var list = [];
	for (var i = 0, len = collection.length; i < len; ++i) {
		list[i] = collection[i];
	}
	return list;
}

var selector = "a[onmousedown^='UntrustedLink.bootstrap']";
function fixLinks() {
	var aList = document.querySelectorAll(selector);
	var elems = toArr(aList);
	elems.forEach(function(elem) {
		elem.onmousedown = undefined;
	});
	window.setTimeout(fixLinks, 400);
}
fixLinks();
