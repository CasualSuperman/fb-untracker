var containers = ["contentCol", "fbDockChatTabs"];

window.addEventListener("load", function() {
	fixLinks({relatedNode: document});

	for (var i = 0; i < containers.length; ++i) {
		var node = document.getElementById(containers[i]);
		node.addEventListener("DOMNodeInserted", fixLinks);
		fixLinks({relatedNode: node});
	}

	containers = undefined;
}, false);

var selector = "a[onmousedown^='UntrustedLink']";

function fixLinks(e) {
	var aList = e.relatedNode.querySelectorAll(selector);
	Array.prototype.slice.call(aList, 0).forEach(function(elem) {
		elem.onmousedown = null;
	});
}

fixLinks({relatedNode: document});
