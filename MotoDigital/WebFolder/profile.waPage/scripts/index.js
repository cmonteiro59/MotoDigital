
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var userNameInput = {};	// @textField
	var customer1Event = {};	// @dataSource
	var imageButton1 = {};	// @buttonImage
	var passwordInput = {};	// @textField
	var confirmPassword = {};	// @textField
// @endregion// @endlock
	var vDatasourceInit = false;
	var okToSave = true;
	var pro = true;
// eventHandlers// @lock

	userNameInput.change = function userNameInput_change (event)// @startlock
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

	customer1Event.onCollectionChange = function customer1Event_onCollectionChange (event)// @startlock
	{// @endlock
		
		if(vDatasourceInit == false){
			sources.customer1.addNewElement();
       	 	sources.customer1.serverRefresh(); //optional
        	vDatasourceInit = true;
        }
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		
		if($$('userNameInput').getValue() == "")
			okToSave = false;
		if($$('passwordInput').getValue() == "")
			okToSave = false;
		if($$('confirmPassword').getValue() == "")
			okToSave = false;
		if($$('fullNameInput').getValue() == "")
			okToSave = false;
		var str = $$('nif').getValue();
		var n = str.length;
		if(n != 9)
		{
			alert("Número de contribuinte inváildo")
			okToSave = false;
			return;
		}
		if($$('phone').getValue() == "")
			okToSave = false;
		if($$('address').getValue() == "")
			okToSave = false;
			
		if(!okToSave){
			alert("Todos os campos são de preenchimento obrigatório");
			//event.preventDefault();
		}else{
			var n = $$('nif').getValue();
			alert(n);
			var n = n.charAt(0);
			if(n == "1" || n== "2")
			{
				pro = false;
			}
			sources.customer1.professional = pro;
			sources.customer1.save(
			 {
	   			onSuccess: function(event) {
	   				ds.Settings.addUser($$('userNameInput').getValue(), $$('passwordInput').getValue(), $$('fullNameInput').getValue(),
					{
						onSuccess: function(e){
							if(!e.result.success){
								alert("Utilizador criado com sucesso.");
							}
						},
			    		onError: function(error) {
			            	alert("Ocurreu um erro.Por favor tente de novo!");
			   		 	}
					});
	        	alert("Utilizador criado com sucesso.");
	   			},
	    		onError: function(error) {
	            	alert("Ocurreu um erro.Por favor tente de novo!");
	   		 	}
			});
			
		}
	};// @lock

	passwordInput.change = function passwordInput_change (event)// @startlock
	{// @endlock
		var pass1 = $$('passwordInput').getValue();
		var pass2 = $$('confirmPassword').getValue();
		if((pass1 != pass2) && (pass2 != "") ){
			alert("As passwords não são iguais.") ;
		}
		if($$('passwordInput').getValue() == "")
			okToSave = false;
	};// @lock

	confirmPassword.change = function confirmPassword_change (event)// @startlock
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

// @region eventManager// @startlock
	WAF.addListener("userNameInput", "change", userNameInput.change, "WAF");
	WAF.addListener("customer1", "onCollectionChange", customer1Event.onCollectionChange, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("passwordInput", "change", passwordInput.change, "WAF");
	WAF.addListener("confirmPassword", "change", confirmPassword.change, "WAF");
// @endregion
};// @endlock
