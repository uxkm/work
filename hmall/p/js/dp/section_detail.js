// 상품상세 동영상 보기 dim 버튼
$(document).on("click", "#start-videoButn", function(){
	$(this).remove();
	$(".productVideoUL > li").addClass("active");
	$(".productGalleryUL > li").removeClass("active");
	$('#movie').removeClass('hidden');
});

$(document).on("click", "#start-videoButn2", function(){
	$(this).remove();
	jwplayer(divMovie_2).play();
});

$(function(){
	var productGallery_trigger = $('.productVideoUL li a, .productGalleryUL li a');	// 선택 구분자 추가
	productGallery_trigger.click(function(e){
		e.preventDefault();
	})
	productGallery_trigger.on('mouseenter', function(){
		var myplayer = $('#WMPlayer');
		
		if($(".productGallery.video").length > 0){
			$(".dim-Playbutn").fadeOut(50);	// dim 제거
		}
		
		if (!$(this).is('.first')) {
			if($(".productGallery.video").length > 0){
				$(".productVideoUL > li").removeClass("active");
			}
			$('#movie').addClass('hidden');
		} else {
			if($(".productGallery.video").length > 0){
				$(this).parent().addClass("active");
				$(".productGalleryUL > li").removeClass("active");
			}
			$('#movie').removeClass('hidden');
		}
	});

	if ($('.productGalleryUL li').length <= 7) {
		$('.productGalleryULWrap').addClass('none');
	}

	$('#productGalleryUL_popupDetail li a').bind('click', function(e){
		e.preventDefault();
		if (!$(this).is('.first')) {
			$('#movie').addClass('hidden');
		} else {
			$('#movie').removeClass('hidden');
		}
		var swapImg = $(this).children('img').attr('src').replace('60x60','480x480');
		$('#wrap1 > img').attr('src', swapImg);
	})

	/**
	 * 단축URL & QR코드란?
	**/
	$('#detail_tooltip_1').hover(function(){
		var top = $(this).offset().top;
			left = $(this).offset().left;
		$(this.hash).css({top:top+15, left:left-417}).show();
	}, function(){
		$(this.hash).hide();
	});

	/**
	 * QR코드 숨김
	**/
	$('.qrCodeWrap').mouseleave(function(){
		$(this).hide();
	});

	/**
	 * 상품설명 하단 썸네일->큰이미지 갤러리
	**/
	$('#detailGalleryUL > li > a').mouseover(function(){
		var obj_swap = $(this).find('img').attr('src').replace('100x100','600x600');
		$('#placeHolder').attr('src', obj_swap);
	}).click(function(e){
		e.preventDefault();
	});

	/**
	 * 쿠폰할인
	**/
	$('.direct_coupon').hover(function(){
		var cu_top = $(this).offset().top,
			cu_left = $(this).offset().left;
		$('#tooltip17').css({'top':cu_top+28, 'left':cu_left}).show();
	}, function(){
		$('#tooltip17').hide();
	});
	$('.live_coupon_close').click(function(e){
		e.preventDefault();
		$('#live_coupon').hide();
	})

	/**
	 * 후청구할인 도움말
	**/
	$('.huchang').hover(function(){
		var hu_top = $(this).offset().top,
			hu_left = $(this).offset().left;
		$('#tooltip14_1').css({'top':hu_top+17, 'left':hu_left-115}).show();
	}, function(){
		$('#tooltip14_1').hide();
	});

	/**
	 * 확대보기아이콘
	**/
	var icon_zoom_val = true;
	$('.pic480x480').bind('mouseenter', function(){
		icon_zoom_val = false;
		if (!icon_zoom_val) {
			$('.ico_zoomWrap').hide();
		}
	})
	$('#container').bind('mouseenter', function(){
		icon_zoom_val = true;
		if (icon_zoom_val) {
			$('.ico_zoomWrap').show();
		}
	})

	/**
	 * 관련상품 (함께 구매하면 참 좋은 상품)
	**/
	var btn_detail_toggle = $('#btn_detail_toggle');
	var relatedProduct = $('#relatedProduct');
	btn_detail_toggle.bind('click', function(e){
		e.preventDefault();
		if ($(this).is('.off'))	{
			relatedProduct.fadeIn();
			$(this).find('img').attr('src',default_image_url+'hmall/co/btn_detail_toggle_on.gif');
			$(this).removeClass();
		} else {
			relatedProduct.hide();
			$(this).find('img').attr('src',default_image_url+'hmall/co/btn_detail_toggle_off.gif');
			$(this).addClass('off');
		};
	});

	//call_tooltip_ship
	$('.call_tooltip_ship').bind('mouseover', function(e){
		var posX = e.pageX,
			posY = e.pageY;
		var position_x = $(this).offset().left;
		var position_y = $(this).parent().offset().top;
		$('#tooltip_ship').css({left:position_x-190, top:position_y+23}).show();
	})
	$('.call_tooltip_ship').bind('mouseleave', function(e){
		$('#tooltip_ship').hide();
	})
	//대상 제휴카드보기 1225
	$('.call_tooltip4').bind('mouseover', function(e){
		var posX = parseInt($(this).offset().left),
			posY = parseInt($(this).offset().top),
			h = $(this).height();
		//alert(posY);
		$('#tooltip4').attr('style','left:'+posX+'px; top:'+(posY+h)+'px; display:block');
	})
	$('.call_tooltip4').bind('mouseleave', function(e){
		$('#tooltip4').hide();
	})

	//고객평가 높이조절
	var td_h = $('.product_summary table td:eq(0)').height();
	if (td_h > 40) {
		$('.customerSky').css('margin-top','20px')
	}
	$('.customerSky').mouseleave(function(){
		$('#tooltip10').hide();
	})
	$('.whiteBox .tit2, .whiteBox .tit2_cont').each(function(){
		$('.leftcsutom_wrap').mouseover(function(e){
			var posX = e.pageX,
			    posY = e.pageY,
			    top = $(this).offset().top,
			    offsetTop = $('.customerSky').offset().top;

			var tit2Txt = "";
			var evalFullCont = "";
				tit2Txt = $(this).children('.tit2').text();
				evalFullCont = $(this).children('.evalFullCont').text();

			$('#tooltip10').css({display:'block', top:top - offsetTop-110});
			$('#tooltip10 .tit3').text(tit2Txt);
			$('#tooltip10 .tit3_cont').text(evalFullCont);
		});
	})

	$('.tooltip a.close').click(function(e){
		e.preventDefault();
		$('#tooltip10').hide();
	})
	$('#tooltip10').bind('mouseleave', function(){
		$(this).hide();
	})

	$('#tooltip14call').hover(function(e){
		var posX = e.pageX,
			posY = e.pageY;
		$('#tooltip14').show().css({'left':posX-150,'top':posY+10});
	},function(){
		$('#tooltip14').hide();
	});
	$('.attrSelectCall').click(function(e){
		e.preventDefault();
		var posX = e.pageX,
			posY = e.pageY;
		$('#attrSelect').show().css({'left':posX,'top':posY+10});
	})

	// 150911 - 상품상세 메뉴 스크롤시 고정 - rlatkdals
	if($("#detail_cont_1, #sstpl_cont_1").length > 0){
		$(".body").append("<div id='fixedAnchorDiv' style='position:fixed; top:0; z-index:9999999; width:991px; height:35px; background:#FFF; margin:0 auto; display:none'></div>");
		$(window).scroll(function(){
			var window_scrollTop = $(window).scrollTop(), $fixedAnchorDiv = $("#fixedAnchorDiv"), $detail_cont_1 = $("#detail_cont_1, #sstpl_cont_1"), $detail_cont_2 = $("#detail_cont_2, #sstpl_cont_2"), $detail_cont_3 = $("#detail_cont_3, #sstpl_cont_3"), $detail_cont_4 = $("#detail_cont_4, #sstpl_cont_4"), $detail_cont_5 = $("#detail_cont_5, #sstpl_cont_5");
			
			if(($detail_cont_1.length > 0) && (window_scrollTop < $detail_cont_1.offset().top)){
				$fixedAnchorDiv.css({ display : "none" }).empty();
			} else if((($detail_cont_1.length > 0) && (window_scrollTop >= $detail_cont_1.offset().top)) && (($detail_cont_2.length > 0) && (window_scrollTop < $detail_cont_2.offset().top))){
				$fixedAnchorDiv.css({ display : "block" }).html($detail_cont_1.children(".tab_detailUL2Wrap").clone());
			} else if((($detail_cont_2.length > 0) && (window_scrollTop >= $detail_cont_2.offset().top)) && (($detail_cont_3.length > 0) && (window_scrollTop < $detail_cont_3.offset().top))){
				$fixedAnchorDiv.css({ display : "block" }).html($detail_cont_2.children(".tab_detailUL2Wrap").clone());
			} 
			
			if($detail_cont_4.length > 0){
				if((($detail_cont_3.length > 0) && (window_scrollTop >= $detail_cont_3.offset().top)) && (($detail_cont_4.length > 0) && (window_scrollTop < $detail_cont_4.offset().top))){
					$fixedAnchorDiv.css({ display : "block" }).html($detail_cont_3.children(".tab_detailUL2Wrap").clone());
				}
			}
			
			if($detail_cont_4.length < 1){
				if(($detail_cont_3.length > 0) && (window_scrollTop >= $detail_cont_3.offset().top)){
					$fixedAnchorDiv.css({ display : "block" }).html($detail_cont_3.children(".tab_detailUL2Wrap").clone());
				}
			}
			
			if($detail_cont_5.length > 0){
				if((($detail_cont_4.length > 0) && (window_scrollTop >= $detail_cont_4.offset().top)) && (($detail_cont_5.length > 0) && (window_scrollTop < $detail_cont_5.offset().top))){
					$fixedAnchorDiv.css({ display : "block" }).html($detail_cont_4.children(".tab_detailUL2Wrap").clone());
				}
				if(window_scrollTop >= $detail_cont_5.offset().top){
					$fixedAnchorDiv.css({ display : "block" }).html($detail_cont_5.children(".tab_detailUL2Wrap").clone());
				}
			}
			
			if($detail_cont_5.length < 1){
				if(($detail_cont_4.length > 0) && (window_scrollTop >= $detail_cont_4.offset().top)){
					$fixedAnchorDiv.css({ display : "block" }).html($detail_cont_4.children(".tab_detailUL2Wrap").clone());
				}
			}
		});
	}
});

