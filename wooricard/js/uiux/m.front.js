// Analysys
var pubMode 		= false; // 퍼블리싱 모드 
var winH 			= 0; 	 // Window Height
var winW 			= 0; 	 // Window Width
var isDevice		= false; // 모바일
var isIOS			= false; // IOS
var isIOSApp		= false; // IOS App
var isItgSvc		= false; // 그룹통합서비스

//================================================================================ ui function
(function(t){
	var layout = {
			lastAppendHeight : 0, // append 시킨 마지막 높이값
			state : false, // layout init 실행 상태 
			// Layout 준비
			ready : function(){
				if( pubMode == false ){// 개발모드
					//layout.init();
				} else {// 퍼블리싱 모드
					var url = '../../html_m1/ajax/gnb.html';
					var tit = $('.header .titH1').text();
					if( tit == 0 ){
						tit = $('.header').text();
					}
					if( $('.header').length > 0 && $('.header *').length == 0 ){// Header 없을때
						$('.header').load(url + ' header > *',function(){// Header 로드
							$('.header .titH1').text(tit);
							$('title').text( $('header .titH1').text() );
							layout.readyChk();
						});
					} else {
						layout.readyChk();
					}
					if( $('.gnb *').length == 0 ){// GNB 없을때
						$('.header').after('<div class="gnb"></div>');
						$('.gnb').load(url + ' .gnb > *',function(){// GNB 로드
							layout.readyChk();
						});
					} else {
						layout.readyChk();
					}
					if( $('.footer').length > 0 && $('.footer *').length == 0 ){// Header 없을때
						$('.footer').load(url + ' footer > *',function(){// Header 로드
							layout.readyChk();
						});
					} else {
						layout.readyChk();
					}
					if( $('.quick').length > 0 && $('.quick *').length == 0 ){// Header 없을때
						$('.quick').load(url + ' .quick > *',function(){// Header 로드
							layout.readyChk();
						});
					} else {
						layout.readyChk();
					}
				}
			},
			// ready 완료시 실행
			init : function(){
				if( layout.state == false ){
					layout.state = true;
					$('html').addClass('ready');
					layout.resizeEvent();
					gnb.init();
					layout.footerInit();
					layout.quickInit();
					lp.move();
					layout.stickyChk();
					layout.setctionFirst();
					ui.init();
					ui.iptGroupHasInit();
					//wa.focusCenterAlign();
					layout.setting();
					layout.scrollInit();
					layout.headerMake();
					layout.animateInit();
					$(window).trigger('scroll');
				}
			},
			readyChk : function(){
				var targetCnt = $('.header').length + $('.footer').length + $('.quick').length + $('.gnb').length;
				var cnt = 0;
				if( $('.header *').length > 0 ){
					cnt++;
				} 
				if( $('.footer *').length > 0 ){
					cnt++;
				}
				if( $('.quick *').length > 0 ){
					cnt++;
				}
				if( $('.gnb *').length > 0 ){
					cnt++;
				}
				if( targetCnt == cnt ){
					layout.init();
				}
			},
			// resizeEvent
			resizeTimeout : new Object(),
			resizeEvent : function(){
				$(window).resize(function(){
					clearTimeout( layout.resizeTimeout );
					layout.resizeTimeout = setTimeout(function(){
						layout.resizeFunc();
					},100);
				})
				layout.resizeFunc();
				setTimeout(function(){
					layout.resizeFunc();
					$(window).trigger('scroll');
				},300);
			},
			resizeW : 0,
			resizeH : 0,
			resizeFunc : function(){
				if( winW != $(window).width() ){
					$('.testCurrent').text("가로 : " + layout.resizeW++);
					winW = $(window).width();
					ui.goodsListInit();
					layout.setting();
					ui.landingInit();
					ui.cardCompareResize();
					wa.progressInit();
					ui.consBlockResizeInit();
				}
				if( winH != $(window).height() ){
					winH = $(window).height();
					$('.testCurrent2').text("세로 : " + layout.resizeH++);
					var vh = window.innerHeight * 0.01;
					document.documentElement.style.setProperty('--vh',vh+'px');
				}
				gnb.resize();
			},
			// footer init
			footerInit : function() {
				if (isItgSvc) {
					if ($('.footSticky').length > 0) {
						$('.footSticky').remove();
					}
				} else {
					if( $('.footer .footSticky').length > 0 ){
						$('.footer').addClass('hasFSticky');
					}
				}
			},
			// quick init
			quickTimeout : new Object(),
			quickInit : function(){
				/*var quickIcoPos = [];
				$('.quick li a, .quick li button').attr('tabindex', -1);
				for(var i = 0 ; i < 10 ; ++i){
					quickIcoPos.push( i*58 );
				}
				$('.quick ul, .quick li, .quick .openBtn').addClass('easeInOutCirc');
				quickClose();
				var maxW = 160;
				$('.quick ul .txt').each(function(){
					if( $(this).outerWidth() + 46 > 160 ){
						maxW = $(this).outerWidth() + 46;
					} 
				});
				$('.quick li').css( 'width', maxW ); 
				$('.quick .openBtn').bind({
					'click':function(){
						$(this).closest('.quick').toggleClass('on');
						if( $('aside.quick').hasClass('on') ){
							quickOpen();
						} else {
							quickClose();
						}
					}
				});
				$('.quick ul').on('transitionend webkitTransitionEnd oTransitionEnd msTransitionEnd', quickMotionEnd );
				function quickOpen(){
					for(var i = 0 ; i <  $('.quick li').length ; ++i){
						var time = 0.1*i+'s';
						$('.quick li:eq('+i+')').css({'transition-delay': time, 'top': 0 });
					}
					$('.quick li a, .quick li button').removeAttr('tabindex');
					$('.quick ul').css('height', $('.quick li').length * 58 + 12 );
					$('.crdQuick .btnArea a, .crdQuick .btnArea button').attr('tabindex', -1);
					$('.quick .openBtn .waTxt').text('접기');
				}
				function quickClose(){
					for(var i = $('.quick li').length -1 ; i >= 0 ; --i){
						var time = 0.08*($('.quick li').length - 1 - i)+'s';
						$('.quick li:eq('+i+')').css({'transition-delay': time, 'top': 0 });
						$('.quick li:eq('+i+')').css('top', ($('.quick li').length-i)*58 + 6 );
					}
					$('.quick li a, .quick li button').attr('tabindex',-1);
					$('.quick ul').css('height', 0 );
					clearInterval( layout.quickTimeout );
					$('.quick').removeClass('active');
					$('.quick .openBtn .waTxt').text('펼치기');
				}
				function quickMotionEnd(e){
					if( $(e.target).is('ul') ){
						if( $('.quick').hasClass('on') ){
							$('.quick').removeClass('active');
							layout.quickTimeout = setTimeout(function(){
								$('.quick').addClass('active');
								$('.quick ul').attr('tabindex','-1').focus()
							},500);
						} else {
							console.log("quick has not on");
						}
					}
				}*/
				$('.quickTopBtn').bind({
					'click':function(){
						$('body,html').animate({scrollTop: 0},300);
					}
				});
				layout.chatInit();
			},
			quickMenuTimeout : new Object(),
			chatInit : function(){
				var quickTop = 0;
				$('.chatbot').addClass('on');
				setTimeout(function(){
					$('.chatbot').removeClass('on');
					$('.chatbot .inner div').attr('aria-hidden','true');
				},4000);
				setTimeout(function(){
					$('.chatbot .commentBox').remove();
				},5000);
				$('.quick .removeChat').bind({
					'touchstart':function(){
						//console test $('.txtL.bold.pointC1').text("Del touchStart");
						quickTop = parseInt( $('.chatbot').css('top') );
					},
					'touchend':function(){
						//console test $('.txtL.bold.pointC1').text("Del touchEnd , quickTop : " + quickTop + ", now : " + parseInt( $('.chatbot').css('top') ) );
						if( quickTop == parseInt( $('.chatbot').css('top') ) ){
							$('.quick .chatbot, .quick  .removeChat').remove();
						}
					}
				});
				$('.chatbot .inner').bind({
					'touchstart':function(e){
						e.preventDefault();
						quickTop = parseInt( $('.chatbot').css('top') );
						//console test $('.txtL.bold.pointC1').text("inner touchStart!");
					},
					'touchend':function(e){
						e.preventDefault();
						//console test $('.txtL.bold.pointC1').text("inner touchEnd!, quickTop : " + quickTop + ", now : " + parseInt( $('.chatbot').css('top') ) );
						if( isIOS == false ){
							if( quickTop == parseInt( $('.chatbot').css('top') ) ){
								$(this).trigger('click');
							}
						}
						
					}
				});
				// Drag
				var dragCnt = 0;
				
				$('.chatbot').draggable({
						distance : 10
					},
					{
						containment: "#content"
					},
					{
						start: function(){
							dragCnt = 1;
							quickTop = parseInt( $('.chatbot').css('top') );
						}
					},
					{
						drag: function(){
							//console test $('.txtL.bold.pointC1').text("dragging");
							dragCnt++;
						}
					},
					{
						stop : function(e){
							//console test $('.txtL.bold.pointC1').text("dragCnt : "+ dragCnt);
							if( dragCnt < 10 ){
								$( e.originalEvent.originalEvent.path[0] ).closest('.inner').trigger('click');
								$( e.originalEvent.originalEvent.path[0] ).closest('.removeChat').trigger('click');
							}
							console.log( "dragCnt : " + dragCnt )
							dragCnt = 0;
							setTimeout(function(){
								$('.chatbot').css('left', 0);
								if( parseInt( $('.chatbot').css('top') ) > 0 ){
									$('.chatbot').css('top', 0);
								}
							}, 10)
						}
					}
				);
			},
			lastY : 0,
			scrollInit : function(){
				$(window).scroll( layout.scrollMoved );
			},
			// Scroll 이동시 일어나는 일
			scrollMoved : function(e){
				/*console.log("scrollMoved");
				console.log( e.currentTarget.scrollY );*/
				// 스크롤 방향
				//$('.testCode .testCurrent').text( "current Target : " + e.currentTarget.scrollY );
				if( e.currentTarget.scrollY > layout.lastY ){
					$('body').addClass('goingDown');
				} else {
					$('body').removeClass('goingDown');
				}
				layout.lastY = e.currentTarget.scrollY;
				// Top버튼
				if( layout.lastY > 150 ){
					$('.quick').addClass('topVisible');
				} else {
					$('.quick').removeClass('topVisible');
				}
				// header 관련
				if( $('.transparent').length > 0 ){
					var per = layout.lastY*0.006;
					if(per > 1){
						per = 1;
					}
					$('.header .bg').css('opacity', per );
				}
				
				if( $('header.static').length > 0 ){
					if( e.currentTarget.scrollY > 50){
						if( $('.header.clone').hasClass('on') == false ){
							$('.header.clone').addClass('on');
						}
					} else {
						if( $('.header.clone').hasClass('on') ){
							$('.header.clone').removeClass('on');
						}
					}
				}
				
				// Sticky Contents
				var headerHgt = isItgSvc ? 0 : 52;
				if( $('.pageSticky').length > 0 ){
					if( layout.lastY + headerHgt > $('.pageStickyOri').offset().top ){ // 52는 header 높이
						$('.pageSticky').addClass('active');
					} else {
						$('.pageSticky').removeClass('active');
					}
				}

				layout.elementAni();
				
				
				$('.testCode .testHH').text( $('html').height() );
				$('.testCode .testWH').text( $(window).height() );
				$('.testCode .testW').text( $(window).scrollTop() );
				$('.testCode .testH').text( $('html').scrollTop() );
				$('.testCode .testB').text( $('body').scrollTop() );
				$('.testCode .testWH').text( $('.wrapper').scrollTop() );
				$('.testCode .testC').text( $('#content').scrollTop() );
				$('.testCode .testResult').text( Math.floor( $('html').outerHeight() - $(window).scrollTop() - $(window).height() ) );
				/* 개발쪽 전달 함수
				if( Math.floor( $('html').outerHeight() - $(window).scrollTop() - $(window).height() ) < 90 ){
					if( layout.lastAppendHeight != $('#content').outerHeight() ){
						layout.lastAppendHeight = $('#content').outerHeight();
						appendTestItem();
						return true;
					} else {
						return false;
					}
				} else {
					return false;
				}*/
			},
			headerMake : function(){
				if( $('.transparent ').length > 0 ){
					$('.header').append('<div class="bg"/>');
				}
				if( $('.header.static').length > 0 ){
					var header = $('.header.static').clone(true);
					$('.header.static').after( header );
					$('.header.static').last().addClass('clone').removeClass('static white');
				}
			},
			popScrollMoved : function(){
				$('.popCont .aniElement , .popCont .bar.ani').each(function(){
					if( $(this).offset().top - $('.nowOpen .popCont').offset().top < winH - 50 ){
						$(this).addClass('aniOn');
					}
				});
			},
			// Sticky Button check
			stickyChk : function(){
				if( $('body .wrapper .btnArea.sticky').length > 0 ){
					$('body').addClass('hasSticky');
					if( $('body .wrapper .btnArea.sticky.three').length > 0 ){
						$('body').addClass('three');
					}
				}
				if( $('body .footer').length == 0  && $('.fitPage').length == 0 && $('.eventView_body').length == 0 && $('.shareArea').length == 0 && $('.exFooter').length == 0 ){
					$('body').addClass('noFooter');
				}
				
			},
			//첫번째 섹션 찾기
			setctionFirst : function(){
				$('.addInfoList.notice, .relatedArea').each(function(){
					if($(this).hasClass('notice')) { 
						$(this).closest('section').addClass('noticeArea'); 
					}
					$(this).closest('section').addClass('hr');
				})
				$('#content section, .popWrap section').each(function(){
					if( $(this).find(' > *').first().is('.titArea') ){
						$(this).find('.titArea').first().addClass('mt0'); 	
					}
				});
			},
			// 
			animateInit : function(){
				var delayCss = "";
				for( var i = 0 ; i < 100 ; ++i ){
					var speed = i*0.1;
					delayCss += '.sDelay'+i+' {transition-delay: '+speed+'s !important}'
				}
				$('head').append('<style type="text/css">'+delayCss+'</style>');
				
				// Main
				$('.main .mainTit').addClass('aniElement');
				$('.main .goodsList.card li').addClass('aniElement');
				layout.delayInit( '.main .goodsList.card li' );
				$('.main .btn_p.round.shadow').addClass('aniElement');
				$('.main .quickMenuLink > li').addClass('aniElement');
				layout.delayInit( '.main .quickMenuLink > li' );
				$('.main .bnfLink li').addClass('aniElement');
				$('.main .bnfLink li:nth-child(1n)').addClass('fromLeft');
				$('.main .bnfLink li:nth-child(2n)').addClass('fromRight');
				$('.main .serviceLink .link').addClass('aniElement');
				$('.main .noticeList').addClass('aniElement');
				$('.main .lifeLink').addClass('aniElement');
				$('.main .subMainVisual').addClass('aniElement');
				$('.main .appLink li').addClass('aniElement little');
				layout.delayInit( '.main .appLink li' );
			},
			
			
			// Element animate
			elementAni : function(){
				$('#content .aniElement , #content .bar.ani').each(function(){
					if( layout.lastY + winH > $(this).offset().top + 100 ){
						if( $(this).is(':visible') ){
							$(this).addClass('aniOn');
						}
					}
				});
			},
			
			delayInit : function(target){
				$(target).each(function(idx){
					$(this).addClass('sDelay'+idx);
					idx++;
				});
			},
			
			// Loading Control
			loadingInit : function(_txt, _target){
				var txt = _txt;
				if( _target != '' && _target != undefined ){
					var target = _target;
				} else {
					target = 'body';
				}
				
				if( _txt != '' && _txt != undefined ){
					var resultTxt = '<p class="txt">'+txt+'</p>'
					$(target).append('<div class="loadingWrap"><span></span><p class="blind">로딩중</p>'+resultTxt+'</div>');
				} else {
					$(target).append('<div class="loadingWrap"><span></span><p class="blind">로딩중</p></div>');
				}
			},
			loadingRemove:function(){
				$('.loadingWrap').remove();
			},
			// Layout Setting
			setting : function(){
				winH = $(window).height();
				var footSticky = 0;
				var quickH = 0;
				var resultH = 20;
				if( $('.footSticky').length > 0 ){
					footSticky = $('.footSticky').outerHeight();
				}
				if( $('.quick').length > 0 ){
					quickH = 60;
				}
				if( $('.hasSticky').length > 0 ){
					footSticky = 60;
					if( $('.hasSticky .wrapper .btnArea.sticky.three').length > 0 && $('.hasSticky .wrapper .btnArea.sticky.three').is(':visible') == true ){
						footSticky = 120;
					}
				}
				if( $('.bottomTotal.sticky').length > 0 ){
					footSticky += $('.bottomTotal.sticky').outerHeight();
					$('body').addClass('noFooter');
				}
				resultH += quickH;
				$('#content').css('min-height', winH - $('.footer').outerHeight() + footSticky );
				$('.fullH').css( 'min-height', winH );
				$('.quick').css('bottom', 15 + footSticky );
				$('.footer').css('padding-bottom', resultH );
				layout.headerAlign();
			},
			headerAlign : function(){
				if( $('.header .titH1').outerHeight() > 70 ){
					$('.header .titH1').addClass('txtM');
				}
			}
			
	}
	var gnb = {
			init : function(){
				if (isItgSvc) {
					$('.header').hide();
					$('#content').css('padding-top', '0px');
				} else {
					$('.gnb').addClass('easeOutExpo');
					$('.wrapper').after($('.gnb'));
					$('.gnb .gate li.on button').append('<span class="blind">선택됨</span>');
					$('.header .gnb').insertAfter( 'body > .wrapper' );
					//$('.gnb .menu').after('<div class="d1Bar"></div>');
					$('.header .btnIco_allMenu').bind({'click':function(){gnb.open();}});
					$('.gnb .topBtns .btnIco_close').bind({'click':function(){gnb.close();}});
					if( $('.gnb .active').length == 0 ){
						$('.gnb .menu > li:eq(0)').addClass('active');
					}
					
					$('.gnb .menu').after('<div class="subMenuClone"></div>');
					
					$('.depth3 > li.active').addClass('on').parent().closest('li').addClass('active on');
					$('.depth2 > li.active').parent().closest('li').addClass('active on');
					$('.depth2 > li').addClass('on');
					
					gnb.oneDepthInit();
					gnb.twoDepthInit();
					// 접근성
					$('.gnb').before('<div class="gnbFocusSet blind first" tabindex="0"></div>');
					$('.gnb').after('<div class="gnbFocusSet blind last" tabindex="0"></div>');
					$('.gnbFocusSet').bind({
						'focusin':function(){
							if( $(this).hasClass('first') ){
								$( wa.getEnabledFocus('.gnb') ).last().focus();
							} else if( $(this).hasClass('last') ){
								$( wa.getEnabledFocus('.gnb') ).first().focus();
							}
						}
					});
					
					$('.gnb .menu > li.active > a').trigger('click');
				}
			},
			openEnabled : true,
			openInterval : new Object(),
			contentY : 0,
			open : function(){
				if( gnb.openEnabled == true ){
					gnb.openEnabled = false;
					$('.gnb').show();
					gnb.contentY = $('html').scrollTop();
					clearInterval( gnb.openInterval );
					setTimeout(function(){
						$('.gnb').addClass('open');
					}, 10);
					gnb.openInterval = setTimeout(function(){
						gnb.openEnabled = true;
						$( wa.getEnabledFocus('.gnb') ).first().focus();
						$('.wrapper').hide();
					},700);
					gnb.resize();
				}
			},
			close : function(){
				if( gnb.openEnabled == true ){
					$('.gnb').removeClass('open');
					$('.wrapper').show();
					$('html, body').scrollTop( gnb.contentY );
					$('.header .btnIco_allMenu').focus();
					clearInterval( gnb.openInterval );
					gnb.openInterval = setTimeout(function(){
						$('.gnb').hide();
						gnb.openEnabled = true;
					}, 500);
				}
			},
			oneDepthInit : function(){
				$('.gnb .menu > li.active > a').attr('title','선택됨 (현재 메뉴)');
				$('.gnb .menu > li.active').addClass('on');
				gnb.oneDepthActive( $('.gnb .menu > li.active') );
				$('.gnb .menu > li > a').bind({
					'click': function(e){
						e.preventDefault();
						var target = $(this).parent();
						gnb.oneDepthActive( target );
					}
				});
			},
			oneDepthActive : function( target ){
				$(target).siblings().removeClass('on');
				$(target).addClass('on');
				$('.gnb .menu > li > a').removeAttr('title');
				$('.gnb .menu > li.active > a').attr('title', '현재메뉴')
				$(target).find('>a').attr('title','선택됨');
				if( $(target).hasClass('active') ){
					$(target).find('>a').attr('title','선택됨 (현재 메뉴)');
				}
				//$('.d1Bar').css('top', $(target).position().top + 6 );
				
				$('.gnb .subMenuClone .subWrap, .gnb .subMenuClone .waBlindTxt').remove();
				var clone = $('.gnb .menu > li.on .subWrap').clone(true);
				$('.gnb .gnbArea').scrollTop(0);
				$('.gnb .subMenuClone').prepend( clone );
				$('.gnb .subMenuClone').prepend( '<span class="waBlindTxt blind">'+$('.gnb .menu > li.on > a').text()+'의 하위메뉴</span>' );
				$('.gnb .subMenuClone .waBlindTxt.blind').attr('tabindex','-1').focus();
			},
			twoDepthInit : function(){
				$('.gnbArea .subArea .depth2 > li').each(function(){
					if( $(this).find(' > .depth3').length > 0 ){
						$(this).find(' > a').addClass('accoBtn');
						$(this).find('.depth3').addClass('accoBody');
						$(this).addClass('accoItem');
					}
				});
				/* depth4 */
				$('.gnbArea .subArea .depth3 > li').each(function(){
					if( $(this).find(' > .depth4').length > 0 ){
						$(this).find(' > a').addClass('accoBtn');
						$(this).find('.depth4').addClass('accoBody');
						$(this).addClass('accoItem');
					}
				});
			},
			resize: function(){
				$('.gnb').removeClass('short super');
				if( $(window).height() < 641 ){
					$('.gnb').addClass('short super');
				} else if( $(window).height() < 700 ){
					$('.gnb').addClass('short');
				} else {
					$('.gnb').removeClass('short super');
				}
				$('.gnb .gnbArea').height( $(window).height() - $('.gnb .topArea').outerHeight() );
				var favH = $('.favBox').outerHeight();
				if( favH < 50 ){
					favH = 156;
				}
				
				console.log('resize');
				var calcH = $(window).height() - $('.gnb .topArea').outerHeight()-favH;
				var minH = $('.gnb .menu > li').outerHeight() * $('.gnb .menu > li').length + 28;
				if( calcH < minH ) {
					calcH = minH;
				}
				$('.gnb .subMenuClone').css('min-height',calcH);

				//$('.gnb .subMenuClone').css('min-height',$(window).height() - $('.gnb .topArea').outerHeight()-favH);
			}
			
	}
	var ui = {
			init : function(){
				console.log('ui init');
				ui.setDivFocus();
				ui.formTblInit();
				ui.selectInit();
				ui.tabInit();
				ui.iptBtnBrInit();
				ui.iptInit();
				ui.accoInit();
				crd.init();
				ui.customSltInit();
				ui.swiperInit();
				ui.conBlockInit();
				ui.goodsListInit();
				ui.dataListInit()
				ui.cardListInit();
				ui.eventListInit();
				ui.autocompleteInit();
				ui.assistBtnInit();
				ui.cmsAddClass();
				ui.tblScrollInit();
				ui.pageStickyInit();
				ui.barAniInit();
				ui.cardCompareResize();
				ui.toggleSwitchInit();
				//ui.numberAni();
				tip.init();
				tip.mTipInit();
				wa.update();
				ui.changeBG();
				setTimeout(function(){$('.cardSelVisual').addClass('uiAct');},1000);
				setTimeout(function(){layout.popScrollMoved();},1500);
				if( $('body.fitPage').length > 0 ){
					$('html, body').scrollTop(0).addClass('fitPage');
				}
				
				/*if( $('html').outerHeight() < $(window).height() ){
					layout.lastY = -1;
					$(window).trigger('scroll');
				}*/
				
			},
			// Focus
			setDivFocus : function(){
				for( var i = 0 ; i < $('.ipt').length ; ++i ){
					if( $('.ipt').eq(i).closest('div[class*=set]').length > 0 ){
						if( $('.ipt').eq(i).data('focusInit') == undefined ){
							$('.ipt').eq(i).data('focusInit', true);
							$('.ipt').eq(i).bind({
								'focusin':function(){
									$(this).closest('div[class*=set]').addClass('focusin');
									if( $(this).closest('div[class*=set]').find('.error').length > 0 ){
										$(this).closest('div[class*=set]').addClass('error');
									}
								},
								'focusout':function(){
									$(this).closest('div[class*=set]').removeClass('focusin');
									if( $(this).closest('div[class*=set]').find('.error').length == 0 ){
										$(this).closest('div[class*=set]').removeClass('error');
									}
								}
							});
						}
					}
				}
			},
			// FormTable init
			formTblInit : function(){
				$('.formTbl .th').each(function(){
					if( $(this).hasClass('req') ){
						if( $(this).find('.required').length == 0 ){
							$(this).append('<span class="required">*<span>필수</span></span>');
						}
					}
				});
				$('span.sign').attr('aria-hidden',true);
			},
			// input init
			iptInit : function(){
				$('.setCard .ipt[type=tel], .ipt.date, .ipt.month, .ipt:checkbox, .ipt:radio, select.ipt, textarea.ipt, .ipt[type=password], .ipt[type=email]').addClass('notDel');
				$('.btnIco_keypad').each(function(){
					$(this).attr({'tabindex':-1,'aria-hidden':true});
					if( $(this).prev().is('.ipt') ){
						 $(this).prev().addClass('notDel');
					}
				});
				$('.setCard .keypad').each(function(){
					$(this).closest('.setCard').addClass('hasKeypad');
				})
				for(var i = 0; i < $('.ipt').length ; ++i ){
					if( $('.ipt').eq(i).hasClass('uiAct') == false ){
						$('.ipt').eq(i).addClass('uiAct');

						$('.ipt').eq(i).bind({
							'focusin': function(){
								$(window).scrollTop( $(window).scrollTop() -1 );
								$('.testCurrent2').text('IOS Focus IN');
							},
							'focusout': function(){
								$(window).scrollTop( $(window).scrollTop() + 1 );
								$('.testCurrent2').text('IOS Focus OUT');
							}
						})
						
						// Delete
						if( $('.ipt').eq(i).hasClass('notDel') == false ){
							ui.iptDelInit( $('.ipt').eq(i) );
						}
						// Date
						if( $('.ipt').eq(i).hasClass('date') ){
							if( $('.ipt').eq(i).attr('type') != 'date' ){
								$('.ipt').eq(i).attr('type', 'date')
							}
						}
						// Month
						if( $('.ipt').eq(i).hasClass('month') ){
							if( $('.ipt').eq(i).attr('type') != 'month' ){
								$('.ipt').eq(i).attr('type', 'month');
							}
						}
						// Unit
						if( $('.ipt').eq(i).data('unit') != undefined ){
							ui.iptUnitInit( $('.ipt').eq(i) );
						}
					}
				}
				
				$('.hasKeypad .ipt[type=password]').each(function(){
					if( $(this).attr('maxlength') != undefined ){
						$(this).closest('.keypad').addClass( 'letter'+$(this).attr('maxlength') );
					}
				});
				
				$('.pdrSet').each(function(){
					var valueW = $(this).parent().find('.links').outerWidth()+20;
					$(this).css('padding-right', valueW);
				});
				
				// E-mail auto Complete
				ui.emailInit();
				
				// 금액에 콤마(,) 추가
				ui.inputCurCommInit();
				
			},
			// ipt Delete init
			iptDelInit : function( target ){
				
				var delTxt = '해당 필드 입력값 삭제';
				var linkBtn = null;
				if( $(target).next().hasClass('links') ){
					linkBtn = $(target).next();
				}
				$(target).wrap('<div class="iptWrap">');
				if( linkBtn != null ){
					$(target).parent().append(linkBtn);
					console.log('del 실행');
					console.log(  $(linkBtn).text() + ', ' + $(linkBtn).width() );
					$(target).css('padding-right', parseInt( $(linkBtn).width()+20 ) + 'px' ).addClass('pdrSet');
					$(target).addClass('hiddenDel');
				}
				if( linkBtn == null ){
					$(target).after('<button class="btnIco_del"><span class="blind">'+delTxt+'</span></button>');
				}
					
				if( $(target).hasClass('full') ) $(target).parent().addClass('full'); 
				var delBtn = $(target).parent().find('.btnIco_del');
				if( parseInt($(target).css('margin-right')) != 0 && $(target).hasClass('full') == false ){
					$(delBtn).addClass('hasMargin');
				}
				$(delBtn).attr('tabindex',-1);
				$(delBtn).bind({
					'mousedown':function(e){
						e.preventDefault();
						$(this).closest('.iptWrap').find('.ipt').val("").focus();
						$(this).parent().removeClass("on");
						// 보안솔루션 관련 코드
						/*if( $(this).closest('.delete').find('.ipt').attr('e2e_type') != undefined ){
							var obj = $(this).closest('.delete').find('.ipt');
							$ASTX2.clearE2EText( document.getElementById(obj[0].id) );
						}*/
					},
					'focusout':function(){
						$(this).parent().removeClass("on");
					}
				});
				
				$(target).bind({
					'change paste keydown keyup':function(e){
						if( $(this).val() != "" ){
							$(this).parent().addClass("on");
						} else {
							$(this).parent().removeClass("on");
						}
							
					},
					'focusin':function(){
						if( $(this).val() != "" ){
							var target = $(this);
							setTimeout(function(){target.parent().addClass("on");},10);
						}
					},
					'focusout':function(){
						setTimeout(function(){
							var elem = wa.getNowFocus();
							if( $( elem ).hasClass('btnIco_del') == false ){
								$(this).parent().removeClass("on");
							}
							if( $( elem ).attr('class') != 'btnIco_del' ){
								$('.iptWrap').removeClass('on');
							}
						},10);
					}
				});
			},
			// input has unit case
			iptUnitInit : function( target ){
				console.log('????? unit Init');
				$(target).addClass('unit');
				var txt = $(target).data('unit');
				if( $(target).closest('.iptWrap').find('.unit').length < 2 ){
					$(target).closest('.iptWrap').append('<span class="unit">'+txt+'</span>');
				}
				if($(target).hasClass('front')){
					var type = 'padding-left';
				} else {
					type = 'padding-right';
				}
				var pdR = $(target).closest('.iptWrap').find('span.unit').outerWidth();
				if( pdR > 20 ){
					$(target).css(type, pdR);
				}
			},
			/** input currency comma(JMin 추가) **/
			inputCurCommInit : function(){
				
				console.log("===== inputCurCommInit");
				$('input.curComm').each(function(index, target){
					
					var regexp = /\D+/g;
					var dataMaxLength = $(target).attr("data-max-length");
					
					if( dataMaxLength && dataMaxLength > 0 ){
						$(target).bind("keyup", function(){
							// Comma 제외 maxLength 처리
							var value = $(this).val().replace(regexp, "");
							if( value.length > dataMaxLength ){
								$(this).val($(this).attr("data-last-value"));
							}
							
							// 콤마처리 추가
							CmnUtil.input.addComma(this);
						});
						$(target).bind("keydown", function(){
							// Comma 제외 maxLength 처리
							var value = $(this).val().replace(regexp, "");
							if( value.length <= dataMaxLength ){
								$(this).attr("data-last-value", value);
							}
						});
					}else{
						$(target).bind("keyup", function(){
							CmnUtil.input.addComma(this);
						});
					}
					
				});
				
			},
			
			/** input currency comma(JMin 추가) **/
			// email
			emailInit : function (){
				$('.ipt[type=email]').each(function(){
					$(this).addClass('uiAct');
					if( $(this).is(':visible') ){
						if( $(this).hasClass('mailtipAct') == false ){
							$(this).addClass('mailtipAct');
							$(this).mailtip({
								onselected: function (mail){}
							});
							if( $(this).closest('.popCont').length > 0 ){
								$(this).bind({
									'focusin':function(){
										$('.nowOpen .popCont, .nowOpen .scroll:not(.on)').addClass('overV');
									},
									'focusout':function(){
										$('.nowOpen .popCont, .nowOpen .scroll').removeClass('overV');
									}
								})
							}
						}
					}
				});
			},
			// select
			nowSelectBox : new Object(),
			selectInit : function(){
				for(var i = 0; i < $('select.ipt').length ; ++i ){
					if( $('select.ipt:eq('+i+')').hasClass('uiAct') == false ){
						$('select.ipt:eq('+i+')').addClass('uiAct');
						$('select.ipt:eq('+i+')').attr({'tabindex': -1});
						$('select.ipt:eq('+i+')').wrap('<div class="sltWrap"></div>');
						$('select.ipt:eq('+i+')').parent().prepend('<button type="button" aria-hidden="true"><span class="blind">'+$('select.ipt:eq('+i+')').attr('title')+'</span></button>');
						$('select.ipt:eq('+i+')').parent().find('button').bind({
							'click':function(){
								if( $(this).parent().find('select').prop('disabled') == false && $(this).parent().find('select').attr('readonly') == undefined ){
									console.log("셀렉트 버튼 클릭");
									ui.nowSelectBox = $(this).next();
									var optList = "";
									if( $(ui.nowSelectBox).find('option:selected').index() == 0 && $(ui.nowSelectBox).find('option:eq(0)').attr('selected') == undefined ){
										$(ui.nowSelectBox).find('option:eq(0)').attr('selected','selected').prop('selected',true);
									}
									for( var j = 0 ; j < $(ui.nowSelectBox).find('option').length ; ++j ){
										var optionItem = $(ui.nowSelectBox).find('option:eq('+j+')');
										var disabled = optionItem.prop('disabled');
										var selected = optionItem.prop('selected');
										
										/** Custom selectbox display 처리(JMin 추가) **/
										var display = optionItem.css('display');
										if( "none" != display){
											optList += '<li role="radio" tabindex="0" data-value="'+ optionItem.attr('value') +'" aria-checked="false" data-disabled="'+disabled+'" data-selected="'+selected+'">'+optionItem.text()+'</li>';
										}
										/** Custom selectbox display 처리(JMin 추가) **/
										
									}
									var title = $(ui.nowSelectBox).attr('title');
									$('body').append( ui.getSelectHead(title)+'<ul class="optionList" role="radiogroup" aria-labelledby="'+title+'">'+optList+'</ul>'+ui.getSelectFoot() );
									var activeIdx = $(ui.nowSelectBox).find('option:selected').index();
									if( activeIdx > -1 ){
										$('.selectLayer li:eq('+activeIdx+')').addClass('on').attr('aria-checked',true);
									}
									if( $('.selectLayer.ajaxPop .popHead .titH1').text() == $('.selectLayer.ajaxPop .optionList li:eq(0)').text() ){
										$('.selectLayer.ajaxPop .optionList li:eq(0)').hide();
									}
									if( $(ui.nowSelectBox).closest('.hasAgency').length == 1 ){
										$('.selectLayer.ajaxPop .optionList li:eq(0)').hide();
										//$(ui.nowSelectBox).closest('.hasAgency').addClass('on');
									}
									$('.selectLayer li').bind({
										'click':function(e){
											var value = $(this).data('value');
											var idx = $(this).index();
											$(ui.nowSelectBox).val(value);
											//$(ui.nowSelectBox).find('option').removeAttr('selected').prop('selected', false);
											//$(ui.nowSelectBox).find('option:eq('+idx+')').attr('selected','selected').prop('selected', true);
											$(ui.nowSelectBox).trigger('change');
											$(ui.nowSelectBox).closest('.iptGroup').find('.ipt[type=radio]:checked').removeAttr('checked').prop('checked',false);
											if( $(ui.nowSelectBox).closest('.hasAgency').length > 0 ){
												$(ui.nowSelectBox).closest('.hasAgency').addClass('on');
											}
											lp.close();
										},
										'keyup':function(e){
											if(e.keyCode == 13){
												$(this).trigger('click');
											}
										}
									});
									lp.open('.selectLayer');
								}
							}
						});
					}
				}
			},
			iptGroupHasInit : function(){
				for( var i = 0 ; i < $('.hasAgency').length ; ++i ){
					if( $('.hasAgency:eq('+i+')').hasClass('uiAct') == false ){
						$('.hasAgency:eq('+i+')').addClass('uiAct');
						/*$('.hasAgency:eq('+i+') .sltWrap button').bind({
							'click' : function(){
								//$(this).closest('.hasAgency').addClass('on').siblings().find('.ipt').removeAttr('checked').prop('checked',false);
							}
						});*/
						$('.hasAgency:eq('+i+')').siblings().find('.ipt').bind({
							'change':function(){
								var hasAgency = $(this).closest('.iptGroup').find('.hasAgency') 
								$(hasAgency).removeClass('on');
								$(hasAgency).find('select option').removeAttr('selected');
								var defVal = $(hasAgency).find('select option:eq(0)').val();
								$(hasAgency).find('select').val(defVal).trigger('change');
							}
						});
					}
				}
				
			},
			getSelectHead : function(title){
				var str = '<div class="popWrap ajaxPop selectLayer"><div class="popup"><div class="popContain"><div class="popCont bottom"><div class="popHead"><h1 class="titH1">'+title+'</h1></div><div class="popBody"><div class="popInner">';
				return str;
			},
			getSelectFoot : function(){
				var str = '</div></div><button type="button" class="btnIco_close" onclick="lp.close();"><span>닫기</span></button></div></div></div></div>';
				return str;
			},
			// accordian init Make
			accoInit : function(){
				//faq
				$('.faqList').each(function(){
					$(this).find('span[class^=ico] span:not(.blind)').attr('aria-hidden', true);
					$(this).find('.icoQ').append('<span class="blind">질문</span>');
					$(this).find('.icoA').append('<span class="blind">답변</span>');
				});
				$('.accoBody .inner').attr('tabindex','0');
				for( var i = 0 ; i < $('.accoBtn').length ; ++i ){
					if( $('.accoBtn:eq('+i+')').closest('.dataList').length > 0 ){
						if( $('.accoBtn:eq('+i+')').parent().is('.block') == true ){
							if( $('.accoBtn:eq('+i+')').parent().next().hasClass('accoBody') == false ){
								$('.accoBtn:eq('+i+')').addClass('vcbNone uiAct');
							}
						}
					}
					if( $('.accoBtn:eq('+i+')').hasClass('uiAct') == false ){
						$('.accoBtn:eq('+i+')').addClass('uiAct');
						if( $('.accoBtn:eq('+i+')').attr('href') == undefined && $('.accoBtn:eq('+i+')').is('a') ){
							$('.accoBtn:eq('+i+')').attr('href' , '#');
						}
						if( $('.accoBtn:eq('+i+')').closest('.accoTbl').length == 0 ){ // accoTable 유무 체크
							$('.accoBtn:eq('+i+')').closest('ul').find(' > *').addClass('accoItem');
						} else {
							$('.accoBtn:eq('+i+')').closest('.accoTbl').find('tbody > tr').addClass('accoItem');
							$('.accoBtn:eq('+i+')').closest('tr').next().addClass('accoBodyWrap');
						}
						$('.accoBtn:eq('+i+')').attr({'role':'button', 'tabindex':'0', 'aria-expanded': false, 'aria-controls':'acco_'+i});
						if( $('.accoBody:eq('+i+')').attr('id') == undefined ){
							$('.accoBody:eq('+i+')').attr('id', 'acco_'+i );
						} else {
							$('.accoBtn:eq('+i+')').attr('aria-controls', $('.accoBody:eq('+i+')').attr('id') );
						}
						if( $('.accoBtn:eq('+i+')').closest('.accoItem.on').length > 0 ){
							$('.accoBtn:eq('+i+')').attr('aria-expanded', true);
						}
						//약관 기본셋팅
						$('.termsWrap').addClass('accoItem');
						//$('.termsWrap .iptGroup .accoItem:first-child').addClass('on');
						$('.termsWrap .accoBody').each(function(){
							if( $(this).hasClass('notInner') == false && $(this).closest('.accoBody').length == 1 ){
								if( $(this).find('.inner').length == 0 ){
									$(this).wrapInner('<div class="inner"/>');
								}
							}
						});
						// 카드리스트 예외처리
						if( $('.accoBtn:eq('+i+')').closest('.cardList').length > 0 ){
							if( $('.accoBtn:eq('+i+')').closest('.block').find('.links').length > 0 || $('.accoBtn:eq('+i+')').closest('.block').find('.state').length > 0 ){
								var num = $('.accoBtn:eq('+i+')').closest('.block').find('.links').length;
								$('.accoBtn:eq('+i+')').closest('.block').addClass('hasLinks num'+num);
							}
						}
						
						if( $('.accoBtn:eq('+i+')').closest('.accoTbl').length == 0 ){ // accoTable 유무 체크
							$('.accoBtn:eq('+i+')').closest('.accoItem.on').find('.accoBody').show();
							$('.ipt.unit').each(function( idx ){
								ui.iptUnitInit( $(this) );
							});
						} else {
							$('.accoBtn:eq('+i+')').closest('.accoItem.on').next('.accoItem').find('.accoBody').show();
						}
						$('.accoBtn:eq('+i+')').bind({
							'click':function(e){
								e.preventDefault();
								if( $(this).closest('.accoTbl').length == 0 ){ // accoTable 유무 체크
									var contents = $(this).closest('.accoItem').find(' > .accoBody');
								} else {
									contents = $(this).closest('.accoItem').next().find('.accoBody');
								}
								$(this).closest('.accoItem').toggleClass('on');
								if( $(this).closest('.accoItem').hasClass('on') ){
									$(contents).stop(true, true).slideDown(300, function(){
										if( $('.popOn').length == 0 ){
											var targetY = $(contents).offset().top - 150;
											if( $(contents).closest('.notice').length > 0 ){
												$('body,html').animate({scrollTop: targetY}, 300);
											}
										}
										layout.elementAni();
									});
									$(this).attr('aria-expanded', true);
									if( $(this).closest('.accoWrap').data('single') == true ){
										$(this).closest('.accoItem').siblings('.accoItem').removeClass('on');
										$(this).closest('.accoItem').siblings('.accoItem').find('>.accoBody').stop(true, true).slideUp(300);
										$(this).closest('.accoItem').siblings('.accoItem').find('> accoHead .accoBtn').attr('aria-expanded', false);
									}
									$('.ipt.unit').each(function( idx ){
										ui.iptUnitInit( $(this) );
									});
								} else {
									$(contents).stop(true, true).slideUp(300);
									$(this).attr('aria-expanded', false);
								}
								ui.init();
							}
						});
						if( pubMode == true ){ // 알려드립니다 퍼블페이지만 펼쳐놓기
							if( $('.accoBtn:eq('+i+')').closest('.addInfoList').hasClass('notice') ){
								//$('.accoBtn:eq('+i+')').trigger('click');
								$('.accoBtn:eq('+i+')').attr('aria-expanded', true).closest('.accoItem').addClass('on').find('.accoBody').show();
							}
						}
					}
				}

				$("img.astLogoS").bind("error", function(){this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAF60lEQVRYhb2ZXYgkVxXHf/ejutnZmd2d4GScLMusH/iFEAURo3mQaDAkqCCKgYAvivjimxgfQh7yIOij+CL6JgZ9UZAkGIkBQTFqBAWNWRl0p6e7t3t6pqerqqu7qrpuXR9qquzt6a7+mFn/MDBd9946vz733HvPPS1c12VF3QTeDTwEfAB4G/AW4DJgAQ84BPaAPwF/Bm4BnVWMiRVAHwM+D3wauH/JsbeAF4Hngb8sM3AZ0E8C3wI+sRTadPnAL4HngH8tMkAu0Oca8D3gZS4GEmADeAp4DfjmIgPmefRDwI+AB8+NVq6XgC8DrVkdyjz6BPAq9x4S4HHgFeA9szrM8uhjwM+BS2VvF0KglELK7PsaYzDGrEwLvAk8CtQXAX0Q+C1wteyNSinSNMXzPMIwRErJpUuXWF9fx1qLtfY8sA8Dx2Wgm2QB/q55kFEU0Ww28X2fJEkQQuA4DteuXWNnZwcpJWmargr7M+DJ8QeTMfrteZBCCIwxNBoNTk5OAKhUKjiOgzGGw8ND2u02QgiEEKuCfhH4yizQR4CvzXuDUgrXdfF9H611EZ95m1KKk5MTgiBAKbUqKMB3gAemgT63yGgpJYPBAGPMXZDjsHEcE0XR1PYldB/wjUnQR4GPneet03SOBZXrKeA6/A/0S4uOTNOUtbW1YtVPyhhDpVKhWq3OBF0ifu8nyymQp8SfWhTUGMPVq1fZ2NggSZK7YNM0JUkSNjc3uXz58tQ9Nd8NrLWLhsaTQFUDHwG2FgW11qKU4vr16wgh8H2fOI4BcByH7e1ttre3p+6ljuPgeR4HBwdordnd3aVarZIkSZnJh4F3auDDi0LmMsZQrVbZ3d3F8zyiKAJgbW2NjY0NrLVnwkJrTb/fp1arEccxYRhycHDAzZs35+25CnhIA+9bFjSHFUKwublZTGE+9ZNyHIcgCNjf3yeOYxzHwVqL53k0Gg1u3LiBEKJs8b1fA29fBRSyMCibNmstjuMwHA6p1WpEUYTWugDSWtPtdqlUKuzs7GCMmQX7Dgm8tQzmPCeM4zjEccz+/j7D4fDMAZAnNYeHhxwfH6O1nmXrAQmsl0Faa4tpXgZYKcVoNKJWqzEYDGZC5M+azSa9Xm/WabY+c3+QUmKModvtcnx8zHA4XBg0H1ur1Yqjdl7/JEloNBqEYTgN1kigP21gmqa4rkscx0XgB0Ewd+/LjdTrdVzXXfi811oTRRG1Wo0kSSa/XCCZSP+llFhrC0ilVOFJ3/cL2GneVUphraVer9PtdnEcZ6lw0VoTBAH1eh1jzPiXbEvg3/mnPCbHk+FpbUEQnInZ/P87d+4UC2MVaa3p9Xq0Wq3x9+5J4I38QX7S5CCTyj3p+z6+7xd9hBBIKWm1WrTb7ZkeX1RKKTqdDkdHR/mM/l2TVTEQQhAEAYPBoNRQ7tl+PwvtK1euIISg3W7TarXuukOtqtxpzWYTrbXZ2tr6gxZCvCaE6AyHw63c+Dxv5O39fh+lFGEYFpDn8eS48p2j2Wz+jtOpbwyHw5dd18Vau9QWpLWm0+nQaDTOe/WYKqUUxpif3r59O5LGGMIw/HGapksZklIShmERqxcNeaqOEOIFrTWy2+0Sx/GvlVK/XwYyiiJ8319qFlbQ85ze8eVYevXsIiOllMRxjOu6pGl67oVTohPgu4XdMW+8CvxgHuRoNMJ13eL8v4d6GmgWticanwH+M21Ufh57njfzBnqB+gXww7vsT3Q4Aj5HVi0+A+m6LqPR6F5Dvgl8dfLhNIt/JatUDHPIPEH5P0DeIru6Hy0CCvAr4AtSSj8vhMVxfK8h/0E2m2cqeVBSHxVCvGiMecTzvL/NyBEvUi+Rld7fmNWh1EXGmNejKPq4EOL7wMqluRKdkK3uJyipNsMc0NOsqAd8naxI8ZsLAvSBnwAfZWyvLNMySeMrp3+PA58BPsuci+EU/RN4gaz+udzPN3t7e9MbhCBJEnq9HjPygF3gvWSVlg+S/UC2BawBCdkWd0SWmP8ReP0U9MyKXkT/BUKyxzusqJ3BAAAAAElFTkSuQmCC";});
				$("img.astLogoM").bind("error", function(){this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAGDElEQVRogc2bS2wbRRjHf17SOIXGwWlVKSUljVRo4QBCHICqIPG4IJ4nbnCnhHIEwRX1DrSFWyV640JFhVAlOCEVEEUBLrSQQ/Arrzr2PvzYXe8uh/G6jmOvZx92+J3s9ew339/jnfm+b8YpVVVJmLuAx4GngUeAB4B5YAbItNtogAoUgH+AP4Efgd8AJ0lnUgkJTAOvA28AzyPEREEFfgC+Aq4AZlzH4go8CJwF3mm/TpIycAH4tP06ElEF3g18CLwHHIjauSQG8AlwDqiHvTmKwFeAz4CFsDfGJAcsAVfD3KSEaDuFEPYN4xcHcH+77/NtX6SQHcE54FvgsUiuJc8y8BKwNqyhzAg+CFzn/yMOhC/XEb4FMkzgccT6dCy+T4lzDOHb8aBGQQLnge+Bw8n5lDiHEevm/KAGg57BNPATEX6WnudRqVTQNA3TFOt0Op0mk8mQzWZJpVJhTcqwDDxFn8BgkMALwJmwvbRaLfL5PM1ms+/nU1NTHD16lImJibCmZbiICDh20O8n+hoRxHmeFygOoNlsks/n8TwvrHkZziB830GvwGnENxGaSqUSKM6n2WxSqVSidCHDRe4E9MBugR8AR6JY1jRtJG1DcgR4v/tCt0A/cI6EzOhFaRuBs3QF/t0CxxE4A4xqJvU5QNdA+QIngbfjWJ2akg4PSafTcbqS4QxCU0fgi8ChOBYzmczwRhHaRuQQQlNH4JtxLWazWalRTKfTZLPZuN3J8CaIhT4N3CaB5y/Jhb5er1MqlXBdl7m5Oaanp8O6YwCHUqqqnkYErYngh2qqqmJZFgCTk5PMzMxIh2qNRoNcLofruoCYlBYWFti/f39Yd05PAE+EvSuIVCrF7Owss7Ozke43TZN8Pt8RB3eipMXFRfbt2xfG3JMKcCKSJyPAsixyuRyOs7ty6DjOLuESnFCAk0k5GAfbtsnlcrRarYFtTNOkUCiEMXtSYW/qKzvwR8e27aFta7Ua6+vrsqYXFODeOM7FxXVdcrlcJ3eUoVKpsL29LdM0q9ATfcs4lBSu6w5NsQaxsbGBruvDmk1Llw0dx2F7e5tyuYymabFzOs/zKBaL1Ouha7kdSqXSsJG3FGDo1+C6LqqqdmY30zRjiyyVShiGEfl+3698Ph80MRkKEJh9ep63Q5yPZVmoqhpJ5Pr6emI5oW3bFAqFQY+OrgD/BhnQNG3gN2TbdmiRm5ubiWf0jUaDUqnU76OcAtwcdKOu651waxC2bVOtVqUmn3K5TLkceaMoEF3X2dzc7L18UwFu9bvBMAzp2a3VaqGqaqDISqXSz4FEKZfL9FQJbynAL70N6/U6jUYjlPFWqzVwJFVVDbM4x2JtbY1area//VkBfkWkFoCYIaNO3Y7jUK1Wd0xIuq6ztjZ0jyQx/OXHsiwDuKEgqsHXQDxPuq7Hmv4dx+nMurVajWKxOKo6aKAP+Xz+muM4pr/QX44yIwZ1sLW1RaFQGLs4H8uyLheLRVG6dxxnslqtllzXTWSfvdVqoWlaomFdSG4D9wGW0o5SLNd1P0/CsuM4ey0O4AvAAkitrq76C/lBYJUYtZnekG6PMIBFxCiidEUpZcSRjUi4roumaXstDsQe/m3/TWplZaX7wwzwFyH3J/x4NSgbHxMl4CHESSpg9+aLRp89tiA8zwuMV8fMEl3ioP/+4BXgkqxFXdelSg1j4BLwde/FQQnvEvD7MIsywfiY+APh8y4GCawjTjTlB1k0DCNUHWWEFICXGXDMK6hkUQCeA3alALVabdR7fLJsAc8ifO3LsJrMCuLc56p/odFohM40RsQq8AzCx4HIFJ3+Bk4By81mszsV2UuWET4NTNZ9ZKtqa6ZpnjIM43wst5LhAkKcVA4mJdCyLHRdbwLvAq8ijjaOm1y77yVAegIYKtDPEbu4iogWztGVKI8Qo93Xw4Q8KwpDBPppT5+crg58hDgQ9zEgVUcPyXbb9rF2X5Ee/t5YtIOfmUumPZOIPfG3gBcIuR3QhYY4APgl8B3tlCcOfQWGFNdL998KHkUcd5wHZoF7ABvxs6sAG4hp3v9bwQ0S/lvBfxNeMr3c1hcJAAAAAElFTkSuQmCC";});
    

			},
			// 두줄탭체크
			tabVarInit : function( target ){
				// pageTab variable setting
				if( $( target ).hasClass('pageTab') && $( target ).find('li').length >= 5 ){
					$( target ).addClass('var');
				} else if( $( target ).hasClass('iptPageTab') && $( target ).find('li').length >= 5 ){
					$( target ).addClass('var');
				} else {
					if( $( target ).height() > 75 ){// 줄바꿈 체크
						$( target ).addClass('var');
					}
				}
				if( $( target ).find('li').length != 0 ){
					$( target ).css('opacity', '1');
				}
			},
			tabActiveAlign : function(){
				for( var i = 0 ; i < $('.tabList').length ; ++i ){
					var target = $('.tabList:eq('+i+').var');
					if( $( target ).find('li.on').length > 0 ){
						var posCenter = ( $( target ).scrollLeft() + $( target ).find('li.on').offset().left + $( target ).find('li.on').outerWidth() * 0.5) - ($(window).width() * 0.5);
						$( target ).scrollLeft( posCenter );
					}
				}
				for( var i = 0 ; i < $('.iptPageTab').length ; ++i ){
					var target = $('.iptPageTab:eq('+i+')');
					if( $( target ).find('.ipt:checked').length > 0 ){
						var posCenter = ( $( target ).scrollLeft() + $( target ).find('.ipt:checked').parent().offset().left + $( target ).find('.ipt:checked').parent().outerWidth() * 0.5) - ($(window).width() * 0.5);
						$( target ).scrollLeft( posCenter );
					}
				}
			},
			// Tab init
			tabInit : function(){
				//console.log("tabInit");
				// iptPageTab for var height
				$('.iptPageTab').each(function(){
					ui.tabVarInit( $(this) );
				});
				$('.landingTab > ul').addClass('tabList');
				for( var i = 0 ; i < $('.tabList').length ; ++i ){
					if( $('.tabList:eq('+i+')').hasClass('uiAct') == false ){
						$('.tabList:eq('+i+')').addClass('uiAct');
						ui.tabVarInit( $('.tabList:eq('+i+')') );
						// tab setting
						var tabFunc = false;
						if( $('.tabList:eq('+i+')').closest('.tabWrap').length > 0 ){
							tabFunc = true;
							$('.tabList:eq('+i+')').attr('role','tablist');
							//$('.tabContents').attr('tabindex', 0);
							var classStr = $('.tabList:eq('+i+')').attr('class').replace('tabList ','').replace(' uiAct', '');
							var originClass = $('.tabList:eq('+i+')').closest('.tabWrap').attr('class') + ' ' + classStr;
							$('.tabList:eq('+i+')').closest('.tabWrap').attr('class', originClass);
						}
						$('.tabList:eq('+i+') > li').each(function(idx){
							if( tabFunc == true ){
								if( $(this).attr('id') == undefined ){
									$(this).attr({'id':'tab_'+i+'_'+idx, 'role': 'tab', 'aria-controls':'panel_'+i+'_'+idx , 'tabindex': 0, 'aria-selected': false});
								} else {
									$(this).attr({'role': 'tab', 'aria-controls':'panel_'+i+'_'+idx , 'tabindex': 0, 'aria-selected': false});
								}
								if( $(this).hasClass('disable') == true ){
									$(this).append('<span class="blind">내용없음</span>');
									var tabContents = $(this).closest('.tabWrap').find('.tabContents');
									$(tabContents).find('.tabPanel:eq('+idx+')').before('<div class="tabPanel"></div>');
								}
							} else {
								console.log("????????????????????여기라고?")
								//$(this).attr({'role': 'button', 'tabindex': 0});
								if( $(this).hasClass('on') ){
									$(this).attr('aria-labelledby','선택됨');
								}
							}
							idx++;
						});
						// tabPanel setting
						if( tabFunc == true ){
							var tabContents = $('.tabList:eq('+i+')').closest('.tabWrap').find('> .tabContents');
							$(tabContents).find(' > .tabPanel').each(function(idx){
								if( $(this).attr('id') == undefined ){
									$(this).attr({'id': 'panel_'+i+'_'+idx}); 
								} else {
									$('.tabList:eq('+i+') > li:eq('+idx+')').attr('aria-controls', $(this).attr('id'));
								}
								$(this).attr({'role':'tabpanel', 'aria-hidden': true, 'aria-labelledby' : $('.tabList:eq('+i+') > li:eq('+idx+')').attr('id') })
								idx++;
							});
						}
						// 활성화 체크
						if( $('.tabList:eq('+i+') li.on').length == 0 ){
							$('.tabList:eq('+i+') li').first().addClass('on');
						}
						// key event
						$('.tabList:eq('+i+')').on('keydown',' > li[tabindex]', function(e){
							if(e.keyCode == 13){
								$(this).trigger('click');
							}
						});
						// click event
						if( tabFunc == true ){
							$('.tabList:eq('+i+')').on('click',' > li', function(e){
								e.preventDefault();
								if( $(this).hasClass('disable') == false ){
									$(this).siblings().removeClass('on').attr('aria-selected', false);
									$(this).addClass('on').attr('aria-selected', true);
									$(this).closest('.tabWrap').find('> .tabContents > .tabPanel').removeClass('on').attr('aria-hidden', true);
									$(this).closest('.tabWrap').find('#'+$(this).attr('aria-controls')).addClass('on').attr('aria-hidden', false);
									ui.swiperUpdate();
									// PC전용 기능
									var guideTxt = $(this).text() + " 탭 내용 시작";
									if( $(this).closest('.tabList').next().is('.guideTxt') == false ){
										$(this).closest('.tabList').after('<p class="blind guideTxt">'+guideTxt+'</p>');
									} else {
										$(this).closest('.tabList').next().text( guideTxt );
									}
									/*$(this).siblings().find('.blind.guideTxt').remove();
									$(this).append('<span class="blind guideTxt">선택됨</span>');*/
									$(this).siblings().attr('aria-selected', false);
									$(this).attr('aria-selected', true);
									ui.iptInit();
								}
							});
							$('.tabList:eq('+i+') li.on').trigger('click');
						} else {
							//$('.tabList:eq('+i+') li.on').append('<span class="blind guideTxt">선택됨</span>');
							//$('.tabList:eq('+i+') li').attr('aria-selected', false);
							//$('.tabList:eq('+i+') li.on').attr('aria-selected', true);
							$('.tabList:eq('+i+') li').removeAttr('title');
							$('.tabList:eq('+i+') li.on').find('>a').attr('title','선택됨');
						}
					}
				}
				ui.landingInit();
				ui.tabActiveAlign();
				setTimeout(function(){
					ui.tabActiveAlign();
				}, 100);
			},
			landingInit : function(){
				for( var i = 0 ; i < $('.landingTab').length ; ++i ){
					if( $('.landingTab:eq('+i+') li').length >= 5 ){
						$('.landingTab:eq('+i+')').removeClass('tableCell');
						$('.landingTab:eq('+i+') li').css('min-width', Math.floor( $(window).width()/5) );
					} else {
						$('.landingTab:eq('+i+')').addClass('tableCell');
					}
				}
			},
			// Custom Select init
			customSelectGlobal : new Object(),
			customSltFocusOutEL : new Object(),
			customSltInit : function(){
				for(var  i = 0 ; i < $('.customSlt').length ; ++i ){
					if( $('.customSlt').eq(i).hasClass('uiAct') == false ){
						$('.customSlt').eq(i).addClass('uiAct');
						$('.customSlt:eq('+i+') li > button.on, .customSlt:eq('+i+') li > a.on').attr('title','선택됨');
						if( $('.customSlt:eq('+i+') .asSlt').hasClass('cardSel') == false ){
							//$('.customSlt:eq('+i+') .asSlt').data('fixTitle', $('.customSlt:eq('+i+') .asSlt:not(.cardSel)').text() ); /* 고정텍스트 */
						}
						if( $('.customSlt:eq('+i+') li > *.on').length > 0 ){
							$('.customSlt:eq('+i+') .asSlt:not(a.cardSel)').text( $('.customSlt:eq('+i+') li > *.on').html() );
						}
						$('.customSlt:eq('+i+') .asSlt').bind({
							'click':function(e){
								e.preventDefault();
								$(this).closest('.customSlt').toggleClass('on');
								if( $(this).closest('.customSlt').hasClass('on') ){
									$(this).attr('tabindex','-1');
									if( $(this).data('fixTitle') != undefined ){
										$(this).text( $(this).data('fixTitle') );//fix
									}
									if( $(this).hasClass('cardSel') ){
										ui.cardImgAnal( $(this).closest('.customSlt') );
									}
									ui.customSelectGlobal = true;
									ui.bodyAddBind(true, $(this));
								} else {
									$(this).text( $(this).closest('.customSlt ul .on').html() );//selectText
									if( $(this).closest('.customSlt ul .on').length == 0 ){
										if( $(this).data('fixTitle') != undefined ){
											$(this).text( $(this).data('fixTitle') );//fix
										}
									}
									$(this).closest('.customSlt').find('.asSlt').removeAttr('tabindex');
									ui.customSelectGlobal = false;
									ui.bodyAddBind(false, $(this));
								}
							}
						});
						$('.customSlt:eq('+i+')').on('click', 'li > button, li >a', function(e){
							var _this = e.currentTarget;
							e.preventDefault();
							$(_this).parent().siblings().find('>*').removeClass('on').removeAttr('title');
							$(_this).addClass('on').attr('title','선택됨');
							$(_this).closest('.customSlt').find('.asSlt').html($(this).html());
							$(_this).closest('.customSlt').find('.asSlt').focus();
							$(_this).closest('.customSlt').find('.asSlt').removeAttr('tabindex');
							$(_this).closest('.customSlt').removeClass('on');
						});
						$('.customSlt:eq('+i+')').on('focusout', ' li button, li a, li .cardSel', function(e){
							var _this = e.currentTarget;
							ui.customSltFocusOutEL = $(_this);
							setTimeout(function(){
								if( $(wa.getNowFocus()).closest('.customSlt').length == 0){
									ui.customSelectGlobal = false;
									ui.bodyAddBind(false, $(_this));
									$(ui.customSltFocusOutEL).closest('.customSlt').find('.asSlt').attr('tabindex','0');
									$('.customSlt.on .asSlt').html( $('.customSlt.on ul .on').html() );//selectText
									if( $('.customSlt.on ul .on').length == 0 ){
										if( $(_this).closest('.customSlt').data('fixTitle') != undefined ){
											$(_this).closest('.customSlt').find('.asSlt').html($(_this).closest('.customSlt').find('.asSlt').data('fixTitle') );//fix
										}
									}
									$('.customSlt.on').removeClass('on');
								}
							},10);
						});
					}
				}
			},
			bodyAddBind : function (state,_target){
				if(state == true){
					$('body').bind({
						'mousedown':function(e){
							if( $(e.target).hasClass('customSlt', 'on') == true ){
								return false;
							}
							if( $(e.target).closest('.customSlt').length == 0 ){
								$('.customSlt.on .asSlt').html( $('.customSlt.on ul .on').html() );//selectText
								if( $('.customSlt.on ul .on').length == 0 ){
									if( $(e.target).closest('.customSlt').data('fixTitle') != undefined ){
										$('.customSlt.on .asSlt').html( $('.customSlt.on .asSlt').data('fixTitle') );//fix
									}
								}
								$('.customSlt.on').removeClass('on');
								customSelectWrapState = false;
								$('body').unbind('mousedown');
								return false;
							}
						}
					});
				} else {
					$('body').unbind('mousedown');
				}
			},
			// iptBtn borderRadius Setting
			iptBtnBrInit : function(){
				for( var i = 0 ; i < $('.iptBtn[class*=div_]').length ; ++i ){
					if( $('.iptBtn[class*=div_]:eq('+i+')').hasClass('uiAct') == false || $('.iptBtn[class*=div_]:eq('+i+')').hasClass('logo') == true ){
						$('.iptBtn[class*=div_]:eq('+i+')').addClass('uiAct');
						var iptBtn = $('.iptBtn[class*=div_]:eq('+i+')');
						if( iptBtn.hasClass('div_2') ){
							var divNum = 2;
						} else if( iptBtn.hasClass('div_3') ){
							divNum = 3;
						} else if( iptBtn.hasClass('div_4') ){
							divNum = 4;
						}
						
						if( $(iptBtn).find( ' > li').length == 2 ){
							iptBtn.removeClass('div_3 div_4').addClass('div_2');
							divNum = 2;
						}
						
						var brtlTarget = $(iptBtn).find( ' > li:eq(0)');
						var brtrTarget = $(iptBtn).find( ' > li:eq('+ (divNum-1) +')' );
						var brblTarget;
						var brbrTarget = $(iptBtn).find( ' > li:last-child' );
						var brblNum;
						var total = $(iptBtn).find('li').length;
						if( total%divNum == 0 ){
							brblNum = total-divNum;
						} else {
							brblNum = parseInt(total/divNum)*divNum;
						}
						
						brblTarget = $(iptBtn).find( ' > li:eq('+brblNum+')' );
						
						brtlTarget.addClass('brtl');
						brtrTarget.addClass('brtr');
						brblTarget.addClass('brbl');
						brbrTarget.addClass('brbr');
					}
				}
			},
			// swiper Init
			swiperIdCnt : 0,
			swiperInit : function(){
				$('.swiperWrap').each(function(idx){
					var visibleState = true;
					var swiper;
					if( $('.swiperWrap:eq('+idx+')').attr('id') == undefined ){
						$('.swiperWrap:eq('+idx+')').attr('id', 'swiper'+ui.swiperIdCnt );
						ui.swiperIdCnt++;
					}
					/* 서브메인 BR제거 */
					var subMainBrRemove = false;
					if( $('.swiperWrap:eq('+idx+')').closest('.subMainBanner').length > 0 ){ // 서브메인일때
						subMainBrRemove = true;
						if( $('.swiperWrap:eq('+idx+')').closest('#cdMain').length > 0  ){ // 카드메인일때
							subMainBrRemove = false;
							if( $('.swiperWrap:eq('+idx+')').closest('.crdMainBanner').length > 0  ){ // 카드메인 개인화 영역일때
								subMainBrRemove = true;
							}
						}
					}
					console.log("subMainBrRemove : + " + subMainBrRemove);
					if( subMainBrRemove == true ){
						$('.swiperWrap:eq('+idx+') .tit br, .swiperWrap:eq('+idx+') .desc br, .crdMainBanner .swiperWrap:eq('+idx+') .txtList_disc li br').remove();
					}
					
					if( $('.swiperWrap:eq('+idx+')').hasClass('on') == false ){
						if( $('.swiperWrap:eq('+idx+')').find('> .slideList > li').length > 1){
							if( $('.swiperWrap:eq('+idx+')').find('.swiper-container').length == 0 ){
								$('.swiperWrap:eq('+idx+')').wrapInner('<div class="swiper-container"/>');
							}
							var targetWrap = $('.swiperWrap:eq('+idx+')');
							var target = '#'+$('.swiperWrap:eq('+idx+')').attr('id') + ' .swiper-container';
							var totalNum = $(target).find('> .slideList > li').length;
							dataSet( $(targetWrap), 'fade', 'slide' );
							dataSet( $(targetWrap), 'loop', true );
							dataSet( $(targetWrap), 'speed', 500 );
							dataSet( $(targetWrap), 'page', true );
							dataSet( $(targetWrap), 'align', 'left' );
							dataSet( $(targetWrap), 'arrow', true );
							dataSet( $(targetWrap), 'number', false );
							dataSet( $(targetWrap), 'perView', 1 );
							dataSet( $(targetWrap), 'between', 0 );
							dataSet( $(targetWrap), 'auto', 4000 );
							dataSet( $(targetWrap), 'pause', true );
							dataSet( $(targetWrap), 'align', 'bc' );
							$(target).find('> .slideList').addClass('swiper-wrapper');
							$(target).find('> .slideList > li').addClass('swiper-slide');
							// pagenation
							$(targetWrap).append('<div class="swiper-controls"><div class="swiper-pagination"></div></div>');
							if( $(targetWrap).data('align') == 'left' ){
								 $(targetWrap).find('.swiper-controls').addClass('al');
							} else if( $(targetWrap).data('align') == 'right' ){
								 $(targetWrap).find('.swiper-controls').addClass('ar');
							} else if( $(targetWrap).data('align') == 'center' ){
								 $(targetWrap).find('.swiper-controls').addClass('ac');
							} 
							if( $(targetWrap).data('page') == false ){
								$(targetWrap).find('.swiper-pagination').hide();
							}
							$(targetWrap).append(
								'<button type="button" class="btnPrev"><span class="blind">이전 슬라이드</span></button>'+
								'<button type="button" class="btnNext"><span class="blind">다음 슬라이드</span></button>'
							);
							if( $(targetWrap).data('arrow') != true ){
								$(targetWrap).find('.btnPrev').hide();
								$(targetWrap).find('.btnNext').hide();
							}
							var swiperOpt = {
								effect : $(targetWrap).data('fade'),
								init : false,
								allowTouchMove : true,
								speed : $(targetWrap).data('speed'),
								loop : $(targetWrap).data('loop'),
								slidesPerView : $(targetWrap).data('perView'),
								spaceBetween : $(targetWrap).data('between'),
								followFinger : true,
								pagination:{
									el: $(targetWrap).find('.swiper-pagination'),
									clickable : 'true',
									renderBullet : function(index,className){
										return '<button type="button" class="'+className+'"><span class="blind">' + (index + 1) + '</span></button>'; 
									}
								},
								navigation:{
									nextEl: $(targetWrap).find('.btnNext'),
									prevEl: $(targetWrap).find('.btnPrev')
								}
							}
							if( $(targetWrap).data('auto') != false ) {
								swiperOpt.autoplay = {
									delay : $(targetWrap).data('auto'), 
									disableOnInteraction : !$(targetWrap).data('auto')
								}
							}
							
							swiper = new Swiper(target, swiperOpt);
							$(targetWrap).find('.swiper-pagination').attr('aria-label','총 '+totalNum+'슬라이드 중  1번째 슬라이드');
							
							swiper.on('slideChange',function(){
								//$(targetWrap).find('.swiper-slide a, .swiper-slide :input').show();
								//console.log("트렌지션엔드 : " + this.activeIndex );
								$(targetWrap).find('.swiper-pagination').attr('aria-label', '총 '+ totalNum+'슬라이드 중 '+Number(this.realIndex+1) + '번째 슬라이드');
								$(targetWrap).find('.swiper-counter em').text( Number(this.realIndex+1) );
								var nowActiveEL = swiper.activeIndex;
								if( $(targetWrap).data('color') != undefined ){
									swiperColorInvert( swiper.$el, nowActiveEL );
								}
							});
							swiper.on('slideChangeTransitionStart',function(){
								
							});
							swiper.on('slideChangeTransitionEnd',function(){
								var nowActiveEL = this.activeIndex;
								
								$(targetWrap).find('.swiper-slide *').attr('aria-hidden',true);
								$(targetWrap).find('.swiper-slide-active *').attr('aria-hidden',false);
								
								if( $(targetWrap).closest('.popInner').length > 0 ){
									setTimeout(function(){
										//console.log('여기다여기 '+$(targetWrap).closest('.popInner').length);
										$(targetWrap).find('.swiper-slide-active *').attr('aria-hidden',false);
									},100);
								}
								
								/*setTimeout(function(){
									//$(target).find('.swiper-slide a, .swiper-slide :input').hide();
									//$(target).find('.swiper-slide *').removeAttr('tabindex');
									//$(target).find('.swiper-slide:eq('+nowActiveEL+') a, .swiper-slide:eq('+nowActiveEL+') :input').show();
									//$(target).find('.swiper-slide:eq('+nowActiveEL+') *[role=button]').attr('tabindex', 0);
								},10);*/
								
								if( $(targetWrap).data('func') != undefined ){
									//eval($(targetWrap).data('func')+"($(target).find('.swiper-slide:eq('+nowActiveEL+')'));");
									try{
										var actTarget =  '#'+$(targetWrap).attr('id') + ' .swiper-slide.swiper-slide-active'; 
										var STR = $(targetWrap).data('func') + "( $('"+ actTarget+"') );"
										console.log( "STR : " + STR );
										new Function( STR )();
									} catch(e){
										console.log(e);
										//테스트를 위해 임시
										//eval($(targetWrap).data('func')+"($(target).find('.swiper-slide:eq('+nowActiveEL+')'));");										
									}
								}
							});
							swiper.on('init',function(){
								if( this.$el.data('display') == "false" ){
									$(this.$el).addClass('zIndexSet');
								}
								if( $(target).hasClass('colorChk') ){
									var nowActiveEL = this.activeIndex;
									swiperColorInvert( swiper.$el, nowActiveEL );
								}
							});
							if( $(targetWrap).data('auto') != false ){
								$(targetWrap).find('.swiper-controls').prepend(
									'<button type="button" class="swiper-button-stop"><span class="blind">stop</span></button>'+
									'<button type="button" class="swiper-button-play"><span class="blind">play</span></button>'
								);
							}
							if( $(targetWrap).data('number') == true ){
								$(targetWrap).find('.swiper-controls').append('<span class="swiper-counter"><em>1</em> / '+totalNum+'</span>');
							}
							$(targetWrap).find('.swiper-button-play').bind({
								'click':function(e){
									swiper.autoplay.start();
									$(this).hide();
									$(this).parent().find('.swiper-button-stop').show().focus();
								}
							});
							$(targetWrap).find('.swiper-button-stop').bind({
								'click':function(e){
									swiper.autoplay.stop();
									$(this).hide();
									$(this).parent().find('.swiper-button-play').show().focus();
								}
							});
							/*
							$(targetWrap).bind({
								'focusin mouseenter':function(){
									if( swiper.slidesSizesGrid[0] < 800 ){
										console.log(" 슬라이드 container 포커스인 " );
										//console.dir(swiper)
										swiper.autoplay.stop();
									}
								},
								'focusout mouseleave':function(){
									if( swiper.slidesSizesGrid[0] < 800 ){
										console.log("슬라이드 포커스, 마우스 아웃: " + $(this).find('.swiper-button-stop').is(':visible') );
										if( $(this).find('.swiper-button-stop').is(':visible') == true ){
											swiper.autoplay.start();
										}
									}
								}
							});
							$(target).find('> .slideList > li *').bind({
								'focusin':function(){
									console.log(" 슬라이드 객체 포커스인 " );
									var idx = $(this).closest('.swiper-slide').data('swiperSlideIndex');
									$(this).closest('.swiper-container').find('.swiper-pagination button:eq('+idx+')').trigger('click');
								}
							});*/
							swiper.init();
							if( visibleState == false ){
								$(targetWrap).hide();
							}
						}
						$('.swiperWrap:eq('+idx+')').addClass('on');
						$('.swiperWrap:eq('+idx+') li').addClass('swiper-slide-active');
						try{
							window['ui' +$('.swiperWrap:eq('+idx+')').attr('id') ] = swiper;
						} catch(e){
							console.log(e);
						}
					} else {
						$('.swiperWrap:eq('+idx+')').addClass('on')
					}
					idx++;
				});
				function dataSet( target, attr, def ){
					if( $(target).data(attr) == undefined ){
						$(target).data(attr, def);
					}
				}
			},
			swiperUpdate : function(){
				for( var i = 0 ; i < $('.swiperWrap').length ; ++i ){
					try{
						window['ui' + $('.swiperWrap:eq('+i+')').attr('id') ].update();
					} catch(e){
						console.log(e);
					}
				}
			},
			// Contents Block
			conBlockInterval : new Object(),
			conBlockCnt : 0,
			conBlockInit : function(){
				$('.conBlockList').each(function(){
					var colNum = $(this).data('div');
					if( $(this).data('div') != undefined && $(this).hasClass('uiAct') == false ){
						$(this).addClass( 'uiAct div_' + colNum );
					}
					//if( $(this).hasClass('spaceBlock') == false ){
						for( var j = 0 ; j < $(this).find(' > li').length ; ++j ){
							var code = j%colNum;
							var rowCnt = Math.floor( j/colNum );
							$(this).find('> li:eq('+j+')').addClass('col'+Number(code) + ' rowCnt'+ rowCnt);
						}
					//}
				});
				console.log("conBlockInit");
				ui.consBlockResizeInit();
			},
			conBlockResize : function(){
				console.log("conBlockResize");
				ui.conBlockCnt++;
				if( ui.conBlockCnt > 1 ){
					clearInterval(ui.conBlockInterval);
					ui.conBlockCnt = 0;
				}
				for(var i = 0; i < $('.conBlockList.uiAct').length ; ++i ){
					console.log("conBlockResize");
					var colNum = $('.conBlockList.uiAct:eq('+i+')').data('div');
					var rowNum = Math.ceil( $('.conBlockList.uiAct:eq('+i+') > li').length/colNum );
					for( var j = 0 ; j < rowNum ; ++j ){
						var liHArry = [];
						for( var k = 0 ; k < colNum ; ++k ){
							$('.conBlockList.uiAct:eq('+i+') > li.rowCnt'+j + '.col'+ k +' .block').css('height','auto');
							if( $('.conBlockList.uiAct:eq('+i+') > li.rowCnt'+j+'.col'+k+' .block').outerHeight() > 0 ){
								liHArry.push( $('.conBlockList.uiAct:eq('+i+') > li.rowCnt'+j+'.col'+k+' .block').outerHeight() );
							}
						}
						var maxH = Math.max.apply( null, liHArry );
						$('.conBlockList.uiAct:eq('+i+') > li.rowCnt'+j + ' .block').css('height',maxH);
					}
				}
			},
			consBlockResizeInit : function(){
				ui.conBlockResize();
				clearInterval(ui.conBlockInterval);
				ui.conBlockInterval = setInterval( ui.conBlockResize, 1000 );
			},
			goodsInterval : new Object(),
			goodsListInit : function(){
				var intervalCnt = 0;
				clearInterval( ui.goodsInterval );
				goodsHeightSet();
				function goodsHeightSet(){
					//console.log("goodsHeightSet");
					intervalCnt++;
					$('.goodsList:not(.uiAct)').each(function(){
						var arryH = [];
						$(this).find(' > li .block').height('auto');
						for( var i = 0 ; i < $(this).find(' > li').length ; ++i ){
							var liItem = $( this ).find(' > li:eq('+ i +')');
							var gridNum = 2;//양옆 2개를 뜻함
							if( $(this).closest('.overflowCont').length > 0 ){
								gridNum = $(this).find(' > li').length + 1;
							}
							if( i%gridNum == 0 ){
								arryH = [];
							}
							arryH.push( liItem.outerHeight() );
							if( i%gridNum == 1 ){
								var maxH = Math.floor( Math.max.apply( null, arryH ) );
								liItem.find('.block').height( maxH );
								liItem.prev().find('.block').height( maxH );
							}
							if( gridNum != 2 ){
								liItem.find('.block').height( maxH );
							}
						}
					});
					if( intervalCnt > 5 ){
						clearInterval( ui.goodsInterval );
					}
				}
				ui.goodsInterval = setInterval(function(){goodsHeightSet();},500)
			},
			dataListInit : function(){
				$('.dataList > li, .detailList > li, .addrList > li, .cardList > li').each(function(){
					if( $(this).hasClass('hasIpt') == false ){
						if( $(this).find('.single').length > 0 ){
							$(this).addClass('hasIpt');
							if( $(this).find('.single').prev().text() == "" ){
								$(this).css('border','1px solid red');
							}
						}
					}
				});
				/*if( isIOS == true ){ // css 로해결 우선 삭제
					$('.cardList .accoItem.hasIpt').each(function(){
						//$(this).find('.block').css('padding-left', '0px !important');
						$(this).find('.block').attr('style', 'padding-left: 36px !important');
					});
				}*/
			},
			cardListInit : function(){
				$('.cardList').each(function(){
					var itemNum = $(this).find('>li').length;
					var imgNum = $(this).find('.cardImg').length;
					if( itemNum != imgNum ){
						$(this).addClass('noImg');
					}
				});
				$('.cardList .block').each(function(){
					if( $(this).parent().find('.links').length > 0 ){
						$(this).addClass('hasLinks');
					}
				});
			},
			// eventListInit
			eventListInit : function(){
				for( var i = 0 ; i < $('.tblInfo').length ; ++i ){
					if( $('.tblInfo:eq('+i+') .goodsType').hasClass('uiAct') == false ){
						if( $('.tblInfo:eq('+i+')').next().is('.eventList') || $('.tblInfo:eq('+i+')').next().is('.goodsList') ){
							$('.tblInfo:eq('+i+') .goodsType').addClass('uiAct');
							var listTarget = $('.tblInfo:eq('+i+')').next();
							$('.tblInfo:eq('+i+') .goodsType input').bind({
								'change':function(){
									console.log( $(this).next().attr('class') );
									$(listTarget).removeClass('list card');
									$(listTarget).addClass( $(this).next().attr('class') );
									ui.goodsListInit();
								}
							});
						}
					}
				}
			},
			// 금액 버튼
			assistBtnInit : function(){
				$('.assistBtn').each(function(){
					if( $(this).data('reload') == undefined || $(this).data('reload') == true){
						var liNum = $(this).find('li').length; 
						if( liNum < 11 ){
							$(this).removeClass('div_2 div_3 div_4');
							$(this).find('li').removeClass('brtl brtr brbl brbr merge3 merge2');
							console.log( "$(this).find('li').length : " + liNum );
							if( liNum >= 4 ){ 
								$(this).addClass('div_3');
								if( liNum%2 == 0 ){
									$(this).find('li:eq(0)').addClass('merge3 brtl brtr');
								} else {
									$(this).find('li:eq(0)').addClass('merge2 brtl');
								}
								if( liNum == 5 ){
									$(this).find('li:eq(1)').addClass('brtr');
								} else if( liNum == 6 ){
									$(this).find('li:eq(0)').removeClass('merge3 brtr');
									$(this).find('li:eq(2)').addClass('brtr');
								} else if( liNum == 7 ){
									$(this).find('li:eq(0)').removeClass('merge2').addClass('w100 brtl brtr');
								} else if( liNum == 8 ){
									$(this).find('li:eq(0)').removeClass('merge3 brtr').addClass('merge2 brtl');
									$(this).find('li:eq(1)').addClass('brtr');
								} else if( liNum == 9 ){
									$(this).find('li:eq(0)').removeClass('merge2 brtr');
									$(this).find('li:eq(2)').addClass('brtr');
								}
								$(this).find('li').eq(liNum-3).addClass('brbl');
								$(this).find('li:last-child').addClass('brbr');
							} else if( liNum == 3 ){ 
								$(this).addClass('div_4');
								$(this).find('li:eq(0)').addClass('w100 brtl brtr');
								$(this).find('li:eq(1)').addClass('brbl merge2');
								$(this).find('li:eq(2)').addClass('brbr merge2');
							} else if( liNum == 2 ){ 
								$(this).addClass('div_3');
								$(this).find('li:eq(0)').addClass('merge2 brtl brbl');
								$(this).find('li:eq(1)').addClass('brbr brtr');
							}
						}
					}
				});
			},
			// 자동완성
			autocompleteInit: function(){
				$.widget('app.autocomplete', $.ui.autocomplete,{
					_renderItem : function(ui, item){
						var re = new RegExp("("+this.term+")", 'gi'),
						cls = this.options.highlightClass,
						template = '<strong class="'+cls+'">$1</strong>',
						label = item.label.replace(re,template),
						$li = $('<li/>').appendTo('.ui-autocomplete');
						$('<span/>').html(label).appendTo($li);
						$li.attr('role','button');
						return $li;
					}
				});
				if( pubMode == true ){
					var autoCompleteURL = '../../html_h1/ajax/temp.autocomplete.js';
					$.getScript(autoCompleteURL).done(function(){
						for( var i = 0 ; i < $('.autocomplete').length ; ++i ){
							if( $('.autocomplete:eq('+i+')').hasClass('autoCompleteAct') == false ){
								$('.autocomplete:eq('+i+')').addClass('autoCompleteAct');
								var appendTarget = $('.autocomplete:eq('+i+')').parent().attr('id');
								if( appendTarget == undefined ){
									$('.autocomplete:eq('+i+')').parent().attr( 'id', 'autoWrap'+i );
									appendTarget = $('.autocomplete:eq('+i+')').parent().attr('id');
								}
								$('.autocomplete:eq('+i+')').autocomplete({
									source: autocompleteData,
									delay:0,
									highlightClass: "pointC1",
									appendTo : '#'+appendTarget,
									focus : function(e,ui){
										return false;
									}
								});
							}
						}
					});
				} else {
					for( var i = 0 ; i < $('.autocomplete').length ; ++i ){
						if( $('.autocomplete:eq('+i+')').hasClass('autoCompleteAct') == false ){
							$('.autocomplete:eq('+i+')').addClass('autoCompleteAct');
							var appendTarget = $('.autocomplete:eq('+i+')').parent().attr('id');
							if( appendTarget == undefined ){
								$('.autocomplete:eq('+i+')').parent().attr( 'id', 'autoWrap'+i );
								appendTarget = $('.autocomplete:eq('+i+')').parent().attr('id');
							}
							$('.autocomplete:eq('+i+')').autocomplete({
								source: function(request, response){
									var reqJson = {};
									reqJson.searchVo = {};
									reqJson.searchVo.searchTerm = request.term;
									ExecuteAjax.callBgPost('/mobile/autoKeyWord.pwkjson', reqJson, function(resdata){
										response($.map(resdata.autoKeyWord.autoMap, function(el){
											return{
												label:el.label,
												value:el.label
											}
										}));
									});
								},
								highlightClass: "pointC1",
								appendTo : '#'+appendTarget,
								focus : function(e,ui){
									return false;
								}
							});
						}
					}
				}
			},
			cmsAddClass : function(){
				var asis = false;
				$('.bbsView .body').addClass('fr-view');
				$('.eventView_body #wcmsArea > ul').each(function(idx){
					if( $(this).find('dl').length > 0 ){
						$(this).addClass('eventCont');
					}
					idx++;
				});
				if( $('.eventView_body #wcmsArea dl').length > 0 )asis = true;
				if( $('.eventView_body .inner .tit').text() != '' )asis = false;
				if( asis == true ){
					$('.eventView_body').addClass('asisData');
				}
				if( $('.asisData').length > 0 ){
					$('.eventView_body #wcmsArea').wrapInner('<div class="titH3 pointC1 mt0"/>');
					$('.eventView_body #wcmsArea .titH3.pointC1 > *').each(function(){
						$(this).appendTo( '.eventView_body #wcmsArea' );
					});
				}
				tobeTransClass('clearfix ', 'clfix');
				tobeTransClass('fleft ', 'fl');
				tobeTransClass('fright ', 'fr');
				tobeTransClass('bull-no', 'list-txt');
				tobeTransClass('bull-cd-type1', 'txtList_star');
				tobeTransClass('bull-cd-type3', 'txtList_star');
				tobeTransClass('cd-star', 'txtList_star');
				tobeTransClass('tbl-type-1', 'tableX');
				tobeTransClass('tbl-type', 'tableY');
				tobeTransClass('list-txt-1', 'list-txt');
				tobeTransClass('btn-type-3c', 'btn_p m');
				tobeTransClass('cd-event-btn', 'btn_p round');
				tobeTransClass('btn-area', 'btnArea');
				tobeTransClass('namBox', 'subMsgBox');
				tobeTransClass('txt-c', 'ac');
				tobeTransClass('txt-l', 'al');
				tobeTransClass('txt-r', 'ar');
				tobeTransClass('font16', 'txtL');
				tobeTransClass('skyBtn', 'btn_p');
				tobeTransClass('sykBtn1', 'round');
				tobeTransClass('tableType7', 'tableX');
				
				$('#wcmsArea span > h3').addClass('titH3');
				
				function tobeTransClass(asis,tobe){
					if( tobe == 'tableX' || tobe == 'tableY' ){
						$('.'+asis).removeAttr('class').addClass(tobe);
					} else {
						$('.'+asis).addClass(tobe).removeClass(asis);
					}
					
					$('.eventCont dl').each(function(){
						if( $(this).find('dd').length > 1 ){
							$(this).find('dd').addClass('blk');
						}
					});
				}
				
				//card상세
				$('.crdDetail .specialAcco .accoBtn img').addClass('ico');
				$('.crdDetail .tabPanel:not(.specialAcco) .accoBody .titH4').each(function(){
					if( $(this).find('.ico').length == 0 ){
						$(this).addClass('pl0');
					}
				});
				if( $('.crdDetail').length > 0 ){
					$('.guideList li, .subMsgBox, .crdDetail .tabPanel.on .addInfoList li, .fullBanerArea').addClass('aniElement');
				}
			},
			// tblScrollInit
			tblScrollInit : function(){
				$('table[data-scroll]').each(function(){
					if( $(this).closest('.tblWrap').length == 0 ){
						var scrH = $(this).data('scroll');
						$(this).wrap('<div class="scrollY" style="max-height:' + scrH + 'px;"></div>');
						$(this).parent().wrap('<div class="tblWrap"/>');
						var dummy = $(this).html();
						$(this).closest('.tblWrap').prepend('<div class="dummyWrap"/>');
						$(this).closest('.tblWrap').find('.dummyWrap').append( '<table class="'+$(this).attr('class')+'">'+dummy+'</table>' );
						$('.dummyWrap').find('tbody').remove();
						$('.dummyWrap').find('table').removeAttr('id');
						$('.dummyWrap').attr('aria-hidden',true)
						$('.dummyWrap').css('padding-right', analysis.getScrollbarWidth() );
					}
					var targetNum = $(this).data('num');//스크롤없이 보여지는 리스트갯수 지정
					if( targetNum == undefined ){
						targetNum = 6;
					}
					if( $(this).find('tbody tr').length < targetNum + 1 ){
						$('.dummyWrap').hide();
						$(this).parent('.scrollY').css('overflow-y','hidden');
					} else {
						$('.dummyWrap').show();
						$(this).parent('.scrollY').css('overflow-y','auto');
					}
				});
				$('.scrollY').each(function(){
					$(this).attr('tabindex','0');
				});
			},
			pageStickyInit : function(){
				$('#content *').each(function(){
					if( $(this).data('sticky') == true ){
						if( $(this).hasClass('pageStickyOri') == false ){
							$(this).addClass('pageStickyOri uiAct');
							if( $('.pageSticky').length == 0 ){
								$('.header').after('<div class="pageSticky"></div>');
							}
							$('.pageSticky').append( $(this).clone() );
							$('.pageSticky .pageStickyOri').removeClass('pageStickyOri');
						}
					}
				});
				$('.pageSticky .pageStickyOri').removeClass('pageStickyOri');
				
				if (isItgSvc) $('.pageSticky').css('top', '0px');
			},
			
			numAniChk : new Object(),
			numAniValue : new Array(),
			numberAni : function(){
				for( var i = 0 ; i < $('.ani').length ; ++i ){
					if( $('.ani:eq('+i+')').hasClass('uiAct') == false ){
						$('.ani:eq('+i+')').addClass('uiAct');
						numAniValue.push( $('.ani:eq('+i+')').text() );
					}
				}
				if( $('.ani.uiAct:not(.aniInit)').length > 0 ){
					clearInterval( ui.numAniChk );
					ui.numAniChk = setInterval(function(){
						$('.ani.uiAct:not(.aniInit)').each(function(idx){
							if( numAniValue[idx] != $(this).text() ){
								
							}
							$(this).text();
							idx++;
						});
					},100);
				} else {
					clearInterval( ui.numAniChk );
				}
			},
			barAniInit : function(){
				$('.bar.ani:not(.fill)').each(function(){
					$(this).addClass('easeOutCubic');
					var getPercent = parseInt( $(this).attr('style').replace('width:','') );
					if( getPercent > 0 ){
						setTimeout( barFill, 300, $(this));
					}
				});
				function barFill(_target){
					var target = _target;
					//$(target).addClass('aniOn');
				}
			},
			// 카드비교함
			cardCompareResize : function(){
				var compareInterval = setInterval(function(){ui.compareBoxInit();},500);
				setTimeout(function(){
					clearInterval( compareInterval );
				},1500);
			},
			compareBoxInit : function(){
				console.log("compareBoxInit")
				var cardArry = [];
				var feeArry = [];
				var benefitArry = [];
				for( var i = 0 ; i < $('.compareBox > li').length ; ++i ){
					$('.compareBox > li:eq('+i+') .td.crd').css('height','auto');
					$('.compareBox > li:eq('+i+') .td.fee').css('height','auto');
					$('.compareBox > li:eq('+i+') .td.bnf').css('height','auto');
					cardArry.push( $('.compareBox > li:eq('+i+')').find('.crd').outerHeight() );
					feeArry.push( $('.compareBox > li:eq('+i+')').find('.fee').outerHeight() );
					benefitArry.push( $('.compareBox > li:eq('+i+')').find('.bnf').outerHeight() );
					var cardH = Math.max.apply( null, cardArry );
					var feeH = Math.max.apply( null, feeArry );
					var benefitH = Math.max.apply( null, benefitArry );
				}
				$('.compareBox > li .crd').each(function(){$(this).css('height', cardH );})
				$('.compareBox > li .fee').each(function(){$(this).css('height', feeH );})
				$('.compareBox > li .bnf').each(function(){$(this).css('height', benefitH + 20 );})
			},
			changeBG : function(obj){
				if( $(obj).attr('class') ){
					var nowClass= $(obj).attr('class');
					nowClass = nowClass.replace( 'swiper-slide', '' );
					nowClass = nowClass.replace( 'swiper-slide-active', '' );
					nowClass = nowClass.replace( 'swiper-slide-duplicate', '' );
					var nowColor = nowClass;
					$('body').removeClass('bgColor01 bgColor02 bgColor03 bgColor04 bgColor05 bgColor06 bgColor07 bgColor08 bgColor09').addClass( nowClass );
				}
			},
			toggleSwitchInit : function(){
				var tsX = 0;
				var teX = 0;
				for( var i = 0 ; i < $('.toggleSwitch').length ; ++i ){
					if( $('.toggleSwitch:eq('+i+')').hasClass('uiAct') == false ){
						$('.toggleSwitch:eq('+i+')').addClass('uiAct');
						$('.toggleSwitch:eq('+i+') input').bind({
							'touchstart' :function(e){
								//e.preventDefault();
								if( $(this).prop('disabled') == false && $(this).prop('readonly') == false ){
									tsX = e.originalEvent.touches[0].clientX;
								}
							},
							'touchend' :function(e){
								e.preventDefault();
								if( $(this).prop('disabled') == false && $(this).prop('readonly') == false ){
									teX = e.originalEvent.changedTouches[0].clientX;
									if( tsX > teX ){
										if( $(e.target).prop('checked') == true ){
											$(e.target).prop('checked', false).trigger('change');
										}
									} else if( tsX < teX ){
										if( $(e.target).prop('checked') == false ){
											$(e.target).prop('checked', true).trigger('change');
										}
									} else {
										$(e.target).prop('checked', !$(e.target).prop('checked')).trigger('change');
									}
								}
							}
						});
					}
				}
			},
			aniNumCnt : Number(0)
			
	}
	var wa = {
			IOSFocus : new Object(),
			IOSFocusInit : function(){
				console.log("IOSFocusInit실행");
				$('body').on('mousedown','button, a, *[role=button], .waBtn',function(e){
					wa.IOSFocus = e.target;
				})
			},
			
			nowFocusEl : new Object(),
			// init
			init : function(){
				wa.update();
			},
			update : function(){
				wa.btnInit();
				wa.captionInit();
				wa.progressInit();
				wa.imgAltInit();
				wa.footMenu();
			},
			// get Focus
			getNowFocus : function(){
				wa.nowFocusEl = $(':focus');
				if( wa.nowFocusEl.length == 0 ){ 
					wa.nowFocusEl = wa.IOSFocus;
				}
				return wa.nowFocusEl;
			},
			// set Focus
			setNowFocus : function(){
				$(wa.nowFocusEl).focus();
				wa.nowFocusEl = null;
			},
			// Focus Center Align
			focusCenterAlign : function(){
				$('#content button, #content :input, #content a, .quick :input, .quick a, .popCont button, .popCont :input, .popCont a').on('focusin', wa.focusCenterAlignFunc);
				$('.swiper-slide button, .swiper-slide a').off('focusin');
			},
			imgAltInit : function(){
				$('img').each(function(){
					if( $(this).attr('alt') == undefined ){
						$(this).attr('alt', '');
					}
				});
			},
			focusCenterAlignFunc : function(e){
				
			},
			// 접금성 버튼
			btnInit : function(){
				$('.waBtn').each(function(){
					$(this).attr({'tabindex':'0','role':'button'});
					if( $(this).closest('.bbsList').length > 0 ){
						$(this).attr({'tabindex':'0','role':'link'});
					}
				});
			},
			// 포커스 가능 선택자
			getEnabledFocus : function(_target, visible){
				var target = _target + " ";
				if( visible == undefined || visible == null ){
					var str = target + 'div:visible[tabindex="0"],'+target + 'li:visible[tabindex="0"],'+target + 'button:visible:not([tabindex="-1"]),'+target + 'a:visible:not([tabindex="-1"]),'+target+'input:visible:not([tabindex="-1"]),'+target+'select:visible:not([tabindex="-1"]),'+target+'textarea:visible:not([tabindex="-1"])';
				} else {
					str = target + 'div:[tabindex="0"],' + target + 'li:[tabindex="0"],' + target + 'button:not([tabindex="-1"]),'+target + 'a:not([tabindex="-1"]),'+target+'input:not([tabindex="-1"]),'+target+'select:not([tabindex="-1"]),'+target+'textarea:not([tabindex="-1"])';
				}
				return str;
			},
			// Table caption init
			captionInit : function(){
				$('.tableX, .bbsTbl').each(function(){
					if( $(this).find('thead').length != 0 ){
						var tableTit = $(this).closest('section').find('.titArea .titH2').text();
						if( $(this).data('title') != undefined ){
							tableTit = $(this).data('title');
						}
						var captionStr = tableTit;
						if(tableTit != "" ) captionStr += ' - ';
						$(this).find('thead th').each(function(idx){
							if( $(this).is(':visible') ){
								var str = $(this).text();
								(idx != 0 )?captionStr += ", " + str:captionStr += str;
							}
						});
						captionStr += " 등으로 구성되어 있습니다.";
						if( $(this).find('caption').length > 0 ){
							$(this).find('caption').text( captionStr );
						} else {
							$(this).prepend('<caption>'+ captionStr +'</caption>');
						}
					}
				});
				$('.tableY').each(function(){
					if( $(this).find('th').length == 0 ){
						$(this).find('caption').remove();
					}
				})
			},
			progressInit : function(){
				for(var  i = 0 ; i < $('.progress').length ; ++i ){
					if( $('.progress').eq(i).hasClass('uiAct') == false ){
						$('.progress').eq(i).addClass('uiAct');
						$('.progress:eq('+i+') ol, .progress:eq('+i+') span').attr('aria-hidden','true');
						var num = $('.progress').eq(i).find('li').length;
						var nowStep = $('.progress').eq(i).find('li.on').index() + 1;
						var stepName = $('.progress:eq('+i+') li.on').text();
						$('.progress:eq('+i+')').attr('role','img');
						$('.progress:eq('+i+')').attr('aria-label','총 '+num+'단계 중 '+nowStep+'단계 '+stepName + ' 진행중');
						$('.progress:eq('+i+') ol').before( $('.progress:eq('+i+') span') );
					}
					$('.progress:eq('+i+') span').width( $(window).width() - $('.progress:eq('+i+') ol li').length * 38 - 20 - parseInt( $('.progress:eq('+i+')').css('padding-left') ) ); // 38은 동그라미크기+마진 -20은 여유값
				}
			},
			getLpFocus : function(_popup){
				var target = $(_popup).find('.popHead .titH1');
				if( $(_popup).find('.alert').length > 0 ||  $(_popup).hasClass('alert') ){
					target = $(_popup).find('.msg');
				}
				if(  $(_popup).find('.popCont.bottom').length > 0 || $(_popup).hasClass('bottom') ){
					target = $(_popup).find('.popCont');
					if( $('.topMsg').length > 0 ){
						target = $(_popup).find('.topMsg');
					} else if( $('.moneyTotal').length > 0 ){
						target = $(_popup).find('.moneyTotal .block .tit');
					}
					if( $('.infoMsgBox').length > 0 || $('.optionList').length > 0){
						target = $(_popup).find('.optionList li.on');
					}
				}
				if( $(_popup).hasClass('selectLayer') ){
					target = $(_popup).find('.optionList li.on');
					if(target.length == 0 || $(_popup).find('.cardSelList').length > 0) {
						target = $(_popup).find('.cardSelList .cardSel.on');
					}
					//console.log(target);
					console.log('.select걸렸다 : ' + $(target).outerHTML() );
				}
				console.log( "target?>>>>>>>>>> : " + $(target).text() );
				return target;
			},
			footMenu : function(){
				if( $('.footSticky').length > 0 ){
					$('.footSticky .blind').remove();
					$('.footSticky .on a').append('<span class="blind">선택됨</span>');
				}
			}
	}
	var lp = {
			fnCb : new Object(),  // 개별팝업에서 콜백함수를 셋팅할수 있는 함수 객체.
			popupInterval : new Object(),
			popIntervalStr : new Object(),
			closeTarget : new Object(),
			firstPopFocus : new Object(),
			lastZindex : 1200,
			popIndex : 0,
			lastPop : new Array(),
			move : function(){
				$( '.popWrap' ).each(function(){
					$(this).insertAfter( ".wrapper" );
				});
			},
			open2 : function (url, jsParam, fnObj) { // .jsp 와 .js 의 중간 경로가 같을 경우
                var path = url.substr(0, url.length - 3);
                this.open(SysComm.contextPath() + path + '.do', jsParam, SysComm.contextPath() + '/js' + path + '.js', fnObj);
            }, 
			// Open
			open : function (url, jsParam, jsURL, fnObj){ // jsParam(json 파라미터 객체), fnObj(콜백함수)
				swipeVar.isNotAPopup++;
				lp.popIndex++;
				console.log("lp.open 실행 \n url : " + url + ',\n jsParam : ' + jsParam + ',\n jsURL : ' +jsURL + ',\n fnObj : ' + fnObj);
				/*lp.move();*/
				var alertState = false;
				//wa.getNowFocus();
				if(fnObj != undefined && fnObj != null && fnObj != ""){
					lp.fnCb = fnObj; // 콜백함수 셋팅.
				}
				if( $('body').hasClass('popOn') == false ){
					lp.firstPopFocus = wa.getNowFocus();
					if( isIOS == true ){				
						var scrlPos = $(window).scrollTop();
						$('html, body').addClass('popOn');
						$('html, body').scrollTop( 0 );
						$(window).scrollTop( 0 );
						$('#content').css('top','-'+scrlPos+'px');
					} else {
						$('html, body').addClass('popOn');
					}
				}
				$('.popWrap.nowOpen').removeClass('nowOpen');
				if( url.indexOf('/') != -1 ){
					var str = url + " .popup";
					$('body').append('<div id=\''+url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.'))+'_cPopup\' class="popWrap nowOpen ajaxPop analysis"></div>');
					$('.popWrap.nowOpen.analysis .popCont').hide();
					$('.popWrap.nowOpen.analysis').addClass( 'popIndex' + lp.popIndex ).fadeIn();
					lp.lastPop.push( 'popIndex' + lp.popIndex );
					$('.ajaxPop.nowOpen.analysis.popIndex' + lp.popIndex).load(str, jsParam, function(e){
						lp.getCol( $(this) );
						//lp.lastPop.push( $('.ajaxPop.nowOpen.analysis') );
						layout.setctionFirst();
						ui.init();
						ui.iptGroupHasInit();
						if( $(this).find('.popCont.alert').length > 0 ){alertState = true;}
						$(this).find('.popCont').fadeIn('fast',function(){
							if( alertState == true ){
								$(this).closest('.popWrap.analysis').addClass('nowAlert').removeClass('nowOpen analysis');
								lp.openedSet( $(this), jsURL, 'alert');
							} else {
								if( $('.nowOpen').length > 0 ){
									$('.popWrap.nowOpen:not(.analysis)').removeClass('nowOpen');
								}
								$('.popWrap.analysis').removeClass('analysis');
								lp.openedSet( $(this), jsURL);
							}
						});
					});
				} else {
					var targetPop = $(url);
					targetPop.addClass('nowOpen analysis popIndex' + lp.popIndex );
					lp.lastPop.push( 'popIndex' + lp.popIndex );
					lp.getCol( $('.nowOpen.analysis') );
					//lp.lastPop.push( $('.nowOpen.analysis') );
					if( $('.selectLayer.nowOpen').length == 0 ){
						ui.init();
					}
					if( $(targetPop).closest('.wrapper').length > 0 ){
						lp.move();
					}
					targetPop.fadeIn('fast',function(){
						if( $(targetPop).find('.alert').length > 0 ){
							$('.nowOpen.analysis').addClass('nowAlert').removeClass('nowOpen analysis');
							lp.openedSet( $(this), jsURL, 'alert');
						} else {
							$('.nowOpen.analysis').removeClass('analysis');
							lp.openedSet( $(this), jsURL);
						}
					});
				}
			},
			openedSet : function( _target, jsURL, _type ){
				var target = $(_target).closest('.popWrap');
				console.log('====================== openedSet ===================== : ' + $(target).attr('class') );
				lp.lastZindex++;
				$('.popCont').attr('role','dialog');
				//$(this).find('.popCont').attr("tabindex", -1).focus();
				if( jsURL != undefined )$.getScript( jsURL ).done( function(){ /*cf_popfooter();*/ }).fail(function(){ /*cf_popfooter();*/ });
				if( $('.popWrap.nowOpen:not(.beforePopup)').find('.popBody').length > 0 ){
					lp.popIntervalStr = $(target).attr('class');
					lp.popupResize(lp.popIntervalStr);
					clearInterval( lp.popResizeInterval );
					lp.popupInterval = setInterval(lp.popResizeInterval, 1000);
					if( $(lp.popIntervalStr).find('.tab').length > 0 ){
						$(lp.popIntervalStr).find('.popBody').removeClass('on off');
						setTimeout(function(){
							lp.popupResize(lp.popIntervalStr);
						},100);
					}
					
				} else {
					
				}
				
				$(target).closest('.popWrap').css('z-index', lp.lastZindex );
				if( _type == 'alert' ){
					$(target).find('.popBody').removeClass('on').removeAttr('tabindex').css('height','auto');
					$(target).css('z-index', lp.lastZindex );
					lp.focusLoopInit('alert');
				} else {
					lp.focusLoopInit();
				}
				ui.emailInit();
				$('.popWrap .ipt').each(function(){
					if( $(this).data('unit') != undefined ){
						ui.iptUnitInit( $(this) );
					}
				});
				setTimeout(function(){
					if( $(target).find('.popCont.bottom .moneyTotal .accoBtn').length > 0 ){
						$(target).find('.popCont.bottom').addClass('hasAcco');
					}
					$(target).find('.popCont.bottom').addClass('open');
				},100);
				
				//swiper문제 해결
				for( var i = 0 ; i < $('.swiperWrap').length ; ++i ){
					try{
						window['ui' +$('.swiperWrap:eq('+i+')').attr('id') ].update();
					}catch(e){
						console.log(e);
					}
				}
				$(target).find('.popCont').scroll( layout.popScrollMoved );
				setTimeout(function(){
					layout.popScrollMoved();
					$( wa.getLpFocus( $(target) ) ).attr('tabindex','-1').focus();
					$('.wrapper').attr('aria-hidden','true');
				},1000);
			},
			close : function (_mTime){
				swipeVar.isNotAPopup = swipeVar.isNotAPopup == 0 ? 0 : swipeVar.isNotAPopup - 1; 
				console.log( lp.popIndex );
				/*if( $('.popWrap.popIndex'+lp.popIndex ).css('z-index') == lp.lastZindex ){
					lp.closeTarget = $('.popWrap.popIndex'+lp.popIndex );
				}*/
				
				lp.lastPop = [];
				$('.popWrap[class*=popIndex]').each(function(){
					console.log( $(this).css('z-index') );
					lp.lastPop.push( $(this).css('z-index') );
				});
				console.log( lp.lastPop );
				var maxZ = Math.max.apply( null, lp.lastPop );
				console.log( "maxZ : " + maxZ );
				
				for( var i = 0 ; i < $('.popWrap[class*=popIndex]').length ; ++i ){
					if( $('.popWrap[class*=popIndex]:eq('+i+')').css('z-index') == maxZ ){
						lp.closeTarget = $('.popWrap[class*=popIndex]:eq('+i+')');
						for( var j = 0 ; j <= lp.popIndex ; ++j ){
							$(lp.closeTarget).removeClass('popIndex'+j);
						}
						break;
					}
				} 
				
				/*lp.closeTarget = $(lp.lastPop[lp.lastPop.length-1]);
				lp.lastPop.pop();
				$(lp.lastPop[lp.lastPop.length-1]).addClass('nowOpen');*/
				//wa.setNowFocus();
				if(_mTime == null || _mTime == undefined){
					var mTime = 300;
				} else {
					mTime = _mTime;
					if( _mTime.indexOf('.') >= 0 || _mTime.indexOf('#') >= 0 ){
						lp.closeTarget = _mTime;
					}
				}
				if( $(lp.closeTarget).find('.popCont.open').length == 0 ){
					$(lp.closeTarget).fadeOut(mTime, function(){
						lp.closeComplete();
					});
				} else {
					$(lp.closeTarget).find('.popCont').removeClass('open');
					$(lp.closeTarget).delay(200).fadeOut(mTime, function(){
						lp.closeComplete();
					});
				}
			},
			closeComplete : function(){
				$(lp.closeTarget).removeClass('nowOpen nowAlert');
				if( $(lp.closeTarget).hasClass('ajaxPop') ){
					$(lp.closeTarget).remove();
				}
				if( $('body .popWrap.nowOpen').length == 0 && $('body .popWrap.nowAlert').length == 0 ){
					clearInterval( lp.popupInterval );
					$('.popWrap').removeClass('nowOpen nowAlert');
					if( isIOS == true ){
						var scrlPos = - parseInt( $('#content').css('top') );
						$('html, body').removeClass('popOn');
						$('#content').css('top','auto');
						$('html, body').scrollTop( scrlPos );
					} else {
						$('html, body').removeClass('popOn');
					}
					$('html').removeClass('popFullScroll');
					$('.wrapper').attr('aria-hidden', 'false');
					setTimeout(function(){
						$(lp.firstPopFocus).focus();
					},500)
					//lp.lastZindex = 1200;
				}
			},
			getCol : function( target ){
				console.log( "getCol 실행 \n"/* + $(target).html()*/ );
				console.log("===================================== getCol Target : " + $(target).attr('class') );
				var _getCol = $(target).find('.popBody').attr('class');
				console.log( "_getCol : " + _getCol );
				if( _getCol != undefined ){
					if( $(target).find('.popBody').hasClass('bottom')){
						$(target).find('.popBody').removeClass('bottom');
						$(target).find('.popCont').addClass('bottom');
					}
					if( _getCol.indexOf('col_') > -1 ){
						var replaceCol = _getCol.replace('popBody','').replace('on','').replace(/ /gi, '');
						$(target).find('.popCont').addClass( replaceCol );
						$(target).find('.popBody').removeClass( replaceCol );
					}
					if( $(target).find('.popBody').hasClass('full') ){
						$(target).find('.popCont, .popWrap').addClass('full');
						$(target).find('.popBody').removeClass('full');
					}
				}
			},
			popWrapCtrl : function (){
				$('.popWrap.nowOpen').removeClass('loading');	
				$('.popWrap.nowOpen .loadingWrap').remove();	
				$('.popWrap.nowOpen').hide();	
			},
			callBack : function(aa){ // 개별팝업에서 콜백 함수 호출 할수 있도록 제공.
				lp.fnCb(aa);
			},
			callBackNullClose : function (mTime){
				if(lp.fnCb != undefined && lp.fnCb != null && lp.fnCb != ""){
					lp.fnCb(null); // 콜백함수 셋팅.
				}
				lp.fnCb = null;
				lp.close(mTime);
			},
			setCallBack : function(pFn){ // 팝업 호출시 콜백 함수를 셋팅 할수 있도록 제공.
				lp.fnCb = pFn;
			},
			focusLoopInit : function (){
				$('.nowAlert, .popWrap.nowOpen').each(function(){
					if( $(this).find('.focusSet').length == 0 ){
						$(this).prepend('<span class="focusSet blind first" tabindex="0">팝업 처음</span>');
						$(this).append('<span class="focusSet blind last" tabindex="0">팝업 마지막</span>');
						/*$(this).find('.focusSet').bind({
							'focusin':function(e){
								var popWrap = '.'+$(e.target).closest('.popWrap').attr('class').replace(/ /gi,'.') + ' .popCont';
								if( $(e.target).hasClass('first') ){
									$( wa.getEnabledFocus(popWrap) ).last().focus();
								} else {
									$( wa.getEnabledFocus(popWrap) ).first().focus();
								}
							}
						});*/
					}
				});
			},
			popResizeInterval : function (){
				if( $(lp.popIntervalStr + ' .popBody').hasClass('on') == false && $(lp.popIntervalStr + ' .popBody').hasClass('off') == false  ){
					lp.popupResize(lp.popIntervalStr);
				}
				lp.popupResize(lp.popIntervalStr);
				if(winH != $(window).height()){
					winH = $(window).height();
					lp.popupResize(lp.popIntervalStr);
				}
				if( $(lp.popIntervalStr + ' .popCont').hasClass('full') || $(lp.popIntervalStr + ' .popCont').hasClass('bottom') ){
					clearInterval( lp.popupInterval );
				}
			},
			popupResize : function( _str ){
				var str ='.'+ _str.replace(/ /gi, '.');
				/*console.log(" str : " + str );
				console.log( "$(str + ' .popCont').hasClass('full') : " + $(str + ' .popCont').hasClass('full') );*/
				if( $(str + ' .popCont').hasClass('full') == false ){
					$(str + ' .popBody').removeClass('on').removeAttr('tabindex');
					$(str + ' .popBody').css('max-height',$(window).height()*0.8);
					winH = $(window).height();
					try{
						var scrollPos = $(str + ' .popBody').position().top
					} catch(error){
						scrollPos = 0;
					}
					var result = $('.popWrap.nowOpen .popBody').outerHeight();
					$('.popWrap.nowOpen .popCont').css('min-height', 0);
					var vGap = 60; // 60은 팝업과 검은색 Dimmed 영역의 위아래 합산된 마진
					if( $('body.windowPop').length > 0 ){
						vGap = 0;
						if( $('body.windowPop .popWrap .popBody').length > 0 ){
							vGap = 60;
						}
					}
					if( winH - vGap < $(str + ' .popCont' ).outerHeight() ){
						var headerH = $('.popWrap.nowOpen .popHead').outerHeight() + 30;// 30은 헤더와 스크롤 사이에 간격
						var bottomH = $('.popWrap.nowOpen .popCont > .btnArea').outerHeight();
						var stickyH = 0;
						var maxH = winH - vGap - headerH - bottomH;/* - stickyH - targetPX;*/
						if( $('.popWrap.nowOpen .popCont').hasClass('full') ){
							var pdT = parseInt( $('.popWrap.nowOpen .popCont').css('padding-top') );
							maxH = winH - headerH - bottomH + pdT;
						}
						if(result > maxH ){
							result = maxH;
						}
						$(str + ' .popBody').height(Math.floor(result) - 30);
						$(str + ' .popBody').addClass('on');
						$(str + ' .popBody').attr('tabindex','0'); 
					}
				} else {
					if( $(str).find('.btnArea.sticky').length > 0 ){
						$(str).find('.popCont').addClass('hasPopSticky');
						if( $(str).find('.popCont').hasClass('hasPopSticky') ){
							clearInterval( lp.popupInterval );
						}
						/*var targetHeight =  $(str).find('.popBody').height();
						var topMargin = parseInt($(str).find('.popInner > *').first().css('margin-top'));
						console.log("targetHeight : " + targetHeight );
						console.log("topMargin : " + topMargin );*/
						//$(str).find('.popInner').css('min-height', targetHeight - topMargin ); /* 우선 주석처리함, 어떤 케이스에 대응하기 위해서 한것인지 기억안남 */
					}
				}
				
			}
	}
	var crd = {
			nowCardEl : new Object(),
			// Card Select init
			init: function(){
				for( var i = 0 ; i < $('.cardSel').length ; ++i ){
					$('.cardSel').attr({'role':'button','tabindex':'0'});
					if( $('.cardSel:eq('+i+')').hasClass('uiAct') == false ){
						$('.cardSel:eq('+i+')').addClass('uiAct');
						if( $('.cardSel:eq('+i+')').next().is('.cardSelList') ){
							$('.cardSel:eq('+i+')').addClass('asSlt').attr('title','카드 선택');
							var list = $('.cardSel:eq('+i+')').next();
							$('.cardSel:eq('+i+')').wrap('<div class="customSlt uiAct"></div>');
							var contain = $('.cardSel:eq('+i+')').closest('.customSlt');
							contain.append( $(list) );
							$(list).wrap('<div class="cardSelListWrap" tabindex="0"></div>');
							if( $(contain).find('.cardSelListWrap li.on').length == 0 ){
								$(contain).find('.cardSelListWrap li').first().find('.cardSel').addClass('on');
							}
							$('.cardSel:eq('+i+')').bind({
								'click':function(e){
									e.preventDefault();
									crd.nowCardEl = $(this);
									var cardHTML = $(this).next().html();
									$('body').append( ui.getSelectHead('카드선택') + cardHTML + ui.getSelectFoot() );
									lp.open('.popWrap.selectLayer');
									crd.bottomPopInit();
								}
							});
						}
					}
				}
			},
			bottomPopInit : function(){
				$('.popWrap.selectLayer .cardSelList a, .popWrap.selectLayer .cardSelList button').bind({
					'click' : function(e){
						e.preventDefault();
						var idx = $(this).parent().index();
						crd.change( crd.nowCardEl, idx );
					}
				});
			},
			change : function(target, idx){
				$(target).next('.cardSelListWrap').find('.cardSelList li a, .cardSelList li button').removeClass('on').removeAttr('title');
				$(target).next().find('.cardSelList li:eq('+idx+') > *').addClass('on').attr('title', '선택됨');
				lp.close('.popWrap.selectLayer');
				if( $(target).data('func') != undefined ){
					try{
						window[ $(target).data('func')]( $(target).next().find('.cardSelList li > *.on') );
						//new Function($(target).data('func') + "($(target).next().find('.cardSelList li > *.on'));" )();
					} catch(e){
						console.log(e);
					}
				}
				var selectItem = $(target).next('.cardSelListWrap').find('.cardSelList li > *.on');
				var itemHTML = $(selectItem).html();
				var attributes = $(selectItem).prop("attributes");
				$(target).removeAttr('data-cdno');
				$(target).empty().append( itemHTML );
				$.each(attributes, function(){
					if( this.name.indexOf('data-') >= 0 ){
						$(target).attr( this.name, this.value );
					}
				});
			}
	}
	var tip = {
			posArry : new Array(),
			make : function(){
				$('.toolTip').each(function(){
					$(this).wrap('<div class="tip"><div class="tipWrap"></div></div>');
					if( $(this).hasClass('noti') ){
						$(this).closest('.tip').addClass('noti');
					}
					$(this).closest('.tipWrap').prepend('<button type="button" class="btnIco_tip"><span>도움말</span></button>');
					$(this).addClass('tooltip').removeClass('toolTip').wrapInner('<div class="cont"></div>');
					$(this).prepend('<div class="arrow"></div>');
					$(this).append('<button type="button" class="btnIco_close"><span>닫기</span></button>');
					if( $(this).data('direction') != undefined ){
						$(this).closest('.tip').find('.btnIco_tip').data('direction',  $(this).data('direction') );
					}
				});
			},
			init : function(){
				tip.make();
				for(var  i = 0 ; i < $('.tipWrap').length ; ++i ){
					if( $('.tipWrap').eq(i).hasClass('uiAct') == false ){
						$('.tipWrap').eq(i).addClass('uiAct');
						$('.tipWrap:eq('+i+') .btnIco_tip').attr('aria-labelledby','tooltip_'+i);
						$('.tipWrap:eq('+i+') .tooltip .cont').attr('id','tooltip_'+i);
						$('.tipWrap:eq('+i+') > .btnIco_tip').bind({
							'click':function(e){
								if($(this).hasClass('hasLink') == false ){
									e.preventDefault();
								}
								if($(this).parent().hasClass('on') == false ){
									$(this).next().attr("tabindex", -1).focus();
									$(this).parent().addClass('on');
									$(this).next().addClass('in');
									tip.open( $(this) );
								}
							},
							'focusin':function(e){
								if( $(this).next().hasClass('in') == false ){
									if( $('.tipWrap.on').data('autoTip') != true ){
										$('.tipWrap').removeClass('on');
										$('.tipWrap .tooltip').removeClass('in');
									}
									tip.open( $(this) );
								}
							},
							'focusout':function(e){
								if($(this).parent().hasClass('on') == false ){
									$(this).next().removeClass('in');
								}
							}
						});
						$('.tipWrap:eq('+i+') .btnIco_close').bind({
							'click':function(e){
								e.preventDefault();
								tip.close( $(this) );
							}
						});
						if( $('.tipWrap:eq('+i+')').closest('.tip').hasClass('noti') ){
							$('.tipWrap:eq('+i+') > .btnIco_tip').trigger('click');
							$('.tipWrap:eq('+i+') > .btnIco_tip').remove();
						}
					}
				}
			},
			
			open : function (target){
				target.next().css('width', tip.getWidth( target.next()) );
				var yPos = target.next().outerHeight();
				target.next().css('margin-top',-yPos*0.5);
				target.next().addClass('in');
				target.next().find('.arrow').removeAttr('style');
				var parent = target.closest( ".wrapper" );
				if($('body').hasClass('popOn') == true ){
					parent = target.closest( ".popBody" );
				}
				if(parent == undefined ){
					parent = target.closest( ".likeSubpage" );
				}
				if(parent == undefined){
					parent = target.closest( ".popCont" );
					if(parent == undefined){
						tip.getPosRect(target);
					} else {
						tip.getPosRect(target, parent);
					}
				} else {
					tip.getPosRect(target, parent);
				}
				//$('body').addClass('tipOpen');
			},

			close : function (target){
				target.parent().parent().removeClass('on');
				target.parent().removeClass('in');
				//$('body').removeClass('tipOpen');
			},

			getWidth : function(target){
				var className = String( target.attr('class') );
				var num = className.indexOf("col_");
				if( num > -1 ){
					var result = Number( className.substr(num + 4, 2) );
					$(target).removeClass('col_'+result);
					var contWidth = $( "#content" ).outerWidth();
					if(contWidth > 1080 ) contWidth = 1080;
					var percent = 0.0833333 * result * contWidth;
					return percent;
				} else {
					//return 400; /*짤리는 문제 때문에 우선 주석처리하고 css로 해결해봄. 지켜봐야함*/
				}
			},

			getPosRect : function(target, $parent){
				tip.posArry = [];
				var parent = $parent;
				if(parent == undefined ){
					parent = $('#content');
				}
				if( parent.hasClass('wrapper') ){
					parent = $('#content');
				}
				if( $('.likeSubpage').length > 0 ){
					parent = $('.likeSubpage');
				}
				var offset = target.offset();
				var posY = offset.top - $(window).scrollTop();
				//console.log("posY : " + posY );
				var posX = offset.left - $(window).scrollLeft();
				if($(target).closest('.popCont').length > 0 )parent = $(target).closest('.popCont');
				var parentOffset = parent.offset();
				var parentPosY = parentOffset.top - $(window).scrollTop();
				var parentPosX = parentOffset.left - $(window).scrollLeft();
				var boxW = target.next().outerWidth();
				var boxH = target.next().outerHeight();
				console.log( "+dfsfdsf" + $(target).data('direction') )
				if( $(target).data('direction') == undefined ){
					var code = chkPos();
				} else {
					code = $(target).data('direction');
				}
				
				function chkPos(){
					tip.posArry = ['right','left','top','bottom'];
					var removeCode;
					// rightChk
					if( posX + boxW > parentPosX + parent.outerWidth() - 40 ){
						//console.log("기본 체크 : 오른쪽에서 걸린다");
						removeCode = tip.posArry.indexOf("right");
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
					} else {
						chkVPos("right");
					}
					//topChk
					if( posY - boxH - 30 < $('.header').height() ){
						//console.log("기본 체크 : 위쪽에서 걸린다 : ");
						removeCode = tip.posArry.indexOf("top");
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
						//console.log("탑지우는거냐?????");
						//console.log("?????????????????????" + tip.posArry );
					} else {
						chkHPos('top');
					}
					// leftChk
					if( posX - boxW -15 < parentPosX ){
						//console.log("기본 체크 : 왼쪽에서 걸린다");
						removeCode = tip.posArry.indexOf("left");
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
					} else {
						chkVPos("left");
					}
					
					//bottomChk
					if( posY + boxH  > $(window).height() ){
						//console.log("기본 체크 : 아래쪽에서 걸린다");
						removeCode = tip.posArry.indexOf("bottom");
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
						if(tip.posArry.length == 0) tip.posArry.push('right');
					} else {
						chkHPos("bottom");
					}
					
					return tip.posArry[0];
				}
				
				function chkVPos(removeDirection){
					if(parent.attr('id') == 'content'){
						var targetPos = $('.header').height();
					} else {
						targetPos = parentPosY;
					}
					if( posY - boxH*0.5 + 40 < targetPos ){
						removeCode = tip.posArry.indexOf(removeDirection);
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
						var removeCode2 = tip.posArry.indexOf("top");
						if(removeCode2 > -1)tip.posArry.splice(removeCode2,1);
						if(tip.posArry.length == 0) tip.posArry.push(removeDirection);
					}
					if( posY + boxH*0.5  > $(window).height()){
						//console.log("vCheck : 아래에서 걸린다" + removeDirection );
						removeCode = tip.posArry.indexOf(removeDirection);
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
						var removeCode2 = tip.posArry.indexOf("bottom");
						if(removeCode2 > -1)tip.posArry.splice(removeCode2,1);
						if(tip.posArry.length == 0) tip.posArry.push(removeDirection);
					}
					
				}
				
				function chkHPos(removeDirection){
					//console.log("chkHPos : " + removeDirection );
					if( posX + boxW*0.5 > parentPosX + parent.outerWidth() ){
						//console.log("chkHPos : 오른쪽에서 걸린다");
						removeCode = tip.posArry.indexOf(removeDirection);
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
					} else {
						chkVPos("right");
					}
					if( posX - boxW*0.5 -15 < parentPosX ){
						//console.log("chkHPos : 왼쪽에서 걸린다");
						removeCode = tip.posArry.indexOf(removeDirection);
						if(removeCode > -1)tip.posArry.splice(removeCode,1);
					} else {
						chkVPos("left");
					}
				}
				function setTipLayout(type){
					if( type == "left" ){
						target.parent().parent().removeClass('top left bottom right');
						target.parent().parent().addClass('left');
						target.next().css('left', -boxW);
					} else if( type == "bottom" ){
						target.parent().parent().removeClass('top left bottom right');
						target.parent().parent().addClass('bottom');
						target.next().css('margin-top', 'auto');
						target.next().css('left', -boxW*0.5);
					} else if( type == "top" ){
						target.parent().parent().removeClass('top left bottom right');
						target.parent().parent().addClass('top');
						target.next().css('margin-top', 'auto');
						target.next().css('left', -boxW*0.5);
					} else if( type == "right" ){
						target.parent().parent().removeClass('top left bottom right');
						target.next().css('margin-top', -target.next().outerHeight()*0.5);
						target.next().css('left', 0);
					}
				}
				console.log(tip.posArry);
				console.log("최종코드 : " + code);
				setTipLayout(code);
			},
			
			// 모바일 툴팁
			mTipInit : function(){
				$('.btnIco_help').each(function(){
					if( $(this).hasClass('uiAct') == false ){
						$(this).addClass('uiAct');
						if( $(this).next().is('.helpWrap') == true ){
							$(this).bind({
								'click': function(e){
									e.preventDefault();
									$(this).next().stop().slideToggle(300);
								}
							});
						}
					}
				});
			}
	}
	if(!Array.indexOf){
		Array.prototype.indexOf = function(obj){
			for(var i=0; i<this.length; i++){
				if(this[i]==obj){
					return i;
				}
			}
			return -1;
		};
	}
	var analysis = {
			// Mobile Check
			checkMobileDevice : function () {
				var mobileKeyWords = new Array('Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows CE', 'MOT', 'SonyEricsson');//'SAMSUNG', 'LG', 
				for (var info in mobileKeyWords) {
					if(navigator.userAgent.match(mobileKeyWords[info]) != null) {
						return true;
					}
				}
				return false;
			},
			// Safari check
			safariChk : function (){
				var ua = navigator.userAgent.toLowerCase();
				if(ua.indexOf('safari') != -1){
					if(ua.indexOf('chrome') == -1 ){
						$('body').addClass('safari');
					}
				}
			},
			// IOS Check
			checkIOSDevice : function () {
				var mobileKeyWords = new Array('iPhone', 'iPad', 'iPod');
				for (var info in mobileKeyWords) {
					if(navigator.userAgent.match(mobileKeyWords[info]) != null) {
						return true;
					}
				}
				return false;
			},
			// 그룹통합서비스 여부
			checkItgSvcDevice: function() {
				var itgSvcKeywords = new Array('appId=WWMS','appId=SMTMPB', 'appId=smartwoori');
				for (var key in itgSvcKeywords) {
					if (navigator.userAgent.match(itgSvcKeywords[key]) != null) {
						return true;
					}
				}
				return false;
			},
			// get Browser Scroll Width
			getScrollbarWidth : function () {
				var outer = document.createElement("div");
				outer.style.visibility = "hidden";
				outer.style.width = "100px";
				outer.style.msOverflowStyle = "scrollbar";
				document.body.appendChild(outer);
				var widthNoScroll = outer.offsetWidth;
				outer.style.overflow = "scroll";
				var inner = document.createElement("div");
				inner.style.width = "100%";
				outer.appendChild(inner);
				var widthWithScroll = inner.offsetWidth;
				outer.parentNode.removeChild(outer);
				
				return widthNoScroll - widthWithScroll;
			},
			init : function(){
				isDevice = analysis.checkMobileDevice();
				isIOS = analysis.checkIOSDevice();
				isItgSvc = analysis.checkItgSvcDevice();
				analysis.safariChk();
				analysis.getScreenSize();
				// native app 체크
				try{
					if( SysComm.isAppIos() == true ){
						isIOSApp = true;
						$('html').addClass('isIOSApp');
					}
				} catch(e){
					console.log(e);
				}
				if(isDevice)$('body').addClass('isDevice');
				if(isIOS){
					$('html').addClass('isIOS');
					wa.IOSFocusInit();
				}
				// 모드체크
				var url = window.location.href;
				if( window.location.href.indexOf('?') >= 0 ){
					var pureURL = String(window.location.href).substr(0, window.location.href.indexOf('?'));
				} else {
					pureURL = window.location.href;
				}
				if( pureURL.indexOf('.html') >= 0 ){
					pubMode = true;
				}
			},
			getScreenSize : function(){
				var longpress = 1000;
				var start;
				$('body').on({
					touchstart:function(){
						start = new Date().getTime();
						console.log( start );
					},
					touchend : function(e){
						if( new Date().getTime() >= Number( start + longpress ) ){
							if( $(e.target).hasClass('testCode') == false ){
								if( $('.testCode').length == 0 ){
									$('.wrapper').before('<div class="testCode"></div>');
								}
								$('.testCode').css({ 'position':'fixed', 'top': 0, 'left':0, 'right':0,'padding':'10px', 'z-index': 2000, 'height': 'auto', 'background-color':'rgba(0,0,0,0.7)', 'font-weight':'bold' , 'color':'yellow', 'white-space':'pre', 'overflow':'auto'});
								scTxtInit();
								chkFileAppend();
								try{
									pubTestFunction();
								} catch(e){
									console.log(e);
								}
							} else {
								$('.testCode').remove();
							}
							start = 0;
						}
					}
				},'.header.test .btnIco_allMenu, .testCode' );
				function scTxtInit(){
					var wid = viewportSize().width;
					var hei = viewportSize().height;
					var rat = window.devicePixelRatio;
					var ori = orientationData().ori;
					$('.testCode').append( 'Screen Size : '+wid+' * '+hei+' / '+rat+ ' / '+ ori );
				}
				function viewportSize(){
					var test = document.createElement( "div" );

					test.style.cssText = "position: fixed;top: 0;left: 0;bottom: 0;right: 0; width:100%;";
					document.documentElement.insertBefore( test, document.documentElement.firstChild );

					var dims = { width: test.offsetWidth, height: test.offsetHeight };
					document.documentElement.removeChild( test );

					return dims;
				}
				function orientationData(){
					var orientation = window.orientation;
					var str = "";
					if( orientation === 0 || orientation === 180 ){
						str = "portrait";
					} else{
						str = "landscape";
					}
					var dims = { ori: str };

					return dims;
				}
				function loaded() {
					setTimeout(function(){
						document.getElementById('wid').innerHTML = viewportSize().width;
						document.getElementById('hei').innerHTML = viewportSize().height;
						document.getElementById('dpr').innerHTML = window.devicePixelRatio;
						document.getElementById('ori').innerHTML = orientationData().ori;
					}, 1000)
				}
			}
	}

	t.layout 		= layout; // Layout 관련
	t.gnb 			= gnb; // GNB 관련
	t.tip 			= tip; // tooltip
	t.ui 			= ui; // UI Component
	t.lp 			= lp; // 레이어 팝업
	t.wa 			= wa; // 접근성 관련
	t.crd			= crd; // 셀렉트 카드 관련
	t.analysis 		= analysis; // Browser analysis
})(this);


$.fn.outerHTML = function(){
	var el = $(this);
	if( !el[0] ) return "";
	if( el[0].outerHTML ){
		return el[0].outerHTML;
	} else {
		var content = el.wrap('<p/>').parent().html();
		el.unwrap();
		return content;
	}
}

$.fn.hasEvent = function(){
	var ty = arguments[0], fn = arguments[1], da = $._data(this[0], 'events') || undefined;
	if( da === undefined || ty === undefined || da[ty] === undefined || da[ty].length === 0 ) return false;
		if( fn === undefined ) return true;
	return Boolean(fn == da[ty][0].handler);
}

// 숫자 애니메이션
$.fn.aniText = function(_val){
	var numVal = _val;
	var target = $(this);
	$(target).addClass('numAni');
	if( $(target).prev().is('input') == false ){
		var id = $(target).attr('id');
		if( id == "" || id == undefined ){
			id = 'aniNumID' + ui.aniNumCnt;
			ui.aniNumCnt++;
		}
		$(target).before('<input type="hidden" id="'+id+'">');
		$(target).after('<em style="display:inline-block; padding:0; margin-right: -1px; width:1px;" aria-hidden="true">&nbsp;</em>');
		$(target).numberAnimate( {animationTimes : [300, 1000, 300]} );
		$(target).prev().on('change',function(e){
			$(this).next().numberAnimate( 'set', $(this).val() );
		});
	}
	
	$(target).attr( 'aria-label', numVal );
	$(target).find('*').attr('aria-hidden', true);
	setTimeout(function(){
		$(target).prev().val(numVal).trigger('change');
	},100);
}



$(document).ready(function(){
	var vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh',vh+'px');
	winH = $(window).height()
	winW = $(window).width();
	analysis.init();
	if(pubMode){
		if( window.location.href.indexOf('/ap/') < 0 ){
			layout.ready();
		} else {//우리페이 로컬 HTML전용
			pubMode = false;
			layout.init();
		}
	}
});


/* Debug 관련 */
function lastModTime(url, wch){
	try{
		var req = new XMLHttpRequest();
		req.open('HEAD', url, false);
		req.send(null);
		if( req.status == 200 ){
			req.getResponseHeader(wch);
			return req.getResponseHeader(wch);
		}
		else return false;
	} catch(e) {
		return e.message;
	}
}

function timeFilter(_str){
	var str = _str
	str = str.replace(' GMT+0900 (한국 표준시)', '');
	str = str.replace(' GMT+0900 (KST)', '');
	str = str.replace('Sun ', '');
	str = str.replace('Mon ', '');
	str = str.replace('Tue ', '');
	str = str.replace('Wed ', '');
	str = str.replace('Thu ', '');
	str = str.replace('Fri ', '');
	str = str.replace('Sat ', '');
	return str; 
}

function getFileModTime( file ){
	var time = timeFilter( String( new Date( lastModTime( file , 'Last-Modified') ) ) );
	return time;
}

function chkFileAppend(){
	/*$('.testCode').append('\n\n'); 
	$('.testCode').append( 'HTML : ' + getFileModTime( location.href ) +'\n');
	$('.testCode').append( 'm.common.css : ' + getFileModTime('/css/m.common.css') +'\n');
	$('.testCode').append( 'm.content.css : ' + getFileModTime('/css/m.content.css') +'\n');
	$('.testCode').append( 'm.layout.css : ' + getFileModTime('/css/m.layout.css') +'\n');
	$('.testCode').append( 'm.front.js : ' + getFileModTime('/js/uiux/m.front.js') +'\n');
	$('.testCode').append('\n');*/ 
	/*$('[class*=List] .hasIpt .accoBtn ').addClass('pubTest');
	var str = String( $('.cardList > li:eq(0)').html() );
	$('.testCode').append('\n' + 'list : ' + $('.cardList > li.hasIpt .block').length );
	$('.testCode').append('\n' + 'block : ' + parseInt( $('.cardList > li:eq(0) .block').css('padding-left') ) );
	$('.testCode').append('\n' + 'accoBtn : ' + parseInt( $('.cardList > li:eq(0) .block .accoBtn').css('padding-left') ) );*/
}

function pubTestFunction(){
	console.log("pubTestFunction");
/*	var height = $(document).outerHeight() - $(window).height();
	$('.testCode').append( 'HTML Height : </span><span class="testHH"></span>\n');
	$('.testCode').append( 'window : </span><span class="testW"></span>\n');
	$('.testCode').append( 'html : </span><span class="testH"></span>\n');
	$('.testCode').append( 'body : </span><span class="testB"></span>\n');
	$('.testCode').append( 'wrapper : </span><span class="testWH"></span>\n');
	$('.testCode').append( 'content : </span><span class="testC"></span>\n');
	$('.testCode').append( '<span>Result : </span><span class="testResult"></span>\n');
	$('.testCode').append( 'popCont  : ' + parseInt( $('.popCont ').css('padding-bottom') ) );*/
	//$(window).scrollTop()) == height || Math.floor($(window).scrollTop()) == height;
	var htmlSTR = $('html').attr('class')
	$('.testCode').append( '\ntestCur : </span><span class="testCurrent">'+ htmlSTR +'</span>');
	$('.testCode').append( '\ntestCur : </span><span class="testCurrent2"></span>\n');
}
/*
var testAppendItemCnt = 0;
function appendTestItem(){
	if( testAppendItemCnt <= 20 ){
		$('#content .testUL').append('<li style="heigth:50px; line-height:50px;">appendItem_'+testAppendItemCnt+'</li><li style="heigth:50px; line-height:50px;">appendItem_'+testAppendItemCnt+'</li><li style="heigth:50px; line-height:50px;">appendItem_'+testAppendItemCnt+'</li><li style="heigth:50px; line-height:50px;">appendItem_'+testAppendItemCnt+'</li><li style="heigth:50px; line-height:50px;">appendItem_'+testAppendItemCnt+'</li>');
	}
	testAppendItemCnt++;
}*/
 


