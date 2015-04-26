
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image18 = {};	// @image
	var image5 = {};	// @image
	var image4 = {};	// @image
	var image2 = {};	// @image
	var buttonQuery = {};	// @button
// @endregion// @endlock

	//var myImage1 = sources.product.image1.getValue();
// eventHandlers// @lock

	image18.mouseover = function image18_mouseover (event)// @startlock
	{// @endlock
		$$("image11").show();
		//$$('image11').setValue(myImage1);
	};// @lock

	image18.mouseout = function image18_mouseout (event)// @startlock
	{// @endlock
		$$("image11").hide();
	};// @lock

	image5.mouseover = function image5_mouseover (event)// @startlock
	{// @endlock
		$$("image9").show();
	};// @lock

	image5.mouseout = function image5_mouseout (event)// @startlock
	{// @endlock
		$$("image9").hide();
	};// @lock

	image4.mouseover = function image4_mouseover (event)// @startlock
	{// @endlock
		$$("image8").show();
	};// @lock

	image4.mouseout = function image4_mouseout (event)// @startlock
	{// @endlock
		$$("image8").hide();
	};// @lock

	image2.mouseover = function image2_mouseover (event)// @startlock
	{// @endlock
		$$("image7").show();
	};// @lock

	image2.mouseout = function image2_mouseout (event)// @startlock
	{// @endlock
		$$("image7").hide();
	};// @lock

	buttonQuery.click = function buttonQuery_click (event)// @startlock
	{// @endlock
		var title =  $$('textFieldQuery').getValue();
		if(title == ""){
			title = "*";
		}else{
			title = "*" +title+"*";
		}
		
		var cat = $$('combobox1').getValue();
		if( cat == "Todas"){
			cat = "*";
		}
		WAF.sources.product.query('title = :1 and categoria = :2 ', title, cat);
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("image18", "mouseover", image18.mouseover, "WAF");
	WAF.addListener("image18", "mouseout", image18.mouseout, "WAF");
	WAF.addListener("image5", "mouseover", image5.mouseover, "WAF");
	WAF.addListener("image5", "mouseout", image5.mouseout, "WAF");
	WAF.addListener("image4", "mouseover", image4.mouseover, "WAF");
	WAF.addListener("image4", "mouseout", image4.mouseout, "WAF");
	WAF.addListener("image2", "mouseover", image2.mouseover, "WAF");
	WAF.addListener("image2", "mouseout", image2.mouseout, "WAF");
	WAF.addListener("buttonQuery", "click", buttonQuery.click, "WAF");
// @endregion
};// @endlock
