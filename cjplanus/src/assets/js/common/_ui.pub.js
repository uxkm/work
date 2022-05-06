var pub = {	
	init: function(){
		this.setHeader();
		this.setFooter();
	},
	setHeader: function(){	
		var headerHtml = ''
		+ '<div>'
		+ '	Header'
		+ '</div>';
		$('.only-pub .header').each(function(){
			$(this).html(headerHtml);
		})
	},
	setFooter: function(){	
		var footerHtml = ''
		+ '<div>'
		+ '	Footer'
		+ '</div>';
		$('.only-pub .footer').each(function(){
			$(this).html(footerHtml);
		})
	}
}
$(function(){
	pub.init();
});
