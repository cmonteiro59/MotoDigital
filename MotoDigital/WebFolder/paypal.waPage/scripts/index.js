
WAF.onAfterInit = function onAfterInit() {// @lock



// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
// @endregion// @endlock
	
// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		alert(usability.helloWorld());
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
			
			var credit_card = {};
			credit_card.type			= $$('type').getValue();
			credit_card.number			= $$('number').getValue();
			credit_card.cvv2			= $$('cvv2').getValue();
			credit_card.expire_month	= $$('expire_month').getValue();
			credit_card.expire_year		= $$('expire_year').getValue();
			credit_card.first_name		= $$('first_name').getValue();
			credit_card.last_name		= $$('last_name').getValue();
						
			var payer = {};
			
			payer.payment_method = "credit_card";
			payer.funding_instruments = [{"credit_card": credit_card}];
			
			var transactions = [
				    {
				      "amount": {
				        "total": "1",
				        "currency": "EUR"
				      },
				      "description": "This is the payment transaction description."
				    }
				  ];
			//optional	  
			var redirect_urls  = {return_url: "http://www.wakanda.org", cancel_url:"http://www.wakanda.org"}	  


							debugger;
			var response = payment.createAsync({
						onSuccess:function(data)
						{
							alert(data.state);
						},
						params: [{
							    intent: "sale",
							    payer: payer,
							    transactions: transactions,
							    redirect_urls: redirect_urls
							}]
			});
					
	};// @lock


// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
