
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var ibTransfer = {};	// @buttonImage
	var paypal = {};	// @buttonImage
	var orderEvent = {};	// @dataSource
	var categoryComboBox = {};	// @combobox
	var featuredComboBox = {};	// @combobox
	var ibTransferFinal = {};	// @buttonImage
	var weeksComboBox = {};	// @combobox
	var clientComboBox = {};	// @combobox
	var ibNext1 = {};	// @buttonImage
	var documentEvent = {};	// @document
	var imageButton2 = {};	// @buttonImage
	var productEvent = {};	// @dataSource
// @endregion// @endlock

	var vProductInit = false;
	var vOrderInit = false;
	var username = WAF.directory.currentUser().userName;
	var today;
	
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
	var endDate;
	
	
	function calculatePrice()
	{
		var visible = $$('weeksComboBox').isVisible();
		if(visible)
		{
			numWeeks = $$('weeksComboBox').getValue();
		}else{
			numWeeks = 1; // Means we dealing with a Featured add "Destaque"
		}
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
		if(discount > 0)
		{
			subTotal = subTotal * discount;
		}
		
		var featured = $$('featuredComboBox').getValue();
		switch(featured)
		{
			
			case "1": //popup...to do
				if(cat == "Motos"){
					subTotal = 15.00;
				}else{
					subTotal = 10.00;
				}
			break;
			case "2": //first
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
			case "4": //right side
				subTotal = 6.00;
			break;
			case "5": //Push to Top... only comercial
				subTotal += 1.25;
			break;
		}
		numDays = numWeeks *7; //per day, affects product  end date
		
		$$('itDiscount').setValue(discount * 100);
		subTotal = subTotal.toFixed(2);
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

	ibTransfer.click = function ibTransfer_click (event)// @startlock
	{// @endlock
		
		var conf = confirm("Confirma que quer pagar por transferência bancaria!");
		if(conf)
		{
			$$('ppFrame').hide();
			$$('tbMsgContainer').show();
			
		}
		
	};// @lock

	paypal.click = function paypal_click (event)// @startlock
	{// @endlock
		$$('ppFrame').show();
		$$('tbMsgContainer').hide();
		var n = total*100;
		var htmlFile = n.toString();
		htmlFile = "/paypal/"+htmlFile+".html/";
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

	categoryComboBox.change = function categoryComboBox_change (event)// @startlock
	{// @endlock
		$$('ppFrame').hide();
		var cli = $$('clientComboBox').getValue();
		var cat = $$('categoryComboBox').getValue();
		weeks(cli, cat);
		calculatePrice ();
	};// @lock

	featuredComboBox.change = function featuredComboBox_change (event)// @startlock
	{// @endlock
		var opt = this.getValue();
		if(opt != "0")
		{
			$$('weeksComboBox').hide();
		}else{
			$$('weeksComboBox').show();
		}
		$$('weeksComboBox').setValue();
		calculatePrice ();
	};// @lock

	ibTransferFinal.click = function ibTransferFinal_click (event)// @startlock
	{// @endlock
		//sources.order.numDays = numDays; //Depends on credit. redunctant with product...never mind, keep it simple, we are in a hurry. Will get back to this. Code needs cleaning.
		sources.order.method = "bt"; // bank transfer
		sources.order.total = total;
		sources.order.date = today;
		sources.order.publisher = username;
		
		sources.order.save({
	        onSuccess: function(event) {
	            alert("O número do seu pagamento é:  "); // + order.ID+ " e o numero do seu anuncio é : ");//+ sources.product.ID );
	        	// send an email msg to customer and to us
				var xhr=new XMLHttpRequest(); 
		        //Create an empty FormData object
			    var formdata=new FormData();
			    formdata.append('To',"celso.monteiro@moto-digital.com")
			    formdata.append('Title',"Referencia para transferencia bancaria: ") //+order.ID)	
			    formdata.append('Content', $$('tfInstructions').getValue());
			 
			        //Add a listener to read the response of the handler (server side)
			    xhr.addEventListener("load", function (evt) {
			    	var debug = true;
			    	if(debug)
			    	{
				        switch(evt.target.responseText){
				            case 'true' :
				            alert('Mensagem enviada!');
				               break;
				        //If the sendMail function response is true,
				 
				            case 'false' :
				                alert('Erro ao enviar mensagem, Por favor tente de novo!');
				                break;
				        //If the sendMail function response is false, and debug is true
				        }
				    }
				}, false); 
			 
			    xhr.open('POST','/sendMail',true); //call the sendMail handler
			    xhr.send(formdata); //Send the formdata object to the handler on the server
        		
	            //alert("O número do seu pagamento é:  " + order.ID);
	    		  var n = confirm("Deseja criar outro anuncio?");
		          if(n)
		          {
		    		window.location = "/product.waPage/index.html";
		           }else{
		            window.location = "/index.waPage/index.html";
		          }
		    	},
		        onError: function(error) {
		            alert("Erro ao gravar o pagamento. Por favor contacte o Departamento de suporte.");
		            
		        }
		        		
    		});
			
	       //alert(sources.product.title); // It WORKS The record is still in memory
		
	};// @lock

	weeksComboBox.change = function weeksComboBox_change (event)// @startlock
	{// @endlock
		$$('ppFrame').hide();
		calculatePrice ();
	};// @lock

	clientComboBox.change = function clientComboBox_change (event)// @startlock
	{// @endlock
		$$('ppFrame').hide();
		var cli = $$('clientComboBox').getValue();
		var cat = $$('categoryComboBox').getValue();
		weeks(cli, cat);
		calculatePrice ();
	};// @lock

	ibNext1.click = function ibNext1_click (event)// @startlock
	{// @endlock
		// using calendar in order to save date in DB
		today = $$("calendar1").getValue(false);
		sources.product.date = today;
		//sources.product.startDate = today; // if the paypal payment  suceeded...use this in the thankYou page
		var someDate = new Date();
		var numberOfDaysToAdd = numDays;
		someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
		$$("calendar1").setValue(someDate, true);
		endDate = $$("calendar1").getValue(false);
		sources.product.endDate = endDate;
		sources.product.publisher = username;
		sources.product.categoria = $$('combobox2').getValue();
		sources.product.save({
	        onSuccess: function(event) {
	        	$$('container4').show();
				$$('newProduct').hide();
	        },
	        onError: function(error) {
	                // displays error message in a DisplayError area
	             alert("Erro ao gravar o anúncio. Por favor contacte o Departamento de suporte.");
	        }
    	});
		
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
       	 	// Find customer and check nif
			sources.customer.query("email == :1",username, {
		        onSuccess: function(){
	        		var n = sources.customer.nif;
	        		var n = n.charAt(0);
	        		sources.product.professional = true;
	        		if(n == "1" || n== "2")
	        		{
	        			sources.product.professional = false;
	        		}
	           	}
	    	});   
    	}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("ibTransfer", "click", ibTransfer.click, "WAF");
	WAF.addListener("paypal", "click", paypal.click, "WAF");
	WAF.addListener("order", "onCollectionChange", orderEvent.onCollectionChange, "WAF");
	WAF.addListener("categoryComboBox", "change", categoryComboBox.change, "WAF");
	WAF.addListener("featuredComboBox", "change", featuredComboBox.change, "WAF");
	WAF.addListener("ibTransferFinal", "click", ibTransferFinal.click, "WAF");
	WAF.addListener("weeksComboBox", "change", weeksComboBox.change, "WAF");
	WAF.addListener("clientComboBox", "change", clientComboBox.change, "WAF");
	WAF.addListener("ibNext1", "click", ibNext1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
