
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
			var n = n.charAt(0);
			if(n == "1" || n== "2")
			{
				pro = false;
			}
			sources.customer1.professional = pro;
			sources.customer1.save(
			{
	   			onSuccess: function(event) {
					alert("Utilizador criado com sucesso. Faça Login com as suas credenciais!");
					// send an email
					var xhr=new XMLHttpRequest(); 
				    //Create an empty FormData object
				    var formdata=new FormData();
				    formdata.append('To', sources.customer1.email)
					formdata.append('Title',"Moto Digital Bemvindo: "+ sources.customer1.fullName)
				    var c =	"A sua conta foi criada com sucesso<BR>O seu username: "+ sources.customer1.email+ "<BR>" + " A sua password : " + sources.customer1.password + "<BR>" + "Obrigado pela sua Preferencia!"
				    formdata.append('Content', c);
				    
				    xhr.open('POST','/sendMail',true); //call the sendMail handler
				    xhr.send(formdata);
	   				ds.Settings.addUser($$('userNameInput').getValue(), $$('passwordInput').getValue(), $$('fullNameInput').getValue());
					
	   			},
	    		onError: function(error) {
	            	alert("Ocurreu um erro ao gravar o registo. Contacte o departamento de suporte!");
	            	okToSave = false;
	   		 	}
			});
			
//			if(!okToSave)
//			{
//				var thePerson = ds.Customer(custID); //select the entity to remove
//				try {
//				    thePerson.remove();
//				    var message = "Person deleted successfully."
//				} catch(e) {
//				        // handle error
//				    var message = "Cannot delete person: "+ e.message;
//				}
//			}else{
//				window.location = "/index.waPage/index.html";
//			}	
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
