var autoSlideInterval;

// 181024 - 반응형기획전 좌측 메뉴 고정 - rlatkdals
$(window).on("scroll", function(){
    if($(".pl_main.pl-response-ui").length > 0){
        if($(".pl_main.pl-response-ui").offset().top < $(this).scrollTop()){
            $(".pl_lnb.pl-response-ui, .pl_main.pl-response-ui").addClass("_fixed");
        } else if($(".pl_lnb.pl-response-ui").offset().top >= $(this).scrollTop()){
            $(".pl_lnb.pl-response-ui, .pl_main.pl-response-ui").removeClass("_fixed");
        }
    }
});

// 굿럭템 매장 바로가기 활성화 / 링크 속성 부여
$(document).ready(function(){
    $(".gdeal_Tab_category li").each(function(idx){
        $("#gdeal_wing_shortcut ul li:eq("+ idx +")").find("a").attr("href", $(this).find("a").attr("href"));
        
        // 현재 메뉴의 on 클래스 인덱스를 통해 바로가기 메뉴 활성화
        if($(".gdeal_Tab_category li:eq("+ idx +")").hasClass("on")) $("#gdeal_wing_shortcut ul li:eq("+ idx +")").find("a").addClass("on");
    });
    
	// 20160929 - 4뎁스 이상 백화점 점별 체크박스 - rlatkdals
    if($(".select-store-list").length > 0){
		$(document).on("mouseenter", ".number_info .select-store-list", function(){
			$(this).children(".store-checkbox-wrap").css({ display : "block" });
		}).on("mouseleave", ".number_info .select-store-list", function(){
			$(this).children(".store-checkbox-wrap").css({ display : "none" });
		});
    }

    // 20161004 - 백화점 메인 롤링 텍스트 영역 클릭 기능 부여 - rlatkdals
    if($(".hdept_main_slide_wrap #hdept_main_slide").length > 0){
    	$(document).on("click", ".hdept_main_slide_wrap #hdept_main_slide ul.carouselUL li strong, .hdept_main_slide_wrap #hdept_main_slide ul.carouselUL li span", function(){
    		location.href = $(this).siblings("a").attr("href");
    	});
    }
    
    // 170719 - 굿럭템 브랜드템 상품 마우스오버 효과 적용 - 석수빈
    $('.mobilest.over_h ul li a, .gdeal_best.over_h ul li a').hover(function(){
		$(this).find('.glt_timeleft').stop().animate({right:0},200);
	}, function(){
		$('.glt_timeleft').stop().animate({right:-93},200);
	});
    
    // 170719 - 굿럭템 브랜드템 상단 슬라이드 - 석수빈
    // var gdBrandtemListCount = $('.slide_parent > li').size();
	// var slideParentWidth = $('.slide_parent').width();
	// $('.slide_nav_area > .page_indicator > .total_page').text(gdBrandtemListCount);
	// $('.slide_parent').css('width', gdBrandtemListCount*slideParentWidth);
	
	// $('.slide_nav_area > .prev_bt').on('click', function(){
	// 	var currentPage = parseInt($('.slide_nav_area .current_page').text());
	// 	var targetPage = currentPage-1;
	// 	if(currentPage == 1){
	// 		$('.slide_parent').stop().animate({'marginLeft' : -((gdBrandtemListCount*slideParentWidth)-slideParentWidth)}, '300');
	// 		targetPage = gdBrandtemListCount;
	// 	}
	// 	else{
	// 		$('.slide_parent').stop().animate({'marginLeft' : -(((currentPage-1)*slideParentWidth)-slideParentWidth)}, '300');
	// 	}
	// 	$('.slide_nav_area .current_page').text(targetPage);
	// });
	
	// $('.slide_nav_area > .next_bt').on('click', function(){
	// 	var currentPage = parseInt($('.slide_nav_area .current_page').text());
	// 	var targetPage = currentPage+1;
	// 	if(currentPage == gdBrandtemListCount){
	// 		$('.slide_parent').stop().animate({'marginLeft' : 0}, '300');			
	// 		targetPage = 1;
	// 	}
	// 	else{
	// 		$('.slide_parent').stop().animate({'marginLeft' : -(currentPage*slideParentWidth)}, '300');	
	// 	}
	// 	$('.slide_nav_area .current_page').text(targetPage);
	// });
	
	// autoSlideInit();
	// $('.slide_wrap').on('mouseenter', function(){
	// 	clearInterval(autoSlideInterval);
	// });
	// $('.slide_wrap').on('mouseleave', function(){
	// 	autoSlideInit();
	// });
});

