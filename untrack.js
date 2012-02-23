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

var selector = "a[onmousedown^='UntrustedLink.bootstrap']";

function fixLinks(e) {
	var aList = e.relatedNode.querySelectorAll(selector);
	for (var i = 0, len = aList.length; i < len; ++i) {
		aList[i].removeAttribute('onmousedown');
	}
}

fixLinks({relatedNode: document});
