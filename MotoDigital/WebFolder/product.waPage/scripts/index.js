
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var ibPaypal = {};	// @buttonImage
	var ibTransfer = {};	// @buttonImage
	var categoryComboBox = {};	// @combobox
	var featuredComboBox = {};	// @combobox
	var order2Event = {};	// @dataSource
	var imageButton4 = {};	// @buttonImage
	var weeksComboBox = {};	// @combobox
	var clientComboBox = {};	// @combobox
	var imageButton1 = {};	// @buttonImage
	var documentEvent = {};	// @document
	var imageButton2 = {};	// @buttonImage
	var productEvent = {};	// @dataSource
// @endregion// @endlock

	var vProductInit = false;
	var vOrderInit = false;
	var username = WAF.directory.currentUser().userName;
	var today = new Date();

	//Init price table...Temporary
 	var parMotosPrice = 1.50;
	var parEquipPrice = 0.75;
	var proMotosPrice = 1.25;
	var proEquipPrice = 0.50;
	var subTotal = 0;
	var total = 0;
	var discount = 0;
	
	
	function calculatePrice()
	{
		var numWeeks = $$('weeksComboBox').getValue();
		var cli = $$('clientComboBox').getValue();
		var cat = $$('categoryComboBox').getValue();
		subTotal = 0;
		total = 0;
		discount = 0;
		
		switch(cli) 
		{
			case "1": //Private
				if(cat == "Motos"){
					subTotal += parMotosPrice; //motos
					//discount = sources.priceList.discount;
					discount = 0.50;
				}else {
					subTotal += parEquipPrice; // Acessórios
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
			subTotal = subTotal * discount;
		}
		
		var featured = $$('featuredComboBox').getValue();
		switch(featured)
		{
			
			case "1": //Sobressaído
				if(cat == "Motos"){
					subTotal = 15.00;
				}else{
					subTotal = 10.00;
				}
			break;
			case "2": //Em primeiro Lugar
				if(cat == "Motos"){
					subTotal = 10.00;
				}else{
					subTotal = 8.00;
				}
			break;
			case "3": //Top
				if(cat == "Motos"){
					subTotal = 5.00;
				}else{
					subTotal = 4.00;
				}
			break;
			case "4": //Oportunidade
				subTotal = 6.00;
			break;
			case "5": //Pull to Top só profissionais
				subTotal += 1.25;
			break;
		}
		
		$$('itDiscount').setValue(discount * 100);
		$$('itsubTotal').setValue(subTotal);
		total = subTotal * 1.23; //Tax 23 %
		$$('itTotal').setValue(total);
	
	};
	
	function weeks (custType,catType ) 
	{
		$$('weeksComboBox').removeOption(3);
		$$('weeksComboBox').removeOption(2);
		$$('weeksComboBox').removeOption(1);
		if(custType == "2") { //Profissionais
			$$('weeksComboBox').addOption("2","2",true);
		
		}else { // Particular
			if(catType != "Motos"){
				$$('weeksComboBox').addOption("3","3",true);
				$$('weeksComboBox').addOption("6","6",false);
				$$('weeksComboBox').addOption("9","9",false);
			}else{
				$$('weeksComboBox').addOption("2","2",true);
				$$('weeksComboBox').addOption("4","4",false);
				$$('weeksComboBox').addOption("6","6",false);
			}
		}
	};
			
			
// eventHandlers// @lock

	ibPaypal.click = function ibPaypal_click (event)// @startlock
	{// @endlock
			$$('tfNib').hide();
		$$('tfInstructions').hide();
	};// @lock

	ibTransfer.click = function ibTransfer_click (event)// @startlock
	{// @endlock
		// Bank Transfer
		
		$$('tfNib').show();
		$$('tfInstructions').show();
		
	};// @lock

	categoryComboBox.change = function categoryComboBox_change (event)// @startlock
	{// @endlock
		var cli = $$('clientComboBox').getValue();
		var cat = $$('categoryComboBox').getValue();
		weeks(cli, cat);
		calculatePrice ();
	};// @lock

	featuredComboBox.change = function featuredComboBox_change (event)// @startlock
	{// @endlock
		calculatePrice ();
	};// @lock

	order2Event.onCollectionChange = function order2Event_onCollectionChange (event)// @startlock
	{// @endlock
		if(vOrderInit == false){
			sources.order2.addNewElement();
       	 	sources.order2.serverRefresh(); //optional
        	vOrderInit = true;
        	calculatePrice();
        	
    	}
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		
		sources.order2.total = total;
		sources.order2.date = today;
		sources.order2.publisher = username;
		sources.order2.save({
        onSuccess: function(event) {
                // displays success message in a DisplayError area
            alert("O número do seu pagamento é:  " + order2.ID);
            
        },
        onError: function(error) {
                // displays error message in a DisplayError area
            alert("Erro ao gravar o pagamento. Por favor contacte o Departamento de suporte.");
        }
    	});
    	alert(sources.product.title); // It WORKS The record is still in memory
    	window.location = "/product.waPage/";
    	
		
	};// @lock

	weeksComboBox.change = function weeksComboBox_change (event)// @startlock
	{// @endlock
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
		sources.product.categoria = $$('combobox2').getValue();
		sources.product.save({
        onSuccess: function(event) {
                // displays success message in a DisplayError area
           alert("O número do seu anúncio é:  " + product.ID);
        },
        onError: function(error) {
                // displays error message in a DisplayError area
             alert("Erro ao gravar o anúncio. Por favor contacte o Departamento de suporte.");
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

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vProductInit == false){
			sources.product.addNewElement();
       	 	sources.product.serverRefresh(); //optional
       	 	vProductInit = true;
        	
    	}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("ibPaypal", "click", ibPaypal.click, "WAF");
	WAF.addListener("ibTransfer", "click", ibTransfer.click, "WAF");
	WAF.addListener("categoryComboBox", "change", categoryComboBox.change, "WAF");
	WAF.addListener("featuredComboBox", "change", featuredComboBox.change, "WAF");
	WAF.addListener("order2", "onCollectionChange", order2Event.onCollectionChange, "WAF");
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener("weeksComboBox", "change", weeksComboBox.change, "WAF");
	WAF.addListener("clientComboBox", "change", clientComboBox.change, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
