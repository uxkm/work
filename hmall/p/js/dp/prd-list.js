$(document)
	.on('click', '.pl_itemlist_itemslide_pics li', plGotoSlide)
	.on('click', '.pl_itemlist_itemslide_arr', plSlideMove)
	.on('click', '.pl_btn_openrecomm', plRecommendTags)
	.on('click', '.pl_main_category_tab', plCategoryTabs)
	.on('click', '.pl_main_category_pages > a._goPage', plGoPage)
	.on('click', '._btn_viewcount', plViewCount)
	.on('click', '._btn_deptsel', plDeptsel)	
	.on('click', 'html', plWindowClose)
	.on('click', '.pl_main_category_sorting > a', plSortingList)
	.on('click', '.pl_brands_brandlist li a', plBrandsSelect)
	.on('click', '.pl_brands ._btn_close', plBrandsClose);

function plGotoSlide() {
	var obj = $(this);	
	var src = obj.find('img').attr('src');
	var srcbig = src.indexOf("adult") > 0 ? src.slice(0, -11) + '480x480' + src.slice(-4) : src.slice(0, -7) + '480' + src.slice(-4);   // 180524 - 19세 썸네일 표시 추가 - rlatkdals
	obj.addClass('_active').siblings().removeClass('_active');
	obj.parents('.pl_itemlist_itemslide').siblings('a').find('.pl_itemlist_img img').attr('src', srcbig);	
	obj.parents('.pl_itemlist_itemslide_pics').siblings('.pl_itemlist_itemslide_arr').removeClass('_noleft');
	
	if (obj.index() == 0) obj.parents('.pl_itemlist_itemslide_pics').siblings('.pl_itemlist_itemslide_arr._left').addClass('_noleft');
	else if (obj.index() == obj.siblings().length) obj.parents('.pl_itemlist_itemslide_pics').siblings('.pl_itemlist_itemslide_arr._right').addClass('_noleft');
}

function plSlideMove() {
	var ci = $(this).siblings('.pl_itemlist_itemslide_pics').find('li._active').index();
	var slider = $(this).siblings('.pl_itemlist_itemslide_pics').find('ul');
	var slide = $(this).siblings('.pl_itemlist_itemslide_pics').find('li');
	var itemul = $(this).parents('.pl_itemlist');
	
	var itemmg = 61;
	var columns;
	if (itemul.hasClass('_3col')) columns = 4;
	else if (itemul.hasClass('_4col')) columns = 3;
	else if (itemul.hasClass('_5col')) columns = 2;
	else if (itemul.hasClass('_atype')) {
		columns = 7;
		itemmg = 76;
	}
	
	var firsti = parseInt(slider.css('margin-left')) / itemmg * -1;
	var lasti = firsti + columns - 1;

	if ($(this).hasClass('_left')) {
		if (ci > 0) {
			slide.eq(ci-1).click();
			if (firsti == ci) {
				slider.stop().animate({
					marginLeft: '+=' + itemmg
				}, 100);
			}
		}
	} else {
		if (ci < slide.length-1) {
			slide.eq(ci+1).click();
			if (lasti == ci) {
				slider.stop().animate({
					marginLeft: '-=' + itemmg
				}, 100);
			}
		}
	}
}

function plRecommendTags() {
	if($(this).parent().hasClass('_active')){
		$(this).parent().removeClass('_active');
	} else {
		$(this).parent().addClass('_active');
	}
}

function plCategoryTabs() {
	// 검색 개수가 0개인 경우 탭 동작 막음
	if($(this).find("em").text().replace(/[^0-9]/g,"") == 0) return false;
	
	$(this).addClass('_active').siblings().removeClass('_active');
	$(this).parent().siblings('.pl_main_category_tabcontents').children('li').eq($(this).index()).addClass('_active').siblings().removeClass('_active');
	
	return false;
}

function plGoPage() {
	$(this).addClass('_active').siblings('._goPage').removeClass('_active');
}

function plViewCount() {
	$(this).siblings('._window_viewcount').addClass('_active');
	
	return false;
}

function plDeptsel() {
	$(this).siblings('._window_deptsel').addClass('_active');
	
	return false;
}

function plWindowClose(e) {
	if ($('._window_viewcount').hasClass('_active')) $('._window_viewcount').removeClass('_active');
	if (!$(e.target).parents().hasClass('_window_deptsel') && $('._window_deptsel').hasClass('_active')) $('._window_deptsel').removeClass('_active');
}

var rgx1 = /\D/g;
var rgx2 = /(\d+)(\d{3})/;

function getNumber(obj) {
     var num01, num02;
     num01 = obj.value;
     num02 = num01.replace(rgx1,"");
     num01 = setComma(num02);
     obj.value =  num01;
}

function setComma(inNum) {     
     var outNum;
     outNum = inNum;
     while (rgx2.test(outNum)) {
          outNum = outNum.replace(rgx2, '$1' + ',' + '$2');
      }
     return outNum;
}

function plSortingList() {
	$(this).addClass('_active').siblings('a').removeClass('_active');
	
	return false;
}