/*
** 1507 - 대&중분류 리뉴얼
*/

// 백화점 메인 카테고리 하위 메뉴 노출
$(document).on("mouseenter", ".sect-hdept-visual .sect-sub-menu > li", function(){
	if($(this).children(".sect-sub-menu-3depth").length > 0){
		$(this).children("a").addClass("selected");
		$(this).children(".sect-sub-menu-3depth").css({ width : $(this).find(".sect-sub-menu-3depth > ul").outerWidth() * $(this).find(".sect-sub-menu-3depth > ul").length, display : "block" });
		$(this).children(".sect-sub-menu-3depth").css({ top : (($(".sect-hdept-visual").offset().top + $(".sect-hdept-visual").outerHeight()) < ($(this).children(".sect-sub-menu-3depth").offset().top+$(this).children(".sect-sub-menu-3depth").outerHeight())) ? -(($(this).children(".sect-sub-menu-3depth").offset().top+$(this).children(".sect-sub-menu-3depth").outerHeight()) - ($(".sect-hdept-visual").offset().top + $(".sect-hdept-visual").outerHeight())) : -30 });
	}
}).on("mouseleave", ".sect-sub-menu > li", function(){
	if($(this).children(".sect-sub-menu-3depth").length > 0){
		$(this).children("a").removeClass("selected");
		$(this).children(".sect-sub-menu-3depth").css({ top : 0, display : "none" });
	}
});

// 2뎁스 카테고리 하위 메뉴 노출
var _coverTop = $("<div />").attr({ "class" : "menu-cover-border top" });
var _coverBottom = $("<div />").attr({ "class" : "menu-cover-border bottom" });
$(document).on("mouseenter", ".sect-menu-innerWrap .sect-sub-menu > li", function(){
	if($(this).children(".sect-sub-menu-3depth").length > 0){
		$(this).children("a").addClass("selected");
		$(this).children(".sect-sub-menu-3depth").css({ width : $(this).find(".sect-sub-menu-3depth > ul").outerWidth() * $(this).find(".sect-sub-menu-3depth > ul").length, display : "block" });
		$(this).children(".sect-sub-menu-3depth").css({ top : (($(".sect-menu").offset().top + $(".sect-menu").outerHeight()) < ($(this).children(".sect-sub-menu-3depth").offset().top+$(this).children(".sect-sub-menu-3depth").outerHeight())) ? -(($(this).children(".sect-sub-menu-3depth").offset().top+$(this).children(".sect-sub-menu-3depth").outerHeight()) - ($(".sect-menu").offset().top + $(".sect-menu").outerHeight())) : -30 });
		
		$(".sect-menu").append(_coverTop).append(_coverBottom);
		$(".sect-menu-innerWrap").css({ overflow : "visible" });
		
		$(".menu-cover-border.top").css({ height : ($(".sect-main-title").outerHeight() + parseInt($(".sect-main-title").css("marginTop")) + parseInt($(".sect-main-title").css("marginBottom"))) });
		$(".menu-cover-border.bottom").css({ height : $(".sect-menu").innerHeight() - ($(".sect-main-title").outerHeight() + parseInt($(".sect-main-title").css("marginTop")) + parseInt($(".sect-main-title").css("marginBottom"))) - $(".sect-menu-innerWrap").outerHeight() });
	}
}).on("mouseleave", ".sect-sub-menu > li", function(){
	if($(this).children(".sect-sub-menu-3depth").length > 0){
		$(this).children("a").removeClass("selected");
		$(this).children(".sect-sub-menu-3depth").css({ top : 0, display : "none" });
		
		if($(this).children(".sect-sub-menu-3depth").css("display") != "block"){
			$(".sect-menu-innerWrap").css({ overflow : "hidden" });
			$(".menu-cover-border").remove();
		}
	}
});

