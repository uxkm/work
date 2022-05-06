var default_image_url, locationHref = document.location.href;
var previewMainPic_idx = 1;

window.setHeight = 0;

// 경로 셋팅
if (locationHref.indexOf("https") > -1) {
    default_image_url = "https://imagessl.hyundaihmall.com/";
} else if (locationHref.indexOf("http") > -1) {
    default_image_url = "http://image.hyundaihmall.com/";
};

// 제휴사 헤더 노출
var ReferCode = ($.cookie("EHReferCode"))?( $.cookie("EHReferCode") ): false
var pEntrNo = ($.cookie("EHPentrNo"))?( $.cookie("EHPentrNo") ): false
if(pEntrNo != false || (ReferCode != 800 && ReferCode != false)){
    $(window).load(function(){
        if($(".extra_bannerWrap").length > 0){
            $(".extra_bannerWrap").addClass("_visible");
        }
    });
}

function framePopOpen(pop){
	window.open(pop.url, pop.names, pop.option);
}

function event_botton_AC9(){
	var botton_prev9 = $('#btn_prev9');
	var botton_next9 = $('#btn_next9');

	botton_prev9.click(event_prev9);
	botton_next9.click(event_next9);
}

function event_prev9(){
	if ($(".smallGalleryUL").css('left') == '-366px') {
		$(".smallGalleryUL").css('left',0);
	}
	return false;
}

function event_next9(){
	if ($('.smallGalleryUL li').size() > 6) {
		$(".smallGalleryUL").css('left',-366);
	} else {
		return false;
	}
	return false;
}

function event_botton_AC11(){
	var botton_prev11 = $('#btn_prev11');
	var botton_next11 = $('#btn_next11');
	var botton_stop = $('#controlStop');

	botton_prev11.click(event_prev11);
	botton_next11.click(event_next11);

	botton_stop.click(event_stop);

	if(event_botton_auto == "Y"){
		event_play();
	}
}

function event_prev11(){
	// 상세이미지
	if ($('.bigGalleryUL li').hasClass('on')) {
		var curLI = $('.bigGalleryUL li[class=on]')
	}
	var offsetPos = $('.bigGalleryULWrap').offset().left;
	var gap = curLI.offset().left - offsetPos;

	if (previewMainPic_idx > 1) {
		previewMainPic_idx--;
		$('[id^=placeHolder_]').hide();
		$('#placeHolder_'+previewMainPic_idx).show();
		curLI.removeClass('on').prev().addClass('on');

		if (gap == 0) {
			preview_prevNext('880');
		}
	}
	return false;
}

function event_next11() {
	//상세이미지
	if ($('.bigGalleryUL li').hasClass('on')) {
		var curLI = $('.bigGalleryUL li[class=on]')
	}
	var offsetPos = $('.bigGalleryULWrap').offset().left;
	var gap = curLI.offset().left - offsetPos;

	if (previewMainPic_idx < $('.bigGalleryUL li').size()) {
		previewMainPic_idx++;
		$('[id^=placeHolder_]').hide();
		$('#placeHolder_'+previewMainPic_idx).show();
		curLI.removeClass('on').next().addClass('on');

		if ((previewMainPic_idx % 8) == 1 && gap == 770) {
			preview_prevNext('-880');
		}
	}
	return false;
}

var bigGalleryWidth = 0;
function preview_prevNext(width) {
	width = Number(width);
	var move_obj = $(".bigGalleryUL");
	var last_obj = $(".bigGalleryUL li:last-child").offset().left;
	var offsetPos = $('.bigGalleryULWrap').offset().left;
	var lastPos = last_obj - offsetPos;

	if (width == 880 && move_obj.position().left == 0) {
		return false;
	}
	if (width == -880 && lastPos < 880) {
		return false;
	}
	bigGalleryWidth = bigGalleryWidth + (width);
	move_obj.animate({left:bigGalleryWidth},100);
}

