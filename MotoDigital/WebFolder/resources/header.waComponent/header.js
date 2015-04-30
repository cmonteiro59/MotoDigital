
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'header';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var imageButton3 = {};	// @buttonImage
	var imageButton5 = {};	// @buttonImage
	var login1 = {};	// @login
	var imageButton6 = {};	// @buttonImage
	var richText3 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		var myUser = ds.Settings.getCurrentUser();
		alert(myUser.fullNmae);
	};// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";       
	};// @lock

	imageButton6.click = function imageButton6_click (event)// @startlock
	{// @endlock
		ds.Settings.addUser($$('userNameInput').getValue(), $$('passwordInput').getValue(), $$('fullNameInput').getValue(),
		{
			onSuccess: function(e){
				if(e.result.success){
					alert('user created');
				} else {
					alert('user not created');
				}
			}
		});
	
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		alert("Logins em construção");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener(this.id + "_login1", "logout", login1.logout, "WAF");
	WAF.addListener(this.id + "_imageButton6", "click", imageButton6.click, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
