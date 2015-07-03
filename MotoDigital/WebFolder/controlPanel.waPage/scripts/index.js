
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var button1 = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username.userName != "admin"){
			alert("Reservado a Administradores");
			window.location = "/index.waPage/index.html";
		}
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		today = $$("calendar1").getValue(false);
		debugger;
		ds.Product.collectionMethods.deleteOffSale(); // ???????????????????

	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
