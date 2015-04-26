
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'customerInput';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var customer1Event = {};	// @dataSource
	var imageButton5 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
	// @endregion// @endlock
	var mySourceInitDone = false;
	// eventHandlers// @lock

	customer1Event.onCollectionChange = function customer1Event_onCollectionChange (event)// @startlock
	{// @endlock
		// Add your code here
		if(!mySourceInitDone)
		{
			mySourceInitDone = true;
			// use the source
			sources.customer1.addNewElement();
			
		}
	};// @lock

	imageButton5.click = function imageButton5_click (event)// @startlock
	{// @endlock
		sources.customer1.save({
			onSuccess: function(){
				window.location = "/index.waPage/index.html";
			}		
		});
			
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		window.location = "/index.waPage/index.html";	
		
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_customer1", "onCollectionChange", customer1Event.onCollectionChange, "WAF");
	WAF.addListener(this.id + "_imageButton5", "click", imageButton5.click, "WAF");
	WAF.addListener(this.id + "_imageButton1", "click", imageButton1.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
