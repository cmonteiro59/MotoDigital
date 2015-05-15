﻿
WAF.onAfterInit = function onAfterInit() {// @lock



// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock
	
// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		var credit_card = {};

			credit_card.type			= "Visa";
			credit_card.number			= "123456789";
			credit_card.cvv2			= "123";
			credit_card.expire_month	= "05"
			credit_card.expire_year		= "16";
			credit_card.first_name		= "ABC";
			credit_card.last_name		= "CBA";
					
			var payer = {};

			payer.payment_method = "credit_card";
			payer.funding_instruments = [{"credit_card": credit_card}];

			var transactions = [
				    {
				      "amount": {
				        "total": "7.47",
				        "currency": "USD"
				      },
				      "description": "This is the payment transaction description."
				    }
				  ];
			//optional	  
			var redirect_urls  = {return_url: "www.wakanda.org", cancel_url:"www.wakanda.org"}	  



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
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock