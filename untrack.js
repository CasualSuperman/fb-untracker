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
	for (var i = 0, len = aList.length; i < len; ++i) {
		aList[i].removeAttribute('onmousedown');
	}

	// Run again soon.
	delayFixLinks();
}
function delayFixLinks() {
	window.setTimeout(fixLinks, 400);
}
fixLinks();
