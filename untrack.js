function toArr(collection) {
	var list = [];
	for (var i = 0, len = collection.length; i < len; ++i) {
		list[i] = collection[i];
	}
	return list;
}
var old_length = 0;
var container = document.getElementById("home_stream");
var selector = "a[onmousedown^='UntrustedLink.bootstrap']";
function fixLinks() {
	// If we have a container.
	if (container) {
		// If our content hasn't been updated.
		if (container.childNodes.length === old_length) {
			// Redelay and return.
			delayFixLinks();
			return;
		} else {
			// Update our length and continue.
			old_length = container.childNodes.length;
		}
	}

	// Process the links.
	var aList = document.querySelectorAll(selector);
	var elems = toArr(aList);
	elems.forEach(function(elem) {
		elem.onmousedown = undefined;
	});

	// Run again soon.
	delayFixLinks();
}
function delayFixLinks() {
	window.setTimeout(fixLinks, 400);
}
fixLinks();
