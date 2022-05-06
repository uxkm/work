/*
 * 스페셜샵
**/

// 스페셜샵 gnb 스크롤 고정
$(window).on("scroll", function(){
	if($("#sp-brandshop.sect-brand-typeB").length > 0 && $(".sta_fixedWrap").length > 0){
		if($("#header > .logo-area").length == 0){
			$("#header").append($(".logo-area").clone());
			$("#sp-brandshop .content-aside").css({ position : "fixed", top : 110 });
			
			if($("#header > .sta_fixedWrap").length > 0){
				$("#header > .logo-area").css({ top : (($(".extra_bannerWrap").height()) ? $(".extra_bannerWrap").height() : 0) + $("#header > .sta_fixedWrap").outerHeight() });
			}
		}
	}

	if(($(".sect-brand-typeB .logo-area").length > 0) && ($(".sect-brand-typeB .logo-area").offset().top > $(window).scrollTop())){
		if($("#header > .logo-area").length > 0) $("#header > .logo-area").remove();
		$("#sp-brandshop .content-aside").removeAttr("style");
	}
});

// 기획전+상품 딤처리 효과
$(document).on("mouseenter", ".sect-wrap.plan-item > .right-area li", function(){
	var _css_pos, _ani_pos, _triangle;
	var $span = $("<span />");
	var _dim = $span.clone().attr({ "class" : "dim-back" }).css({ width : $(this).width(), height : $(this).height(), opacity : 0.7 });
	var _info = $span.clone().attr({ "class" : "dim-info" }).append($span.clone().attr({ "class" : "dim-name" }).append($(this).attr("data-name"))).append($span.clone().attr({ "class" : "dim-price" }).append($(this).attr("data-price")));
	var _halfSize = -($(this).width()/2);
	
	switch ($(this).attr("data-compass")){
		case 'nw' :	// 좌상
			_css_pos = { bottom : _halfSize, left : _halfSize };
			_ani_pos = { bottom : 0, left : 0 };
			break;
		case 'ne' :	// 우상
			_css_pos = { right : _halfSize, bottom : _halfSize };
			_ani_pos = { right : 0, bottom : 0 };
			break;
		case 'es' :	// 하우
			_css_pos = { top : _halfSize, right : _halfSize };
			_ani_pos = { top : 0, right : 0 };
			break;
		case 'sw' :	// 하좌
			_css_pos = { top : _halfSize, left : _halfSize };
			_ani_pos = { top : 0, left : 0 };
			break;
	}
	_triangle = $span.clone().attr({ "class" : "dim-triangle "+ $(this).attr("data-compass") +"" }).css({ opacity : 0.8 }).css(_css_pos).animate(_ani_pos, 150);
	$(this).children("a").prepend(_dim).prepend(_triangle).prepend(_info);
	
	// 상품정보 중앙 위치
	$(this).find(".dim-info").css({ top : ($(this).outerHeight()/2) - ($(this).find(".dim-info").outerHeight()/2)});
}).on("mouseleave", ".sect-wrap.plan-item > .right-area li", function(){
	$(this).children("a").find("span").remove();
});

// 상품명 오버레이어
var $goodsName_OverDimlayer;
$(document).on("mouseenter", ".brand-goods .goods-thum", function(){
	var _getGoodsName = $(this).children("a").attr("data-name");
	$goodsName_OverDimlayer = $("<div />").attr({ "class" : "goodsname-overlayer" }).css({ position : "absolute", top : 0, zIndex : 10000, width : ($(this).outerWidth()-20), padding : "10px", opacity : 0, background : "#000000" }).append($("<a />").attr({ href : $(this).children("a").attr("href") }).css({ color : "#FFFFFF", opacity : 0 }).append(_getGoodsName));
	$(this).prepend($goodsName_OverDimlayer);
	$goodsName_OverDimlayer.css({ top : -$goodsName_OverDimlayer.outerHeight(), opacity : 0.8 }).stop().animate({ top : 0 }, 150, function(){ $(this).children("a").stop().animate({ opacity : 1 }, 150) });
}).on("mouseleave", ".brand-goods .goods-thum", function(){
	$goodsName_OverDimlayer.remove();
});

