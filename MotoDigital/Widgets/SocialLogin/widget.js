WAF.define('SocialLogin', function() {
	
    var widget = WAF.require('waf-core/widget');
    var SocialLogin = widget.create('SocialLogin');

    SocialLogin.prototype.init = function() {
    	var that = this;
        var oa_domain = (this.options.oadomain != null ? this.options.oadomain : "wakdemo");
        var user_providers = this.options.providers != null ? this.options.providers.split(',') : ['facebook','twitter','linkedin'];
		var callback_uri = this.options.callback != null ? this.options.callback : "http://localhost:8081/callback";	
        var oa_providers = ['blogger', 'disqus', 'facebook', 'foursquare', 'github', 'google', 'linkedin', 'livejournal', 'mailru', 'odnoklassniki', 'openid', 'paypal', 'skyrock', 'stackexchange', 'steam', 'twitch', 'twitter', 'vkontakte', 'windowslive', 'wordpress', 'yahoo', 'youtube'];
        
        var valid_providers = [];
        for(var p in user_providers){
        	if(oa_providers.indexOf(user_providers[p]) != -1){
        		valid_providers.push(user_providers[p]);
        	}
        } 
        var oneall_js_protocol = (("https:" == document.location.protocol) ? "https" : "http");
//        $('head').append(unescape("%3Cscript async='false' defer='false' src='" + oneall_js_protocol + "://" + oa_domain + ".api.oneall.com/socialize/library.js' type='text/javascript'%3E%3C/script%3E"));
		
		var head= document.getElementsByTagName('head')[0];
	   	var script= document.createElement('script');
	   	script.type= 'text/javascript';
	    
   		script.onload = function(){
   			if(typeof studio == "undefined"){
   				if(that.options.wigettype === 'Social Login'){
   					var $htmlElement = $("#" + that.id);
       
        		$htmlElement.html('<div class="waf-container1"><div id="'+that.id+'social_login_container"></div></div>');	
   				 oneall.api.plugins.social_login.build(that.id+"social_login_container", {
					  'providers' : valid_providers ,
					  'callback_uri': callback_uri
					 });
				}else{
					var $htmlElement = $("#" + that.id);
       
        		$htmlElement.html('<div class="waf-container1"><div id="'+that.id+'oneall_social_link" ></div></div>');
					 var oneall_user_token = '';
  
					 oneall.api.plugins.social_link.build(that.id+"oneall_social_link", {
					  'providers' :  valid_providers,
					  'callback_uri': callback_uri,
					  'user_token': oneall123.call("getCurrentUserToken")
					 });
				} 
			}	
   		};

	   	script.src= oneall_js_protocol + "://" + oa_domain + ".api.oneall.com/socialize/library.js";
	   	head.appendChild(script);
	   	
	   
       

        
    };
    //	
    //	// Add a new action event that is fored when the widget is clicked
    //	SocialLogin.autoFireDomEvent('click', 'action')
    //
    //  /* create a new bindable property */
    //	SocialLogin.addProperty('value', {
    //	    onChange: function(value) {
    //	        console.log('change', this, value);
    //	    }
    //	});
    return SocialLogin;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html