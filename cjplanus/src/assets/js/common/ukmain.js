var $ukWin, $uKBody;
$ukWin = $(window);
$uKBody = $("body");
$(function(){
  $('.top_logo').find('img').attr('src', '/images/base/logo_planus_white.png');

  ukResize();
  allMenuSet();
  skipTopClick();

  if (!$uKBody.hasClass("pcweb")) {
    $(".skip_toggle").on("click", function(i, e) {
      $(".quick_menu").toggleClass("toggle_btn");
      return false;
    });
  }
  
  $(".skip_toggle").on("click", function(i, e) {
    $(".quick_menu").toggleClass("toggle_btn");
  });
  $('.lt-ie10 body').append('<div class="no-ieinfo"><a href="https://www.microsoft.com/ko-kr/edge?browser=IE11&form=MA13DL&OCID=MA13DL&r=1"></a></div>');
});
$(window).on('load resize', function (){
  ukResize();
}).trigger('load resize');

$(window).on("scroll", function(e) {
  scBtmAction();
}).trigger("scroll");

// Resize Option
function ukResize() {
  var sSize = 1060;
  var $body = $("body");
  if ($(window).width() >= sSize) {
    $body.addClass("pcweb").removeClass("moweb");
    $('.ukindex .top_logo').find('img').attr('src', '/images/base/logo_planus_white.png');
  } else {
    $body.removeClass("pcweb").addClass("moweb");
    $('.ukindex .top_logo').find('img').attr('src', '/images/base/logo_planus.png');
  }
}

// All Menu Control
function allMenuSet() {
  var $allMenuWrap = $("#allMenu");
  var $allBtnOpen = $(".ibtn_allmenu");
  var $allBtnClose = $allMenuWrap.find(".ibtn_close");
  var $bgMask = $(".bgmask");
  if ($allMenuWrap.length) {
    $allBtnOpen.on("click", function() {
      $uKBody.addClass("is-allmenu-opened");
    });
    $allBtnClose.on("click", function() {
      $uKBody.removeClass("is-allmenu-opened");
    });
    $bgMask.on("click", function() {
      $uKBody.removeClass("is-allmenu-opened");
    });
  }
}
function scBtmAction() {
  var scrolltop = $(document).scrollTop();
  var height = $(document).height();
  var height_win = $(window).height();
  if ( $(window).scrollTop() >= $(document).height() - $(window).height() - $(".footerwrap").height() )  $(".quick_menu").addClass("btm");
  else  $(".quick_menu").removeClass("btm");
}
// Quick Menu Click Animaition
function skipTopClick() {
  $(document).on("click", ".skip_top", function(e) {
    if ($(window).width() >= 1060) {
      $('.uk_fp_gotop').click();
    } else {
      e.stopImmediatePropagation();
      $("html, body").animate({ scrollTop: 0 }, "300");
    }
    return false;
  });
  $(".skip_toggle").on("click", function(i, e) {
    $(".quick_menu").toggleClass("toggle_btn");
  });
}


// FullPage Setting
function ukFullFunc(){
  $('.uk_full_page').ukFullpage({
    navTooltip : false, 
    eachNameArr : ['Section1', 'Section2', 'Section3', 'Section4'],
    speed : 500,
    prevNextButtons : false,
    startIndex : 0,
    unFullPage:false,
  });
}
// ukFullFunc();

// Main Visual
function mainVisualFunc(){
	var ukVisual = $('.visual_slider');
	ukVisual.on('init', function(event, slick, currentSlide) {
		var cur = $(slick.$slides[slick.currentSlide]),
		next = cur.next(),
		prev = cur.prev();
		prev.addClass('sprev');
		next.addClass('snext');
		cur.removeClass('snext').removeClass('sprev');
		slick.$prev = prev;
		slick.$next = next;
		$(".visual_item").eq(0).addClass("active");
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		// console.log('beforeChange');
		var cur = $(slick.$slides[nextSlide]);
		// console.log(slick.$prev, slick.$next);
		slick.$prev.removeClass('sprev');
		slick.$next.removeClass('snext');
		next = cur.next(),  
		prev = cur.prev();
		prev.addClass('sprev');
		next.addClass('snext');
		slick.$prev = prev;
		slick.$next = next;
		cur.removeClass('snext').removeClass('sprev');
	}).on('afterChange', function(event, slick, currentSlide){ 
		var i = (currentSlide ? currentSlide : 0) + 1;
		var idx = slick.currentSlide + 1;
		$(".visual_item").removeClass("active"); 
		$(this).find(".visual_item").eq(currentSlide).addClass("active");
	});
	ukVisual.slick({
		fade: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 300,
    lazyLoad: 'progressive',
		dots: true,
		cssEase: 'linear',
		appendDots:$(".dots_clone"),
		pauseOnHover: false,
	});
}
mainVisualFunc();

// Notice Rolling
function mainNtcFunc(){
  $(".ntclist").slick({
    vertical: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
  });
  $('.ntcgroup').find('.controls .btn_prev').on('click', function(){
    $('.ntclist').slick('slickPrev');
  })
  $('.ntcgroup').find('.controls .btn_next').on('click', function(){
    $('.ntclist').slick('slickNext');
  })
}
mainNtcFunc();

