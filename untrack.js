function filterLinks(nodes) {
	Array.prototype.forEach.call(nodes, function(node) {
		if (node.nodeType !== 1) return;
		var links = node.querySelectorAll("a[target='_blank']");
		Array.prototype.forEach.call(links, function(link) {
			var newLink = link.cloneNode(true);
			var className = newLink.className;

			while (newLink.attributes.length > 0) {
				newLink.removeAttribute(newLink.attributes[0].name);
			}

			newLink.className = className;

			if (link.href.indexOf("facebook.com/l.php") !== -1) {
				var href = link.href.match(/l\.php?.*u=([^&]+)[&$]/)[1];
				newLink.href = decodeURIComponent(href);
			} else {
				newLink.href = link.href;
			}

			newLink.target = link.target;
			link.parentNode.replaceChild(newLink, link);
		});
	});
}

var containers = ["content", "pagelet_dock"];

var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		filterLinks(mutation.addedNodes);
	});
});

var config = {
	childList: true,
	subtree : true,
};

for (var i = 0; i < containers.length; i++) {
	var node = document.getElementById(containers[i]);
	filterLinks([node]);
	observer.observe(node, config);
}
