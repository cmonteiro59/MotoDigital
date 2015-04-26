
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var imageButton1 = {};	// @buttonImage
	var password = {};	// @textField
	var confirmPassword = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		if($$('login').getValue() == "")
			okToSave = false;
		if($$('password').getValue() == "")
			okToSave = false;
		if($$('confirmPassword').getValue() == "")
			okToSave = false;
		if($$('eMail').getValue() == "")
			okToSave = false;
		if($$('fullName').getValue() == "")
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
			
			window.location = "/index.waPage/";
		}
			
	};// @lock

	password.change = function password_change (event)// @startlock
	{// @endlock
		var pass1 = $$('password').getValue();
		var pass2 = $$('confirmPassword').getValue();
		if((pass1 != pass2) && (pass2 != "") ){
			if(!passMsg){
				$$('errorDiv3').setErrorMessage( { message: "As passwords não são iguais." } );
				passMsg = true;
			}
			
		}else{
			
			passMsg = false;
		}
		if($$('password').getValue() == "")
			okToSave = false;
	};// @lock

	confirmPassword.change = function confirmPassword_change (event)// @startlock
	{// @endlock
		// Add your code here
		var pass1 = $$('password').getValue();
		var pass2 = $$('confirmPassword').getValue();
		if((pass1 != pass2) && (pass1 != "") ){
			$$('errorDiv3').setErrorMessage( { message: "As passwords não são iguais." } );
			passMsg = true;
			$$('password').setValue("");
			$$('confirmPassword').setValue("");
			$$('password').focus();
		}
		else{
			
			passMsg = false;
		}
		if($$('confirmPassword').getValue() == "")
			okToSave = false;
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("password", "change", password.change, "WAF");
	WAF.addListener("confirmPassword", "change", confirmPassword.change, "WAF");
// @endregion
};// @endlock