// 카테고리 하단 검색 박스 레이블 숨김 처리
$(document).on("click", ".sect-searchbox > input", function(){
	$(this).siblings("label").css({ visibility : "hidden" });
	$(this).siblings("button").css({ visibility : "visible" });
}).on("blur", ".sect-searchbox > input", function(){
	if($(this).val() == ""){
		$(this).siblings("label").css({ visibility : "visible" });
		$(this).siblings("button").css({ visibility : "hidden" });
	}
});

// 베스트 상품 (카테고리 상품)
$(document).on("click", ".sect-category li", function(e){
	var _parent = $(this).parent();
	var _children = $(this).find("a");
	var _getID = _children.attr("id");

	// 카테고리 활성화
	_parent.find("a").removeClass("selected");
	_children.addClass("selected");
	
	// 더보기 버튼 링크
	if(_parent.siblings(".best-more-page").length > 0) _parent.siblings(".best-more-page").attr({ href : _children.attr("href") });
	
	// 선택한 카테고리 내용 보이기
	var _divSelector = (_parent.siblings("div[id^='selected-']").length == 0) ? _parent.parent().siblings("div[id^='selected-']") : _parent.siblings("div[id^='selected-']");
	_divSelector.css({ display : "none" }).removeClass("current-wrap").siblings("#selected-"+_getID).css({ display : "block" });
	
	e.preventDefault();
});

// 카테고리 더보기
$(document).on("click", ".sect-sub-categorybox .category-plus", function(e){
	var _category_li_length = $(this).siblings(".category-list").children("li").length;
	
	if(_category_li_length > 16 && $(this).siblings(".category-list").attr("data-hidden-li") == "N"){
		$(this).siblings(".category-list").attr({ "data-hidden-li" : "Y" }).css({ maxHeight : "none" });
		$(this).children("span").text("-");
	} else if($(this).siblings(".category-list").attr("data-hidden-li") == "Y") {
		$(this).siblings(".category-list").attr({ "data-hidden-li" : "N" }).removeAttr("style");
		$(this).children("span").text("+");
	}
	
	e.preventDefault();
});

// 2뎁스 브랜드 전체보기
$(document).on("click", "#sect-menu-scroll .brand-all, #sect-brand-all .brand-close", function(e){
	var _this = $(this);
	var _category = $("#sect-menu-scroll .brand-all");
	
	if(_this.hasClass("selected") || _this.hasClass("brand-close")){
		_category.removeClass("selected");
		$("#sect-brand-all").css({ visibility : "hidden" });
	} else {
		_this.addClass("selected");
		$("#sect-brand-all").css({ visibility : "visible" });
	}
	
	e.preventDefault();
});

// 3뎁스 브랜드 전체보기
$(document).on("click", ".option-brand .view-brand", function(e){
	$("#option-brand-list").css({ top : $(".sect-easy-search").position().top + 20, left : $(".sect-easy-search").position().left + 80, visibility : "visible" });
	
	e.preventDefault();
}).on("click", "#option-brand-list .close-brand", function(e){
	$(this).parent().css({ visibility : "hidden" });
	
	e.preventDefault();
});

