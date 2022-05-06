// Card Slider 
function cardSliderZoom(){
  var _winSize = $(window).width();
  var _body = $('body');
  var _moSize = 1060;

  var card_wrap = '.cardwrap_section'; // 슬라이드
  var cardbox = '.cardwrap';
  var cardslider = '.cardslider';      // 슬라이드
  var card_item = '.card_item';        // 슬라이드
  var slick_cloned = '.slick-cloned';  // 슬라이드
  var slick_initialized = '.slick-initialized';  // 슬라이드
  var zoom_btn = 'zoom_btn';					 // 슬라이드
  var _slide_zoom_btn = $(card_wrap+' .'+zoom_btn);
  
	var cardOpt = function(cardMode){
		return {
			infinite: cardMode ? true : false,
			centerMode: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			// useTransform: false
		}
	}

	/* if( _winSize <= _moSize ){
    $(card_wrap).addClass('moset').removeClass('pcset');
    $(cardslider).filter('.slick-initialized').slick('unslick');
		
  } else {
    $(card_wrap).addClass('pcset').removeClass('moset');
    if( $('.pcset').find(card_item).length >= 3 ){
      $(cardslider).not('.slick-initialized').slick( cardOpt(true) );
      $(cardbox).removeClass('palen');
    } else {
      $(cardslider).not('.slick-initialized').slick( cardOpt(false) );
      $(cardbox).addClass('palen');
    }
  } */
  
	// slider zoom
  _slide_zoom_btn.on('click', function(){
    var _this = $(this);
    var _sub_card = _this.find('.sub_item');
    var idx = 0;
    var img_length = _sub_card.length + 1;

    _body.addClass('sclock');
    // slide 생성
    _body.append(
      '<div class="img_zoom_wrap card_subzoom">' +
      '<div class="zoom_slide_wrap">' +
      '<div class="zoom_slide"></div>' +
      '<p class="zoom_paging"></p>' +
      '</div>' +
      '<button type="button" class="zoom_slide_close"><i>슬라이드 닫기</i></button>' +
      '</div>');
    var _img_zoom_wrap = $('.img_zoom_wrap');
    var _zoom_slide_close = $('.zoom_slide_close');
    var _zoom_slide = $('.zoom_slide');
    var _slide_paging = $('.zoom_paging');

    for( i=0; i<img_length; i++ ){
      var src = '';
      var append_el = null;
      var target, alt;

      if( i === 0 ){
        target =  _this.find('> .img img');
        src = _this.find('> .img img').attr('src');
        alt = _this.find('figcaption strong').text();
      }
      else{
        target = _sub_card.eq(i-1).children();
        src = target.attr('src');
        alt = target.attr('alt');
      }

      // youtube 영상
      if( src.match('youtube') ){
        var video_id = target.attr('data-youtube-id');
        append_el =
          '<div class="youtube_wrap">' +
          '<iframe src="https://www.youtube.com/embed/'+video_id+'?rel=0&wmode=opaque&autohide=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
          '</div>';
      }
      // 일반 이미지
      else{
        append_el = '<img src="'+src+'" width="100%" height="auto">';
      }

      _zoom_slide.append(
        '<div class="img_box">' +
        '<div class="img">'+append_el+'</div>' +
        '<p class="alt_text">'+alt+'</p>' +
        '</div>');
    }
    _zoom_slide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      _slide_paging.html('<b>'+i+'</b> / '+ slick.slideCount);
    });
    _zoom_slide.slick({
      initialSlide : idx,
    });
    _img_zoom_wrap.addClass('active');

    if( idx >= img_length ) idx = idx % img_length;
    _slide_paging.find('b').text(idx+1);


    // slide 삭제
    _zoom_slide_close.on('click', function(){
      _body.removeClass('sclock');
      _img_zoom_wrap.removeClass('active');
      setTimeout(function(){
        _img_zoom_wrap.remove();
      }, 200); // .img_zoom_wrap의 transition 시간과 동일한 시간으로 해야함 (transition:.2s;)
    });
    $(document).keydown(function(e){
      var code = e.keyCode || e.which;
      if (code == 27) {
        _body.removeClass('sclock');
        _img_zoom_wrap.removeClass('active');
        setTimeout(function(){
          _img_zoom_wrap.remove();
        }, 200);
      }
      if (code ==32) {
        e.preventDefault();
      }
    });
    return false;
  });


  // slider
  var card_item_length = $(card_wrap).find(card_item).length;
  var respon_size = 1060; // 반응형 분기점
  $(window).on('resize', function() {
    var winW = $(window).width();

    // slick 비활성
    if (winW < respon_size) {
      if( $(cardslider).is(slick_initialized) ){
        $(cardslider).slick('unslick');
        $(card_wrap).addClass('moset').removeClass('pcset');
      }
      return;
    }

    // slick 활성
    if( !$(cardslider).is(slick_initialized) ){
      $(card_wrap).addClass('pcset').removeClass('moset');
      if( card_item_length > 3 ){
        $(cardbox).removeClass('palen');
        return $(cardslider).slick( cardOpt(true) );
        /* return $(cardslider).slick({
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }); */
      } else {
        $(cardbox).addClass('palen');
        return $(cardslider).slick( cardOpt(false) );
      }
    }
  }).trigger('resize');
}