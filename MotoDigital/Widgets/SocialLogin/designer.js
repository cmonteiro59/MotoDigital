(function(SocialLogin) {

//      /*Display name of the widget*/
	SocialLogin.setDescription('SocialLogin');

//      /*Define your widget's properties*/
	SocialLogin.addAttributes([{
	         name        : 'data-providers',              
	         description : 'Providers',
	         defaultValue: 'facebook,twitter,linkedin'           
	},{
	         name        : 'data-title',              
	         description : 'Label',
	         type        : 'string',
	         defaultValue: 'Please login'         
	},{
	        name        : 'data-callback',
	        description : 'Callback URI',
	        defaultValue: 'http://localhost:8081/callback'
	},{
	        name        : 'data-oadomain',
	        description : 'OneAll Domain',
	        defaultValue: 'wakdemo'
	},{
	        name        : 'data-wigettype',
	        description : 'Widget Type',
	        type 		: 'dropdown',
	        options 	: ['Social Login','Link Social Profiles'],
	        defaultValue: 'Social Login'
	}]);

//      /*Default width and height of your widget when added to the Page*/
	SocialLogin.setWidth('200');
	SocialLogin.setHeight('200');
	

//      /*Define the events for your widget*/
//	SocialLogin.addEvent({
//		'name':'click',
//		'description':'On Click',
//		'category': 'Mouse Events'
//	});

//      /*Set the Design and Styles panels*/
//	SocialLogin.setPanelStyle({
//		'fClass': true,
//		'text': true,
//		'background': true,
//		'border': true,
//		'sizePosition': true,
//		'label': true,
//		'disabled': ['border-radius']
//	});

//    /* Display the widget with the value of the data-binding property inside of it */
    SocialLogin.on('Display', function(event) {
    	$('#'+event.id).css('background', 'lightgray');
    });

});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html
