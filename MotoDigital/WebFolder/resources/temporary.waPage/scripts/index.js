
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton2 = {};	// @buttonImage
	var imageButton9 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";
	};// @lock

	imageButton9.click = function imageButton9_click (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("imageButton9", "click", imageButton9.click, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
// @endregion
};// @endlock
