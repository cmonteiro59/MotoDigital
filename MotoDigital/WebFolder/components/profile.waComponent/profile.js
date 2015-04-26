
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'profile';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var imageButton8 = {};	// @buttonImage
	var textField22 = {};	// @textField
	var textField20 = {};	// @textField
	// @endregion// @endlock

	// eventHandlers// @lock

	imageButton8.click = function imageButton8_click (event)// @startlock
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
			var user = $$('login').getValue();
			var pass = $$('password').getValue();
			var name =  $$('fullName').getValue(); 
			ds.Settings.addUser(user, pass , name,
			{
				onSuccess: function(e){
					if(e.result.success){
						alert('Utilizador criado com sucesso !');
					} else {
						alert('Houve um erro ao criar o utilizador.');
						okToSave = false;
						event.preventDefault();
					}
				}
			});
			window.location = "/index.waPage/";
		}
			
	};// @lock

	textField22.change = function textField22_change (event)// @startlock
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

	textField20.change = function textField20_change (event)// @startlock
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
	WAF.addListener(this.id + "_imageButton8", "click", imageButton8.click, "WAF");
	WAF.addListener(this.id + "_textField22", "change", textField22.change, "WAF");
	WAF.addListener(this.id + "_textField20", "change", textField20.change, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
