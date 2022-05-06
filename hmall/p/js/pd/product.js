$(function(){
  $(".fd-detail .que-mark , .sum-price .que-mark , .today-buy .que-mark").on("click",function(){
    $(this).closest('.tooltip-box').toggle();
  });
  // $(".btn-close").on("click",function(){
  //   $(this).closest('.tooltip-box').hide();
  // });
  $('#addSlider').on('click', 'button', function(e){
    $(this).remove();
    $('#addSlider').append(slider);
    $('body').commonUi('initLibray');
  });
  $('.ui-dropdown').on('show.hui.dropdown', function(){
		console.log('show')
	  });
	$('.ui-dropdown').on('hide.hui.dropdown', function(){
		console.log('hide')
  });
  // $(".ui-tab a").on('click',function(){ /* 임시 */
  //   var contID = $(this).attr('href');
  //   var contCS = $(this).index() + 1;
  //   var scrTop = $(contID).offset().top - 100;
    
  //   console.log(contCS);
  //   $('html,body').stop().animate({scrollTop:scrTop}, '500');
  //   $('.tab-pane').removeClass('product02 product03 product04');
  //   $('.tab-pane').addClass('product'+contCS);
  // });
  $('.util-option.sticky').sticky({
    "padding": -100,
    "breakPoint" : ".product-detail-content"
  });
  // $('.option-deal-wrap .util-option.sticky').sticky({
  //   "padding": -100,
  //   "breakPoint" : ".product-detail-content"
  // });

  // $('.review-more-btn').on('click', function(){
  //   $('.review-more-btn .close-more').addClass('open');
  //   $('.review-more-btn .open-more').addClass('open');
  //   $('.user-rate').toggleClass('open');
  //   $('.review-txt').toggleClass('open');

  //   if($('.user-rate').hasClass('open') ||  $('.review-txt').hasClass('open')){
  //     $('.review-more-btn .close-more').addClass('open');
  //   }else{
  //     $('.review-more-btn .close-more').removeClass('open');
  //     $('.review-more-btn .open-more').removeClass('open');
  //   }
  // });
})
