$(function(){
  // var navBtn = $("#navBtn > ul > li");
  /* var sideBtn = $("#sideBtn > ul > li");
  var mainSection = $(".main_container > section"); */

  /* navBtn.on("click", function(e){
    e.preventDefault();
    click_event($(this));
  }); */

  /* sideBtn.on("click", function(e){
    e.preventDefault();
    click_event($(this));
  });

  function click_event(target){
    var section = mainSection.eq(target.index());
    var offset = section.offset().top;

    $("body, html").stop().animate({scrollTop:offset}, 800, 'easeInOutCubic');
  }


  $(window).on("scroll",function(){
    var wScroll = $(this).scrollTop();

    mainSection.each(function(i, e){
      if(wScroll >= $(e).offset().top){
        // navBtn.removeClass("on").eq(i).addClass("on");
        sideBtn.removeClass("on").eq(i).addClass("on");
      }
    });
  }); */
	$(window).on('load', function (){
		//기본 설정
		var set = {
			//세로 네비 설정 [css로 가로 네비 사용 가능]
				nav : true,							//사용 유/무 [사용:true / 미사용:false]
				urlName : 'section',				// 기본 네이밍
				navName : false,					//이름 지정 [사용:true / 미사용:false] (미사용 시 아래 urlName에 설정된 값으로 노출)
				navNameArr : ['사업소개', '추천구좌', '집행사례'],
					//└─ 이름 지정 시 사용, 페이지 갯수에 맞게 이름 추가

				navRight : '20px',				//오른쪽 위치
				navTop : 'center',					//상단 위치 [기본 px // 'center' ← 브라우져 세로기준으로 가운데 위치시킬경우 사용]

				navShape : true,					//네비 모양 [false:텍스트 기본 / true:원모양]
				navSize : 10,						//기본 지름
				navShapeBg : '#fff',			//navShape 설정이 true일경우 원의 색상
				navTooltip : true,					//말풍선 [사용:true / 미사용:false] 사용 시 'navNameArr'에 지정된 텍스트 사용됨

			//세로 이동 애니메이션 설정
				speed : 1000,						//세로 이동 속도
				easing : 'easeInOutCubic',		//세로 이동 효과

			//페이지 위 아래 버튼 설정
				btnTopBtm : true,					//각 페이지 위, 아래 버튼 [사용:true / 미사용:false] Class : full-arr-top / full-arr-btm
				btnTopTxt : 'Prev',				//이전 페이지 텍스트
				btnBtmTxt : 'Next',				//다음 페이지 텍스트

			//맨 위로 버튼
				top : true,							//사용 유/무 [사용:true / 미사용:false] Class : full-top
				topName : 'top'					//버튼 이름
		};


		//기본 오브젝트
		var $htmlBody = $('html, body');
		var $fullPage = $('.full-page');
		var $fullLst = $fullPage.find('.full-lst').children();
		$fullLst.addClass('fp-lst');
		var lstLength = $fullLst.length;


		//세로네비 생성 및 도트 애니메이션
		var c_Idx;	//중요 인덱스

		$fullPage.prepend('<ul class="full-nav">');
		var $fullNavUl = $fullPage.find('.full-nav');

		var navNaming;
		for( i=0; i<lstLength; i++ ){
			if( set.navName )	navNaming = set.navNameArr[i];
			else	navNaming = set.urlName+' '+(i+1);

			$fullNavUl.append('<li><a href="#'+set.urlName+(i+1)+'">'+navNaming+'</a><i>'+set.navNameArr[i]+'</i></li>');
		}
		var $fullNav = $fullNavUl.find('li');
		var $fullNavA = $fullNavUl.find('a');
		var $fullNavI = $fullNavUl.find('i');
		var navSize = set.navSize;
		var navAni_basic =	{'width':set.navSize, 'height':navSize, 'margin-top':-navSize/2, 'margin-left':-navSize/2, 'background':set.navShapeBg};
		var navAni_hover =	{'width':set.navSize+3, 'height':navSize+3, 'margin':-(navSize+3)/2+' 0 0 '+-(navSize+3)/2};
		var navAni_on =		{'width':set.navSize+7, 'height':navSize+7, 'margin':-(navSize+7)/2+' 0 0 '+-(navSize+7)/2};

		function navDotAni(type, tg_idx, effThis, effSiblings){
			if( type == 0 ){
				$fullNav.eq(tg_idx).find('a').stop().animate(effThis, 100, set.easing);
				$fullNav.eq(tg_idx).siblings().find('a').stop().animate(effSiblings, 100, set.easing);
			}else{
				$fullNav.eq(tg_idx).find('a').stop().animate(effThis, 60, set.easing);
			}
		}

		$fullNav.on('click', function(){
			c_Idx = $(this).index();
			$fullNav.eq(c_Idx).addClass('on').siblings().removeClass('on');
			$htmlBody.stop().animate({'scrollTop':winH*c_Idx} ,set.speed ,set.easing);
			$fullPage.addClass('clickAction');
			window.location.replace( '#'+set.urlName+(c_Idx+1) );

			if( set.navShape ) navDotAni(0, c_Idx, navAni_on, navAni_basic);
		});

		//세로네비 설정
		if( !set.nav ) $fullNavUl.css({'top':'-9999px', 'visibility':'hidden'});

		$fullNavUl.css('right',set.navRight);
		if( set.navTop == 'center' )	$fullNavUl.css({'top':'50%', 'margin-top':-$fullNavUl.height()/2});
		else	$fullNavUl.css({'top':set.navTop});

		if( set.navShape ){
			$fullNavUl.addClass('fn_shape');
			$fullNavA.css(navAni_basic);
			$fullNav.on({
				mouseenter:function(){
					var this_idx = $(this).index();
					if( this_idx != c_Idx ) navDotAni(1, this_idx, navAni_hover);
					if( set.navTooltip ) $fullNav.eq(this_idx).find('i').fadeIn(100);
				},
				mouseleave:function(){
					var this_idx = $(this).index();
					if( this_idx != c_Idx ) navDotAni(1, this_idx, navAni_basic);
					if( set.navTooltip ) $fullNav.eq(this_idx).find('i').fadeOut(100);
				}
			});
		}

		if( set.navTooltip ) $fullNavUl.addClass('fn_tooltip');


		//세로값 계산
		var winH;
		$('html').css('overflow','hidden');
		$(window).resize(function(){
			winH = $(window).height();
			$fullLst.css('height',winH);
		});$(window).trigger('resize');


		//휠 이벤트
		var sctIdx = 0;
		var moving = false;

		if(document.addEventListener){
			document.addEventListener("mousewheel", MouseWheelHandler(), false);
			document.addEventListener("DOMMouseScroll", MouseWheelHandler(), false);
		}else{
			sq.attachEvent("onmousewheel", MouseWheelHandler());
		}

		function MouseWheelHandler() {
			return function (e) {
				// cross-browser wheel delta
				var e = window.event || e;
				var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

				if( !moving ){
					if( $fullPage.is('.clickAction') ) sctIdx = c_Idx;

					//Scroll Down
					if( delta < 0 ){
						if( sctIdx < lstLength-1 ) sctIdx++;
					}

					//Scroll UP
					else{
						if( sctIdx > 0 ) sctIdx--;
					}

					console.log(sctIdx)

					moving = true;
					c_Idx = sctIdx;
					$fullPage.removeClass('clickAction');
					$fullNav.eq(sctIdx).addClass('on').siblings().removeClass('on');
					$htmlBody.stop().animate({'scrollTop':winH*sctIdx} ,set.speed ,set.easing ,function(){
						moving = false;
					});
					if( set.navShape ) navDotAni(0, sctIdx, navAni_on, navAni_basic);

					window.location.replace( '#'+set.urlName+(sctIdx+1) );
					return false;
				}
			}
		}


		//터치 이벤트
		var startY, endY;
		var tMoving = false;

		$fullPage.on({
			touchstart:function(e){
				//documentClick = true;
				startY = e.pageY || e.originalEvent.touches[0].pageY;
			},

			touchmove:function(e){
				e.preventDefault();
				endY = e.pageY || e.originalEvent.touches[0].pageY;

				if( $fullPage.is('.clickAction') ) sctIdx = c_Idx;

				if( !tMoving ){
					//Down
					if( startY > endY ){
						if( sctIdx < lstLength-1 ){
							sctIdx++;
						}
					}

					//Up
					else if( startY < endY ){
						if( sctIdx > 0 ){
							sctIdx--;
						}
					}
				}

				tMoving = true;
				c_Idx = sctIdx;
				$fullPage.removeClass('clickAction');
				$fullNav.eq(sctIdx).addClass('on').siblings().removeClass('on');
				$htmlBody.stop().animate({'scrollTop':winH*sctIdx} ,500 ,'easeInOutSine' ,function(){
					tMoving = false;
				});
				if( set.navShape ) navDotAni(0, sctIdx, navAni_on, navAni_basic);

				window.location.replace( '#'+set.urlName+(sctIdx+1) );
			},

			touchend:function(e){
				//e.preventDefault();
			}
		});



		//색션의 번호를 파라미터 주소로 변환 및 현재위치 기억
		var lcUrl = location.href;
		var defaultUrl = lcUrl.split('/')[lcUrl.split('/').length-1];
		if( !defaultUrl.match(set.urlName) ){
			window.location.replace( lcUrl+'#'+set.urlName+1 );
			$fullNav.first().addClass('on');
			if( set.navShape ) navDotAni(0, 0, navAni_on, navAni_basic);
		}else{
			var thisUrl = defaultUrl.split('#')[1];
			var thisNum = thisUrl.slice(-1, thisUrl.length)-1;
			$fullNav.eq(thisNum).addClass('on');
			if( set.navShape ) navDotAni(0, thisNum, navAni_on, navAni_basic);
			$htmlBody.stop().animate({'scrollTop':winH*thisNum}, 100);
			c_Idx = thisNum;
			sctIdx = thisNum;
		}


		//각 페이지의 위 아래 버튼
		if( set.btnTopBtm ){
			$fullLst.each(function(i, e){
				var ud_idx = i+1
				//$(e).addClass('f_lst0'+(i+1));
				// $(e).append('<div class="full-up-down"><a href="#'+set.urlName+(ud_idx-1)+'" class="full-up">'+set.btnTopTxt+'</a><a href="#'+set.urlName+(ud_idx+1)+'" class="full-down">'+set.btnBtmTxt+'</a></div>');
			});
			var $fullUpDown = $fullPage.find('.full-up-down');
			var $fullUpDownA = $fullUpDown.find('a');

			$fullLst.first().find('.full-up-down a:first').remove();
			$fullLst.last().find('.full-up-down a:last').remove();

			$fullUpDownA.on('click', function(){
				var this_attr = $(this).attr('href');
				var ud_idx = this_attr.slice(-1, this_attr.length)-1;

				$htmlBody.stop().animate({'scrollTop':winH*ud_idx}, set.speed ,set.easing);
				$fullNav.eq(ud_idx).addClass('on').siblings().removeClass('on');
				if( set.navShape ) navDotAni(0, ud_idx, navAni_on, navAni_basic);
				c_Idx = ud_idx;
				sctIdx = ud_idx;
			});
		}


		//탑버튼
		if( set.top ){
			$fullPage.append('<a class="full-top">'+set.topName+'</a>');
			$('.full-top').on('click', function(){
				window.location.replace( '#'+set.urlName+1 );
				$htmlBody.stop().animate({'scrollTop':winH*0}, set.speed ,set.easing);
				$fullNav.eq(0).addClass('on').siblings().removeClass('on');
				if( set.navShape ) navDotAni(0, 0, navAni_on, navAni_basic);
				c_Idx = 0;
				sctIdx = 0;
			});
		}


		//포커스 관리
		$fullLst.find('a:first').on('focusin', function(){
			var focus_idx = $(this).parents('div').index();

			window.location.replace( '#'+set.urlName+(focus_idx+1) );
			$htmlBody.stop().animate({'scrollTop':winH*focus_idx}, 0);
			$fullNav.eq(focus_idx).addClass('on').siblings().removeClass('on');
			if( set.navShape ) navDotAni(0, focus_idx, navAni_on, navAni_basic);
			c_Idx = focus_idx;
			sctIdx = focus_idx;
		});

	});
});