// 이미지 체크박스
$(document).on("click", ".option-benefit label, .option-brand-list-scroll label", function(e){
	if($(this).attr("class") == "selected"){
		// 이미지 클래스 & 체크박스 속성 제거
		$(this).removeClass("selected").children("i").removeClass("checked").siblings("input").removeAttr("checked");
		
		// 선택된 브랜드 영역에서 동일한 브랜드 코드인 항목 제거
		if($(this).offsetParent().parent().attr("class") == "option-brand-list-scroll"){
			if($(this).offsetParent().parent().find("label.selected").length == 0) $(".option-brand").find(".selected-brand").css({ display : "none" }).siblings(".non-select").css({ display : "block" });
			$(".option-brand").find(".selected-brand").find("a[val="+ $(this).attr("data-brndCd") +"]").remove();
		}
	} else {
		// 브랜드 전체보기일 경우 갯수 제한
		if($(this).offsetParent().parent().attr("class") == "option-brand-list-scroll"){
			if(($(this).offsetParent().parent().find("label.selected").length+1) > 4){
				alert("더이상 추가 하실 수 없습니다.")
				e.preventDefault();
				return;
			}

			// 브랜드 선택 시 (선택된 브랜드 없음 영역 숨김 / 선택된 브랜드 노출 영역 표시)
        	var _brndCd = $(this).children("input").attr("value").split(":")[0];	// 브랜드코드
         	var _brndNm = $(this).children("input").attr("value").split(":")[1];	// 브랜드명
			var $a_brand = $("<a />").attr({ href : "#", kind : "brnd", val : _brndCd + " " + _brndNm, "class" : "brndDel" }).append(_brndNm + " <span>X</span>");
			
         	$(this).attr({ "data-brndCd" : (_brndCd) ? _brndCd : '' });
			$(".option-brand").find(".selected-brand").css({ display : "block" }).siblings(".non-select").css({ display : "none" });
			$(".option-brand").find(".selected-brand").append($a_brand.clone());
		}
		
		// 공통 적용
		$(this).addClass("selected").children("i").addClass("checked");
		$(this).children("input").attr({ checked : "checked" });
	}
	
	e.preventDefault();
});

// 선택된 간편검색 브랜드 삭제 및 연관된 액션 모두 해제 
$(document).on("click", ".option-brand .selected-brand .brndDel", function(e){
	$(".option-brand-list-scroll label[data-brndcd="+ $(this).attr("val").split(" ")[0] +"]").removeClass("selected").children("i").removeClass("checked").siblings("input").removeAttr("checked");
	$(this).remove();
	
	if($(".option-brand .selected-brand").find(".brndDel").length == 0) $(".option-brand").find(".selected-brand").css({ display : "none" }).siblings(".non-select").css({ display : "block" });
	
	e.preventDefault();
});

// 기획전 더보기/숨기기
$(document).on("click", ".sect-plansale .more-plansale", function(e){
	var _butnThis = $(this);
	$(".sect-plansale .type-bottom-4x1").each(function(i){
		if(!$(this).hasClass("current")){
			_butnOldText = _butnThis.text();
			$(".sect-plansale .type-bottom-4x1:eq("+ i +")").addClass("current add-banner");
			_butnThis.text("기획전 숨기기 ▲");
		} else if($(this).hasClass("current") && $(this).hasClass("add-banner")) {
			$(this).removeClass("current add-banner").removeAttr("style");
			_butnThis.text("기획전 더보기 ▼");
		}
	});
	
	e.preventDefault();
});

// 브랜드 더보기/숨기기
$(document).on("click", ".sect-plansale .more-brand", function(e){
	var _butnThis = $(this);
	$(".sect-plansale .type-bottom-6x1").each(function(i){
		if(!$(this).hasClass("current")){
			_butnOldText = _butnThis.text();
			$(".sect-plansale .type-bottom-6x1:eq("+ i +")").addClass("current add-banner");
			_butnThis.text("브랜드 숨기기 ▲");
		} else if($(this).hasClass("current") && $(this).hasClass("add-banner")) {
			$(this).removeClass("current add-banner").removeAttr("style");
			_butnThis.text("브랜드 더보기 ▼");
		}
	});
	
	e.preventDefault();
});