// 브랜드별 신상품 상하 롤링
var _swapCount = 3, _swapChkFlag = false;
$(document).on("click", ".sect-swap-brand .brand-list .current a", function(e){
	var $brand_keyword = $(".sect-swap-brand .brand-list .brand-keyword");
	var $a = $("<a />").attr({ href : "#", "class" : "hidden-brand" }).css({ opacity : 0, display : "block" });
	var _directionFlag = $(this).attr("class");
	var _swapKeywordIndex, $hidden_brand, _topPx, _endTopPx = 3;
	
	if(!_swapChkFlag){
		_swapChkFlag = true;	
		
		if(_directionFlag == "up"){
			_swapKeywordIndex = 0;
			_topPx = -25;
			_swapCount = (_swapCount >= $brand_keyword.length) ? 1 : (_swapCount + 1);
		} else if(_directionFlag == "down"){
			_swapKeywordIndex = $brand_keyword.length - 1;
			_topPx = 31;
			_swapCount = (_swapCount <= 1) ? $brand_keyword.length : (_swapCount - 1);
		}
	
		for(i=0; i<$brand_keyword.length; i++){
			if(_directionFlag == "up"){
				_swapKeywordIndex = ((_swapKeywordIndex+1) >= $brand_keyword.length) ? 0 : _swapKeywordIndex+1;
				$hidden_brand = $a.clone();
				$brand_keyword.eq(i).find("span").after($hidden_brand.css({ top : $brand_keyword.eq(i).hasClass("current") ? 85 : 43 }).text($brand_keyword.eq(_swapKeywordIndex).find("span").text()));
			} else if(_directionFlag == "down"){
				$hidden_brand = $a.clone();
				$brand_keyword.eq(i).find("span").before($hidden_brand.css({ top : $brand_keyword.eq(i).hasClass("current") ? 85 : -43 }).text($brand_keyword.eq(_swapKeywordIndex).find("span").text()));
				_swapKeywordIndex = ((_swapKeywordIndex+1) >= $brand_keyword.length) ? 0 : _swapKeywordIndex+1;
			}

			// 로고 이미지 변경
			if($brand_keyword.eq(i).find("span").siblings("strong").length > 0){
				$brand_keyword.eq(i).find("span").siblings("strong").children("img").attr({ "src" : $brand_keyword.eq((_swapCount-1)).find("span").attr("data-src") });
			}
			
			$hidden_brand.stop().animate({ top : 3, opacity : 1 }, 250, "easeInOutExpo", function(){
				$(this).siblings("span.current-brand").text($(this).text());
				$(this).remove();
				_swapChkFlag = false;
			});
			
			// 상품 데이터 생성
			if((i+1) == $brand_keyword.length){
				$("#sp-brandshop .sect-wrap .sect-swap-brand .brand-goods > div").removeClass("current").siblings(".brand-goods-data"+_swapCount+"").addClass("current");
			}
		}
	
		$brand_keyword.find(".current-brand").css({ opacity : 1 }).stop().animate({ top : _topPx, opacity : 0 }, 250, "easeInOutExpo", function(){
			$(this).css({ top : _endTopPx, opacity : 1 });
		});
	}
	e.preventDefault();
});

// 스페셜샵 카테고리
/*

$(document).on("mouseenter", ".menu-wrap.type-all > ul > li, .menu-wrap.type-banner > ul > li", function(idx){
	if($(".menu-wrap").find(".sub-depth-container").length > 0) $(".menu-wrap").find(".sub-depth-container").remove();
	
	// 서브카테고리 가장 긴 height 찾아 컨테이너 height 설정
	var max = [];
	$(this).parent().children("li").each(function(i){
		($(this).find(".category li").length > 7) ? max.push(0) : max.push($(this).children(".sub-depth").outerHeight());
		if($(this).children(".sub-depth").attr("style")) $(this).children(".sub-depth").removeAttr("style");

		if($(this).parent().parent().hasClass("type-all")){
			$(this).children(".sub-depth").css({ left : $(this).children("a").position().left, display : "block" });
		}
	});

	// 선택된 메뉴 하단 언더바
	$(this).children("a").children(".underbar").css({ display : "block" }).parent().parent().siblings("li").find(".underbar").css({ display : "none" });
	
	// 배너 타입 서브메뉴 위치 지정
	if($(this).parent().parent().hasClass("type-banner")){
		$(this).children(".sub-depth").css({ left : ((($(this).parent().outerWidth() - Math.abs($(this).children(".sub-depth").outerWidth())) / 2)), display : "block" });
		
		// 카테고리 일정 갯수(7개) 넘는 경우 예외 처리 
		if($(this).find(".li-column-wrap").length > 0){
			var _fullWidth = 0;

			if($(this).find(".li-column-wrap .li-column-content").length == 1){
				$(this).find(".category").css({ textAlign : "center" }).find(".li-column-wrap").css({ display : "inline-block", marginLeft : 35 }).children(".li-column-content").css({ borderRight : "none" });
			}
			
			var _li_column_maxHeight = [];
			$(this).find(".li-column-wrap .li-column-content").each(function(){
				_li_column_maxHeight.push($(this).height());
				_fullWidth += $(this).outerWidth() + parseInt($(this).css("marginRight"));
			});
			$(this).find(".li-column-wrap").css({ width : _fullWidth, margin : "0 auto" }).children(".li-column-content").css({ height : Math.max.apply(null, _li_column_maxHeight) });
			
			var max = [];
			$(this).parent().children("li").each(function(){
				max.push($(this).children(".sub-depth").children(".category").outerHeight()+parseInt($(this).children(".sub-depth").css("paddingTop"))+parseInt($(this).children(".sub-depth").css("paddingBottom")));
			});
		}
	}
	
	$(".menu-wrap").append("<div class='sub-depth-container' style='position:absolute; top:71px; left:0; z-index:120; width:100%; height:"+ Math.max.apply(null, max) +"px; border-top:1px solid #e5e5e5; background:#FFF; box-shadow:0 5px 4px #cacaca'></div>")
}).on("mouseleave", ".menu-wrap, .sub-depth-container", function(){
	$(".menu-wrap .sub-depth-container").remove();
	$(".menu-wrap > ul > li").find(".underbar").removeAttr("style");
	$(".menu-wrap > ul > li").children(".sub-depth").removeAttr("style");
	$(".menu-wrap .li-column-content").removeAttr("style");
});
*/

