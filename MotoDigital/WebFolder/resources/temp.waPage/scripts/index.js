
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var container14 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	container14.click = function container14_click (event)// @startlock
	{// @endlock
		$$("container5").show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("container14", "click", container14.click, "WAF");
// @endregion
};// @endlock
