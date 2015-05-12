
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var productEvent = {};	// @dataSource
	var product1Event = {};	// @dataSource
	var imageButton3 = {};	// @buttonImage
	var combobox1 = {};	// @combobox
	var textField5 = {};	// @textField
	var imageButton2 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vDatasourceInit == false){
			sources.product.addNewElement();
       	 	sources.product.serverRefresh(); //optional
        	vDatasourceInit = true;
    	}
	};// @lock

	product1Event.onCollectionChange = function product1Event_onCollectionChange (event)// @startlock
	{// @endlock
		
		if(vDatasourceInit == false){
			debugger;
			sources.product.addNewElement();
       	 	sources.product.serverRefresh(); //optional
        	vDatasourceInit = true;
    	}
		
	};// @lock


	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		$$('container4').hide();
		$$('container1').show();
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		var cat = $$('combobox1').sourceAtt.getValue();
		sources.product.categoria = cat;
	};// @lock

	textField5.change = function textField5_change (event)// @startlock
	{// @endlock
		var cat = sources.product.categoria;
		if(cat == null){
			cat =  "Todas";
			sources.product.categoria = cat;
		}
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		$$('container4').enable();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
	WAF.addListener("product1", "onCollectionChange", product1Event.onCollectionChange, "WAF");
	WAF.addListener("imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("textField5", "change", textField5.change, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
// @endregion
};// @endlock
