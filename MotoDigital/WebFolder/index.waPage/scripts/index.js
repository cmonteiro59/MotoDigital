
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var claImage1 = {};	// @image
	var claImage4 = {};	// @image
	var claImage3 = {};	// @image
	var claImage2 = {};	// @image
	var imageButton1 = {};	// @buttonImage
	var productClassifiedEvent = {};	// @dataSource
	var productEvent = {};	// @dataSource
	var container14 = {};	// @container
	var container7 = {};	// @container
	var button1 = {};	// @button
	var image10 = {};	// @image
	var image9 = {};	// @image
	var image8 = {};	// @image
	var image7 = {};	// @image
	var imageButton3 = {};	// @buttonImage
	var image1 = {};	// @image
	var container1 = {};	// @container
// @endregion// @endlock

// eventHandlers// @lock

	claImage1.mouseover = function claImage1_mouseover (event)// @startlock
	{// @endlock
		$$("claImage11").show();
	};// @lock

	claImage1.mouseout = function claImage1_mouseout (event)// @startlock
	{// @endlock
		$$("claImage11").hide();
	};// @lock

	claImage4.mouseover = function claImage4_mouseover (event)// @startlock
	{// @endlock
		$$("claImage14").show();
	};// @lock

	claImage4.mouseout = function claImage4_mouseout (event)// @startlock
	{// @endlock
		$$("claImage14").hide();
	};// @lock

	claImage3.mouseover = function claImage3_mouseover (event)// @startlock
	{// @endlock
		$$("claImage13").show();
	};// @lock

	claImage3.mouseout = function claImage3_mouseout (event)// @startlock
	{// @endlock
		$$("claImage13").hide();
	};// @lock

	claImage2.mouseover = function claImage2_mouseover (event)// @startlock
	{// @endlock
		$$("claImage12").show();
	};// @lock

	claImage2.mouseout = function claImage2_mouseout (event)// @startlock
	{// @endlock
		$$("claImage12").hide();
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		$$("container5").hide();
	};// @lock

	productClassifiedEvent.onCollectionChange = function productClassifiedEvent_onCollectionChange (event)// @startlock
	{// @endlock
		$$('checkbox4').disable();
		$$('checkbox5').disable();
		$$('checkbox6').disable();
		$$('checkbox9').disable();
		$$('checkbox13').disable();
		$$('checkbox14').disable();
	};// @lock

	productEvent.onCollectionChange = function productEvent_onCollectionChange (event)// @startlock
	{// @endlock
		$$('checkbox1').disable();
		$$('checkbox2').disable();
		$$('checkbox3').disable();
		$$('checkbox10').disable();
		$$('checkbox11').disable();
		$$('checkbox12').disable();
	};// @lock

	container14.click = function container14_click (event)// @startlock
	{// @endlock
		$$("container5").show();
	};// @lock

	container7.click = function container7_click (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var title =  $$('textFieldQuery').getValue();
		if(title == ""){
			title = "*";
		}else{
			title = "*" +title+"*";
		}
		
		var cat = $$('combobox3').getValue();
		//alert(title, cat);
		WAF.sources.product.query('title = :1 and categoria = :2 ', title, cat);
		WAF.sources.productClassified.query('title = :1 and categoria = :2 ', title, cat);
		WAF.sources.productTop.query('title = :1 and categoria = :2 ', title, cat);
	};// @lock

	image10.mouseout = function image10_mouseout (event)// @startlock
	{// @endlock
		$$("image14").hide();
	};// @lock

	image10.mouseover = function image10_mouseover (event)// @startlock
	{// @endlock
		$$("image14").show();
	};// @lock

	image9.mouseout = function image9_mouseout (event)// @startlock
	{// @endlock
		$$("image13").hide();
	};// @lock

	image9.mouseover = function image9_mouseover (event)// @startlock
	{// @endlock
		$$("image13").show();
	};// @lock

	image8.mouseout = function image8_mouseout (event)// @startlock
	{// @endlock
		$$("image12").hide();
	};// @lock

	image8.mouseover = function image8_mouseover (event)// @startlock
	{// @endlock
		$$("image12").show();
	};// @lock

	image7.mouseout = function image7_mouseout (event)// @startlock
	{// @endlock
		$$("image11").hide();
	};// @lock

	image7.mouseover = function image7_mouseover (event)// @startlock
	{// @endlock
		$$("image11").show();
	};// @lock

	imageButton3.click = function imageButton3_click (event)// @startlock
	{// @endlock
		$$("container3").hide();
	};// @lock

	image1.click = function image1_click (event)// @startlock
	{// @endlock
		//$$("container3").show();
	};// @lock

	container1.click = function container1_click (event)// @startlock
	{// @endlock
		$$("container3").show();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("claImage1", "mouseover", claImage1.mouseover, "WAF");
	WAF.addListener("claImage1", "mouseout", claImage1.mouseout, "WAF");
	WAF.addListener("claImage4", "mouseover", claImage4.mouseover, "WAF");
	WAF.addListener("claImage4", "mouseout", claImage4.mouseout, "WAF");
	WAF.addListener("claImage3", "mouseover", claImage3.mouseover, "WAF");
	WAF.addListener("claImage3", "mouseout", claImage3.mouseout, "WAF");
	WAF.addListener("claImage2", "mouseover", claImage2.mouseover, "WAF");
	WAF.addListener("claImage2", "mouseout", claImage2.mouseout, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("productClassified", "onCollectionChange", productClassifiedEvent.onCollectionChange, "WAF");
	WAF.addListener("product", "onCollectionChange", productEvent.onCollectionChange, "WAF");
	WAF.addListener("container14", "click", container14.click, "WAF");
	WAF.addListener("container7", "click", container7.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("image10", "mouseout", image10.mouseout, "WAF");
	WAF.addListener("image9", "mouseout", image9.mouseout, "WAF");
	WAF.addListener("image8", "mouseout", image8.mouseout, "WAF");
	WAF.addListener("image7", "mouseout", image7.mouseout, "WAF");
	WAF.addListener("image10", "mouseover", image10.mouseover, "WAF");
	WAF.addListener("image9", "mouseover", image9.mouseover, "WAF");
	WAF.addListener("image8", "mouseover", image8.mouseover, "WAF");
	WAF.addListener("image7", "mouseover", image7.mouseover, "WAF");
	WAF.addListener("imageButton3", "click", imageButton3.click, "WAF");
	WAF.addListener("image1", "click", image1.click, "WAF");
	WAF.addListener("container1", "click", container1.click, "WAF");
// @endregion
};// @endlock
