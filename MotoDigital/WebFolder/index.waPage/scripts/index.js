
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var priceListImageButton = {};	// @buttonImage
	var forgotPassButton = {};	// @button
	var registerButton = {};	// @button
	var homeimageButton = {};	// @buttonImage
	var accountImageButton = {};	// @buttonImage
	var newAdImageButton = {};	// @buttonImage
	var login1 = {};	// @login
	var myAdsImageButton = {};	// @buttonImage
	var adminImageButton = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	priceListImageButton.click = function priceListImageButton_click (event)// @startlock
	{// @endlock
		$$('centeredFrame').setValue("/priceListImage/index.html");
	};// @lock
	
	
// Forgot password TODO 
	forgotPassButton.click = function forgotPassButton_click (event)// @startlock
	{// @endlock
//		var username = WAF.directory.currentUser();
//		if(username == null){
//			$$('centeredFrame').setValue("/profile.waPage/index.html");
//		}else {
//			alert("Já está autenticado através de login");
//		}
	};// @lock

	registerButton.click = function registerButton_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username == null){
			$$('centeredFrame').setValue("/profile.waPage/index.html");
		}else {
			alert("Não se pode registar, porque já está autenticado através de login");
		}
	};// @lock

	homeimageButton.click = function homeimageButton_click (event)// @startlock
	{// @endlock
		$$('centeredFrame').setValue("/mainPage.waPage/index.html");
	};// @lock

	accountImageButton.click = function accountImageButton_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username != null){
			$$('centeredFrame').setValue("/profile.waPage/index.html");
		}else{
			alert("Faça Login ou Registe-se por favor!");
		}
	};// @lock

	newAdImageButton.click = function newAdImageButton_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username != null){
			$$('centeredFrame').setValue("/product.waPage/index.html");
		}else{
			alert("Faça Login ou Registe-se por favor!");
		}
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('centeredFrame').setValue("/mainPage.waPage/index.html");      
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		$$('centeredFrame').setValue("/mainPage.waPage/index.html");
	};// @lock

	myAdsImageButton.click = function myAdsImageButton_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username != null){
			$$('centeredFrame').setValue("/myProducts.waPage/index.html");
		}else{
			alert("Faça Login ou Registe-se por favor!");
		}
	};// @lock

	adminImageButton.click = function adminImageButton_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username.userName == "admin"){
			$$('centeredFrame').setValue("/controlPanel.waPage/index.html");
		}else{
			alert("Esta área é reservada aos Administradores!");
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("priceListImageButton", "click", priceListImageButton.click, "WAF");
	WAF.addListener("forgotPassButton", "click", forgotPassButton.click, "WAF");
	WAF.addListener("registerButton", "click", registerButton.click, "WAF");
	WAF.addListener("homeimageButton", "click", homeimageButton.click, "WAF");
	WAF.addListener("accountImageButton", "click", accountImageButton.click, "WAF");
	WAF.addListener("newAdImageButton", "click", newAdImageButton.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("myAdsImageButton", "click", myAdsImageButton.click, "WAF");
	WAF.addListener("adminImageButton", "click", adminImageButton.click, "WAF");
// @endregion
};// @endlock