function easySelect(){
/* 151202 - 일반상품 간편선택 반영으로 미호출 - rlatkdals
	if ($('.tab_detailUL2Wrap').length != 0) {
		var detail_tab1 = $('.tab_detailUL2Wrap:eq(0)').offset().top,
			detail_tab2 = $('.tab_detailUL2Wrap:eq(2)').offset().top;
	}
	$(window).scroll(function(){
		var defaultTop = (setHeight > 0)? setHeight + $(document).scrollTop() : 0;
		if (detail_tab1 < defaultTop + $(document).scrollTop() + 200 && detail_tab2 > defaultTop + $(document).scrollTop() + 200 && $(document).width() > 1366) {
			$('.easySelect').show();
		} else {
			$('.easySelect').hide();
		}
	})
	if ($.browser.version != 6.0) {
		$(window).resize(function(){
			if ($(document).width() < 1366) {
				$('.easySelect').hide();
			} else if ($(document).width() > 1366 && detail_tab1 < $(document).scrollTop() && detail_tab2 > $(document).scrollTop() + 200) {
				$('.easySelect').show();
			}
		})
	}

	$('#easySelect').toggle(function(){
		$('.easySelectCont').show();
		var swapImg = $(this).children('img').attr('src').replace('_off.gif','_on.gif');
		$(this).children('img').attr('src',swapImg)
	},function(){
		$('.easySelectCont').hide();
		var swapImg = $(this).children('img').attr('src').replace('_on.gif','_off.gif');
		$(this).children('img').attr('src',swapImg)
	})
	//간편선택 스크롤
	if ($(".detail_contWrap").length != 0) {
		var cssTop = parseInt($(".detail_contWrap").offset().top);
		$(window).scroll(function(){
			var curr_position = $(window).scrollTop();
			if (cssTop < curr_position){
				var gapTop = curr_position - cssTop;
				$(".easySelect").stop().animate({"top":gapTop+50},500);
			} else {
				$('.easySelect').css({'top':0, 'display':'none'});
			}
		});
	}
	//
	if ($('.product_detailUL2').length != 0) {
		var limitTop = $('.product_detailUL2:eq(0)').offset().top;
	}
*/
}