// lnb 하단 배너 셋팅
function lnbBannerSetting(){
	var sideCont = $('div.rt_con'),
		sideContHeight = sideCont.outerHeight(),
		lnbArea = $('.h_rental'),
		bannerBoxArea = $('ul.banner_con2'),
		bannerBoxHeight = bannerBoxArea.outerHeight(),
		bannerHeight = bannerBoxArea.children('li').outerHeight();

		var	margin = sideContHeight -  (lnbArea.outerHeight() + lnbArea.position().top) - 200;
		if (margin < bannerHeight) return false;
		if ( bannerBoxHeight >  margin ){
			var remove_cnt = Math.floor((bannerBoxHeight -  margin) / bannerHeight);
			for (var i = remove_cnt - 1; i >= 0; i--) {
				bannerBoxArea.children('li').filter(':last').remove();
			};
		};
	$('ul.banner_con2').css({"visibility":"visible"});
};

// 레이어팝업 닫기
function closeLayerPop(pop){
	pop.parents('div.popup').hide();
};

$(window).on("load", function(){
	bannerLength();
	rank();
});

// ie6 z-index 버그 [ select box ] 를 위한 아이프레임 생성
function ie6layerBg(x, y, target){
	var x = x,
		y = y;
	$('body').append('<iframe class="ie6Layer">');
	$('.ie6Layer').css({"width":target.outerWidth()+"px","height":target.outerHeight()+"px","position":"absolute","top":y+"px","left":x+"px","z-index":"10","background":"red"});
};

function rank(){
	var colorBox = $('.colors'),
		colors = colorBox.find('> span > label'),
		rankBox = $('#rank'),
		$textBox = $('#rollingRank'),
		$textList = $('#rollingRank li'),
		tabSizeBox = $('.autoSizeTab'),
		tabSize = $('.autoSizeTab > li'),
		tabSizeNum = 0,
		tabResizing = 0,
		maxSize = tabSizeBox.outerWidth(),
		textListHeight = parseInt($textList.height()),
		nBannerCount = $textList.length,
		nCurrentIndex = 0,
		DURATION = 300,
		TIMER = 2000,
		nTimerID = 0,
		sTimerID = 0;

	setBannerPosition();
	startTextBanner();
	tabSize.each(function(){
		tabSizeNum+= $(this).outerWidth();
	});

	if (colorBox.length != 0) {
		colors.bind('click', function(){
			var $this = $(this),
				chkBox = $this.prev('input[type="checkbox"]');
			if ($this.attr('class') != 'active') {
				$this.attr('class','active');
				chkBox.attr('checked','checked');
			}else{
				$this.removeAttr('class');
				chkBox.removeAttr('checked');
			};
		});
	}

	// 마우스 오버시 롤링 멈추고 팝업 형태로 변환
	rankBox.bind('mouseenter', function(){
		var $this = $(this);
		if ( nTimerID != 0 ){
			clearInterval(nTimerID);
			nTimerID = 0;
		};
		sTimerID = setTimeout(rankView, 500);
	});

	// 마우스 아웃시 롤링 형태로 변환
	rankBox.bind('mouseleave', function(){
		$(this).attr('class','listStyle');
		clearTimeout(sTimerID)
		setBannerPosition();
		if ( nTimerID == 0 ){
			nTimerID = setInterval(showBannerInterval, TIMER);
		};
	});

	function rankView(target){
		rankBox.attr('class','popStyle')
		setBannerPositionPopStyle();
	}

	//텍스트 베너 초기화
	function setBannerPosition(){
		$textList.css({"top":textListHeight+"px","position":"absolute"})
		$textList.eq(nCurrentIndex).css({"top":"0"})
	}
	//텍스트 베너 초기화
	function setBannerPositionPopStyle(){
		$textList.css({"position":"static"})
	}
	//타이머 실행
	function startTextBanner(){
		if ( nTimerID == 0 ){
			nTimerID = setInterval(showBannerInterval, TIMER);
		}
	};
	//증가값 설정
	function showBannerInterval(){
		if ( nCurrentIndex+1 >= nBannerCount ){
			showBannerAt(0);
		}else{
			showBannerAt(nCurrentIndex+1);
		};
	};
	//베너 애니메이션
	function showBannerAt(nIndex){
		if ( nCurrentIndex ==nIndex || nIndex<0 || nIndex>=nBannerCount ) return false;
		var $currentBanner =$textList.eq(nCurrentIndex);
		var $nextBanner = $textList.eq(nIndex);
		$currentBanner.animate({top:-textListHeight},DURATION);
		$nextBanner.css({top:textListHeight});
		$nextBanner.animate({top:0},DURATION);
		nCurrentIndex = nIndex;
	};
}