$(function(){
    var ralphlauren = false;
    if($("#sp-brandshop").attr("class") == "ralphlauren") ralphlauren = true;

	// 카테고리 일정 갯수(7개) 넘는 경우 예외 처리
	if($(".menu-wrap.li-column").length){
		if(!ralphlauren) $(".menu-wrap.li-column .promo-banner").remove();
		$(".menu-wrap.li-column > ul > li").each(function(){
			//if($(this).find(".category li").length > 7){
				$(this).find(".category").css({ width : ((ralphlauren) ? "auto" : 991), overflow : "hidden" });
				$(this).find(".category h3").each(function(){
					$(this).wrapAll("<div class='li-column-content'></div>")	
				});
				
				$(this).find(".category ul").each(function(idx){
					var _parent = $(this).parent();
					var target_Slice = $(this).find("li").unwrap();
					var unwrap_li_length = target_Slice.length;
					
					for(i=0; i<unwrap_li_length; i+=7){
						target_Slice.slice(i, i+7).wrapAll("<ul style='float:left'></ul>").parent().appendTo(_parent.find("div:eq("+ idx +")"));
					}
				});
				$(this).find(".category").wrapInner("<div class='li-column-wrap'></div>");
			//}
		});
	}

    /* 180126 - williams sonoma slide init - sb*/
    if($(".type-ws").length > 0){
        $(".type-ws .coverflow-area > .carousel").spSlider({
            showcount: 1,
            indicator: true,
            indicatorStyle : {
                size : 10,
                shape : "circle",
                active : "#fe563c",
                nonactive : "#ffffff"
            },
            mouseEvent : "mouseenter"
        });

        $(".type-ws .event-slide-area > .carousel").spSlider({
            showcount : 1,
            arrow : true,
            arrowPosition : "after"
        });
    }

	/* michaelkors */
    // 스페셜샵 카테고리
    $(document).on("mouseenter", ".menu-wrap.type-all > ul > li, .menu-wrap.type-banner > ul > li", function(idx){
        if($(".menu-wrap").find(".sub-depth-container").length > 0) $(".menu-wrap").find(".sub-depth-container").remove();

        // 서브카테고리 가장 긴 height 찾아 컨테이너 height 설정
        var max = [];
        $(this).parent().children("li").each(function(i){
            ($(this).find(".category li").length > 7) ? max.push(0) : max.push($(this).children(".sub-depth").outerHeight());
            if($(this).children(".sub-depth").attr("style")) $(this).children(".sub-depth").removeAttr("style");

            if($(this).parent().parent().hasClass("type-all")){
                $(this).children(".sub-depth").css({ left : $(this).children("a").position().left, display : "block" });
            }
        });

        // 선택된 메뉴 하단 언더바
        $(this).children("a").children(".underbar").css({ display : "block" }).parent().parent().siblings("li").find(".underbar").css({ display : "none" });

        // 배너 타입 서브메뉴 위치 지정
        if($(this).parent().parent().hasClass("type-banner")){
            if(ralphlauren){
                $(this).children(".sub-depth").css({ width : 1000, left : "50%", marginLeft : -Math.floor(1000/2), display : "block" });
            } else {
                $(this).children(".sub-depth").css({ left : ((($(this).parent().outerWidth() - Math.abs($(this).children(".sub-depth").outerWidth())) / 2)), display : "block" });
            }

            // 카테고리 일정 갯수(7개) 넘는 경우 예외 처리
            if($(this).find(".li-column-wrap").length > 0){
                var _fullWidth = 0;

                if($(this).find(".li-column-wrap .li-column-content").length == 1){
                    $(this).find(".category").css({ textAlign : ((ralphlauren) ? "left" : "center") }).find(".li-column-wrap").css({ display : "inline-block", marginLeft : 35 }).children(".li-column-content").css({ borderRight : "none" });
                }

                var _li_column_maxHeight = [];
                $(this).find(".li-column-wrap .li-column-content").each(function(){
                    _li_column_maxHeight.push($(this).height());
                    _fullWidth += $(this).outerWidth() + parseInt($(this).css("marginRight"));
                });
                $(this).find(".li-column-wrap").css({ width : _fullWidth, margin : "0 auto" }).children(".li-column-content").css({ height : Math.max.apply(null, _li_column_maxHeight) });

                var max = [];
                $(this).parent().children("li").each(function(){
                    max.push($(this).children(".sub-depth").children(".category").outerHeight()+parseInt($(this).children(".sub-depth").css("paddingTop"))+parseInt($(this).children(".sub-depth").css("paddingBottom")));
                });
            }
        }

        $(".menu-wrap").append("<div class='sub-depth-container' style='position:absolute; top:71px; left:0; z-index:120; width:100%; height:"+ (($(this).closest(".menu-wrap").is(".type-all")) ? Math.max.apply(null, max) : max[$(this).index()]) +"px; border-top:1px solid #e5e5e5; background:#FFF;'></div>")
        if(ralphlauren) $(".sub-depth-container").css({ "box-shadow" : "rgba(208, 208, 208, 0.7) 0px 5px 10px" });
    }).on("mouseleave", ".menu-wrap, .sub-depth-container", function(){
        $(".menu-wrap .sub-depth-container").remove();
        $(".menu-wrap > ul > li").find(".underbar").removeAttr("style");
        $(".menu-wrap > ul > li").children(".sub-depth").removeAttr("style");
        $(".menu-wrap .li-column-content").removeAttr("style");
    });
});