var L_side_doubleCheck = function(){
	//if ($(document).width() < 1600) {	// 20131202 - RES Crossbrowsing - K_Sangmin
	if (document.documentElement.clientWidth < 1583) {
		var rgx = new RegExp('/front/(cca/)|(ccd/)|(cua/)|(mp)|(odb/)|(oda/)','g');
		var lSideBarFilter  = rgx.test(locationHref);
		//if ( !lSideBarFilter ) $('.aside_L, .sideL, .skyarea').hide();	// 20131202 - 숨김대상 중 .skyarea 제외 - K_Sangmin
		if ( !lSideBarFilter ) $('.aside_L, .sideL').hide();
	}
}

$(window).load(function(){
	//easySelect();	// 1510 - 간편선택 테스트로 임시 제거
	L_side_doubleCheck();
});

/*
	2014.05.13 민수영
	미리보기 팝업 썸네일 이미지 롤링 
	미리보기에만 적용되도록 검색(/front/pde/search.do) 및 매장(/front/dpa/searchSectItem.do)로 진입할경우
	예외 처리
*/

var preview_rgx = new RegExp('(/front/dpa/searchSectItem.do)|(/front/pde/search.do)','g');
var preview_Filter = preview_rgx.test(locationHref);
if ( preview_Filter ){
	if ($('.productGalleryUL').length != 0) {
		var slideBox = $('.productGalleryUL')
		var botton_prev8 = $('.productGallery > #btn_prev1');
		var botton_next8 = $('.productGallery > #btn_next1');
		var botton_stop = $('#controlStop');
		var sumList = $('.productGalleryUL>li');
		var li_width = $('.productGalleryUL li').outerWidth() + 2;
		var max = $('.productGalleryUL li').size();
		var galleryBigImg = $('.cloudzoom');
		var cnt = 7;
		var count = 0;

		if($('.productGallery li').size() >= cnt) {
			botton_prev8.show();
			botton_next8.show().addClass('on')
		}
		slideBox.css({width:(li_width * max) +"px",position:'absolute'})
		sumList.filter(':first').addClass('active');
		$('.productGalleryUL').width();

		sumList.bind('mouseenter', function(){
			var num = $(this).index()
			activeThumbnail(num);
		});
		botton_prev8.bind('click',function(e){
			if (!$(this).hasClass('on')) return false;
			e.preventDefault();
			rollingProduct(count-1)
		})

		botton_next8.bind('click',function(e){
			if (!$(this).hasClass('on')) return false;
			e.preventDefault();
			rollingProduct(count+1)
		})

		function rollingProduct(n){
			var index = n;
			var current = sumList.filter(':eq('+index+')').find('>a')
			if (index > cnt-1) {
				slideBox.css({"left":-(li_width * cnt)+"px"});
			}else{
				slideBox.css({left:0});
			}
			checkArrow(index)
			sumList.removeClass('active');
			current.addClass('active');
			current.mouseover();
			count = index;
		};

		function activeThumbnail(num){
			sumList.removeClass('active');
			sumList.filter(':eq('+num+')').addClass('active');
			count = num
			checkArrow(count)
		};

		function checkArrow(index){
			if (index <= 0) {
				botton_prev8.removeClass('on')
			}else if (max-1 <= index) {
				botton_next8.removeClass('on')
			}else{
				botton_prev8.addClass('on')
				botton_next8.addClass('on')
			}
		}
	}
}

// MAC 색상 미리보기 레이어
$(document).on("mouseenter mouseleave", ".mac_Pickcolor > li", function(e){
	var $color_Tooltip = $(this).children(".color_Tooltip");
	if(e.type == "mouseenter") $color_Tooltip.css("display", "block");
	else $color_Tooltip.css("display", "none");
});