function checkLength(){
	var sCont = $('#sCont');
	var sContList = sCont.find('> dl');
	var sMinH = [24, 48, 72];
	var maxHeight;
	sContList.each(function(){
		var $this = $(this);
		var listConts = $this.find('> dd > ul > li').length;
		
		if(6 > listConts) maxHeight = 0;
		else if(listConts >= 6 && listConts <= 10) maxHeight = 1;
		else if(listConts > 10) maxHeight = 2;

		$this.find('dd').css({"height":sMinH[maxHeight]+"px"});
		if (listConts > 15) {
				$this.find('.pBtn').show();	// 더보기 버튼
			} else {
				$this.find('.pBtn').hide();	// 더보기 버튼
			}
	});
}

var chk_delBrand = false;
function checkBrand(){
	var sCont = $(".brandList");
	var sCont_Divide = $('.sect_divide');
	var sContList = sCont.find('> span');
	var maxList = 18;
		
	// 혜택이 모두 없고, 브랜드 리스트가 maxList보다 적을때
	if($("span.sel_benefitlist").children().length <= 0 && $("span#chocCondClosePrc").children().length <= 0 && $("span.sel_colorlist").children().length <= 0 && sContList.length < maxList) {
		if(sContList.length <= 6){	// 브랜드 리스트가 6개 이하일때 브랜드 리스트의 일부 클래스 제거
			sContList.removeClass("mb10");
		}
		sCont_Divide.hide();
	}

	if(sCont.length > 0){
		if (sContList.length > maxList) {
			sCont_Divide.find('span.pBtn').show();

			// 브랜드 제거시 건너뜀
			if(chk_delBrand == false) $('.sel_brandlist').height('65').css({ overflow : "hidden" });
		} else {
			if(sContList.length == 0) {	// 브랜드 리스트가 없고, 헤택만 존재할 경우
				$('.selOpt_box').removeClass('mt10');
				$('.sel_brandlist').remove();
				sCont_Divide.hide();
			} else if($("span.sel_benefitlist").children().length > 0 || $("span#chocCondClosePrc").children().length > 0 || $("span.sel_colorlist").children().length > 0){
				$('.selOpt_box').removeClass('mb10');
				sCont_Divide.show();	// 혜택이 어느것이라도 존재할 경우
			} else {
				sCont_Divide.hide();	// 혜택 선택이 없이 진입할 경우
			}

			sCont_Divide.find('span.pBtn').hide();
			$('.sel_brandlist').height(sCont.outerHeight()).css({ overflow : "none" });
		}
	}
}

// 공통 토글
function toggle( toggleTarget, minHeight, maxHeight, img, toggleBack , ani){

	var	target = toggleTarget,
		targetH = target.outerHeight(),
		min = minHeight,
		max = maxHeight,
		dur = 500,
		easing = 'easeOutQuart',
		height;
		var multiElem = [];
	// 토글 접기 여부
	if (toggleBack) {
    	// 토글 컨텐츠가 최소 높이면 컨텐츠 펼침
	    if ( targetH == min ) {

				if (target.length > 1) {
	
					target.each(function(n){
						multiElem[n] = $(this).children().outerHeight()
					})
					height = multiElem;
				}else{
					height = max;
				}
        if (img) {
            img.attr('src', img.attr('src').replace('.gif','_on.gif'));
        };
	    // 토글이 펼쳐진 경우 기본값으로 복원
	    } else {
	        height = min;
				if (target.length > 1) {
					target.each(function(n){
						multiElem[n] = minHeight;
					})
					height = multiElem;
				}else{
					height = min;
				}
        if (img) {
            img.attr('src', img.attr('src').replace('_on.gif','.gif'));
        };
	    };
	// 토글 접기 기능 없을시
	}else{
		height = max;
	}
	
	if (ani) {

		if (target.length > 1) {
			for (var i = height.length - 1; i >= 0; i--) {
				target.eq(i).css({"height":height[i]+"px"});
			};
		}else{
			target.css({"height":height+"px"}); //높이가 변하는거지.
		}
	}else{
		target.stop().animate({"height":height+"px"}, dur, easing,function(){
			$('div.connect dl').addClass('posR'); //ie7 버그 해결용도
			//$('div.connect dl').css('position','relative');
		});
	}

};