// 주간 베스트 픽토그램
$(document).on("mouseenter", ".sect-pictogram-category > ul > li", function(i){
	$(this).parent().find("span").removeAttr("class");	// 기존 선택되어 있던 텍스트 비활성화
	$(this).find("span").addClass("selected");	// 마우스 선택된 텍스트 활성화
	$(".category-circle").stop().animate({ left : $(this).position().left + 15 }, "easeInBounce");	// 마우스 선택된 곳 위치 이동
	
	// 서브 카테고리 레이어 활성화
	$(this).parent().find("li").removeClass("on");
	if($(this).find(".sect-pictogram-subdepth").length > 0) $(this).addClass("on");
	$(this).parent().find(".sect-pictogram-subdepth").css({ display : "none" });
	$(this).children(".sect-pictogram-subdepth").css({ left : -$(this).position().left, display : "block" });
}).on("mouseleave", ".sect-pictogram-category > ul", function(){
	var _selectedIndx = $(this).children("li").siblings(".selected").index();	// 기존 선택되어 있던 위치 인덱스 체크
	$(this).find("span").removeAttr("class");	// 마우스 떠난 영역 텍스트 비활성화
	
	$(".sect-pictogram-category > ul > li:eq("+ _selectedIndx +")").find("span").addClass("selected");	// 기존 선택되어 있던 곳 텍스트 활성화
	$(".category-circle").stop().animate({ left : $(".sect-pictogram-category > ul > li:eq("+ _selectedIndx +")").position().left + 15 }, "easeInBounce");	// 기존 선택되어 있던 곳으로 위치 이동
	
	// 서브 카테고리 레이어 비활성화
	$(this).children("li").removeClass("on");
	$(this).find(".sect-pictogram-subdepth").css({ display : "none" });
});

// 주간 베스트 픽토그램 메뉴 클릭 시 링크 값 없는 경우 무시
$(document).on("click", ".sect-pictogram-category > ul > li > a", function(e){
	if($(this).attr("href") == "#") e.preventDefault();
});

// 주간 베스트 서브 뎁스 셀렉트박스
$(document).on("mouseenter", ".depth-selectbox", function(){
	$(this).children(".arrow").removeClass("down").addClass("up");
	$(this).children(".more-subdepth").css({ width : $(this).find(".more-subdepth > ul").outerWidth() * $(this).find(".more-subdepth > ul").length, visibility : "visible" });
}).on("mouseleave", ".depth-selectbox", function(){
	$(this).children(".arrow").removeClass("up").addClass("down");
	$(this).children(".more-subdepth").css({ visibility : "hidden" });
}); 

//170719 - 굿럭템 브랜드템 상단 자동슬라이드 설정 - 석수빈
function autoSlideInit(){
	autoSlideInterval = setInterval(function(){
		$('.slide_nav_area > .next_bt').click();
	}, 4000);
}

// 180129 - 기획전 리뉴얼 - 전인표

function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function opacitySimulate(_color, _bgcolor, _opacity){
	var r = Math.ceil(hexToRgb(_color).r * _opacity);
	var g = Math.ceil(hexToRgb(_color).g * _opacity);
	var b = Math.ceil(hexToRgb(_color).b * _opacity);
	var bg_r = Math.ceil(hexToRgb(_bgcolor).r * (1-_opacity));
	var bg_g = Math.ceil(hexToRgb(_bgcolor).g * (1-_opacity));
	var bg_b = Math.ceil(hexToRgb(_bgcolor).b * (1-_opacity));
	var rgb_result = 'rgb(' + (r+bg_r) + ', ' + (g+bg_g) + ', ' + (b+bg_b) + ')';
	return rgb_result;
}

$(function(){
	//var _colorcode = '#87b7f9';
	//del.180228 - $('.promo_tmpl_cont').css('background-color', _colorcode);
	var _colorcode = $(".promo_tmpl_cont").attr("data-bgColor") ? $(".promo_tmpl_cont").attr("data-bgColor") : '#87b7f9';
	$('._tmpl_btn').css('border-color', _colorcode);
	$('.promo_tmpl_sect._type4 .promo_tmpl_sect_item ._imgbox').css('background-color', opacitySimulate(_colorcode, '#fff', 0.2));

	$('.promo_tmpl_sect._type7 .promo_tmpl_sect_title ._bgop').css('opacity',0.6);
	$('.promo_tmpl_sect._type7 .promo_tmpl_sect_title ._subtxt').css('opacity',0.8);

	if($(".promo_tmpl_sect._type3 .promo_tmpl_sect_set").length > 0){
		$(".promo_tmpl_sect._type3 .promo_tmpl_sect_set").spSlider({
			fade : true,
			showcount : 3,
			arrow : true,
			arrowPosition : "before",
			rightmargin: 20
		});
	}

	if($(".promo_tmpl_sect._type5 .promo_tmpl_sect_set").length > 0){
		$(".promo_tmpl_sect._type5 .promo_tmpl_sect_set").spSlider({
			fade : true,
			showcount : 2,
			arrow : true,
			arrowPosition : "before",
			rightmargin: 20
		});
	}

	if($(".promo_tmpl_sect._type7 .promo_tmpl_sect_set").length > 0){
		$(".promo_tmpl_sect._type7 .promo_tmpl_sect_set").spSlider({
			fade : true,
			showcount : 5,
			arrow : true,
			arrowPosition : "before",
			rightmargin: 20
		});
	}

	if($(".promo_tmpl_topbn_slider").length > 0){
		$(".promo_tmpl_topbn_slider").spSlider({
			fade : true,
			showcount : 1,
			arrow : true,
			arrowPosition : "before",
			rightmargin: 20
		});
	}
});

