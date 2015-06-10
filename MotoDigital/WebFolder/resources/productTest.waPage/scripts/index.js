
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton5 = {};	// @buttonImage
	var imageButton9 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		$$('container1').disable();
		$$('container4').enable();
	};// @lock

	imageButton9.click = function imageButton9_click (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener("imageButton9", "click", imageButton9.click, "WAF");
// @endregion
};// @endlock
