
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton6 = {};	// @buttonImage
	var customerEvent = {};	// @dataSource
	var textField13 = {};	// @textField
	var textField11 = {};	// @textField
	var textField8 = {};	// @textField
// @endregion// @endlock
	var vDatasourceInit = false;
	var okToSave = true;
	var username = WAF.directory.currentUser().userName;
// eventHandlers// @lock

	imageButton6.click = function imageButton6_click (event)// @startlock
	{// @endlock
		
		if($$('userNameInput').getValue() == "")
			okToSave = false;
		if($$('passwordInput').getValue() == "")
			okToSave = false;
		if($$('confirmPassword').getValue() == "")
			okToSave = false;
		if($$('fullNameInput').getValue() == "")
			okToSave = false;
		if($$('nif').getValue() == "")
			okToSave = false;
		if($$('phone').getValue() == "")
			okToSave = false;
		if($$('address').getValue() == "")
			okToSave = false;
			
		if(!okToSave){
			alert("Todos os campos são de preenchimento obrigatório");
			//event.preventDefault();
		}else{
//				ds.Settings.addUser($$('userNameInput').getValue(), $$('passwordInput').getValue(), $$('fullNameInput').getValue(),
//				{
//					onSuccess: function(e){
//						if(!e.result.success){
//							okToSave = false;
//						}
//					}
//				});
		}
		if(okToSave){
			 sources.customer.save(
			 {
       			onSuccess: function(event) {
            		alert("Utilizador alterado com sucesso.");
       			 },
        		onError: function(error) {
                	alert("Ocurreu um erro.Tente de novo!");
       		 	}
    		});
		
		}
		

	};// @lock

	customerEvent.onCollectionChange = function customerEvent_onCollectionChange (event)// @startlock
	{// @endlock
		if(vDatasourceInit==false)
		{
			if(username != null){
				sources.customer.query('email == :1', username);
				vDatasourceInit = true;
			}
		}
		
	};// @lock

	textField13.change = function textField13_change (event)// @startlock
	{// @endlock
		var pass1 = $$('passwordInput').getValue();
		var pass2 = $$('confirmPassword').getValue();
		if((pass1 != pass2) && (pass2 != "") ){
			alert("As passwords não são iguais.") ;
		}
		if($$('passwordInput').getValue() == "")
			okToSave = false;
	};// @lock

	textField11.change = function textField11_change (event)// @startlock
	{// @endlock
		// Add your code here
		var pass1 = $$('passwordInput').getValue();
		var pass2 = $$('confirmPassword').getValue();
		if((pass1 != pass2) && (pass1 != "") ){
			//alert("As passwords não são iguais.");
			$$('passwordInput').setValue("");
			$$('confirmPassword').setValue("");
			$$('passwordInput').focus();
		}
		if($$('confirmPassword').getValue() == "")
			okToSave = false;
	};// @lock

	textField8.change = function textField8_change (event)// @startlock
	{// @endlock
		var user = $$('userNameInput').getValue();
		if (user == ""){
			okToSave = false;
		}else {
				var exists = ds.Customer.findUser($$('userNameInput').getValue());
				if(exists != null)
				{
					okToSave = false;
					alert ("O email " + user + " já existe!!");
					$$('userNameInput').setValue("");
				}
			}
			
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton6", "click", imageButton6.click, "WAF");
	WAF.addListener("customer", "onCollectionChange", customerEvent.onCollectionChange, "WAF");
	WAF.addListener("textField13", "change", textField13.change, "WAF");
	WAF.addListener("textField11", "change", textField11.change, "WAF");
	WAF.addListener("textField8", "change", textField8.change, "WAF");
// @endregion
};// @endlock