function searchLnbAlign(){
	var menuLength = $('.listToggle > ul:not(".spcList") > li').length;
	var menuHeight = $('.listToggle > ul > li').outerHeight();
	var toggleHeight = '';
	var maxViewMenu = 10;
	var totalMax = 20;
	var target = '';
	var menuArr = [];
	if (menuLength > totalMax) {
		$('.detailViewBtn').show();
		$('.listToggle').each(function(n){
			var $this = $(this);
			var len = $this.find(' > ul:not(".spcList") > li').length;
			menuArr[n] = len;
		});

		if ( menuArr[0] > maxViewMenu && menuArr[1] > maxViewMenu ) {
			toggleHeight = (menuHeight*maxViewMenu)
			$('.listToggle').css({"height": toggleHeight + "px"});
		}else{
			if (menuArr[0] > menuArr[1]) {
				toggleHeight = (totalMax - menuArr[1]) * menuHeight;
				$('.listToggle').eq(0).css({"height": toggleHeight + "px"});

			}else{
				toggleHeight = (totalMax - menuArr[0]) * menuHeight;
				$('.listToggle').eq(1).css({"height": (toggleHeight) + "px"});
			};
		};
	}
}

// 주문서작성 - 스크롤따라 움직이는 배너
function resizngPaymentArea(){
    if ($('.payment_info_wrap').length != 0 && $.browser.version != 6.0) {
    	var $paymentWrap = $('.payment'), $payment_info_wrap = $('.payment_info_wrap');
    	var cssTop = $paymentWrap.offset().top;
    	
    	$(window).scroll(function(){
			var posTop = $(window).scrollTop();
			if (cssTop < (posTop+40)){
				if($(".payment").is(".repayment") == false) $payment_info_wrap.attr('style','position:fixed; top:'+(setHeight+40)+'px; left:50%; margin-left:228px');
			} else {
				$payment_info_wrap.removeAttr("style");
			}
			
			var extraBannerHeight = 0;	// 제휴사 헤더 길이 체크 값
			if($(".extra_bannerWrap").length > 0) extraBannerHeight = $(".extra_bannerWrap").outerHeight();	// 제휴사 헤더 길이 체크 값
			
			if(($payment_info_wrap.offset().top + $payment_info_wrap.outerHeight()) > $('#footer').offset().top){
				var bottomFixed = (((posTop-setHeight) + extraBannerHeight + $(window).outerHeight()) - $('#footer').offset().top ) + 50;
				$payment_info_wrap.attr('style','position:fixed;bottom:'+bottomFixed+'px;left:50%;margin-left:184px');
			}
    	});
    	
    	if (cssTop > ($(window).scrollTop()+40)){
    		$payment_info_wrap.removeAttr("style");
    	}
	}
}

function winResize() {
	if (navigator.userAgent.indexOf('Chrome') > -1) {
		window.resizeTo(contentW+10, contentH+58)
	}
	window.resizeTo(1004, 520);
}

function compareGallery(num) {
 $('#detailViewjUL'+num+' > li > a').mouseover(function(e){
  e.preventDefault();

  var data1 = $(this).find('img').attr('src');

  var chkString = data1.substring(data1.length-7, data1.length);
  var chgSrc;

  if(chkString == '140.jpg'){
   chgSrc = data1.replace('140.jpg','300.jpg');
  } else if(chkString == '100.jpg'){
   chgSrc = data1.replace('100.jpg','300.jpg');
  } else if(chkString == '140.JPG'){
   chgSrc = data1.replace('140.JPG','300.JPG');
  } else if(chkString == '100.JPG'){
   chgSrc = data1.replace('140.JPG','300.JPG');
  }

  $('#placeHolderj'+num).attr('src', chgSrc);
 })
};

function showListLayer(btn){
	var layer = btn.next('div');
	layer.show();
	layer.attr('name', 'open');
	btn.css('background', 'url('+default_image_url+'hmall/co/blt15.gif) no-repeat 91% 50% #f4614d');
};

function hideListLayer(btn){
	var layer = btn.next('div');
	layer.hide();
	layer.removeAttr('name');
	btn.css('background', 'url('+default_image_url+'hmall/co/blt16.gif) no-repeat 91% 50% #f4614d');
}

