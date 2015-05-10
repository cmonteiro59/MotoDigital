
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var order2Event = {};	// @dataSource
	var imageButton4 = {};	// @buttonImage
	var weeksComboBox = {};	// @combobox
	var categoryComboBox = {};	// @combobox
	var clientComboBox = {};	// @combobox
	var imageButton1 = {};	// @buttonImage
	var documentEvent = {};	// @document
	var imageButton2 = {};	// @buttonImage
	var combobox1 = {};	// @combobox
	var productEvent = {};	// @dataSource
// @endregion// @endlock

	var vProductInit = false;
	var vOrderInit = false;
	var username = WAF.directory.currentUser().userName;
	
	
	//Init price table...Temporary
 	var parMotosPrice = 1.50;
	var parEquipPrice = 0.75;
	var proMotosPrice = 1.25;
	var proEquipPrice = 0.50;
	
	
	function calculatePrice ()
	{
		var numWeeks = $$('weeksComboBox').getValue();
		var cli = $$('clientComboBox').getValue();
		var cat = $$('categoryComboBox').getValue();
		var subTotal = 0;
		var total = 0;
		var discount = 0;
		
		switch(cli) {
		case "1": //Private
			if(cat == "Motos"){
				subTotal += parMotosPrice;
				discount = sources.priceList.discountLesserThan+1;
			}else {
				subTotal += parEquipPrice;
			}
			break;
		case "2": //Professional
			if(cat == "Motos"){
				subTotal += proMotosPrice;
			}else {
				subTotal += proEquipPrice;
			}
			break;
		}
				subTotal = subTotal * numWeeks;
		if(discount > 0){
			subTotal = subTotal / discount;
		}
		//$$('itsubTotal').setValue(subTotal);
		total = subTotal * 1.23;
		$$('itTotal').setValue(total);
		sources.order2.total = total;
		
	};
	
	function weeks (custType,catType ) 
	{
		$$('weeksComboBox').removeOption(3);
		$$('weeksComboBox').removeOption(2);
		$$('weeksComboBox').removeOption(1);
		
		if(custType == "Profissionais") {
			$$('weeksComboBox').addOption("2","2",true);
			$$('textField2').hide();
			$$('textField3').hide();
		
		}else {
			if(catType != "Motos"){
				$$('weeksComboBox').addOption("3","3",true);
				$$('weeksComboBox').addOption("6","6",false);
				$$('weeksComboBox').addOption("9","9",false);
			}else{
				$$('weeksComboBox').addOption("2","2",true);
				$$('weeksComboBox').addOption("4","4",false);
				$$('weeksComboBox').addOption("6","6",false);
			}
			if(catType == "Motos"){
				$$('textField2').show();
				$$('textField3').show();
			}
		}
		
	};
			
			
// eventHandlers// @lock

	order2Event.onCollectionChange = function order2Event_onCollectionChange (event)// @startlock
	{// @endlock
		if(vOrderInit == false){
			sources.order2.addNewElement();
       	 	sources.order2.serverRefresh(); //optional
        	vOrderInit = true;
        	
    	}
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		
		//var username = WAF.directory.currentUser().userName;
		//sources.order2.publisher = username;
		sources.order2.date = new Date();
		sources.order2.save({
        onSuccess: function(event) {
                // displays success message in a DisplayError area
            alert("O número do seu pagamento é:  ", order2.ID);
        },
        onError: function(error) {
                // displays error message in a DisplayError area
            alert("Error");
        }
    	});
	};// @lock

	weeksComboBox.change = function weeksComboBox_change (event)// @startlock
	{// @endlock
		calculatePrice ();
	};// @lock

	categoryComboBox.change = function categoryComboBox_change (event)// @startlock
	{// @endlock
		var cli = $$('clientComboBox').getValue();
		var cat = $$('categoryComboBox').getValue();
		weeks(cli, cat);
		calculatePrice ();
	};// @lock

	clientComboBox.change = function clientComboBox_change (event)// @startlock
	{// @endlock
		var cli = $$('clientComboBox').getValue();
		var cat = $$('categoryComboBox').getValue();
		weeks(cli, cat);
		calculatePrice ();
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		
		sources.product.publisher = username;
		sources.product.save();
		sources.product.save({
        onSuccess: function(event) {
                // displays success message in a DisplayError area
           alert("O número do seu anúncio é:  ", product.ID);
        },
        onError: function(error) {
                // displays error message in a DisplayError area
            alert("Error");
        }
    	});
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

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vProductInit == false){
			sources.product.addNewElement();
       	 	sources.product.serverRefresh(); //optional
       	 	vProductInit = true;
        	
    	}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("order2", "onCollectionChange", order2Event.onCollectionChange, "WAF");
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener("weeksComboBox", "change", weeksComboBox.change, "WAF");
	WAF.addListener("categoryComboBox", "change", categoryComboBox.change, "WAF");
	WAF.addListener("clientComboBox", "change", clientComboBox.change, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("combobox1", "change", combobox1.change, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