$(window).on('load', function(){
	if ($('.promo_tmpl_cont').length > 0) {
		var _colorhex = $('.promo_tmpl_cont').css('background-color');
		var _colorname = contrastBg(_colorhex);

		$('.promo_tmpl_cont').addClass('ft'+_colorname);
	}
	
	pt5SlideNavInit();
	pt7SlideNavInit();
});

$(document).on('click', '.promo_tmpl_sect._type5 .slider-direction button', pt5SlideNav);
$(document).on('click', '.promo_tmpl_sect_tabs > li > a', prdlistTabs);

var _pt5slidelen;
var _pt5slideindex = 1;

function contrastBg(c) {
	var rgb = c.match(/\d+/g);
	var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
	
	if (o > 125) return 'black';
	else return 'white';
}

function pt5SlideNav(){		
	if ($(this).hasClass('slider-prev')) _pt5slideindex = (_pt5slideindex == 1) ? _pt5slidelen : _pt5slideindex-1;
	else _pt5slideindex = (_pt5slideindex == _pt5slidelen) ? 1 : _pt5slideindex+1;
	
	$('._pagercust').html(_pt5slideindex+'/'+_pt5slidelen);
}

function pt5SlideNavInit(){ // ajax 호출시 콜백 필수
	_pt5slidelen = Math.ceil($('.promo_tmpl_sect._type5 .promo_tmpl_sect_item').length / 2);
	var _pagercust = '<span class="_pagercust">'+_pt5slideindex+'/'+_pt5slidelen+'</span>';
	
	$('.promo_tmpl_sect._type5 .slider-prev, .promo_tmpl_sect._type5 .slider-next').prepend(_pagercust);
}

$(document).on('click', '.promo_tmpl_sect._type7 .slider-direction button', pt7SlideNav);

var _pt7slidelen;
var _pt7slideindex = 1;

function pt7SlideNav(){		
	if ($(this).hasClass('slider-prev')) _pt7slideindex = (_pt7slideindex == 1) ? _pt7slidelen : _pt7slideindex-1;
	else _pt7slideindex = (_pt7slideindex == _pt7slidelen) ? 1 : _pt7slideindex+1;
	
	$('._pagercust').html(_pt7slideindex+'/'+_pt7slidelen);
}

function pt7SlideNavInit(){ // ajax 호출시 콜백 필수
	_pt7slidelen = Math.ceil($('.promo_tmpl_sect._type7 .promo_tmpl_sect_item').length / 5);
	var _pagercust = '<span class="_pagercust">'+_pt7slideindex+'/'+_pt7slidelen+'</span>';
	
	$('.promo_tmpl_sect._type7 .slider-prev, .promo_tmpl_sect._type7 .slider-next').prepend(_pagercust);
}

function prdlistTabs(){
	$(this).parent().addClass('_active').siblings().removeClass('_active');
	$('.promo_tmpl_sect_tabcont_page').eq($(this).parent().index()).addClass('_active').siblings().removeClass('_active');
	
	return false;
}

//add comma
function Comma(Num) {
    Num += '';
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    Num = Num.replace(',', ''); Num = Num.replace(',', ''); Num = Num.replace(',', '');
    x = Num.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    return x1 + x2;
}