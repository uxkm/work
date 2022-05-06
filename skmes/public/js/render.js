/**
 *
 */
(function ($) {
	$.fn.renderSubMenu = function (obj) {
		$("nav[data-menu=sidemenu] > .snb").empty();
		var secondNodelength = obj.menuList.length;

		for(var i = 0; i < secondNodelength; i++){
			var menuElement = "";

			if(obj.menuList[i].menuList != null && obj.menuList[i].menuList.length > 0){
				menuElement += "<li class='depth dep2 is-arr'>";
				menuElement += "<a menu_id='" + obj.menuList[i].menuId + "' href='#'>" + obj.menuList[i].menuName + "</a>";

				menuElement += "<ul class='depth dep3'>";

				for(var j = 0; j < obj.menuList[i].menuList.length; j++){
					menuElement += "	<li class='dep_item'>";
					menuElement += "		<a id='sub_" + obj.menuList[i].menuList[j].menuId + "' menu_id='" + obj.menuList[i].menuList[j].menuId +  "' top_menu_id='" + obj.menuId +   "' active_menu_id='" + obj.menuList[i].menuId + "' menu_url='" + obj.menuList[i].menuList[j].pgmUrl + "' href='#'>" + obj.menuList[i].menuList[j].menuName + "</a>";
					menuElement += "		<button type='button' class='btn_fav' value='" + obj.menuList[i].menuList[j].menuId + "'>";
					menuElement += "			<i class='fa fa-star-o' aria-hidden='true'></i>";
					menuElement += "			<span class='sr-only'>즐겨찾기 등록</span>";
					menuElement += "		</button>";
					menuElement += "	</li>";
				}

				menuElement += "</ul>";
			}else{
				menuElement += "<li class='depth dep2'>";
				menuElement += "<a id='sub_" + obj.menuList[i].menuId + "' menu_id='" + obj.menuList[i].menuId + "' menu_url='" + obj.menuList[i].pgmUrl + "' href='#'>" + obj.menuList[i].menuName + "</a>";
				menuElement += "<button type='button' class='btn_fav' value='" + obj.menuList[i].menuId + "'>";
				menuElement += "<i class='fa fa-star-o' aria-hidden='true'></i>";
				menuElement += "<span class='sr-only'>즐겨찾기 등록</span>";
				menuElement += "</button>";
			}

			menuElement +="</li>";

			$("nav[data-menu=sidemenu] > .snb").append(menuElement);
		}

		$.fn.renderAfterIsOpen();
		$.fn.renderAfterChecked(obj);
	}

	$.fn.renderAfterIsOpen = function(){
		var firstNode = $("nav[data-menu=sidemenu] > .snb > .depth.dep2").first();
		var thirdNodeLength = firstNode.find(".depth.dep3 > .dep_item").length;
		if(thirdNodeLength > 0){
			firstNode.addClass("is-open");
		}
	}

	$.fn.renderActiveIsOpen = function(menuId){
		var firstNode = $("nav[data-menu=sidemenu] > .snb > .depth.dep2");

		firstNode.each(function(){
			if($(this).find('[menu_id=' + menuId + ']').attr('menu_id') == menuId) {
				$(this).addClass("is-open");
			} else {
				$(this).removeClass("is-open");
			}
		});

	}

	$.fn.renderAfterChecked = function(menu){
		$("nav[data-menu=favorite] > .snb > li").find("a").each(function (event, index) {
			var menuId = $(this).attr("menu_id");

			$("nav[data-menu=sidemenu] > .snb").find(".btn_fav").each(function (event, index) {
				if(menuId == $(this).attr("value")){
					$(this).addClass(" checked");
				}
			});
		});
	}

 	$.fn.renderFavorite = function(){
 		var template = '';
 		var favoriteList = $("nav[data-menu=favorite] > .snb");
 		favoriteList.empty();

		$.get('/sys/menu/sysMenu/getMyMenuList', function(dataList) {
			$.each(dataList, function(idx, data) {
				template += '<li class="depth dep_item">';
				template += '	<a menu_id="' + data.menuId + '" top_menu_id="'+ data.ctgRoot+'" active_menu_id="'+ data.parentMenuId+'" menu_url="'+ data.pgmUrl+'" href="#">'+data.menuName+'</a>';
				template += '	<button type="button" class="btn_fav checked" value="'+data.menuId+'">';
				template += '		<i class="fa fa-star" aria-hidden="true"></i>';
				template += '		<span class="sr-only">즐겨찾기 등록</span>';
				template += '	</button>';
				template += '</li>';
			});

			favoriteList.append(template).find('a').on('click', function () {
				//탭 생성
				$.AddTabMenu(this);
				$.fn.renderContentHeader();
				$('#tab_' + $(this).attr('menu_id')).children("a").trigger('click');
			});
		});
 	}

 	$.fn.toggleSubMenu = function (obj) {
 		$(this).toggleClass('is-open');
 	}

 	$.fn.renderSearchMenu = function (dataList) {
 		var template = "";
 		var result  = $(".find_result");
 		result.empty();

 		if(dataList != null && dataList.length > 0){
	 		template += "<ul class='result_list'>";

	 		$.each(dataList, function(idx, data) {
		 		template += "<li>";
		 		template += "<a href='#' menu_id='" + data.menuId + "' top_menu_id='" + data.ctgRoot +  "' active_menu_id='" + data.parentMenuId +  "' menu_url='" + data.pgmUrl + "' title='" + data.menuName + "'>";
		 		template += "<strong>" + data.menuName + "</strong>";
		 		template += "<p>" + data.ctgPath + "</p>";
		 		template += "</a>";
		 		template += "</li>";
	 		});

	 		template += "</ul>";
 		}else{
 			template += "<div class='non_result'>";
 			template += "<i class='fa fa-exclamation-circle' aria-hidden='true'></i>";
 			template += "<p>해당 검색결과가 없습니다.<br>내용을 입력해주세요</p>";
 			template += "</div>";
 		}

 		result.append(template);
 	}

 	$.fn.renderActiveSubMenu = function (menuId) {
 		$("nav[data-menu=sidemenu] > .snb").find("li").removeClass("active");
 		$("#sub_" + menuId).parent().addClass("active");
 	}

 	$.fn.renderContentHeader = function(){
	 	var tabSize = $("#tabItems").find("li").length;
	    if(tabSize > 0){
	    	if(!$(".ukbody").hasClass("tab_show")){
		    	$(".ukbody").addClass("tab_show");
		    }
	    }else{
	    	$(".ukbody").removeClass("tab_show");
	    }
 	}
})(jQuery);