// 랄프로렌 상품 이미지 마스크 액션
$(document).on("mouseenter mouseleave", "#sp-brandshop.ralphlauren .item-box .item-img, .relate_ralphlauren .item-box .item-img", function(){
	var before_img = $(this).attr("data-mask");
	$(this).attr({ "data-mask" : $(this).attr("src") }).attr({ src : before_img });	
});

// 랄프로렌 상품상세 기본정보, 상품설명, 배송/교환/반품 탭화
$(document).on("click", ".divide-ralphlauren-detail .divide-tab li", function(e){
	$(this).children("a").addClass("on").parent().siblings().children("a").removeClass("on");
	$("#tab-detail-"+ ($(this).index()+1) +"").css({ display : "block" }).siblings().css({ display : "none" });
	e.preventDefault();
});

// 랄프로렌 FAQ
$(document).on("click", "#sp-brandshop.ralphlauren .brand-faq-menu li", function(){
	$(this).addClass("on").siblings().removeAttr("class");
	$("."+ $(this).attr("data-tab") +"").css({ display : "block" }).siblings("."+ $(this).siblings().attr("data-tab") +"").css({ display : "none" });
});

$(document).on("click", "#sp-brandshop.ralphlauren .brand-faq-list1 dt", function(){
	$(this).addClass("visible").siblings().removeClass("visible");
	$(this).next("dd").css({ display : "block" }).siblings().removeAttr("style");
});

/* 180126 - williams sonoma 카테고리 마우스 이벤트 - sb*/
$(document).on('mouseenter mouseleave', ".type-ws .menu-wrap > ul > li", function(e){
	if(e.type == 'mouseenter') $(this).find(".sub-depth").addClass("on");
	else $(this).find(".sub-depth").removeClass("on");
});

/* 180320 - williams sonoma 2depth 메뉴 마우스 이벤트 - sb*/
$(document).on('click', ".type-ws .sect-brand-subcategory ul li", function(e){
	if(!$(this).hasClass("on")){
	    $(this).siblings("li").removeClass("on");
        $(this).addClass("on");
    }
});