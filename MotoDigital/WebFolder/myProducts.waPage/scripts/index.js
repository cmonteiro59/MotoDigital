
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image16 = {};	// @image
	var image15 = {};	// @image
	var image6 = {};	// @image
	var image5 = {};	// @image
	var imageButton1 = {};	// @buttonImage
	var dataGrid1 = {};	// @dataGrid
	var productEvent = {};	// @dataSource
// @endregion// @endlock
	var vDatasourceInit = false;
// eventHandlers// @lock

	image16.mouseover = function image16_mouseover (event)// @startlock
	{// @endlock
		$$("image14").show();
	};// @lock

	image16.mouseout = function image16_mouseout (event)// @startlock
	{// @endlock
		$$("image14").hide();
	};// @lock

	image15.mouseover = function image15_mouseover (event)// @startlock
	{// @endlock
		$$("image13").show();
	};// @lock

	image15.mouseout = function image15_mouseout (event)// @startlock
	{// @endlock
		$$("image13").hide();
	};// @lock

	image6.mouseover = function image6_mouseover (event)// @startlock
	{// @endlock
		$$("image12").show();
	};// @lock

	image6.mouseout = function image6_mouseout (event)// @startlock
	{// @endlock
		$$("image12").hide();
	};// @lock

	image5.mouseover = function image5_mouseover (event)// @startlock
	{// @endlock
		$$("image11").show();
	};// @lock

	image5.mouseout = function image5_mouseout (event)// @startlock
	{// @endlock
		$$("image11").hide();
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		$$("container7").hide();
	};// @lock

	dataGrid1.onRowClick = function dataGrid1_onRowClick (event)// @startlock
	{// @endlock
		$$("container7").show();
	};// @lock

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vDatasourceInit == false)
		{
			var username = WAF.directory.currentUser();
			if(username != null){
				sources.product.query('publisher == :1',username.userName);
			}
			vDatasourceInit = true;
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("image16", "mouseover", image16.mouseover, "WAF");
	WAF.addListener("image16", "mouseout", image16.mouseout, "WAF");
	WAF.addListener("image15", "mouseover", image15.mouseover, "WAF");
	WAF.addListener("image15", "mouseout", image15.mouseout, "WAF");
	WAF.addListener("image6", "mouseover", image6.mouseover, "WAF");
	WAF.addListener("image6", "mouseout", image6.mouseout, "WAF");
	WAF.addListener("image5", "mouseover", image5.mouseover, "WAF");
	WAF.addListener("image5", "mouseout", image5.mouseout, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("dataGrid1", "onRowClick", dataGrid1.onRowClick, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