//FAQ게시판
function initToggle(tabContainer) {
	triggers = tabContainer.getElementsByTagName("a");

	for(var i = 0; i < triggers.length; i++) {
		if (triggers.item(i).href.split("#")[1])
		triggers.item(i).targetEl = document.getElementById(triggers.item(i).href.split("#")[1]);

		if (!triggers.item(i).targetEl)
		continue;

		triggers.item(i).targetEl.style.display = "none";
		triggers.item(i).onclick = function () {
			this.style.fontWeight = "bold";
			this.style.letterSpacing = "-1px";
			if (tabContainer.current == this) {
				this.style.fontWeight = "normal";
				this.style.letterSpacing = "normal";
				this.targetEl.style.display = "none";
				tabContainer.current = null;
			} else {
				if (tabContainer.current) {
					tabContainer.current.style.fontWeight = "normal";
					tabContainer.current.style.letterSpacing = "normal";
					tabContainer.current.targetEl.style.display = "none";
				}
				if (navigator.appName == "Microsoft Internet Explorer"){
					this.targetEl.style.display = "table-cell";
				} else {
					this.targetEl.style.display = "table-cell";
				}
				tabContainer.current = this;
			}
			return false;
		}
	}
}

// 월 셋팅
function setMonth(){
	var month = ["1","2","3","4","5","6","7","8","9","10","11","12"]
	return month;
};

// 요일 이미지 셋팅
function setDayName(){
	var daysName = ["<img src='"+default_image_url+"hmall/co/day1.gif' alt='' />",
	                "<img src='"+default_image_url+"hmall/co/day2.gif' alt='' />",
	                "<img src='"+default_image_url+"hmall/co/day3.gif' alt='' />",
	                "<img src='"+default_image_url+"hmall/co/day4.gif' alt='' />",
	                "<img src='"+default_image_url+"hmall/co/day5.gif' alt='' />",
	                "<img src='"+default_image_url+"hmall/co/day6.gif' alt='' />",
	                "<img src='"+default_image_url+"hmall/co/day7.gif' alt='' />"];
	    return daysName;
}

//ie6 png처리
function setPng24(obj)
{
	obj.width = obj.height = 1;
	obj.className = obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src

	 +"',sizingMethod='image');"
	obj.src = '';
	return '';
}

// 배너 노출 갯수지정
function bannerLength(){
	if ($('ul.banner_con').length != 0) {
		var sideCont = $('div.rt_con'),
			sideContHeight = sideCont.outerHeight(),
			lnbArea = $('.sideMenu'),
			bannerBoxArea = $('ul.banner_con'),
			bannerBoxHeight = bannerBoxArea.outerHeight(),
			bannerHeight = bannerBoxArea.children('li').outerHeight(true);

		var	margin = sideContHeight -  (lnbArea.outerHeight() + lnbArea.position().top);
		bannerBoxArea.css({ height : $(".rt_con").outerHeight() - ($(".sideCont").outerHeight() - $(".banner_con").outerHeight()), overflow : "hidden" })
		
		var over_cnt = Math.floor(bannerBoxArea.height() / ($(".banner_con > li").outerHeight()+8));
		for (var i = (bannerBoxArea.children('li').length - 1); i >= over_cnt; i--) {
			bannerBoxArea.children('li').filter(':last').remove();
		}

		/*
			var	margin = sideContHeight -  (lnbArea.outerHeight() + lnbArea.position().top);
			if (margin < bannerHeight) return false;
			if (bannerBoxHeight >  margin){
				var remove_cnt = Math.floor((bannerBoxHeight -  margin) / bannerHeight) +1;
				
				for (var i = remove_cnt - 1; i >= 0; i--) {
					bannerBoxArea.children('li').filter(':last').remove();
				};
			};*/
		//};
		$('ul.banner_con').css({"visibility":"visible"});
	};
};

function layerview(n){
	$('[id^=divs]').hide();
	if (n != 5) {
		$('#divs'+n).show();
		$('#div'+n).siblings().removeClass('on').end().addClass('on');
	}
}

function layerclose(n){
	$('#divs'+n).hide();
	$('#div'+n).removeClass('on');
}

// url 파라미터값 가져오기
$.extend(
	{ getUrlVars: function() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('='); vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},
	getUrlVar: function(name) {
		return $.getUrlVars()[name];
	}
});

