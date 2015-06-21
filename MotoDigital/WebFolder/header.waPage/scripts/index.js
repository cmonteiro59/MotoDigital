
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var imageButton5 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
	var imageButton3 = {};	// @buttonImage
	var login1 = {};	// @login
	var imageButton4 = {};	// @buttonImage
	var imageButton6 = {};	// @buttonImage
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username == null){
			window.location = "/profile.waPage/index.html";
		}else {
			alert("Já está autenticado através de login");
		}
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username == null){
			window.location = "/profile.waPage/index.html";
		}else {
			alert("Não se pode registar, porque já está autenticado através de login");
		}
	};// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		//window.location = "/index.waPage/index.html";
		$$('centeredFrame').setValue("/index.waPage/index.html");
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username != null){
			window.location = "/myProfile.waPage/index.html";
		}else{
			alert("Faça Login ou Registe-se por favor!");
		}
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username != null){
			window.location = "/product.waPage/index.html";
		}else{
			alert("Faça Login ou Registe-se por favor!");
		}
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";       
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username != null){
			window.location = "/myProducts.waPage/index.html";
		}else{
			alert("Faça Login ou Registe-se por favor!");
		}
	};// @lock

	imageButton6.click = function imageButton6_click (event)// @startlock
	{// @endlock
		var username = WAF.directory.currentUser();
		if(username == "admin"){
			window.location = "/controlPanel.waPage/index.html";
		}else{
			alert("Esta área é reservada aos Administradores!");
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener("imageButton6", "click", imageButton6.click, "WAF");
// @endregion
};// @endlock
