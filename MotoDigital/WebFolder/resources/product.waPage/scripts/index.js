
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var weeksCombo = {};	// @combobox
	var imageButton1 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var ibSave = {};	// @buttonImage
	var btnFree = {};	// @buttonImage
	var ibTransfer = {};	// @buttonImage
	var paypal = {};	// @buttonImage
	var orderEvent = {};	// @dataSource
	var categoryComboBox = {};	// @combobox
	var featuredComboBox = {};	// @combobox
	var ibTransferFinal = {};	// @buttonImage
	var ibNext1 = {};	// @buttonImage
	var productEvent = {};	// @dataSource
// @endregion// @endlock

	var vProductInit = false;
	var vOrderInit = false;
	var username = WAF.directory.currentUser().userName;
	var today;
	var nProduct = 0;
	
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
	var orderSaved = false;
	var featured = "0"; // destaque
	var pro = false;

	
	
	function calculatePrice()
	{
		var cat = $$('categoryComboBox').getValue();
		var visible = $$('weeksCombo').isVisible();
		if(visible)
		{
			numWeeks = $$('weeksCombo').getValue();
		}else{
			numWeeks = 1; // Means we dealing with an add "Destaque"
		}
		subTotal = 0;
		total = 0;
		discount = 0;
		
		switch(pro) 
		{
			case false: //Private
				if(cat == "Motos"){
					subTotal += parMotosPrice; //motos
					//discount = sources.priceList.discount;
					discount = 0.50;
				}else {
					subTotal += parEquipPrice; // Acessórios
				}
			break;
			case true: //Professional
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
		
		featured = $$('featuredComboBox').getValue();
		var destaque = featured;
		switch(featured)
		{
			case "0": // normal
			break;
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
		//subTotal = 0; // unitl 1st of July
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
	
		$$('weeksCombo').removeOption(3);
		$$('weeksCombo').removeOption(2);
		$$('weeksCombo').removeOption(1);
		if(custType == true) { //Profissionais
			$$('weeksCombo').addOption("2","2",true);
		
		}else { // Particular
			if(catType != "Motos"){
				$$('weeksCombo').addOption("3","3",true);
				$$('weeksCombo').addOption("6","6",false);
				$$('weeksCombo').addOption("9","9",false);
			}else{
				$$('weeksCombo').addOption("2","2",true);
				$$('weeksCombo').addOption("4","4",false);
				$$('weeksCombo').addOption("6","6",false);
			}
		}
	};
			
			
// eventHandlers// @lock

	weeksCombo.change = function weeksCombo_change (event)// @startlock
	{// @endlock
		$$('ppFrame').hide();
		var cat = $$('categoryComboBox').getValue();
		weeks(pro, cat);
		calculatePrice ();
	};// @lock

	
	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		window.location = "/mainPage.waPage/index.html";
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		window.location = "/mainPage.waPage/index.html";
	};// @lock

	ibSave.click = function ibSave_click (event)// @startlock
	{// @endlock
		var n = confirm("Deseja criar outro anúncio?");
        if(n)
        {
			window.location ="/product.waPage/index.html";
        }else{
        	window.location ="/mainPage.waPage/index.html";
      	}
		
	};// @lock

	btnFree.click = function btnFree_click (event)// @startlock
	{// @endlock
		// Add your code here
		today = $$("calendar1").getValue(false);
		sources.product.date = today;
		sources.product.startDate = today; 
		var someDate = new Date();
		var numberOfDaysToAdd = numDays;
		someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
		$$("calendar1").setValue(someDate, true);
		endDate = $$("calendar1").getValue(false);
		sources.product.endDate = endDate;
		sources.product.categoria = $$('categoryComboBox').getValue();
		sources.product.classified = featured;
		sources.product.numDays = numDays;
		sources.product.approved = true;
        sources.product.save({
	        onSuccess: function(event) {
	        	sources.order.numDays = numDays; //Depends on credit. redunctant with product...never mind, keep it simple, we are in a hurry. Will get back to this. Code needs cleaning.
				sources.order.method = "Gratis"; // bank transfer
				sources.order.total = total;
				sources.order.date = today;
				sources.order.publisher = username;
				sources.order.addNum = sources.product.ID;
				sources.order.save({
			    onSuccess: function(event) {
			        // send an email msg to customer and to us
			        var content = "";
					var xhr=new XMLHttpRequest(); 
				    //Create an empty FormData object
				    var formdata=new FormData();
				    if(username =="admin")
				    {
				    	formdata.append('To', "compraevenda@moto-digital.com")
				    }else{
				    	formdata.append('To', username)
				    }
				    formdata.append('Title',"Moto Digital Anuncio numero: "+ sources.product.ID)
				    //var c =	"Ref: Pagamento numero: "+ sources.order.ID + "<BR>" + $$('tbContent').getValue()+  $$('tbEmail').getValue();
				    var c =	"O seu anuncio foi gravado com sucesso<BR>Nao e necessario pagamento ate 1 de Julho de 2015.<BR>" + "Obrigado pela sua Preferencia!";
				    formdata.append('Content', c);
				   
						//Add a listener to read the response of the handler (server side)
					    xhr.addEventListener("load", function (evt) {
					    	var debug = false;
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
					    //sources.order.serverRefresh();
					    //alert("O número do seu pagamento é:  "+ order.ID+ " e o numero do seu anuncio é : "+ sources.product.ID )
					    window.location ="/mainPage.waPage/index.html";
					   
		    	},
			    onError: function(error) {
			        alert("Erro ao gravar o pagamento. Por favor contacte o Departamento de suporte.");
			    }     		
    		});
		
	        	
	        	
	        },
	        onError: function(error) {
	                // displays error message in a DisplayError area
	            alert("Erro ao gravar o anúncio. Por favor contacte o Departamento de suporte.");
	        }
    	});
		
		$$('container4').show(); //iamges container, temp stuff
	};// @lock

	ibTransfer.click = function ibTransfer_click (event)// @startlock
	{// @endlock
		$$('ppFrame').hide();
		$$('tbMsgContainer').show();
		
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
        }
  
	};// @lock

	categoryComboBox.change = function categoryComboBox_change (event)// @startlock
	{// @endlock
		$$('ppFrame').hide();
		var cat = $$('categoryComboBox').getValue();
		weeks(pro, cat);
		calculatePrice ();
	};// @lock

	featuredComboBox.change = function featuredComboBox_change (event)// @startlock
	{// @endlock
		var opt = this.getValue();
		if(opt != "0")
		{
			$$('weeksCombo').hide();
		}else{
			$$('weeksCombo').show();
		}
		$$('weeksCombo').setValue();
		featured = this.getValue();
		calculatePrice ();
	};// @lock

	ibTransferFinal.click = function ibTransferFinal_click (event)// @startlock
	{// @endlock
		//using calendar in order to save date in DB
		today = $$("calendar1").getValue(false);
		sources.order.numDays = numDays; //Depends on credit. redunctant with product...never mind, keep it simple, we are in a hurry. Will get back to this. Code needs cleaning.
		sources.order.method = "bt"; // bank transfer
		sources.order.total = total;
		sources.order.date = today;
		sources.order.publisher = username;
		sources.order.addNum = sources.product.ID;
		sources.order.save({
	    onSuccess: function(event) {
	        // send an email msg to customer and to us
	        var content = "";
			var xhr=new XMLHttpRequest(); 
		    //Create an empty FormData object
		    var formdata=new FormData();
		    formdata.append('To', "celso.monteiro@moto-digital.com")
		    formdata.append('Title',"Moto Digital Anuncio numero: "+ sources.product.ID)
		    var c =	"Ref: Pagamento numero: "+ sources.order.ID + "<BR>" + $$('tbContent').getValue()+  $$('tbEmail').getValue();
		    formdata.append('Content', c)
		   
			//Add a listener to read the response of the handler (server side)
		    xhr.addEventListener("load", function (evt) {
		    	var debug = false;
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
		  sources.order.serverRefresh();
		  //alert("O número do seu pagamento é:  "+ order.ID+ " e o numero do seu anuncio é : "+ sources.product.ID )
		  var n = confirm("Deseja criar outro anuncio?");
          if(n)
          {
    		$$('centeredFrame').setValue("/product.waPage/index.html");
          }else{
           $$('centeredFrame').setValue("/mainPage.waPage/index.html");
          }
          
    	},
	    onError: function(error) {
	        alert("Erro ao gravar o pagamento. Por favor contacte o Departamento de suporte.");
	    }
		        		
    	});
       //alert(sources.product.title); // It WORKS The record is still in memory
		
	};// @lock

	ibNext1.click = function ibNext1_click (event)// @startlock
	{// @endlock
		
   	 	sources.customer.query('email == :1', username );
		$$('container8').show();
		$$('newProduct').hide();
   	 	pro = sources.customer.professional;
   	 	var cat = $$('categoryComboBox').getValue();
		weeks(pro, cat);
		calculatePrice ();
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
	WAF.addListener("weeksCombo", "change", weeksCombo.change, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener("ibSave", "click", ibSave.click, "WAF");
	WAF.addListener("btnFree", "click", btnFree.click, "WAF");
	WAF.addListener("ibTransfer", "click", ibTransfer.click, "WAF");
	WAF.addListener("paypal", "click", paypal.click, "WAF");
	WAF.addListener("order", "onCollectionChange", orderEvent.onCollectionChange, "WAF");
	WAF.addListener("categoryComboBox", "change", categoryComboBox.change, "WAF");
	WAF.addListener("featuredComboBox", "change", featuredComboBox.change, "WAF");
	WAF.addListener("ibTransferFinal", "click", ibTransferFinal.click, "WAF");
	WAF.addListener("ibNext1", "click", ibNext1.click, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
// @endregion
};// @endlock