// GNB - 바로방문
var favLayer_timeChk;
$(document).on("mouseenter mouseleave", ".miniGnbBookMark", function(event){
	if(event.type == "mouseenter"){
		$(".mobile_app_wrap").hide();
		$('.layer_favorite_shadow_wrap').show();
	} else if(event.type == "mouseleave"){
		var favLayer = function(){
			$('.layer_favorite_shadow_wrap').fadeOut(50);
		}
		favLayer_timeChk = setTimeout(favLayer, 85);
	}
});

$(document).on("mouseenter mouseleave", ".layer_favorite_shadow_wrap", function(event){
	if(event.type == "mouseenter"){
		clearTimeout(favLayer_timeChk);
	} else if(event.type == "mouseleave"){
		$(this).fadeOut(50);
		$('#miniGnbOnOff').attr('class','off');
	}
});

// GNB - 모바일 앱 다운로드
$(document).on("click", ".mobile_app_download, .header-util .fl a:first", function(event){
	if(isLogin() != 'false') $(".mobile_app_wrap").show();
});

$(document).on("click", ".mobile_app_wrap .mobile_app_close", function(event){
	$(".mobile_app_wrap").hide();
	return false;
});

// GNB - 마이페이지 (로그인 전, 후)
$(document).on("click", "#miniGnbMyShopping", function(event){
	event.preventDefault();
	if ($(this).is(".on") == false) {
		$(this).addClass("on");
		$(".layer_myshopping_before_shadow_wrap").fadeIn(50);
		$(".favorite_oc img").attr("src",default_image_url+"hmall/co/favorite_close.gif");
	} else {
		$(this).removeClass("on");
		$(".layer_myshopping_before_shadow_wrap").fadeOut(50);
		$(".favorite_oc img").attr("src",default_image_url+"hmall/co/favorite_open.gif");
	}
});

$(document).on("click", "#miniGnbMyShoppingLogin", function(event){
	event.preventDefault();
	if ($(this).is(".on") == false) {
		$(this).addClass("on");
		$(".layer_myshopping_after_shadow_wrap").fadeIn(50);
		$(".favorite_oc img").attr("src",default_image_url+"hmall/co/favorite_close.gif");
	} else {
		$(this).removeClass("on");
		$(".layer_myshopping_after_shadow_wrap").fadeOut(50);
		$(".favorite_oc img").attr("src",default_image_url+"hmall/co/favorite_open.gif");
	}
})

// GNB - 마이페이지 (로그인 전, 후 나의 쇼핑등급, 계좌)
$(document).on("mouseleave", ".layer_myshopping_before_shadow_wrap", function(){
	$("#miniGnbMyShopping").removeClass("on");
	$(this).fadeOut(50);
	$(".favorite_oc img").attr("src",default_image_url+"hmall/co/favorite_open.gif");
});

// GNB - 추천검색/검색횟수/바로검색
$(document).on("mouseenter focusin", ".searchResultUL li", function(){
	$(this).siblings().css('background','#fff').end().css('background','#feefed');
});

// GNB - 추천검색/검색횟수/바로검색 레이어 닫기
$(document).on("click", "#multiSearchCloser, #multiSearchCloser2", function(){
	$(this).parent().parent().parent().hide();
});

$(document).on("mouseleave", ".layer_myshopping_after_shadow_wrap", function(){
	$("#miniGnbMyShoppingLogin").removeClass("on");
	$(this).fadeOut(50);
	$(".favorite_oc img").attr("src",default_image_url+"hmall/co/favorite_open.gif");
})

// GNB - 키보드 접근성
$(document).on("focusin", "#miniGnbMyShoppingLogin", function(){
	$(".layer_myshopping_after_shadow_wrap").fadeIn(50);
});

$(document).on("focusout", ".myshopping_before .mbli_last", function(){
	$(this).closest(".layer_myshopping_before_shadow_wrap").hide();
});

$(document).on("focusout", ".myshopping_after a:last", function(){
	$(this).closest(".layer_myshopping_after_shadow_wrap").hide();
});

$(document).on("focusout", "#gnbBg li:last", function(){
	$(".btn_gnbWrap").click();
	$("#gnb_main li.gm_01 a.depth1").focus();
});

