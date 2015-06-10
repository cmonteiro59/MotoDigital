
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var contact1 = {};	// @buttonImage
	var imageButton6 = {};	// @buttonImage
	var textField19 = {};	// @textField
	var dialog1 = {};	// @dialog
	var button28 = {};	// @button
	var button33 = {};	// @button
	var button32 = {};	// @button
	var button27 = {};	// @button
	var imageButton4 = {};	// @buttonImage
	var container12 = {};	// @container
	var image17 = {};	// @image
	var image16 = {};	// @image
	var image15 = {};	// @image
	var image4 = {};	// @image
	var imageButton2 = {};	// @buttonImage
	var productTopEvent = {};	// @dataSource
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
	var whichMatrix = 1;
	var subject ="";
// eventHandlers// @lock

	contact1.click = function contact1_click (event)// @startlock
	{// @endlock
		$$('container2').hide();
		$$('container22').show(); // Open the email msg container
	};// @lock

	imageButton6.click = function imageButton6_click (event)// @startlock
	{// @endlock
		$$("container5").hide();
		$$('container22').show(); // Open the email msg container
	};// @lock

	textField19.change = function textField19_change (event)// @startlock
	{// @endlock
		switch(whichMatrix) 
	    {
			case 1:
				subject = sources.product.title;
				break;
			case 2:
				subject = sources.productClassified.title;
				break;
			case 3:
				subject = sources.productTop.title;
				break;
		}
		subject = "De Moto Digital: O seu anuncio: "+subject
		$$('mailSubject').setValue(subject);
	};// @lock

	dialog1.click = function dialog1_click (event)// @startlock
	{// @endlock
		$$('container22').hide(); //message sent button
	};// @lock

	button28.click = function button28_click (event)// @startlock
	{// @endlock
		$$('container22').hide(); //cancel button
	};// @lock

	button33.click = function button33_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //ok button
		//$$('container1').hide(); //ok button
	};// @lock

	button32.click = function button32_click (event)// @startlock
	{// @endlock
		$$('dialog1').closeDialog(); //cancel button
	};// @lock

	button27.click = function button27_click (event)// @startlock
	{// @endlock
		var xhr=new XMLHttpRequest(); 
        //Create an empty FormData object
	    var formdata=new FormData();
	    formdata.append('To',mail.Cust)
	    formdata.append('Title',mail.Title)	  
	    formdata.append('Content',mail.Content);
	 
	        //Add a listener to read the response of the handler (server side)
	    xhr.addEventListener("load", function (evt) {
	        switch(evt.target.responseText){
	            case 'true' :
	                $$('message').setValue('Mensagem enviada com sucesso!');
	                $$('message').$domNode.css({
	                    color : 'green'
	                });
	                break;
	        //If the sendMail function response is true, 
	        //then a green message will be displayed in the 
	        //message dialog
	 
	            case 'false' :
	                $$('message').setValue('Erro ao enviar mensagem, Por favor tente de novo!');
	                $$('message').$domNode.css({
	                    color : 'red'
	                });
	                break;
	        //If the sendMail function response is false,
	        //then a red message will be displayed on the message
	        //dialog
	        }
	        $$('dialog1').displayDialog();
	    }, false); 
	 
	    xhr.open('POST','/sendMail',true); //call the sendMail handler
	    xhr.send(formdata); //Send the formdata object to the handler on the server
	};// @lock

	imageButton4.click = function imageButton4_click (event)// @startlock
	{// @endlock
		$$('container3').hide(); // Open the email msg container
		$$('container22').show(); // Open the email msg container
	};// @lock

	container12.click = function container12_click (event)// @startlock
	{// @endlock
		$$('container2').show();
		whichMatrix = 3;
	};// @lock

	image17.mouseover = function image17_mouseover (event)// @startlock
	{// @endlock
		$$("image21").show();
	};// @lock

	image17.mouseout = function image17_mouseout (event)// @startlock
	{// @endlock
		$$("image21").hide();
	};// @lock

	image16.mouseover = function image16_mouseover (event)// @startlock
	{// @endlock
		$$("image20").show();
	};// @lock

	image16.mouseout = function image16_mouseout (event)// @startlock
	{// @endlock
		$$("image20").hide();
	};// @lock

	image15.mouseover = function image15_mouseover (event)// @startlock
	{// @endlock
		$$("image19").show();
	};// @lock

	image15.mouseout = function image15_mouseout (event)// @startlock
	{// @endlock
		$$("image19").hide();
	};// @lock

	image4.mouseover = function image4_mouseover (event)// @startlock
	{// @endlock
		$$("image18").show();
	};// @lock

	image4.mouseout = function image4_mouseout (event)// @startlock
	{// @endlock
		$$("image18").hide();
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		$$("container2").hide();
	};// @lock

	productTopEvent.onCollectionChange = function productTopEvent_onCollectionChange (event)// @startlock
	{// @endlock
		$$('checkbox7').disable();
		$$('checkbox8').disable();
		$$('checkbox15').disable();
	};// @lock

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
		$$('button1').disable();
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
		whichMatrix = 2;
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
		if(cat == "Todas"){
			cat = "*";
		}
		//alert(title, cat);
		WAF.sources.product.query('title = :1 and categoria = :2 and classified < :3', title, cat, "2");
		WAF.sources.productClassified.query('title = :1 and categoria = :2 and classified = :3', title, cat, "5" );
		WAF.sources.productTop.query('title = :1 and categoria = :2 and classified < :3 and classified > :4' , title, cat, "5", "2");
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
	WAF.addListener("contact1", "click", contact1.click, "WAF");
	WAF.addListener("imageButton6", "click", imageButton6.click, "WAF");
	WAF.addListener("textField19", "change", textField19.change, "WAF");
	WAF.addListener("dialog1", "click", dialog1.click, "WAF");
	WAF.addListener("button28", "click", button28.click, "WAF");
	WAF.addListener("button33", "click", button33.click, "WAF");
	WAF.addListener("button32", "click", button32.click, "WAF");
	WAF.addListener("button27", "click", button27.click, "WAF");
	WAF.addListener("imageButton4", "click", imageButton4.click, "WAF");
	WAF.addListener("container12", "click", container12.click, "WAF");
	WAF.addListener("image17", "mouseover", image17.mouseover, "WAF");
	WAF.addListener("image17", "mouseout", image17.mouseout, "WAF");
	WAF.addListener("image16", "mouseover", image16.mouseover, "WAF");
	WAF.addListener("image16", "mouseout", image16.mouseout, "WAF");
	WAF.addListener("image15", "mouseover", image15.mouseover, "WAF");
	WAF.addListener("image15", "mouseout", image15.mouseout, "WAF");
	WAF.addListener("image4", "mouseover", image4.mouseover, "WAF");
	WAF.addListener("image4", "mouseout", image4.mouseout, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("productTop", "onCollectionChange", productTopEvent.onCollectionChange, "WAF");
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