// 3D Slider
function main3DFunc(){
	var uk3d = $('.uk_dslider');
	uk3d.on('init', function(event, slick, currentSlide) {
		var cur = $(slick.$slides[slick.currentSlide]),
		next = cur.next(),
		next2 = cur.next().next(),
		prev = cur.prev(),
		prev2 = cur.prev().prev();
		prev.addClass('slick-sprev');
		next.addClass('slick-snext');  
		prev2.addClass('slick-sprev2');
		next2.addClass('slick-snext2');  
		cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
		slick.$prev = prev;
		slick.$next = next;
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		// console.log('beforeChange');
		var cur = $(slick.$slides[nextSlide]);
		// console.log(slick.$prev, slick.$next);
		slick.$prev.removeClass('slick-sprev');
		slick.$next.removeClass('slick-snext');
		slick.$prev.prev().removeClass('slick-sprev2');
		slick.$next.next().removeClass('slick-snext2');
		next = cur.next(),  
		prev = cur.prev();
		//prev2.prev().prev();
		//next2.next().next();
		prev.addClass('slick-sprev');
		next.addClass('slick-snext');
		prev.prev().addClass('slick-sprev2');
		next.next().addClass('slick-snext2');
		slick.$prev = prev;
		slick.$next = next;
		cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
	});

	uk3d.slick({
		speed: 500,
		arrows: true,
		dots: false,
		focusOnSelect: true,
		prevArrow: '<button class="btn_sprev"><span class="sr-only">prev</span></button>',
		nextArrow: '<button class="btn_snext"><span class="sr-only">next</span></button>',
		infinite: true,
		centerMode: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		autoplay: true,
		autoplaySpeed: 3000,
		swipe: true,
		customPaging: function(slider, i) {
			return '';
		},
	});
}
main3DFunc();

// Case Slider
function mainCaseFunc(){
	var $caseSlider = $(".caseslider");
	var $caseList = $(".caselist");
	$caseList.on('init', function(event, slick, currentSlide) {
		var cur = $(slick.$slides[slick.currentSlide]),
		next = cur.next(),
		next2 = cur.next().next(),
		prev = cur.prev(),
		prev2 = cur.prev().prev();
		prev.addClass('slick-sprev');
		next.addClass('slick-snext');  
		prev2.addClass('slick-sprev2');
		next2.addClass('slick-snext2');  
		cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
		slick.$prev = prev;
		slick.$next = next;
	}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
		// console.log('beforeChange');
		var cur = $(slick.$slides[nextSlide]);
		// console.log(slick.$prev, slick.$next);
		
		slick.$prev.removeClass('slick-sprev');
		slick.$next.removeClass('slick-snext');
		slick.$prev.prev().removeClass('slick-sprev2');
		slick.$next.next().removeClass('slick-snext2');
		next = cur.next(),  
		prev = cur.prev();
		//prev2.prev().prev();
		//next2.next().next();
		prev.addClass('slick-sprev');
		next.addClass('slick-snext');
		prev.prev().addClass('slick-sprev2');
		next.next().addClass('slick-snext2');
		slick.$prev = prev;
		slick.$next = next;
		cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
	}).on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
		var i = (currentSlide ? currentSlide : 0) + 1;
		var idx = slick.currentSlide + 1;
		$caseSlider.find('.controls .current').text( idx );
		$caseSlider.find('.controls .total').text( slick.slideCount );
	});
	$caseList.slick({
		fade: false,
		dots: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 8000,
		speed: 10,
		centerMode: true,
		focusOnSelect: true,
		pauseOnHover: false,
		slidesPerRow: 1,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		useTransform: true,
		swipe: true,
    lazyLoad: 'progressive',
		cssEase: 'linear',
		customPaging: function(slider, i) {
			return '';
		},
	});
	$caseSlider.find('.controls .btn_prev').on('click', function(){
		$caseList.slick('slickPrev');
	})
	$caseSlider.find('.controls .btn_next').on('click', function(){
		$caseList.slick('slickNext');
	})
}
mainCaseFunc();

// FAQ Slider
function mainFaqFunc(){
  $('.flist').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    var idx = slick.currentSlide + 1;
    $('.faqlist').find('.controls .current').text( idx );
    $('.faqlist').find('.controls .total').text( slick.slideCount );
  });
  if( $('.flist').find('.faq_item').length >= 3 ){
    $('.flist').slick({
      infinite: true,
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      responsive: [
        {
          breakpoint: 1219,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
    });
  } else {
    $('.flist').slick('unslick');
  }
  
  $('.faqlist').find('.controls .btn_prev').on('click', function(){
    $('.flist').slick('slickPrev');
  })
  $('.faqlist').find('.controls .btn_next').on('click', function(){
    $('.flist').slick('slickNext');
  })
}
mainFaqFunc();
function mainFaqMoFunc(){
  $('.flist').filter('.slick-initialized').slick('unslick');
}