$(document).on("focusout", "#gnb_main li:last", function(){
	$(this).closest(".gmbox").hide();
});

$(document).on("focusout", ".cateWrap li:last", function(){
	$(this).closest(".cateWrap").hide();
});

$(document).on("focusout", ".allBrandView li:last", function(){
	$(this).closest(".allBrandView").hide();
	$(".evMenu a:first").focus();
});

// 팝업
$(document).on("click", ".layer_con .btn_close > a", function(event){
	event.preventDefault();
	$(this).parent().parent().parent().hide();
	
	if ($('.modal').length != 0) {	// 모달 bg가 있는 경우 모달 BG 태그 삭제
		$('.modal').remove();
		$('html').removeAttr('style');
	} else if($('.ie6Layer').length != 0) {	// 아이프레임 BG가 있는경우 삭제
		$('.ie6Layer').remove();
		$('html').removeAttr('style');
	}
});

$(document).on("click", ".layer_content .boardBtnWrap > a", function(event){
	event.preventDefault();
	$(this).parent().parent().parent().parent().hide();
	
	if ($('.modal').length != 0) {	// 모달 bg가 있는 경우 모달 BG 태그 삭제
		$('.modal').remove();
		$('html').removeAttr('style');
	} else if($('.ie6Layer').length != 0) {	// 아이프레임 BG가 있는경우 삭제
		$('.ie6Layer').remove();
		$('html').removeAttr('style');
	}
});

$(document).on("click", ".branchBtn, .hidena", function(){
	$('.layer_con .btn_close > a').click();
	return false;
});

$(document).on("click", ".grayBorderBox .btn_close", function(event){
    if($(this).closest(".popup").length != 1){
        event.preventDefault();
        $(this).parent().hide();
    }
});

// 로그인
$(document).on("click", ".loginUL li > a", function(event){
	$('.loginUL li > a').parent().removeClass('on');
	$(this).parent().addClass('on');
	var targetID = $(this).attr('href');
	$('[id^=member]').hide();
	$(targetID).show();

	return false;
});

// 사용가능 쿠폰보기
$(document).on("click", ".useAvailCall", function(event){
	event.preventDefault();
	var posX = event.pageX,
		posY = event.pageY;
	$('#useAvail').show().css({'left':posX-250,'top':posY+10});
});

$(document).on("click", ".jjim_codi2Call", function(event){
	event.preventDefault();
	var posX = event.pageX,
		posY = event.pageY;
	$('#jjim_codi2').show().css({'left':posX-250,'top':posY-100});
});

// 마이페이지 - 주문/배송현황 혜택안내
$(document).on('mouseenter mouseleave', ".fastCancel4 a", function(e){
    if(e.type == "mouseenter"){
        $(".review-benefit-popup").show();
        $(this).addClass("on");
    }
    else {
        $(".review-benefit-popup").hide();
        $(this).removeClass("on");
    }
});

// 현재 위치 - 메뉴 레이어 노출
$(document).on("mouseenter focusin", ".locationUL a.cate", function(){
	$(".locationUL a.cate").removeClass("on");
	$(this).addClass("on");

	// 메뉴 그룹 1개이상시 구분선 표시 유무
	var subList = $(this).parent().find(".cateWrap > ul");
	if(subList.length > 1){
		subList.filter(":last").addClass("brNone");
	} else {
		subList.addClass("brNone");
	}

	// 레이어 위치 설정
	var left_pos = $(this).position().left;
	$(".cateWrap").hide();
	$(this).next(".cateWrap").css("left",left_pos).show();	
});

// 현재 위치 - 마우스 이탈시 서브레이어 숨김
$(document).on("mouseleave", ".cateWrap, .local", function(){
	$(".locationUL a.cate").removeClass("on");
	$(".cateWrap").hide();
});

// 140811 - 도서몰 제휴종료 안내 팝업 - 김상민
if (locationHref.indexOf("bookShop11st") > -1) {
	if($.cookie("book_11st") != "checked"){
		var indexOf_popup = {};
		indexOf_popup.url = "http://www.hyundaihmall.com/html/popup/coop/book_11st_close.html";
		indexOf_popup.names = "book_popup";
		indexOf_popup.option = "left=100, top=100, width=380, height=325";
		parent.framePopOpen(indexOf_popup);
	}
}