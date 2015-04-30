
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var orderEvent = {};	// @dataSource
	var imageButton1 = {};	// @buttonImage
	var documentEvent = {};	// @document
	var imageButton2 = {};	// @buttonImage
	var combobox1 = {};	// @combobox
	var productEvent = {};	// @dataSource
// @endregion// @endlock

	var vProductInit = false;
	var vOrderInit = false;
	
// eventHandlers// @lock

	orderEvent.onCollectionChange = function orderEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vOrderInit == false){
			sources.order.addNewElement();
       	 	sources.order.serverRefresh(); //optional
        	vOrderInit = true;
	    }
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		$$('container4').show();
		$$('newProduct').hide();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('container4').hide();
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		$$('container4').hide();
		$$('container8').show();
	};// @lock

	combobox1.change = function combobox1_change (event)// @startlock
	{// @endlock
		var cat = $$('combobox1').sourceAtt.getValue();
		sources.product.categoria = cat;
	};// @lock

	productEvent.ontitleAttributeChange = function productEvent_ontitleAttributeChange (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
			sources.product.publisher = username.UserName;
	};// @lock

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vProductInit == false){
			sources.product.addNewElement();
       	 	sources.product.serverRefresh(); //optional
        	vProductInit = true;
        	
    	}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("product", "ontitleAttributeChange", productEvent.ontitleAttributeChange, "WAF", "title");
	WAF.addListener("order", "onCollectionChange", orderEvent.onCollectionChange, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
