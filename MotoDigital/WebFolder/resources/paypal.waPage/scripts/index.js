
WAF.onAfterInit = function onAfterInit() {// @lock



// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
// @endregion// @endlock
	
// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
			
			var payer = {};
			
			payer.payment_method = "paypal";
			
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
	WAF.addListener("button1", "click", button1.click, "WAF");
// @endregion
};// @endlock
