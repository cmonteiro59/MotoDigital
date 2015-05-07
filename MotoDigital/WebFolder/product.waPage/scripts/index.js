
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var categoryComboBox = {};	// @combobox
	var clientComboBox = {};	// @combobox
	var category1Event = {};	// @dataSource
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

	categoryComboBox.change = function categoryComboBox_change (event)// @startlock
	{// @endlock
		var option = $$('categoryComboBox').getValue();
		if( option != "Motos"){
			$$('textField2').hide();
			$$('textField3').hide();
			
			var pro = $$('clientComboBox').getValue();
			if(pro == "Profissionais"){
				$$('weeksComboBox').removeOption(3);
				$$('weeksComboBox').removeOption(2);
				$$('weeksComboBox').removeOption(1);
				$$('weeksComboBox').addOption("3","3",true);
				$$('weeksComboBox').addOption("6","6",false);
				$$('weeksComboBox').addOption("9","9",false);
			}else{
				$$('weeksComboBox').removeOption(3);
				$$('weeksComboBox').removeOption(2);
				$$('weeksComboBox').removeOption(1);
				$$('weeksComboBox').addOption("2","2",true);
				$$('weeksComboBox').addOption("4","4",false);
				$$('weeksComboBox').addOption("6","6",false);
			}
			
		}else {
			$$('textField2').show();
			$$('textField3').show();
			
		}
	};// @lock

	clientComboBox.change = function clientComboBox_change (event)// @startlock
	{// @endlock
		var option = $$('clientComboBox').getValue();
		if( option == "Profissionais"){
			$$('textField2').hide();
			$$('textField3').hide();
			$$('weeksComboBox').removeOption(3);
			$$('weeksComboBox').removeOption(2);
		}else if(option == "Particulares"){
			$$('textField2').show();
			$$('textField3').show();
			$$('weeksComboBox').addOption("4","4",false);
			$$('weeksComboBox').addOption("6","6",false);
		}
	};// @lock

	category1Event.onCollectionChange = function category1Event_onCollectionChange (event)// @startlock
	{// @endlock
		
		
	};// @lock

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
	WAF.addListener("categoryComboBox", "change", categoryComboBox.change, "WAF");
	WAF.addListener("clientComboBox", "change", clientComboBox.change, "WAF");
	WAF.addListener("category1", "onCollectionChange", category1Event.onCollectionChange, "WAF");
	WAF.addListener("product", "ontitleAttributeChange", productEvent.ontitleAttributeChange, "WAF", "title");
	WAF.addListener("order", "onCollectionChange", orderEvent.onCollectionChange, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
