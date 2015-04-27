
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var customer1Event = {};	// @dataSource
	var imageButton1 = {};	// @buttonImage
	var passwordInput = {};	// @textField
	var confirmPassword = {};	// @textField
// @endregion// @endlock
	var vDatasourceInit = false;
	var okToSave = true;
// eventHandlers// @lock

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
		if($$('nif').getValue() == "")
			okToSave = false;
		if($$('phone').getValue() == "")
			okToSave = false;
		if($$('address').getValue() == "")
			okToSave = false;
			
		if(!okToSave){
			alert("Todos os campos são de preenchimento obrigatório");
			event.preventDefault();
		}else{
			var selection = ds.Customer.query('email==:1', $$('userNameInput').getValue());if(selection.email == "");
			if(selection.email ==""){
				ds.Settings.addUser($$('userNameInput').getValue(), $$('passwordInput').getValue(), $$('fullNameInput').getValue(),
				{
					onSuccess: function(e){
						if(e.result.success){
							alert('Utilizador criado com sucesso !');
							window.location = "/index.waPage/";
						} else {
							alert('Houve um problema ao criar o Utilizador. Por favor contacte');
							event.preventDefault();
						}
					}
				});
			}else {
				
				alert("Já existe");
				return;
				event.preventDefault();
			}
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
	WAF.addListener("customer1", "onCollectionChange", customer1Event.onCollectionChange, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("passwordInput", "change", passwordInput.change, "WAF");
	WAF.addListener("confirmPassword", "change", confirmPassword.change, "WAF");
// @endregion
};// @endlock