function plBrandsClose() {
	$('.pl_dim').removeClass('_active');
	$("html, body").removeAttr("style");
	
	return false;
}

function plBrandsOpen() {
	$('.pl_dim').removeAttr("style").addClass('_active');
	$("html, body").css({ overflow : "hidden" });
	$(".pl_brands").css({ marginTop : -($(".pl_brands").outerHeight() / 2) });
	
	if ($("#pl_brands_show").find('#pl_brands_show-bar').length == 0) {
		$("#pl_brands_show").sp_customscroll({
			scrollbarRadius : true,
			scrollbarAnimate : true,
			scrollbarArrowColor : 'e5e5e5',
			scrollbarBodyColor : 'e5e5e5',
			scrollbarBackgroundColor : 'fff'
		});
	}
	
	return false;
}

function plBrandsSelect() {
	if(!$(this).hasClass('_disabled')) {
		$(this).addClass('_active').parent().siblings().find('a').removeClass('_active');
		var brname = $(this).text();
		if (brname == '전체'){
			$('#pl_brands_show .custom-scroll-content').css({top:0});
			$('#pl_brands_show .scroll-anchor').css({top:0});
		} else {
			$('#pl_brands_show h1').each(function(){
				if($(this).text() == brname){
					var thisTop = $(this).position().top;
					var listSize = $(this).parents('.custom-scroll-content').innerHeight();
					var barBgSize = $('#pl_brands_show-bar').height();
					var barTop = barBgSize * thisTop / listSize;
					var limit = listSize - thisTop;
					var wrapSize = $('#pl_brands_show').height();
					var limitTop = listSize - wrapSize;
					var limitBarTop = barBgSize * limitTop / listSize;
					
					if (limit > wrapSize) {
						$('#pl_brands_show .custom-scroll-content').css({top:-thisTop});
						$('#pl_brands_show .scroll-anchor').css({top:barTop});
					} else {
						$('#pl_brands_show .custom-scroll-content').css({top:-limitTop});
						$('#pl_brands_show .scroll-anchor').css({top:limitBarTop});
					}
				}
			});
		}
	}
	
	return false;
}

// 171216 - codeThumb - rlatkdals
// 180504 - 성인용품 - dlsvy
// 180524 - 19세 썸네일 표시 추가 - rlatkdals
var pl_itemlist_itemslide = '';
$(document).on("mouseenter", "li[data-thumb]", function(e){
    var _adultChk = $(this).data("thumb").adult;
    var _prvwImgArray = $(this).data("thumb").prvwImgArray;
    var _prvwImgLength = _prvwImgArray.length;

    if(_prvwImgLength > 1){
        $(this).attr({ "class" : "visible-thumb" });

        if($(this).find(".pl_itemlist_itemslide").length == 0){
            $(this).children(".pl_img_overlay").after($("<span />").attr({ "class" : "pl_itemlist_itemslide" }).append($("<a />").attr({ href : "javascript:;", "class" : "pl_itemlist_itemslide_arr _left _noleft" }).append("<i />")).append($("<span />").attr({ "class" : "pl_itemlist_itemslide_pics" }).append($("<ul />"))).append($("<a />").attr({ href : "javascript:;", "class" : "pl_itemlist_itemslide_arr _right" }).append("<i />")));
        }

        for(i=0; i<_prvwImgLength; i++){
			var _code = _prvwImgArray[i].imgNm.split("_")[0];
			// imageServer 없음 임시 이미지로 대체
			// var _makeUrl = (_adultChk == "Y") ? imageServer + _prvwImgArray[i].imgNm : imageServer + "/static/" + _code.substring(7,8) + "/" + _code.substring(6,7) + "/" + _code.substring(4,6) + "/" + _code.substring(2,4) + "/" + _prvwImgArray[i].imgNm;
			var _makeUrl = "http://image.hyundaihmall.com/static/7/4/79/96/2096794777_0_300.jpg";
            $(this).find(".pl_itemlist_itemslide_pics > ul").append("<li class='"+ ((i==0) ? '_active' : '') +"'><img src='"+ _makeUrl +"' alt='"+ _prvwImgArray[i].alt +"'  onerror='noImage(this, \"http://image.hyundaihmall.com/hmall/pd/no_image_170x170.jpg\")' /></li>");
        }
    }
}).on("mouseleave", "li[data-thumb]", function(e){
	if($(this).find(".pl_itemlist_itemslide").length > 0) $(this).find(".pl_itemlist_itemslide").remove();
});

// 181122 - 검색결과 카테고리 더보기 - rlatkdals
$(document).on("click", "._btn_morebrand._category", function(){

    if($(".pl_lnb_listing._noscroll").find(".none").is(":visible") === false){
        $(this).text("숨기기 -")
        $(".pl_lnb_listing._noscroll").find(".none").css({ display : "block" });
    } else {
        $(this).text("더보기 +")
        $(".pl_lnb_listing._noscroll").find(".none").removeAttr("style");
    }

    return false;
});