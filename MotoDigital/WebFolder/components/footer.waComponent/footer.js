
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'footer';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var richText4 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	richText4.click = function richText4_click (event)// @startlock
	{// @endlock
		var lastURL = urlPath;
		alert(lastURL);
		sessionStorage.savedURL = lastURL;
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_richText4", "click", richText4.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
