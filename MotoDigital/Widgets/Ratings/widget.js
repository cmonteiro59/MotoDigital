WAF.define('Ratings', function() {
    var widget = WAF.require('waf-core/widget');
    var Ratings = widget.create('Ratings');
	
	Ratings.addProperty('value', { defaultValue : 2,  type : "number"});
    
	Ratings.prototype.init = function () { 
	
	     var that = this,
            $htmlElement, max;
		
		
		 $('#' + this.id).bind('rated', function(event) {
		 	that.value($rateIt.rateit('value'));
		 	that._bindedAttributes.value.datasource.save();
            
            that.fire('rate');
            
        });
       
        $('#' + this.id).bind('reset', function(event) {
        	that.value(0);
		 	that._bindedAttributes.value.datasource.save();
            
             that.fire('reset');
        });
		
        $htmlElement = $("#" + this.id);
        max = this.options.max || 5;
        $htmlElement.html('<span class="rateit"> </span>');
		
		$rateIt = $htmlElement.find('.rateit');
		$rateIt.rateit();
        $rateIt.rateit('max', max);

        
        if (this.options.value) {
			$rateIt.rateit('value', this.options.value);
        }
        
        
        this.value.onChange(function (myValue) {
			$rateIt.rateit('value', myValue);
		});
	};
	// Ratings.makeBindableProperty('value',this.value, Event.rate);
	 
    return Ratings;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
