(function(Ratings) {
	Ratings.inherit(WAF.require('waf-behavior/studio'));
     /*Display name of the widget*/
	Ratings.setDescription('Ratings');

//      /*Define your widget's properties*/
	Ratings.addAttributes([{
        name: 'data-max',
        description: 'Max Value',
        type: 'string',
        defaultValue:'5'
    }]);
    
    

//      /*Default width and height of your widget when added to the Page*/
	Ratings.setWidth('180');
	Ratings.setHeight('21');

//      /*Define the events for your widget*/
	Ratings.addEvent({
        'name': 'rate',
        'description': 'On Rate',
        'category': 'Mouse Events'
    });
    
	Ratings.addEvent({
        'name': 'reset',
        'description': 'On Reset Rate',
        'category': 'Mouse Events'
    });

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html
