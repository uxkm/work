var before_bgColorCode, before_GetColorCode, SplitColorCode, GetColorCode, swapBgFlag = false;
function swapBgColor(){
	if($(".headline_bgcolor .chgColor2").css("opacity") == 1){
		$(".headline_bgcolor > .chgColor1").css({ position : "absolute", width : "100%", height : 390, backgroundColor : GetColorCode, zIndex : 0, opacity : 0 }).stop().animate({ opacity : 1 }, 450).siblings(".chgColor2").css({ position : "absolute", width : "100%", height : 390, backgroundColor : before_GetColorCode, zIndex : -1, opacity : 1 }).stop().animate({ opacity : 0 }, 450);
	} else {
		$(".headline_bgcolor > .chgColor2").css({ position : "absolute", width : "100%", height : 390, backgroundColor : GetColorCode, zIndex : 0, opacity : 0 }).stop().animate({ opacity : 1 }, 450).siblings(".chgColor1").css({ position : "absolute", width : "100%", height : 390, backgroundColor : before_GetColorCode, zIndex : -1, opacity : 1 }).stop().animate({ opacity : 0 }, 450);
	}
	swapBgFlag = false;
}

$.fn.hmall_slide = function(option) {
	var opts = {
		obj : $(this),
		autoSlide : "none",
		randomSlide : "none",	// random - none
		reFillSlide : "none",	// refill - none
		visibleSlide : 1,
		doubleSlide : "none",	// visible - none
		slideDirection : "horizontal",	// horizontal - vertical
		slideType : "default",	// default - fade - swipe
		coverFlow : "none",		// coverflow - none
		coverFlowInfo : null,	// coverflow info target
		coverFlowMask : "",	// coverflow color mask
		infinityMode : "none",	// none - infinity
		paginatePath : ".sp_paginate",
		navigationPath : ".navigation_paginate",
		doubleSlideNaviPath : "",
		navigation : "none",	// visible - none
		navigationFloat : "none",		// float - none
		navigationFloatType : "image",	// image - text
		navigationEasing : "easeInOutExpo",
		navigationAnimation : "visible",	// 기본 선택
		navigationColorType : "border",		// border - bgcolor	: doubleSlide 옵션일때 동작
		navigationBorderColor : "FF6400",
		navigationBgColor : "FFF",				// doubleSlide 옵션일때 동작
		navigationActiveBgColor : "",		// 활성화된 영역 배경 컬러
		navigationActiveTxtColor : "000",		// doubleSlide 옵션일때 동작
		navigationNonActiveTxtColor : "FFF",	// doubleSlide 옵션일때 동작
		WideBackgroundColor : "none",
		captions : "none",	// visible - none
		paginate : "none",	// visible - none
		paginateNumber : "none",	// visible - none
		paginateNumberOnColor : "FFF",
		paginateNumberOffColor : "000",
		paginatePos : "none",	// manual - none
		paginatePosT : 0,
		paginatePosL : 0,
		paginatePosR : 0,
		paginateType : "border",	// border - image
		paginateAnimate : "none",	// visible - none 
		paginateSize : "21",
		paginateNonActiveColor : "FFF",
		paginateActiveColor : "FF6400",
		paginateSrcPath : "http://image.hyundaihmall.com/hmall/co/",
		paginateNonActiveImg : "indicator_tp01_off.png",
		paginateActiveImg : "indicator_tp01_on.png",
		directionButn : "none",	// visible - hidden - none
		directionButnPaginate : "hidden",		// visible - hidden [ only! directionButnPos = none ] 
		directionButnPos : "none",	// manual - none
		directionButnPosT : 0,	// manual top button pos
		directionButnPosL : 0,	// manual left button pos
		directionButnPosR : 0,	// manual right button pos
		prevButton : "arrow_l.png",
		nextButton : "arrow_r.png",
		mouseEvent : "click",
		animateSpeed : 400,
		autoSlideSpeed : 4000,
		carouselName : ".carouselUL",
		after : function(){}
	};
	if (option) $.extend(opts, option);
	
	var curr_selNum = 0, before_selNum, double_before_selNum, double_curr_selNum = 0, curr_dSelNum = 0, chgFlag = false, current_width, before_width, current_height, before_height, direction = "", manual_paginate_direction_prev = false, manual_paginate_direction_next = false, child_a_idx = 0, ds_directionFix_flag = true, $getClass, _curr, _total, paginate_delayShowFlag = false, autoslide_Interval = "", paginateMoveSlide = false, coverflowSetupFlag = false, autoChkFlag = false;
	var direction_zero, direction_null, curr_css, before_css;
	var $parent = opts.obj, $carousel_ul = $parent.children(opts.carouselName), $carousel_li = $carousel_ul.children("li"), $carousel_li_length = parseInt($parent.children(opts.carouselName).children("li").length), $carousel_li_a_length = parseInt($parent.children(opts.carouselName).children("li").eq(curr_dSelNum).children("a").length);
	var $imgWidth = $carousel_li.eq(0).find("img").width(), $imgHeight = $carousel_li.eq(0).find("img").height(), pos_w = 0;
	var init = {
		preset : function(){
			// configure style - (보여질 슬라이드가 1개 이상일 경우 $parent width 값을 변경)
			$parent.css({ display : "block", position : "relative", width : (opts.visibleSlide > 1) ? $parent.parent().outerWidth() - ( parseInt($parent.css("borderRight")) + parseInt($parent.css("borderLeft")) ) : $imgWidth, height : $imgHeight, overflow : "hidden", cursor : "pointer" });
			
			// callback
			opts.after();
			
			if(opts.visibleSlide <= 1){
				// 더블슬라이드 (썸네일, 캡션 해제)
				if(opts.doubleSlide == "visible"){
					opts.navigation = "none";
					opts.captions = "none";
					
					init.setupDoubleSlideNavi();
				}
				
				// 썸네일 (페이징 해제)
				if(opts.navigation == "visible"){
					opts.paginate = "none";
					
					init.setupThumPaginate();
				}
				
				// 페이징 (썸네일, 캡션 해제)
				if(opts.paginate == "visible" && ($carousel_li_length > 1)){
					opts.navigation = "none";
					opts.captions = "none";
					
					init.setupPaginate();
				}
				
				// 캡션 (페이징 해제 상태일 경우 동작)
				if(opts.captions == "visible" && opts.paginate == "none"){
					init.captions("show");
				}
			} else if(opts.visibleSlide > 1){
				opts.paginate = "none";
				opts.navigation = "none";
				opts.captions = "none";
			}
			
			// 랜덤
			randomSlideNum = function(){
				var random_selNum = Math.floor(Math.random()*$carousel_li_length);
				curr_selNum = random_selNum;
				curr_dSelNum = random_selNum;
				
				if(opts.doubleSlide == "visible") init.moveNavigate(curr_selNum);
				else if(opts.doubleSlide == "none") init.movePaginate(curr_selNum);
			}
			if(opts.randomSlide == "random") randomSlideNum();
			
			// 기본 슬라이드 - 각 li 하위 첫번째 이미지 이외 모두 숨김처리
			$carousel_ul.children("li").find("> a").css({ display : "none" });
			$carousel_ul.children("li").find("> a:first").css({ display : "block" });
			
			if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
				SplitColorCode = $("#headline_slide").find("li").eq(curr_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
				GetColorCode = "#"+SplitColorCode[1].substring(0,6);
				$(".headline_bgcolor > .chgColor1").css({ position : "absolute", width : "100%", height : 390, backgroundColor : GetColorCode, zIndex : 0 });
			}
			
			if(opts.visibleSlide > 1){	// 보여질 슬라이드 갯수가 1개 이상일 경우
				if(opts.directionButnPos == "manual") $parent.css({ overflow : "visible" });	// hidden 해제
				
				if(opts.slideType == "default" || opts.slideType == "swipe"){
					if(opts.slideType == "swipe" && opts.slideDirection == "vertical"){
						$carousel_ul.css({ position : "relative", width : $imgWidth * opts.visibleSlide, height : $carousel_ul.children("li").children("a").outerHeight() }).children("li").css({ float : "left", width : $imgWidth });
					} else {
						$parent.css({ height : $carousel_ul.children("li").children("a").outerHeight() });
						$carousel_ul.css({ position : "relative", width : $carousel_ul.children("li").children("a").outerWidth() * $carousel_li_length, height : $carousel_ul.children("li").children("a").outerHeight() }).children("li").css({ float : "left" });
					}
				} else if (opts.slideType == "fade"){
					// 2개이상 fade 효과위해 unwrap 후 opts.visibleSlide 만큼의 li를 재생성
					$carousel_ul.children("li").children("a").unwrap();
					var target_Slice = $carousel_ul.children("a");
					var unwrap_a_length = target_Slice.length;

					for(i=0; i<unwrap_a_length; i+=opts.visibleSlide){
						target_Slice.slice(i, i+opts.visibleSlide).wrapAll("<li></li>")
					}
					$parent.css({ height : $carousel_ul.children("li").children("a").outerHeight() });
					$carousel_li_length = parseInt($parent.children(opts.carouselName).children("li").length);	// 재생성 된 li 갯수를 다시 세팅
					
					// 랜덤
					if(opts.randomSlide == "random") randomSlideNum();	// li 재생성시 총 li 갯수를 다시 랜덤화 시킴
					if(opts.reFillSlide == "refill" && (opts.visibleSlide > $carousel_ul.children("li").eq(curr_selNum).children("a").length)){
						init.refill_goods();	// 상품이 모자르게 채워진 경우 재계산
					}
					
					$carousel_ul.css({ position : "relative", width : "102%", height : $carousel_ul.children("li").children("a").outerHeight() }).children("li").css({ width : "100%" }).children("a").css({ float : "left" });
					$carousel_ul.children("li").eq(curr_selNum).css({ position : "absolute", top : 0, left : 0, opacity : 1, zIndex : 10 }).siblings("li").css({ position : "absolute", top : 0, left : 0, opacity : 0, zIndex : 5 });
				}
			} else if(opts.visibleSlide <= 1){	// 보여질 슬라이드 갯수가 1개일 경우
				if(opts.directionButnPos == "manual") $parent.css({ overflow : "visible" });	// hidden 해제
				
				if(opts.slideType == "default" || opts.slideType == "fade"){
					$carousel_li.eq(curr_dSelNum).css({ position : "absolute", top : 0, left : 0, opacity : 1, zIndex : 10 }).siblings("li").css({ position : "absolute", top : 0, left : 0, opacity : 0, zIndex : 0 });

					if(opts.doubleSlide == "visible"){	// 더블 슬라이드 - 처음 보여질 슬라이드 이외 모두 숨김처리
						$carousel_ul.children("li").find("a").css({ display : "" });
						$carousel_ul.children("li").find("a").css({ position : "absolute", zIndex : 1, opacity : 0 });
						$carousel_ul.children("li:eq("+ curr_dSelNum +")").find("a:first").css({ position : "absolute", zIndex : 2, opacity : 1 });
					}
				} else if(opts.slideType == "swipe") {
					$carousel_ul.css({ position : "relative", width : $imgWidth * $carousel_li_length, height : $imgHeight });
					
					// 슬라이드 흐름이 가로형일때 추가 스타일 부여
					if(opts.slideDirection == "horizontal") $carousel_ul.css({ overflow : "hidden" }).children("li").css({ float : "left" });
					
					if(opts.doubleSlide == "visible"){	// 더블 슬라이드 - 처음 보여질 슬라이드 이외 모두 숨김처리
						$carousel_ul.children("li").find("a").css({ display : "none" });
						$carousel_ul.children("li:eq("+ curr_dSelNum +")").find("a:first").css({ display : "block", zIndex : 2, opacity : 1 });
					}
				}
			}

			if(opts.visibleSlide >= 3 && opts.coverFlow == "coverflow"){
				coverflowSetupFlag = true;
				init.setupCoverflow();
			}
			
			if(opts.autoSlide == "auto") init.autoSlide();
		},
		setupCoverflow : function(){	// 커버플로우일 경우 마지막 이미지를 처음으로 옮기고 중앙으로 위치 세팅 및 데이터로부터 상품 정보 표시
			if(coverflowSetupFlag){
				var coverflow_mask = "";
				$carousel_ul.css({ marginLeft : -(opts.obj.width() - $carousel_ul.children("li").children("a").outerWidth()) / 2 }).children("li:last").prependTo($carousel_ul);
				coverflow_mask += "<div style='position:absolute; top:0; left:0; width:"+ (((opts.obj.width() - $carousel_ul.children("li").children("a").outerWidth()) / 2) - parseInt($carousel_ul.children("li").css("marginRight"))) +"px; height:"+ $carousel_ul.children("li").children("a").outerHeight() +"px; background:#"+ opts.coverFlowMask +"; opacity:0.8'></div><div style='position:absolute; top:0; right:0; width:"+ (((opts.obj.width() - $carousel_ul.children("li").children("a").outerWidth()) / 2) - parseInt($carousel_ul.children("li").css("marginRight"))) +"px; height:"+ $carousel_ul.children("li").children("a").outerHeight() +"px; background:#"+ opts.coverFlowMask +"; opacity:0.8'></div>";
				$parent.append(coverflow_mask);
			}
			coverflowSetupFlag = false;
			
			// 상품정보값이 있을 경우 조건부 노출
			if(opts.coverFlowInfo != null){
				$parent.parent().find(""+ opts.coverFlowInfo +" a").attr({ href : $carousel_li.eq(curr_selNum).children("a").attr('href') });
				$parent.parent().find(""+ opts.coverFlowInfo +" .benefit").empty().text($carousel_li.eq(curr_selNum).attr('data-coverflow-benefit'));
				$parent.parent().find(""+ opts.coverFlowInfo +" .name").empty().text($carousel_li.eq(curr_selNum).attr('data-coverflow-name'));
				$parent.parent().find(""+ opts.coverFlowInfo +" .price").empty().text($carousel_li.eq(curr_selNum).attr('data-coverflow-price'));
				$parent.parent().find(""+ opts.coverFlowInfo +" .unit").css({ visibility : "visible" });
				
				// 딜 상품 체크시 "외" 노출
				if($carousel_li.eq(curr_selNum).attr('data-coverflow-deal') != ""){
					if($parent.parent().find(""+ opts.coverFlowInfo +" .unit .deal").length > 0) $parent.parent().find(""+ opts.coverFlowInfo +" .unit .deal").remove();
					$parent.parent().find(""+ opts.coverFlowInfo +" .unit").append("<span class='deal'> 外</span>");
				} else {
					$parent.parent().find(""+ opts.coverFlowInfo +" .unit").empty().append("원");
				}
			}
			
			if(opts.coverFlow == "coverflow"){
				$parent.css({ visibility : "visible" });
			}
		},
		refill_goods : function(){	// 다음 슬라이드의 opts.visibleSlide 수가 적을 경우 갯수를 채워줌
			if(before_selNum == undefined){
				if(curr_selNum == ($carousel_li_length-1)) before_selNum = (curr_selNum-1);
				else if(curr_selNum == 0) before_selNum = ($carousel_li_length-1);
			}
			
			var emptySlide = opts.visibleSlide - $carousel_ul.children("li").eq(curr_selNum).children("a").length;
			for(i=0; i<emptySlide; i++){
				$carousel_ul.children("li").eq(before_selNum).children("a").eq(i).clone().appendTo($carousel_ul.children("li").eq(curr_selNum));
			}

			var chaining = false;
			$carousel_ul.children("li").eq(curr_selNum).stop().animate({ opacity : 1, zIndex : 10 }, opts.animateSpeed).children("a").stop().animate({ opacity : 1, zIndex : 10 }, opts.animateSpeed).parent().siblings("li").stop().animate({ opacity : 0, zIndex : 5 }, opts.animateSpeed).children("a").stop().animate({ opacity : 0, zIndex : 5 }, opts.animateSpeed, function(){
				if(chaining == false){
					for(i=0; i<emptySlide; i++){
						$carousel_ul.children("li").eq(before_selNum).children("a").eq(0).remove();
						if(i == (emptySlide-1)) chaining = true;
					}
				}
			});

		},
		setupPaginate : function(){	// 기본 페이징
			// 슬라이드 타입별 children 갯수 재정의
			if(opts.doubleSlide == "visible") $reLength = $carousel_li_a_length;
			else $reLength = $carousel_li_length;

			$parent.find(".sp_paginate, .paginate_borderBox").remove();
			var paginate_html = "<ol class='sp_paginate' style='position:absolute; z-index:1000; display:none'>";
			for(var p=0; p < $reLength; p++){
				// 슬라이드 구분에 따라 매칭될 idx 값 재저장
				var chg_num;
				if(opts.doubleSlide != "visible") chg_num = curr_selNum;
				else chg_num = child_a_idx;
				
				if(opts.paginateType == "border"){
					if(p == chg_num) _background = "background:#"+ opts.paginateActiveColor +"; color:#"+ opts.paginateNumberOnColor +"";
					else _background = "background:#"+ opts.paginateNonActiveColor +"; color:#"+ opts.paginateNumberOffColor +"";

					paginate_html += "<li class='li_Idx_"+ p +"' style='float:left; display:inline-block; margin:0 2px'><span style='width:"+ opts.paginateSize +"px; height:"+ opts.paginateSize +"px; "+ _background +"; border-radius:"+ (opts.paginateSize-5) +"px; -moz-border-radius:"+ (opts.paginateSize-5) +"px; -webkit-border-radius:"+ (opts.paginateSize-5) +"px; -ms-border-radius:"+ (opts.paginateSize-5) +"px; display:block; line-height:"+ opts.paginateSize +"px; text-align:center; cursor:pointer'>";
					if(opts.paginateNumber == "visible") paginate_html += ""+ (p+1) +"";
					paginate_html += "</span></li>";
				} else if(opts.paginateType == "image"){
					if(p == chg_num) _imgSrc = opts.paginateSrcPath + opts.paginateActiveImg;
					else _imgSrc = opts.paginateSrcPath + opts.paginateNonActiveImg;
					
					paginate_html += "<li class='li_Idx_"+ p +"' style='float:left; width:"+ opts.paginateSize +"px; height:"+ opts.paginateSize +"px; display:inline-block; margin:0 2px'><img src='"+ _imgSrc +"' alt='' /></li>";
				}
			}
			paginate_html += "</ol>";
			if(opts.paginateAnimate == "visible"){
				paginate_html += "<div class='paginate_borderBox'>";	// 페이징 이동(애니메이션)인 경우
				if(opts.paginateType == "image") paginate_html += "<img src='"+ opts.paginateSrcPath + opts.paginateActiveImg +"' alt='' />";
				paginate_html += "</div>";
			}
			if($parent.children(opts.paginatePath).length <= 0){
				$carousel_ul.after(paginate_html);
				$parent.find(".sp_paginate, .paginate_borderBox").css({ display : "none" });
				var _paginate = function(){
					// paginate position
					var float_gap = 0;
					if(opts.navigationFloat == "float") float_gap = $parent.children(".doubleSlideNavi").children(".li_Idx_0").position().top + 35;
					if(opts.paginatePos == "manual"){
						$parent.children(opts.paginatePath).css({ top : opts.paginatePosT, right : opts.paginatePosR, display : "block" });
					} else {
						if(opts.doubleSlide == "visible") $parent.children(opts.paginatePath).css({ top : $imgHeight - 32 - float_gap, left : $parent.children(".doubleSlideNavi").children(".li_Idx_"+ curr_selNum +"").position().left + 8, display : "block" });
						else if(opts.doubleSlide == "none") $parent.children(opts.paginatePath).css({ top : $imgHeight - 35 - float_gap, left : ($imgWidth / 2) - ($parent.children(opts.paginatePath).width() / 2), display : "block" });
					}
					
					// 페이징 이동(애니메이션)인 경우
					if(opts.paginateAnimate == "visible"){
						$parent.children(".paginate_borderBox").css({ position : "absolute", zIndex : 1010, top : $parent.children(opts.paginatePath).position().top, left : $parent.children(opts.paginatePath).position().left + $parent.children(opts.paginatePath).children(".li_Idx_0").position().left + 2, display : "block" });
						if(opts.paginateType == "border") $parent.children(".paginate_borderBox").css({ width : opts.paginateSize, height : opts.paginateSize, background : "#"+ opts.paginateActiveColor, "border-radius" : (opts.paginateSize-5), "-moz-border-radius" : (opts.paginateSize-5), "-webkit-border-radius" : (opts.paginateSize-5), "-ms-border-radius" : (opts.paginateSize-5), display : "block" });
					}
				}
				
				// 이미지형 페이징일 경우 가로폭 계산을 위해 setTimeout 사용
				if(paginate_delayShowFlag == false && opts.paginateType == "image"){
					paginate_delayShowFlag = true;
					setTimeout(function(){ _paginate() }, 50);
				} else {
					_paginate();
				}
			}
		},
		setupThumPaginate : function(){	// 썸네일 페이징
			var paginate_html = "<ul class='navigation_paginate' style='position:absolute'>";
			for(p=0; p < $carousel_li_length; p++){
				if(opts.navigationFloatType == "image"){
					paginate_html += "<li class='li_Idx_"+ p +"' style='width:"+ Math.round(($imgWidth / $carousel_li_length)) +"px; float:left; display:inline-block'><img src='"+ $carousel_li.eq(p).find('img').attr('src') +"' style='width:100%; height:50px' /></li>";
				} else if(opts.navigationFloatType == "text"){
					if(opts.navigationFloat == "float") li_w = ($imgWidth / $carousel_li_length) / 1.05;
					else if(opts.navigationFloat == "none") li_w = $imgWidth / $carousel_li_length;
					
					var split_navi_name;
					if($carousel_li.eq(p).attr('data-navi-name').indexOf("_") > 0){
						split_navi_name = $carousel_li.eq(p).attr('data-navi-name').split("_")[1];
					} else {
						split_navi_name = $carousel_li.eq(p).attr('data-navi-name');
					}
					
					paginate_html += "<li class='li_Idx_"+ p +"' style='position:relative; width:"+ li_w +"px; text-align:center; font-size:12px; float:left; display:table'><span style='position:absolute; top:0; left:0; z-index:90; width:"+ li_w +"px; display:block'></span><span style='position:relative; left:0; z-index:100; width:"+ li_w +"px; padding:9px 0; vertical-align:middle; display:table-cell'>"+ split_navi_name +"</span></li>";
				}
			}
			paginate_html += "</ul>";
			paginate_html += "<div class='navigation_borderBox'></div>";
			$carousel_ul.after(paginate_html);

			// 썸네일 페이징 세로값 정의 - span 태그 중 가장 높은 값으로 지정
			var _li_Max_Height = [];
			$("."+ $parent.children(".navigation_paginate").attr("class") +" li").each(function(i){
				_li_Max_Height.push($(this).find("span:eq(1)").outerHeight());
			});
			$("."+ $parent.children(".navigation_paginate").attr("class") +" li, ."+ $parent.children(".navigation_paginate").attr("class") +" li > span").css({ height : Math.max.apply(null, _li_Max_Height) });
			$("."+ $parent.children(".navigation_paginate").attr("class") +" li").each(function(){
				$(this).find("span:eq(1)").css({ height : Math.max.apply(null, _li_Max_Height)-18 });
			});
			
			if(opts.navigationAnimation != "visible") $parent.children(".navigation_borderBox").remove();

			// 썸네일(이미지&텍스트) 페이징 위치 및 slide_parent 세로 길이 설정
			$parent.children(".navigation_paginate").css({ left : ($parent.width() / 2) - ($parent.children(".navigation_paginate").width() / 2 ) });
			pos_w = $parent.children(".navigation_paginate").position().left;

			if(opts.navigationFloatType == "image"){
				if(opts.navigationFloat != "float") $parent.css({ height : $imgHeight + $parent.children(".navigation_paginate").find("img").height() + 2, overflow : "hidden" }).children(".navigation_paginate").css({ top : $imgHeight + 2 });
				if($parent.children(".navigation_borderBox").length > 0) $parent.children(".navigation_borderBox").css({ position : "absolute", top : $parent.children(opts.navigationPath).position().top, left : $parent.children(".navigation_paginate").position().left, width : $parent.children(opts.navigationPath).find("img").width() - 6, height : $parent.children(".navigation_paginate").find("li").height() - 6, border : "3px solid #"+ opts.navigationBorderColor +"" });
			} else if(opts.navigationFloatType == "text"){
				if(opts.navigationFloat != "float") $parent.css({ height : $imgHeight + (parseInt($parent.children(".navigation_paginate").children("li:first").css("paddingTop"))+ $parent.children(".navigation_paginate").children("li:first").height()), overflow : "hidden" }).children(".navigation_paginate").css({ top : $imgHeight });
				if($parent.children(".navigation_borderBox").length > 0) $parent.children(".navigation_borderBox").css({ position : "absolute", top : $parent.children(opts.navigationPath).position().top, left : $parent.children(".navigation_paginate").position().left, width : $parent.children(opts.navigationPath).find(".li_Idx_0").width() - 5, height : $parent.children(".navigation_paginate").find("li").height() - 6, border : "3px solid #"+ opts.navigationBorderColor +"" });
				if(opts.navigationFloat != "float" && opts.navigationColorType == "bgcolor") init.fillBgcolorLi();
			}
			
			if(opts.navigationFloat == "float"){	// 배너 위로 띄운 메뉴
				$parent.children(".navigation_paginate").css({ position : "absolute", top : $imgHeight - ($parent.children(".navigation_paginate").height() + 2) - 15, zIndex : 100 });
				if($parent.children(".navigation_borderBox").length > 0) $parent.children(".navigation_borderBox").css({ position : "absolute", top : $parent.children(opts.navigationPath).position().top, zIndex : 101 });
				if(opts.navigationFloatType == "text") init.fillBgcolorLi();
			}
		},
		fillBgcolorLi : function(){	// 네비게이션 배경색상 입히기
			$parent.children(".navigation_paginate").children("li:eq(0)").find("span:eq(0)").css({ background : "#"+((opts.navigationActiveBgColor=='') ? opts.navigationBgColor : opts.navigationActiveBgColor), opacity : 0.9 }).parent().siblings("li").find("span:eq(0)").css({ background : "#"+opts.navigationBgColor, opacity : 0.6 });
			$parent.children(".navigation_paginate").children("li:eq(0)").find("span:eq(1)").css({ color : "#"+opts.navigationActiveTxtColor }).parent().siblings("li").find("span:eq(1)").css({ color : "#"+opts.navigationNonActiveTxtColor });
		},
		setupDoubleSlideNavi : function(){	// 더블 레이어 하단 네비게이션
			var navigationColorType;
			if(opts.navigationColorType == "border"){
				navigationColorType = {borderBottom : "3px solid #"+ opts.navigationBorderColor +""};
			} else if(opts.navigationColorType == "bgcolor"){
				navigationColorType = {backgroundColor : "#"+ opts.navigationBgColor +""};
			}
			
			var navi_html = "<ul class='doubleSlideNavi' style='overflow:hidden'>";
			for(p=0; p < $carousel_li_length; p++){
				var split_navi_name;
				if($carousel_li.eq(p).attr('data-navi-name').indexOf("_") > 0){
					split_navi_name = $carousel_li.eq(p).attr('data-navi-name').split("_")[1];
				} else {
					split_navi_name = $carousel_li.eq(p).attr('data-navi-name');
				}
				
				navi_html += "<li class='li_Idx_"+ p +"' style='width:"+ (100 / $carousel_li_length) +"%; padding-top:6px; height:25px; text-align:center; font-size:12px; float:left'>"+ split_navi_name +"</li>";
			}
			navi_html += "</ul>";
			if(opts.navigationColorType == "border") navi_html += "<div class='navi_borderBox'></div>";
			$carousel_ul.after(navi_html);
			
			opts.doubleSlideNaviPath = ".doubleSlideNavi";
			
			// 네비게이션 노출을 위한 $parent 세로 길이 재설정
			$parent.css({ height : $imgHeight + $parent.children(".doubleSlideNavi").children("li:first").height(), overflow : "visible" });
			
			if(opts.navigationFloat == "float"){
				$parent.css({ height : $imgHeight, overflow : "visible" });
				$parent.children(".doubleSlideNavi").css({ position : "absolute", top : $imgHeight - ($parent.children(".doubleSlideNavi").height() + 2) - 8, zIndex : 100, width : "100%", backgroundColor : "#FFF" });
			}
			
			if(opts.navigationColorType == "bgcolor") $parent.children(".doubleSlideNavi").children("li:eq("+ curr_selNum +")").css(navigationColorType).css({ color : "#"+opts.navigationActiveTxtColor });
			else if(opts.navigationColorType == "border") $parent.children(".navi_borderBox").css({ position : "absolute", top : $parent.children(".doubleSlideNavi").position().top, left : $parent.children(".doubleSlideNavi").children(".li_Idx_0").position().left, zIndex : 100, width : $parent.children(".doubleSlideNavi").children(".li_Idx_0").width(), height : ($parent.children(".doubleSlideNavi").children(".li_Idx_0").height() + parseInt($parent.children(".doubleSlideNavi").children(".li_Idx_0").css("paddingTop"))) - 3 }).css(navigationColorType);
		},
		swapSlide : function(){
			if(opts.captions == "visible") $carousel_ul.addClass("preventCaptions");	// 연속 클릭 방지

			if(opts.visibleSlide > 1){	// 보여질 슬라이드 갯수가 1개 이상일 경우
				if(opts.doubleSlide == "none") $parent.find("#currNum_p, #currNum_n").text(curr_selNum+1);
				if(opts.slideType == "default"){
					if($getClass == "dir_prev"){
						$carousel_ul.css({ left : -$imgWidth }).children("li:last").prependTo($carousel_ul);
						$carousel_ul.css({ position : "absolute" }).stop().animate({ left : 0 }, (opts.slideType == "default") ? opts.animateSpeed = 0 : opts.animateSpeed = opts.animateSpeed, function(){
							$(this).removeProp("left");
						});
					} else if($getClass == "dir_next"){
						$carousel_ul.css({ position : "absolute" }).stop().animate({ left : -$imgWidth }, (opts.slideType == "default") ? opts.animateSpeed = 0 : opts.animateSpeed = opts.animateSpeed, function(){
							$(this).children("li:first").appendTo(this);
							$(this).css({ left  : 0 });
						});
					}
					return false;
				} else if(opts.slideType == "swipe"){
					if(opts.slideDirection == "horizontal"){	// 슬라이드 좌, 우
						if(direction == "dir_prev" || manual_paginate_direction_prev == true){
							current_width = -($carousel_ul.children("li").children("a").outerWidth()+parseInt($carousel_ul.children("li").children("a").css("marginRight")));		// $imgWidth
						} else if(direction == "dir_next" || manual_paginate_direction_next == true){
							var marginRight = parseInt($carousel_ul.children("li").children("a").css("marginRight"));
							if(marginRight == 0) marginRight = parseInt($carousel_ul.children("li").css("marginRight"));
							before_width = -($carousel_ul.children("li").children("a").outerWidth()+marginRight);
						}

						// 커버플로우일 경우 데이터로부터 상품 정보 교체
						if(opts.visibleSlide >= 3 && opts.coverFlow == "coverflow") init.setupCoverflow();

						// Swipe CSS 설정
						direction_zero = { top : 0, left : 0 };
						direction_null = { top : "", left : "" };
						curr_css = { left : current_width };
						before_css = { top: 0, left : before_width };
					} else if(opts.slideDirection == "vertical"){	// 슬라이드 상, 하
						if(direction == "dir_prev" || manual_paginate_direction_prev == true){
							current_height = -$carousel_ul.children("li").children("a").outerHeight();	// $imgHeight
						} else if(direction == "dir_next" || manual_paginate_direction_next == true){
							before_height = -$carousel_ul.children("li").children("a").outerHeight();
						}

						// Swipe CSS 설정
						direction_zero = { top : 0 };
						direction_null = { top : "" };
						curr_css = { top : current_height };
						before_css = { top : before_height };
					}
					
					if($getClass == "dir_prev"){
						if(opts.slideDirection == "vertical"){
							for(i=0; i<opts.visibleSlide; i++){
								$carousel_ul.css(curr_css).children("li:last").prependTo($carousel_ul);
							}
						} else {
							$carousel_ul.css(curr_css).children("li:last").prependTo($carousel_ul);
						}
						
						$carousel_ul.css({ position : "absolute" }).stop().animate(direction_zero, (opts.slideType == "default") ? opts.animateSpeed = 0 : opts.animateSpeed = opts.animateSpeed, function(){
							$(this).css(direction_null);
						});
					} else if($getClass == "dir_next"){
						$carousel_ul.css({ position : "absolute" }).stop(true, true).animate(before_css, (opts.slideType == "default") ? opts.animateSpeed = 0 : opts.animateSpeed = opts.animateSpeed, function(){
							if(opts.slideDirection == "vertical"){
								for(i=0; i<opts.visibleSlide; i++){
									if(opts.slideDirection == "vertical") $(this).children("li:first").appendTo(this);
								}
							} else {
								$(this).children("li:first").appendTo(this);
							}
						
							$(this).css(direction_null);
						});
					}
					return false;
				} else if(opts.slideType == "fade"){
					if(opts.reFillSlide == "refill" && (opts.visibleSlide > $carousel_ul.children("li").eq(curr_selNum).children("a").length)){	// 다음 슬라이드의 opts.visibleSlide 수가 적을 경우 갯수를 채워줌
						init.refill_goods();
					} else {
						$carousel_ul.children("li").eq(curr_selNum).stop().animate({ opacity : 1, zIndex : 10 }, opts.animateSpeed).children("a").stop().animate({ opacity : 1, zIndex : 10 }, opts.animateSpeed).parent().siblings("li").stop().animate({ opacity : 0, zIndex : 5 }, opts.animateSpeed).children("a").stop().animate({ opacity : 0, zIndex : 5 }, opts.animateSpeed, function(){});
					}
				}
			} else if(opts.visibleSlide <= 1){	// 보여질 슬라이드 갯수가 1개일 경우
				if(opts.doubleSlide == "none") $parent.find("#currNum_p, #currNum_n").text(curr_selNum+1);
				if(opts.slideType == "default"){
					if(opts.doubleSlide == "none"){	// 기본 슬라이드
						$carousel_li.eq(curr_selNum).css({ opacity : 1 }).siblings("li").css({ opacity : 0 });
					} else if(opts.doubleSlide == "visible"){	// 더블 슬라이드
						if($getClass == "dir_prev"){
							if(manual_paginate_direction_prev != true){
								if(curr_selNum <= 0 && ds_directionFix_flag == true){
									curr_selNum = ($carousel_li_length-1)
									
									ds_directionFix_flag = false;
								} else if(child_a_idx == 0 && ds_directionFix_flag == false){
									curr_selNum -= 1;
									if(curr_selNum < 0) curr_selNum = ($carousel_li_length-1);
								}
								$carousel_li_a_length = $carousel_ul.find("> li").eq(curr_selNum).find("a").length;

								// 페이징 리셋
								if(child_a_idx == 0) init.setupPaginate();
	
								if(curr_selNum == ($carousel_li_length-1) && before_selNum == 0){
									child_a_idx = ($carousel_li_a_length-1);
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);

									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);

									// 페이징 이동
									init.movePaginate(child_a_idx);

									$carousel_ul.children("li").eq(before_selNum).css({ opacity : 0 }).children("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });
									$carousel_ul.children("li").eq(curr_selNum).css({ opacity : 1 }).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).css({ opacity : 1 }, opts.animateSpeed).siblings("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });

									return false;
								} else if($carousel_li_a_length > 1 && child_a_idx != 0){
									child_a_idx -= 1;
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
									
									// 페이징 이동
									init.movePaginate(child_a_idx);
	
									// in
									$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).css({ opacity : 1 }).siblings("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });
									return false;
								} else if (child_a_idx == 0){
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
									child_a_idx = ($carousel_li_a_length-1);
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
								}
								
								// 페이징 이동
								init.movePaginate(child_a_idx);
							}

							// in
							var new_eq;
							if(manual_paginate_direction_prev != true) new_eq = ($carousel_li_a_length-1);
							else new_eq = 0;
							
							$carousel_ul.children("li").eq(before_selNum).css({ opacity : 0 }).children("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });
							$carousel_ul.children("li").eq(curr_selNum).css({ opacity : 1 }, opts.animateSpeed).children("a").eq(new_eq).css({ position : "absolute", zIndex : 2 }).css({ opacity : 1 }).siblings("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });
						} else if($getClass == "dir_next"){
							if(manual_paginate_direction_next != true){
								ds_directionFix_flag = false;

								if($carousel_li_a_length > 1 && (($carousel_li_a_length-1) != child_a_idx)){
									child_a_idx += 1;
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									
									// 페이징 이동
									init.movePaginate(child_a_idx);
	
									// change
									$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).css({ opacity : 1 }).siblings("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });
									return false;
								} else if (($carousel_li_a_length-1) == child_a_idx){
									child_a_idx = 0;
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
								}
								
								curr_selNum = (curr_selNum >= ($carousel_li_length-1)) ? curr_selNum = 0 : curr_selNum += 1;
								$carousel_li_a_length = $carousel_ul.find("> li").eq(curr_selNum).find("a").length;
								$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
								
								// 페이징 리셋
								if(child_a_idx == 0) {
									init.setupPaginate();
									
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
								}
							}
				
							$carousel_ul.children("li").eq(before_selNum).css({ opacity : 0 }).children("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });
							$carousel_ul.children("li").eq(curr_selNum).css({ opacity : 1 }).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).css({ opacity : 1 }).siblings("a").css({ position : "absolute", zIndex : 1 }).css({ opacity : 0 });
						}
					}

					// initialization direction&paginate
					direction = "";
					manual_paginate_direction_prev = false;
					manual_paginate_direction_next = false;
				} else if(opts.slideType == "fade"){
					if(opts.doubleSlide == "none"){	// 기본 슬라이드
						$carousel_li.eq(curr_selNum).stop().animate({ opacity : 1, zIndex : 10 }, opts.animateSpeed).siblings("li").stop().animate({ opacity : 0, zIndex : 0 }, opts.animateSpeed, function(){});
					} else if(opts.doubleSlide == "visible"){	// 더블 슬라이드
						if($getClass == "dir_prev"){
							if(manual_paginate_direction_prev != true){
								if(curr_selNum <= 0 && ds_directionFix_flag == true){
									curr_selNum = ($carousel_li_length-1)

									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										before_bgColorCode = $carousel_ul.children("li").eq(before_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
										before_GetColorCode = "#"+before_bgColorCode[1].substring(0,6);
									}
									// 헤드라인배너 배경처리 - swapBgColor

									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										SplitColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(($carousel_ul.find("> li").eq(curr_selNum).find("a").length-1)).children("img").attr("src").split("-");
										GetColorCode = "#"+SplitColorCode[1].substring(0,6);
									}
									// 헤드라인배너 배경처리 - swapBgColor
									
									ds_directionFix_flag = false;
								} else if(child_a_idx == 0 && ds_directionFix_flag == false){
									curr_selNum -= 1;

									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										before_bgColorCode = $carousel_ul.children("li").eq(before_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
										before_GetColorCode = "#"+before_bgColorCode[1].substring(0,6);
									}
									// 헤드라인배너 배경처리 - swapBgColor

									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										SplitColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(($carousel_ul.find("> li").eq(curr_selNum).find("a").length-1)).children("img").attr("src").split("-");
										GetColorCode = "#"+SplitColorCode[1].substring(0,6);
									}
									// 헤드라인배너 배경처리 - swapBgColor
									
									if(curr_selNum < 0) curr_selNum = ($carousel_li_length-1);
								}
								$carousel_li_a_length = $carousel_ul.find("> li").eq(curr_selNum).find("a").length;

								// 페이징 리셋
								if(child_a_idx == 0) init.setupPaginate();
	
								if(curr_selNum == ($carousel_li_length-1) && before_selNum == 0){
									child_a_idx = ($carousel_li_a_length-1);
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
									
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
	
									// 페이징 이동
									init.movePaginate(child_a_idx);
									
									// change bgcolor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible") swapBgColor();

									$carousel_ul.children("li").eq(before_selNum).animate({ opacity : 0 }, opts.animateSpeed).children("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed);
									$carousel_ul.children("li").eq(curr_selNum).animate({ opacity : 1 }, opts.animateSpeed).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).stop().animate({ opacity : 1 }, opts.animateSpeed).siblings("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed, function(){});
									
									return false;
								} else if($carousel_li_a_length > 1 && child_a_idx != 0){
									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										before_bgColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
										before_GetColorCode = "#"+before_bgColorCode[1].substring(0,6);
									}
									// 헤드라인배너 배경처리 - swapBgColor
									
									child_a_idx -= 1;
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);

									// 페이징 이동
									init.movePaginate(child_a_idx);

									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										SplitColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
										GetColorCode = "#"+SplitColorCode[1].substring(0,6);
										swapBgColor();
									}
									// 헤드라인배너 배경처리 - swapBgColor
									
									// in
									$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).stop().animate({ opacity : 1 }, opts.animateSpeed).siblings("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed, function(){});
									return false;
								} else if (child_a_idx == 0){
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
									child_a_idx = ($carousel_li_a_length-1);

									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
								}
								
								// 페이징 이동
								init.movePaginate(child_a_idx);
							}

							// in
							var new_eq;
							if(manual_paginate_direction_prev != true) new_eq = ($carousel_li_a_length-1);
							else new_eq = 0;

							$carousel_ul.children("li").eq(before_selNum).stop().animate({ opacity : 0, zIndex : 0 }, opts.animateSpeed).children("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed);
							$carousel_ul.children("li").eq(curr_selNum).stop().animate({ opacity : 1, zIndex : 10 }, opts.animateSpeed).children("a").eq(new_eq).css({ position : "absolute", zIndex : 2 }).stop().animate({ opacity : 1 }, opts.animateSpeed).siblings("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed, function(){});
						} else if($getClass == "dir_next"){
							if(manual_paginate_direction_next != true){
								ds_directionFix_flag = false;

								if($carousel_li_a_length > 1 && (($carousel_li_a_length-1) != child_a_idx)){
									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										before_bgColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
										before_GetColorCode = "#"+before_bgColorCode[1].substring(0,6);
									}
									// 헤드라인배너 배경처리 - swapBgColor
									
									child_a_idx += 1;
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									
									// 헤드라인배너 배경처리 - swapBgColor
									if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
										SplitColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
										GetColorCode = "#"+SplitColorCode[1].substring(0,6);
										swapBgColor();
									}
									// 헤드라인배너 배경처리 - swapBgColor
									
									// 페이징 이동
									init.movePaginate(child_a_idx);

									// change
									$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).stop().animate({ opacity : 1 }, opts.animateSpeed).siblings("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed, function(){});
									return false;
								} else if (($carousel_li_a_length-1) == child_a_idx){
									child_a_idx = 0;
									double_curr_selNum = 0;
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
								}

								// 헤드라인배너 배경처리 - swapBgColor
								if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
									before_bgColorCode = $carousel_ul.children("li").eq(before_selNum).children("a").eq(($carousel_ul.find("> li").eq(curr_selNum).find("a").length-1)).children("img").attr("src").split("-");
									before_GetColorCode = "#"+before_bgColorCode[1].substring(0,6);
								}
								// 헤드라인배너 배경처리 - swapBgColor

								double_curr_selNum = 0;
								curr_selNum = (curr_selNum >= ($carousel_li_length-1)) ? curr_selNum = 0 : curr_selNum += 1;
								$carousel_li_a_length = $carousel_ul.find("> li").eq(curr_selNum).find("a").length;
								$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
								
								// 헤드라인배너 배경처리 - swapBgColor
								if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible"){
									SplitColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
									GetColorCode = "#"+SplitColorCode[1].substring(0,6);
								}
								// 헤드라인배너 배경처리 - swapBgColor

								// 페이징 리셋
								if(child_a_idx == 0) {
									init.setupPaginate();
									
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
								}
							}

							$carousel_ul.children("li").eq(before_selNum).stop().animate({ opacity : 0, zIndex : 0 }, opts.animateSpeed).children("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed);
							$carousel_ul.children("li").eq(curr_selNum).stop().animate({ opacity : 1, zIndex : 10 }, opts.animateSpeed).children("a").eq(child_a_idx).css({ position : "absolute", zIndex : 2 }).stop().animate({ opacity : 1 }, opts.animateSpeed).siblings("a").css({ position : "absolute", zIndex : 1 }).stop().animate({ opacity : 0 }, opts.animateSpeed, function(){});
						}
						
						// change bgcolor
						if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible" && swapBgFlag == false){
							swapBgColor();
						} else if($parent.parent().parent().find(".headline_bgcolor").length>0 && opts.WideBackgroundColor == "visible" && swapBgFlag == true){
							before_GetColorCode = GetColorCode;
							SplitColorCode = $carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).children("img").attr("src").split("-");
							GetColorCode = "#"+SplitColorCode[1].substring(0,6);
							
							swapBgColor();
						}
					}

					// initialization direction&paginate
					direction = "";
					manual_paginate_direction_prev = false;
					manual_paginate_direction_next = false;
					
				} else if(opts.slideType == "swipe"){
					if(opts.slideDirection == "horizontal"){	// 슬라이드 좌, 우
						if(direction == "dir_prev" || manual_paginate_direction_prev == true){
							current_width = -$imgWidth;
							before_width = $imgWidth;
						} else if(direction == "dir_next" || manual_paginate_direction_next == true){
							current_width = $imgWidth;
							before_width = -$imgWidth;
						}
						
						// Swipe CSS 설정
						direction_zero = { top : 0, left : 0 };
						direction_null = { top : "", left : "" };
						curr_css = { left : current_width };
						before_css = { top: 0, left : before_width };
					} else if(opts.slideDirection == "vertical"){	// 슬라이드 상, 하
						if(direction == "dir_prev" || manual_paginate_direction_prev == true){
							current_height = -$imgHeight;
							before_height = $imgHeight;
						} else if(direction == "dir_next" || manual_paginate_direction_next == true){
							current_height = $imgHeight;
							before_height = -$imgHeight;
						}

						// Swipe CSS 설정
						direction_zero = { top : 0 };
						direction_null = { top : "" };
						curr_css = { top : current_height };
						before_css = { top : before_height };
					}

					if(opts.doubleSlide == "none"){	// 기본 슬라이드
						if(opts.infinityMode == "none"){
							$carousel_ul.stop().animate({ marginLeft : -$imgWidth * curr_selNum }, opts.animateSpeed);
						} else if(opts.infinityMode == "infinity"){
							if($getClass == "dir_prev"){
								if(opts.slideDirection == "vertical"){
									for(i=0; i<opts.visibleSlide; i++){
										$carousel_ul.css(curr_css).children("li:last").prependTo($carousel_ul);
									}
								} else {
									$carousel_ul.css(curr_css).children("li:last").prependTo($carousel_ul);
								}
								
								$carousel_ul.css({ position : "absolute" }).stop().animate(direction_zero, (opts.slideType == "default") ? opts.animateSpeed = 0 : opts.animateSpeed = opts.animateSpeed, function(){
									$(this).css(direction_null);
								});
							} else if($getClass == "dir_next"){
								$carousel_ul.css({ position : "absolute" }).stop(true, true).animate(before_css, (opts.slideType == "default") ? opts.animateSpeed = 0 : opts.animateSpeed = opts.animateSpeed, function(){
									if(opts.slideDirection == "vertical"){
										for(i=0; i<opts.visibleSlide; i++){
											if(opts.slideDirection == "vertical") $(this).children("li:first").appendTo(this);
										}
									} else {
										$(this).children("li:first").appendTo(this);
									}

									$(this).css(direction_null);
								});
							}
						}
					} else if(opts.doubleSlide == "visible"){	// 더블 슬라이드
						if($getClass == "dir_prev"){
							if(manual_paginate_direction_prev != true){
								if(curr_selNum <= 0 && ds_directionFix_flag == true){
									curr_selNum = ($carousel_li_length-1)
									
									ds_directionFix_flag = false;
								} else if(child_a_idx == 0 && ds_directionFix_flag == false){
									curr_selNum -= 1;
									if(curr_selNum < 0) curr_selNum = ($carousel_li_length-1);
								}
								$carousel_li_a_length = $carousel_ul.find("> li").eq(curr_selNum).find("a").length;

								// 페이징 리셋
								if(child_a_idx == 0) init.setupPaginate();
	
								if(curr_selNum == ($carousel_li_length-1) && before_selNum == 0){
									child_a_idx = ($carousel_li_a_length-1);
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
									
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
	
									// 페이징 이동
									init.movePaginate(child_a_idx);
					
									// out
									$carousel_ul.children("li").eq(before_selNum).css({ position : "absolute" }).stop().animate(before_css, opts.animateSpeed, function(){
										$(this).css(direction_null).css({ position : "", display : "none", zIndex : 1, opacity : 0 });
										$(this).children("a").css({ display : "none", zIndex : 1, opacity : 0 });
									});

									// in
									$carousel_ul.children("li").eq(curr_selNum).css({ display : "block", zIndex : 2, opacity : 1 }).children("a:eq("+ child_a_idx +")").css(curr_css).css({ position : "absolute", display : "block", opacity : 1 }).stop().animate(direction_zero, opts.animateSpeed, function(){
										$(this).css(direction_null).css({ position : "", zIndex : 2, opacity : 1 });
									});
									return false;
								} else if($carousel_li_a_length > 1 && child_a_idx != 0){
									if(paginateMoveSlide == true){
										// out
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(double_before_selNum).css({ position : "absolute" }).stop().animate(before_css, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", display : "none", zIndex : 1, opacity : 0 });
										});
		
										child_a_idx = double_curr_selNum;
										
										// 페이징 이동
										init.movePaginate(double_curr_selNum);
		
										// in
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(double_curr_selNum).css(curr_css).css({ position : "absolute", display : "block", opacity : 1 }).stop().animate(direction_zero, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", zIndex : 2, opacity : 1 });
										});											
									} else {
										// out
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css({ position : "absolute" }).stop().animate(before_css, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", display : "none", zIndex : 1, opacity : 0 });
										});
		
										child_a_idx -= 1;
										$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
										$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
										
										// 페이징 이동
										init.movePaginate(child_a_idx);
		
										// in
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css(curr_css).css({ position : "absolute", display : "block", opacity : 1 }).stop().animate(direction_zero, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", zIndex : 2, opacity : 1 });
										});
									}

									
									return false;
								} else if (child_a_idx == 0){
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
									child_a_idx = ($carousel_li_a_length-1);
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
									$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
								}
								
								// 페이징 이동
								init.movePaginate(child_a_idx);
							}

							// out
							$carousel_ul.children("li").eq(before_selNum).css({ position : "absolute" }).stop().animate(before_css, opts.animateSpeed, function(){
								$(this).css(direction_null).css({ position : "", display : "none", zIndex : 1, opacity : 0 });
								$(this).children("a").css({ display : "none", zIndex : 1, opacity : 0 });
							});
							
							// in
							var new_eq;
							if(manual_paginate_direction_prev != true) new_eq = ($carousel_li_a_length-1);
							else new_eq = 0;
							$carousel_ul.children("li").eq(curr_selNum).css({ display : "block", zIndex : 2, opacity : 1 }).children("a:eq("+ new_eq +")").css(curr_css).css({ position : "absolute", display : "block", opacity : 1 }).stop().animate(direction_zero, opts.animateSpeed, function(){
								$(this).css(direction_null).css({ position : "", zIndex : 2, opacity : 1 });
							});

						} else if($getClass == "dir_next"){
							if(manual_paginate_direction_next != true){
								ds_directionFix_flag = false;

								if($carousel_li_a_length > 1 && (($carousel_li_a_length-1) != child_a_idx)){
									if(paginateMoveSlide == true){
										// out
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(double_before_selNum).css({ position : "absolute" }).stop().animate(before_css, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", display : "none", zIndex : 1, opacity : 0 });
										});
										 
										child_a_idx = double_curr_selNum;
										
										// 페이징 이동
										init.movePaginate(double_curr_selNum);

										// in
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(double_curr_selNum).css(curr_css).css({ position : "absolute", display : "block", opacity : 1 }).stop().animate(direction_zero, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", zIndex : 2, opacity : 1 });
										});
									} else {
										// out
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css({ position : "absolute" }).stop().animate(before_css, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", display : "none", zIndex : 1, opacity : 0 });
										});

										child_a_idx += 1;
										$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
										
										// 페이징 이동
										init.movePaginate(child_a_idx);

										// in
										$carousel_ul.children("li").eq(curr_selNum).children("a").eq(child_a_idx).css(curr_css).css({ position : "absolute", display : "block", opacity : 1 }).stop().animate(direction_zero, opts.animateSpeed, function(){
											$(this).css(direction_null).css({ position : "", zIndex : 2, opacity : 1 });
										});											
									}

									return false;
								} else if (($carousel_li_a_length-1) == child_a_idx){
									child_a_idx = 0;
									$parent.find("#currNum_p, #currNum_n").text(child_a_idx+1);
								}
								
								curr_selNum = (curr_selNum >= ($carousel_li_length-1)) ? curr_selNum = 0 : curr_selNum += 1;
								$carousel_li_a_length = $carousel_ul.find("> li").eq(curr_selNum).find("a").length;
								$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
								
								// 페이징 리셋
								if(child_a_idx == 0) {
									init.setupPaginate();
									
									// 부모 네비게이션 이동
									init.moveNavigate(curr_selNum);
								}
							}

							// out
							$carousel_ul.children("li").eq(before_selNum).css({ position : "absolute" }).stop().animate(before_css, opts.animateSpeed, function(){
								$(this).css(direction_null).css({ position : "", display : "none", zIndex : 1, opacity : 0 });
								$(this).children("a").css({ display : "none", zIndex : 1, opacity : 0 });
							});

							// in
							$carousel_ul.children("li").eq(curr_selNum).css({ display : "block", zIndex : 2, opacity : 1 }).children("a:first").css(curr_css).css({ position : "absolute", display : "block", opacity : 1 }).stop().animate(direction_zero, opts.animateSpeed, function(){
								$(this).css(direction_null).css({ position : "", zIndex : 2, opacity : 1 });
							});
							
							double_curr_selNum = 0;
						}
					}

					// initialization direction&paginate
					direction = "";
					manual_paginate_direction_prev = false;
					manual_paginate_direction_next = false;
				}
			}
			
			if(opts.doubleSlide != "visible") init.movePaginate(curr_selNum);
		},
		movePaginate : function(curr_selNum){
			double_curr_selNum = curr_selNum;

			if(opts.paginate == "visible" && opts.navigation == "none" && opts.captions == "none"){
				if(opts.paginateAnimate != "visible"){
					$Current_LI = $parent.children(opts.paginatePath).children("li:eq("+ curr_selNum +")");
					if(opts.paginateType == "border") $Current_LI.children("span").css({ background : "#"+ opts.paginateActiveColor, color : "#"+ opts.paginateNumberOnColor }).parent().siblings("li").children("span").css({ background : "#"+ opts.paginateNonActiveColor, color : "#"+ opts.paginateNumberOffColor });
					else if(opts.paginateType == "image") $Current_LI.children("img").attr({ src : opts.paginateSrcPath + opts.paginateActiveImg }).parent().siblings("li").children("img").attr({ src : opts.paginateSrcPath + opts.paginateNonActiveImg });
				} else if(opts.paginateAnimate == "visible"){
					if(opts.paginateType == "border"){
						$parent.children(opts.paginatePath).children("li:first").children("span").css({ background : "#"+ opts.paginateNonActiveColor });
					} else if(opts.paginateType == "image"){
						$parent.children(opts.paginatePath).children("li:eq("+ curr_selNum +")").children("img").fadeOut(50).parent().siblings("li").children("img").css({ display : "block" }).attr({ src : opts.paginateSrcPath + opts.paginateNonActiveImg });
					}
					$parent.children(".paginate_borderBox").stop().animate({ left : $parent.children(opts.paginatePath).position().left + $parent.children(opts.paginatePath).children(".li_Idx_"+ curr_selNum +"").position().left + 2 }, 500);
				}
			} else if(opts.navigation == "visible") {
				if(curr_selNum == ($(opts.navigationPath + " > li").length-1) && $getClass == "dir_prev"){
					pos_w = $parent.children(".navigation_paginate").position().left + (($(opts.navigationPath + " > li").length-1) * $parent.children(".navigation_paginate").children("li").width());
				} else if(curr_selNum == 0 && $getClass == "dir_next"){
					pos_w = $parent.children(".navigation_paginate").position().left;
				} else if($getClass == "dir_prev") {
					var jumpIdx = before_selNum - curr_selNum;
					pos_w -= $parent.children(".navigation_paginate").children("li").width() * jumpIdx;
				} else if($getClass == "dir_next") {
					var jumpIdx = curr_selNum - before_selNum;
					pos_w += $parent.children(".navigation_paginate").children("li").width() * jumpIdx;
				}
				
				if((opts.navigationFloat == "float" && opts.navigationFloatType == "text") || (opts.navigationFloatType == "text" && opts.navigationColorType == "bgcolor")){
					$parent.children(".navigation_paginate").children("li:eq("+ curr_selNum + ")").find("span:eq(0)").css({ backgroundColor : "#"+((opts.navigationActiveBgColor=='') ? opts.navigationBgColor : opts.navigationActiveBgColor), opacity : 0.6 }).stop().animate({ opacity : 0.9 }, 150).parent().siblings("li").find("span:eq(0)").css({ backgroundColor : "#"+opts.navigationBgColor, opacity : 0.6 });
					$parent.children(".navigation_paginate").children("li:eq("+ curr_selNum + ")").find("span:eq(1)").css({ color : "#"+opts.navigationActiveTxtColor }).parent().siblings("li").find("span:eq(1)").css({ color : "#"+opts.navigationNonActiveTxtColor });
				}

				(opts.navigationAnimation == "visible") ? $parent.children(".navigation_borderBox").stop().animate({ left : pos_w-1 }, 500, opts.navigationEasing) : $parent.children(".navigation_borderBox").css({ display : "none" });
			}
		},
		moveNavigate : function(curr_selNum){
			if(opts.navigationColorType == "bgcolor"){
				$parent.children(".doubleSlideNavi").children("li:eq("+ curr_selNum +")").css({ backgroundColor : "#"+ opts.navigationBgColor +"" }).css({ color : "#"+opts.navigationActiveTxtColor }).siblings().css({ backgroundColor : "#FFF", color : "#"+opts.navigationNonActiveTxtColor });
			} else if(opts.navigationColorType == "border"){
				$parent.children(".navi_borderBox").stop().animate({ left : $parent.children(".doubleSlideNavi").children("li:eq("+ curr_selNum +")").position().left }, 500, opts.navigationEasing);
			}
		},
		captions : function(visibleType){
			if(visibleType == "show"){
				// 캡션 백그라운드 삽입
				var captions_html = "";
				captions_html += "<div class='slide_captions' style='position:absolute; top:"+ $imgHeight +"px; width:100%; height:0; background:#000'></div>";
				$parent.append(captions_html);
				
				// 캡션 백그라운드 위치 설정 및 애니메이션
				$parent.children(".slide_captions").css({ opacity : 0.5 }).stop().animate({ top : $imgHeight - ($imgHeight / 3.5), height : $imgHeight / 3.5 }, 150, function(){
					// 캡션 내용 삽입
					var captions_html2 = "";
					captions_html2 += "<div class='slide_captions_text' style='position:absolute; top:"+ ($imgHeight - ($imgHeight / 5)) +"px; left:10px; opacity:0; color:#FFF'>"+ $carousel_li.eq(curr_selNum).find('img').attr('alt') +"</div>";
					$parent.append(captions_html2);
					
					// 캡션 노출 형태 애니메이션
					setTimeout(function(){
						$parent.children(".slide_captions_text").stop().animate({ opacity : 1, left : 30 }, 150, function(){
							$carousel_ul.removeClass("preventCaptions");
						})
					, 150});
				});
			} else if(visibleType == "hide"){
				$parent.children(".slide_captions_text").stop().animate({ opacity : 0, left : 10 }, 150, function(){
					$(this).remove();	// 보고 있는 캡션은 삭제 후
					
					$parent.children(".slide_captions").stop().animate({ top : ($imgHeight - ($imgHeight / 3.5)) + ($imgHeight / 3.5), height : 0 }, 150, function(){ 
						$(this).remove();	// 캡션 백그라운드 아웃과 함께
						init.swapSlide();	// 다음 슬라이드로 이동
						setTimeout(function(){ init.captions("show") }, 600);	// 이동 완료 시점과 다음 캡션 노출 속도를 맞춤 
					});
				});
			}
		},
		autoSlide : function(){
			autoslide_Interval = setInterval(function(){
				before_selNum = curr_selNum;
				$getClass = "dir_next";
				if($getClass == "dir_next" && opts.doubleSlide == "none") curr_selNum = (curr_selNum >= ($carousel_li_length-1)) ? curr_selNum = 0 : curr_selNum += 1;
				
				direction = $getClass;
				// Slide Captions
				if(opts.captions == "visible") init.captions("hide");
				else init.swapSlide();
				
				return false;
			}, opts.autoSlideSpeed);
		},
		stopSlide : function(){
			clearInterval(autoslide_Interval);
		}
	}
	init.preset();
	
	// 현재위치
	var $chg_paginateSelector;
	if(opts.navigation == "visible" || (opts.paginate == "none" && opts.navigation == "visible" && opts.doubleSlide != "visible")) $chg_paginateSelector = opts.navigationPath;	// 썸네일 형태 페이징 ( 썸네일 Visible시 다른 페이징 형태 무시 )
	else if(opts.paginate == "visible") $chg_paginateSelector = opts.paginatePath;	// 썸네일, 캡션 형태 아닌 기본 페이징

	if(opts.navigation == "visible" || opts.paginate == "visible"){
		$(document).on(opts.mouseEvent, "#"+ opts.obj.attr("id") +" > "+ $chg_paginateSelector +" > li", function(){
			if((curr_selNum != $(this).index() || double_curr_selNum != $(this).index())){
				init.stopSlide();
				ds_directionFix_flag = false;
				if(opts.doubleSlide == "none"){
					before_selNum = curr_selNum;
					curr_selNum = $(this).index();
				} else if(opts.doubleSlide == "visible"){
					paginateMoveSlide = true;
					double_before_selNum = double_curr_selNum;
					double_curr_selNum = $(this).index();
				}

				// paginate next&prev direction 
				if(before_selNum < curr_selNum && opts.doubleSlide == "none"){
					$getClass = "dir_next";
					manual_paginate_direction_next = true;
				} else if(before_selNum > curr_selNum && opts.doubleSlide == "none"){
					$getClass = "dir_prev";
					manual_paginate_direction_prev = true;
				}

				if(opts.doubleSlide == "visible"){
					if(double_before_selNum < double_curr_selNum){
						$getClass = "dir_next";
						child_a_idx = $(this).index() - 1;
					} else if(double_before_selNum > double_curr_selNum){
						$getClass = "dir_prev";
						child_a_idx = $(this).index() + 1;
					}	
				}
				
				direction = $getClass;
				
				// Slide Captions
				if(opts.doubleSlide != "visible" || (double_before_selNum != double_curr_selNum)){
					if(opts.captions == "visible") init.captions("hide");
					else init.swapSlide();
				}
			}
		}); 
	}

	// 더블슬라이드 하단 메뉴 액션
	if(opts.doubleSlide == "visible"){
		$parent.children(opts.doubleSlideNaviPath).children("li").on(opts.mouseEvent, function(){
			if(curr_selNum != $(this).index()){
				init.stopSlide();
				swapBgFlag = true;
				paginateMoveSlide = false;
				ds_directionFix_flag = false;
				before_selNum = curr_selNum;
				curr_selNum = $(this).index();
				double_curr_selNum = 0;

				// 선택한 메뉴의 a태그 갯수를 다시 가져온다.
				$carousel_li_a_length = $carousel_ul.find("> li").eq(curr_selNum).find("a").length;

				child_a_idx = 0;
				$parent.find("#currNum_p, #currNum_n").text(1);
				$parent.find("#totalNum_p, #totalNum_n").text($carousel_li_a_length);
				
				init.setupPaginate();
				init.moveNavigate(curr_selNum);

				// paginate next&prev direction
				if(before_selNum < curr_selNum){
					$getClass = "dir_next";
					manual_paginate_direction_next = true;
				} else if(before_selNum > curr_selNum){
					$getClass = "dir_prev";
					manual_paginate_direction_prev = true;
				}
				
				init.swapSlide();
			}
		});
	}		
	
	// 마우스 진입시 좌우 버튼 이벤트
	if($carousel_li_length > 1 || $carousel_li_length != opts.visibleSlide){
		function prev_next_html(){
			if(opts.doubleSlide == "none"){
				_curr = (curr_selNum+1);
				_total = $carousel_li_length;
			} else if(opts.doubleSlide == "visible"){
				_curr = (child_a_idx+1);
				_total = $carousel_li_a_length;
			}
			
			var prev_next_html = "";
			prev_next_html += "<a href='#' class='dir_prev' style='position:absolute; z-index:1000; cursor:pointer'><img src='"+ opts.paginateSrcPath + opts.prevButton +"' class='prev_icon' />";
			if(opts.directionButnPaginate == "visible") prev_next_html += "<div class='currpaginate' style='position:absolute; top:0; display:none; padding-right:5px; background:#FFF; border:1px solid #d0d0d0; border-left:none; font-size:1em; font-family:Malgun Gothic; color:#000; text-align:center'><span id='currNum_p'>"+ _curr +"</span> / <span id='totalNum_p'>"+ _total +"</span></div>";
			prev_next_html += "</a>";
			prev_next_html += "<a href='#' class='dir_next' style='position:absolute; z-index:1000; cursor:pointer'><img src='"+ opts.paginateSrcPath + opts.nextButton +"' class='next_icon' />";
			if(opts.directionButnPaginate == "visible") prev_next_html += "<div class='currpaginate' style='position:absolute; top:0; display:none; padding-left:5px; background:#FFF; border:1px solid #d0d0d0; border-right:none; font-size:1em; font-family:Malgun Gothic; color:#000; text-align:center'><span id='currNum_n'>"+ _curr +"</span> / <span id='totalNum_n'>"+ _total +"</span></div>";
			prev_next_html += "</a>";
			$parent.append(prev_next_html);
			
			// 좌우 버튼 위치 수동 선택시
			if(opts.directionButnPos == "manual"){
				$parent.find("a.dir_prev").css({ top : opts.directionButnPosT, right : opts.directionButnPosR, left : opts.directionButnPosL, zIndex : 10 });
				$parent.find("a.dir_next").css({ top : opts.directionButnPosT, right : opts.directionButnPosR, zIndex : 10 });
			} else if((opts.directionButnPos == "none" && opts.doubleSlide == "none") || (opts.directionButnPos == "none" && opts.doubleSlide == "visible")){
				$parent.find("a.dir_prev").css({ top : (opts.obj.find(opts.carouselName).find("li").find("a").outerHeight() / 2) - 20, left : 0 });
				$parent.find("a.dir_next").css({ top : (opts.obj.find(opts.carouselName).find("li").find("a").outerHeight() / 2) - 20, right : 0 });
			} else if(opts.directionButnPos == "manual" && opts.doubleSlide == "visible"){	// 더블슬라이드 예외처리
				$parent.find("a.dir_prev").css({ top : opts.directionButnPosT, left : 0 });
				$parent.find("a.dir_next").css({ top : opts.directionButnPosT, right : 0 });
			}
			
			// 커버플로우일 경우 화살표 버튼 위치 보정
			if(opts.visibleSlide >= 3 && opts.coverFlow == "coverflow"){
				$parent.find("a.dir_prev").css({ left : ((((opts.obj.width() - $carousel_ul.children("li").children("a").outerWidth()) / 2) - parseInt($carousel_ul.children("li").css("marginRight"))) / 2) });
				$parent.find("a.dir_next").css({ right : ((((opts.obj.width() - $carousel_ul.children("li").children("a").outerWidth()) / 2) - parseInt($carousel_ul.children("li").css("marginRight"))) / 2) });
			}
			
			if(opts.directionButnPaginate == "visible"){
				setTimeout(function(){
					$parent.find("a.dir_prev").find(".currpaginate").css({ left : ($parent.find("a.dir_prev").width() - 1), width : ($parent.find("a.dir_prev").width() + 10), height : $parent.find("a.dir_prev").height() - ((($parent.find("a.dir_prev").height() / 2) - 9) + 2), paddingTop : (($parent.find("a.dir_prev").height() / 2) - 9) + "px" });
					$parent.find("a.dir_next").find(".currpaginate").css({ right : ($parent.find("a.dir_next").width() - 1), width : ($parent.find("a.dir_next").width() + 10), height : $parent.find("a.dir_next").height() - ((($parent.find("a.dir_next").height() / 2) - 9) + 2), paddingTop : (($parent.find("a.dir_next").height() / 2) - 9) + "px" });
				}, 100);
			}
			
			// 버튼 투명도 설정
			$parent.find("a.dir_prev").on("mouseenter", function(){
				$parent.find("img.next_icon").animate({ opacity : 0.5 }, 150)
				
				// 현재 페이징 / 총 페이징
				if(opts.directionButnPaginate == "visible" && opts.directionButnPos != "manual") $(this).children(".currpaginate").css({ display : "block" });
			}).on("mouseleave", function(){
				$parent.find("img.next_icon").animate({ opacity : 1 }, 150);
				
				_curr = $parent.find("#currNum_p, #currNum_n").text();
				_total = $parent.find("#totalNum_p, #totalNum_n").text();
				
				if(opts.directionButnPaginate == "visible" && opts.directionButnPos != "manual") $(this).children(".currpaginate").css({ display : "none" });	// 현재 페이징 / 총 페이징 숨김
			});
		
			$parent.find("a.dir_next").on("mouseenter", function(){
				$parent.find("img.prev_icon").animate({ opacity : 0.5 }, 150);
				
				// 현재 페이징 / 총 페이징
				if(opts.directionButnPaginate == "visible" && opts.directionButnPos != "manual") $(this).children(".currpaginate").css({ display : "block" });
			}).on("mouseleave", function(){
				$parent.find("img.prev_icon").animate({ opacity : 1 }, 150);
				
				_curr = $parent.find("#currNum_p, #currNum_n").text();
				_total = $parent.find("#totalNum_p, #totalNum_n").text();
				
				if(opts.directionButnPaginate == "visible" && opts.directionButnPos != "manual") $(this).children(".currpaginate").css({ display : "none" });	// 현재 페이징 / 총 페이징 숨김
			});
			
			// 버튼 액션 설정
			$parent.find("a.dir_prev, a.dir_next").on("click", function(e){
				if($carousel_ul.hasClass("preventCaptions") == false){	// 캡션 연속 클릭 체크
					paginateMoveSlide = false;
					double_before_selNum = curr_selNum;
					before_selNum = curr_selNum;

					$getClass = $(this).attr("class");
					if($getClass == "dir_prev" && opts.doubleSlide == "none") curr_selNum = (curr_selNum <= 0) ? curr_selNum = ($carousel_li_length-1) : curr_selNum -= 1;
					else if($getClass == "dir_next" && opts.doubleSlide == "none") curr_selNum = (curr_selNum >= ($carousel_li_length-1)) ? curr_selNum = 0 : curr_selNum += 1;

					direction = $getClass;

					// Slide Captions
					if(opts.captions == "visible") init.captions("hide");
					else init.swapSlide();
					
					return false;
				}
				
				e.preventDefault();
			});
		}
		if(opts.directionButn == "visible" && $carousel_li_length > 1) prev_next_html();

		$parent.on("mouseenter", function(){
			if(opts.directionButn == "hidden"){
				prev_next_html();

				// 버튼 투명도 설정
				$parent.find("a.dir_prev, a.dir_next").css({ opacity : 0, top : ($imgHeight / 2) - 20, cursor : "pointer" }).stop().animate({ opacity : 1 }, 150);
			}
			
			autoChkFlag = true;
			init.stopSlide();
		}).on("mouseleave", function(){
			if(opts.directionButn == "hidden") $parent.find("a.dir_prev, a.dir_next").remove();
			if(opts.visibleSlide <= 1) $(".currpaginate").find(".currpaginate").remove();	// 현재 페이징 / 총 페이징 제거
			
			if(opts.autoSlide == "auto" && autoChkFlag == true) init.autoSlide();
		});
	}
}