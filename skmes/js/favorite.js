/**
 *
 */
(function ($) {
	$.favorite = function (obj) {
		// 마이메뉴 등록/삭제
	 	$("nav[data-menu=sidemenu] > .snb").on('click', '.btn_fav', function () {
	 		var current = $(this);
	 		var clickedMenuId = current.attr("value");
	 		var param = {menuId: clickedMenuId};
	 		var isDelete = false;

	        $("nav[data-menu=favorite] > .snb > li").find("a").each(function (event, index) {
	        	if($(this).attr("menu_id") == clickedMenuId){
	        		isDelete = true;
	        	}
	        });

	        $.getSync('/sys/menu/sysMenu/saveSysMyMenuList', param, function(data){
	            if (data > 0 ) {
	            	$.fn.renderFavorite();
	            	if(isDelete){
	            		current.removeClass(" checked");
	            		$.alert(old.js.common.message.mymenudelete);
	            	}else{
	            		current.addClass(" checked");
	            		$.alert(old.js.common.message.mymenuinsert);
	            	}
	            }
	        });
	    });

	 	// 마이메뉴 삭제
	 	$("nav[data-menu=favorite] > .snb").on('click', '.btn_fav', function () {
	 		var current = $(this);
	 		var param = {menuId:current.attr("value")};

	        $.getSync('/sys/menu/sysMenu/saveSysMyMenuList', param, function(data){
	            if (data > 0 ) {
	            	$.fn.renderFavorite();
	            	current.removeClass(" checked");
                    $.alert(old.js.common.message.mymenudelete);
	            }
	        });
	    });
	}
})(jQuery);