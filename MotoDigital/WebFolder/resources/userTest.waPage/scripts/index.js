
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var addUserButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	addUserButton.click = function addUserButton_click (event)// @startlock
	{// @endlock
	
		var user = $$('userNameInput').getValue();
		var pass = $$('passwordInput').getValue();
		var name =  $$('fullNameInput').getValue(); 
		var newUser = ds.Settings.addUser(user, pass , name,
		{
			onSuccess: function(e){
				if(e.result.success){
					
				} else {
					alert('user not created');
				}
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("addUserButton", "click", addUserButton.click, "WAF");
// @endregion
};// @endlock
