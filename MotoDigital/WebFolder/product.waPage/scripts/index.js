
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var paypal = {};	// @buttonImage
	var orderEvent = {};	// @dataSource
	var richText5 = {};	// @richText
	var categoryComboBox = {};	// @combobox
	var featuredComboBox = {};	// @combobox
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
	var numWeeks = 2;
	var numDays = 0;
	
	
	function calculatePrice()
	{
		numWeeks = $$('weeksComboBox').getValue();
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
		numDays = numWeeks *7; //per day, affects product  end date
		
		$$('itDiscount').setValue(discount * 100);
		sources.order.net = subTotal;
		$$('itNet').setValue(sources.order.net);
		total = subTotal * 1.23; //Tax 23 %
		total = total.toFixed(2);
		sources.order.total = total;
		$$('itTotal').setValue(sources.order.total);
		sources.order.serverRefresh();
		
	
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

	paypal.click = function paypal_click (event)// @startlock
	{// @endlock
		var n = total*100;
		var htmlFile = n.toString();
		htmlFile = "/paypal/"+htmlFile+".waPage/";
		$$('ppFrame').setValue(htmlFile);
	};// @lock

	orderEvent.onCollectionChange = function orderEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vOrderInit == false){
			sources.order.addNewElement();
       	 	sources.order.serverRefresh(); //optional
        	vOrderInit = true;
        	sources.order.publisher = username;
        	calculatePrice();
        }
  
	};// @lock

	richText5.click = function richText5_click (event)// @startlock
	{// @endlock
		// Ok saving the payments, there are product.attributes to save.
		
		//sources.order.numDays = numDays; Depends on credit. redunctant with product...never mind, keep it simple, we are in a hurry. Will get back to this. Code needs cleaning.
		sources.order.total = total;
		sources.order.date = today;
		sources.order.publisher = username;
		sources.order.save({
        onSuccess: function(event) {
                // displays success message in a DisplayError area, NOT THROWING ANY MESSAGE. Get back to this later.
            alert("O número do seu pagamento é:  " + order.ID);
            
        },
        onError: function(error) {
                // displays error message in a DisplayError area
            alert("Erro ao gravar o pagamento. Por favor contacte o Departamento de suporte.");
        }
    	});
    	//alert(sources.product.title); // It WORKS The record is still in memory
    	window.location = "/product.waPage/";
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

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		// Ok saving the payments, there are product.attributes to save.
		
		//sources.order.numDays = numDays; Depends on credit. redunctant with product...never mind, keep it simple, we are in a hurry. Will get back to this. Code needs cleaning.
		sources.order.total = total;
		sources.order.date = today;
		sources.order.publisher = username;
		sources.order.save({
        onSuccess: function(event) {
                // displays success message in a DisplayError area, NOT THROWING ANY MESSAGE. Get back to this later.
            alert("O número do seu pagamento é:  " + order.ID);
            
        },
        onError: function(error) {
                // displays error message in a DisplayError area
            alert("Erro ao gravar o pagamento. Por favor contacte o Departamento de suporte.");
        }
    	});
    	//alert(sources.product.title); // It WORKS The record is still in memory
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
		sources.product.date = today;
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
	WAF.addListener("paypal", "click", paypal.click, "WAF");
	WAF.addListener("order", "onCollectionChange", orderEvent.onCollectionChange, "WAF");
	WAF.addListener("richText5", "click", richText5.click, "WAF");
	WAF.addListener("categoryComboBox", "change", categoryComboBox.change, "WAF");
	WAF.addListener("featuredComboBox", "change", featuredComboBox.change, "WAF");
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener("weeksComboBox", "change", weeksComboBox.change, "WAF");
	WAF.addListener("clientComboBox", "change", clientComboBox.change, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
