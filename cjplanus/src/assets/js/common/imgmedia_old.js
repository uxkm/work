// Card Slider 
function cardSliderZoom(){
  var _winSize = $(window).width();
  var _body = $('body');
  var _moSize = 1060;
  
  var card_section = '.cardwrap_section';
  var card_wrap = '.cardwrap';
  var card_slider = '.cardslider';
  var card_item = '.card_item';
  var slick_cloned = '.slick-cloned';

	var ibtn_zoom = '.moset';
	var zoom_btn = '.pcset';
	var _zoom_btn = $(card_section).find('.zoom_btn');

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

	if( _winSize <= _moSize ){
    $(card_section).addClass('moset').removeClass('pcset');
    $(card_slider).filter('.slick-initialized').slick('unslick');
		
  } else {
    $(card_section).addClass('pcset').removeClass('moset');
    if( $('.pcset').find(card_item).length >= 3 ){
      $(card_slider).not('.slick-initialized').slick( cardOpt(true) );
      $(card_wrap).removeClass('palen');
    } else {
      $(card_slider).not('.slick-initialized').slick( cardOpt(false) );
      $(card_wrap).addClass('palen');
    }
  }
  
	_zoom_btn.off('click.zoom_btn').on('click.zoom_btn', function(){
		var idx, img_length, pcidx, pcimg_length, moidx, moimg_length;
		var this_class = $(this).parents(card_section).attr('class');
		moidx = Number( $(this).parents(card_item).index() );
		moimg_length = $('.moset').find(card_item).length;
		pcidx = Number( $(this).parents(card_item).attr('data-slick-index') );
		pcimg_length = $('.pcset').find(card_item).not(slick_cloned).length;
		// console.log(this_class);
    _body.addClass('sclock');

		// Mobile UI
    if( this_class.match(ibtn_zoom) ){
      idx = $(this).parents('.card_item').index();
      img_length = $(card_slider).children().length;
      console.log( 'mobile', idx, img_length );
		}
    // PC UI
    else if( this_class.match(zoom_btn) ){
      idx = Number( $(this).parents(card_item).attr('data-slick-index') );
      img_length = $(card_wrap).find(card_item).not(slick_cloned).length;
      console.log( 'pc', idx, img_length );
		}

		// slide 생성
    _body.append(
			'<div class="img_zoom_wrap cardzoom">' +
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
      var src = null;
      var append_el = null;
      var target, alt;
      // Mobile UI
      if( this_class.match(ibtn_zoom) ){
        var m_target = $(card_wrap+' '+card_item).eq(i);
        target = $(card_slider).children().eq(i).find('.img');
        alt = m_target.find('figcaption strong').text();
			}
      // PC UI
      else if( this_class.match(zoom_btn) ){
        var p_target = $(card_wrap+' '+card_item).not(slick_cloned).eq(i);
        target = p_target.find('.img');
        alt = p_target.find('figcaption strong').text();
			}

      // 이미지, youtube 일 경우
      if( target.children().is('img') ){
        src = target.find('img').attr('src');
        // youtube 영상
        if( src.match('youtube') ){
          var video_id = target.find('img').attr('data-youtube-id');
					append_el =
						'<div class="youtube_wrap">' +
						'<iframe src="https://www.youtube.com/embed/'+video_id+'?rel=0&wmode=opaque&autohide=1&enablejsapi=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
						'</div>';
				}
        // 일반 이미지
        else{
          append_el = '<img src="'+src+'" width="100%" height="auto">';
				}
			}
      // video 일 경우
      else if( target.children().is('video') ){
        src = target.find('video source').attr('src');
        append_el =
					'<video controls>' +
						'<source src="img/sample.mp4" type="video/mp4">' +
						'Sorry, your browser doesn\'t support embedded videos.' +
					'</video>';
			}

      _zoom_slide.append(
				'<figure class="img_box">' +
					'<div class="img">'+append_el+'</div>' +
					'<figcaption>'+alt+'</figcaption>' +
				'</figure>');
		}
    _zoom_slide.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      // _slide_paging.html('<b>'+i+'</b> / '+ slick.slideCount);
			if( idx >= img_length ) idx=idx % img_length;
			_slide_paging.html('<span class="number"><b class="current">' +i+ '</b>'+ '<i class="total">' +slick.slideCount+ '</i></span>');
    });
    _zoom_slide.slick({
      initialSlide : idx,
		});
    _img_zoom_wrap.addClass('active');
		// if( idx >= img_length ) idx=idx % img_length;
    _slide_paging.find('.current').text(idx+1);

		// ifreme 좌/우 버튼 클릭시 Youtube 일시정지
		_img_zoom_wrap.find('.slick-arrow').on('click', function() {
			$('iframe')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
		});

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
	})
}