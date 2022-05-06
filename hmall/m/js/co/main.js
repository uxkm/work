$(function(){
    var navSlideList = $('.nav-slider a');
    var listWidth = 0;
    var $contentList = $('#cntWrap > section');

    // for (var i=0; i<navSlideList.length; i++) {
    //     listWidth += navSlideList.eq(i).outerWidth();
    // }
    // $('.nav-slider').css('width',listWidth);
    if ($('.nav-slider li').hasClass('currrent')){
        console.log($('.nav-slider li.current'));
        navCenter($('.nav-slider li.current'))
    }
    
    navSlideList.click(function(){
        var target = $(this).parent();
        navSlideList.parent().removeClass('current')
        target.addClass('current');
        navCenter(target);
        showContentByIndex(target.index())
    })

    function showContentByIndex(index) {
        $contentList.hide().eq(index).show();
        if($contentList.eq(index).find('[data-modules-slick]').length !== 0){
            $contentList.eq(index).find('[data-modules-slick]').slick('setPosition')
        }
    }
    
    function navCenter(target){
        var navwrap = $('.nav-scroller');
        var navList = navwrap.find('.nav-slider li');
        var winHarf = $('body').width()/2;
        var pos;
        var wrapWidth=0;
        var targetLeft = 0;
        navList.each(function(){
            wrapWidth += $(this).outerWidth() + 20;
        })
        for (var i=0; i<target.index(); i++) {
            targetLeft += navList.eq(i).outerWidth();
        }
        if ((targetLeft + target.outerWidth()/2) <= winHarf) { // left
            pos = 0;
        } else if ((wrapWidth - targetLeft - target.outerWidth()/2) <= winHarf) { //right
            pos = wrapWidth-$('body').width();
        } else {
            pos = targetLeft - winHarf + (target.outerWidth()/2);
        }
        
        setTimeout(function(){
            $('.nav-scroller').animate({scrollLeft:pos},300)
        }, 200);
    }

    // var mainNav = $(".nav");
    // var navOffset = mainNav.offset();
    // $( window ).on("scroll touchmove mousewheel", function() {
    //     $(document).scrollTop() > navOffset.top ? mainNav.addClass("fixed") : mainNav.removeClass("fixed");
    // });
})