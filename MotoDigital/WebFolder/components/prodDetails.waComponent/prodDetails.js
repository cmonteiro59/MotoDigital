
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'prodDetails';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var image7 = {};	// @image
	var image11 = {};	// @image
	var image10 = {};	// @image
	var image9 = {};	// @image
	var image8 = {};	// @image
	// @endregion// @endlock

	// eventHandlers// @lock

	image7.mouseover = function image7_mouseover (event)// @startlock
	{// @endlock
		$$("image11").show();
	};// @lock

	image7.mouseout = function image7_mouseout (event)// @startlock
	{// @endlock
		$$("image11").hide();
	};// @lock

	image11.mouseout = function image11_mouseout (event)// @startlock
	{// @endlock
		$$("image11").hide();
	};// @lock

	image10.mouseover = function image10_mouseover (event)// @startlock
	{// @endlock
		$$("image14").show();
	};// @lock

	image10.mouseout = function image10_mouseout (event)// @startlock
	{// @endlock
		$$("image14").hide();
	};// @lock

	image9.mouseover = function image9_mouseover (event)// @startlock
	{// @endlock
		$$("image13").show();
	};// @lock

	image9.mouseout = function image9_mouseout (event)// @startlock
	{// @endlock
		$$("image13").hide();
	};// @lock

	image8.mouseover = function image8_mouseover (event)// @startlock
	{// @endlock
		$$("image12").show();
	};// @lock

	image8.mouseout = function image8_mouseout (event)// @startlock
	{// @endlock
		$$("image12").hide();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_image7", "mouseover", image7.mouseover, "WAF");
	WAF.addListener(this.id + "_image7", "mouseout", image7.mouseout, "WAF");
	WAF.addListener(this.id + "_image11", "mouseout", image11.mouseout, "WAF");
	WAF.addListener(this.id + "_image10", "mouseover", image10.mouseover, "WAF");
	WAF.addListener(this.id + "_image10", "mouseout", image10.mouseout, "WAF");
	WAF.addListener(this.id + "_image9", "mouseover", image9.mouseover, "WAF");
	WAF.addListener(this.id + "_image9", "mouseout", image9.mouseout, "WAF");
	WAF.addListener(this.id + "_image8", "mouseover", image8.mouseover, "WAF");
	WAF.addListener(this.id + "_image8", "mouseout", image8.mouseout, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
