
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var productEvent = {};	// @dataSource
	var imageButton7 = {};	// @buttonImage
	var dataGrid1 = {};	// @dataGrid
	var image10 = {};	// @image
	var image9 = {};	// @image
	var image8 = {};	// @image
	var image7 = {};	// @image
// @endregion// @endlock

// eventHandlers// @lock

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		alert(username.UserName);
		if(username != null){
			sources.product.query('publisher == :1',username.UserName);
		}
	};// @lock

	imageButton7.click = function imageButton7_click (event)// @startlock
	{// @endlock
		$$("container3").hide();
	};// @lock

	dataGrid1.onCellClick = function dataGrid1_onCellClick (event)// @startlock
	{// @endlock
		$$("container3").show();
	};// @lock

	image10.mouseover = function image10_mouseover (event)// @startlock
	{// @endlock
		$$("image14").show();
	};// @lock

	image10.mouseout = function image10_mouseout (event)// @startlock
	{// @endlock
		$$("image14").hide();
	};// @lock

	image9.mouseover = function image9_mouseover (event)// @startlock
	{// @endlock
		$$("image13").show();
	};// @lock

	image9.mouseout = function image9_mouseout (event)// @startlock
	{// @endlock
		$$("image13").hide();
	};// @lock

	image8.mouseover = function image8_mouseover (event)// @startlock
	{// @endlock
		$$("image12").show();
	};// @lock

	image8.mouseout = function image8_mouseout (event)// @startlock
	{// @endlock
		$$("image12").hide();
	};// @lock

	image7.mouseover = function image7_mouseover (event)// @startlock
	{// @endlock
		$$("image11").show();
	};// @lock

	image7.mouseout = function image7_mouseout (event)// @startlock
	{// @endlock
		$$("image11").hide();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
	WAF.addListener("imageButton7", "click", imageButton7.click, "WAF");
	WAF.addListener("dataGrid1", "onCellClick", dataGrid1.onCellClick, "WAF");
	WAF.addListener("image10", "mouseover", image10.mouseover, "WAF");
	WAF.addListener("image10", "mouseout", image10.mouseout, "WAF");
	WAF.addListener("image9", "mouseover", image9.mouseover, "WAF");
	WAF.addListener("image9", "mouseout", image9.mouseout, "WAF");
	WAF.addListener("image8", "mouseover", image8.mouseover, "WAF");
	WAF.addListener("image8", "mouseout", image8.mouseout, "WAF");
	WAF.addListener("image7", "mouseover", image7.mouseover, "WAF");
	WAF.addListener("image7", "mouseout", image7.mouseout, "WAF");
// @endregion
};// @endlock
