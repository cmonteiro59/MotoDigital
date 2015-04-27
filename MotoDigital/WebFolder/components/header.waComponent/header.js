
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'header';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var imageButton5 = {};	// @buttonImage
	var login1 = {};	// @login
	var richText3 = {};	// @richText
	// @endregion// @endlock

	// eventHandlers// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";       
	};// @lock

	richText3.click = function richText3_click (event)// @startlock
	{// @endlock
		alert("Logins em construção");
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener(this.id + "_login1", "logout", login1.logout, "WAF");
	WAF.addListener(this.id + "_richText3", "click", richText3.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
