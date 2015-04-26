WAF.define('FacebookLike', function() {
    var widget = WAF.require('waf-core/widget');
    var FacebookLike = widget.create('FacebookLike');
	
	FacebookLike.prototype.init = function () { 
	    this.node.innerHTML = '<div class="waf-container"><iframe src="http://www.facebook.com/plugins/likebox.php?href='+this.options.page+'&width='+this.options.width+'&height='+this.options.height+'&colorscheme='+this.options.colorscheme+'&show_faces='+this.options.show_faces+'&header='+this.options.header+'&stream='+this.options.stream+'&show_border='+this.options.show_border+'&appId='+this.options.appid+'" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:290px;" allowTransparency="true"></iframe></div>';

	};
	
	
    return FacebookLike;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
