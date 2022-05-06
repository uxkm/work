/* UIComponent start ********************************************************************/
var UIComponent = UIComponent||{};

/* UIComponent.common start */
UIComponent.common = {};

/* UIComponent.common.scrollManager start*/
UIComponent.common.scrollManager = function(prop){
    var _self = this;
    var _selector = prop ? prop["selector"] : window
    var currentY = -1, moveY = -1, currentX = -1, moveX = -1, direction;

    //public properties
    _self.$selector = $(_selector);
    _self._disabeld = false;
    _self._events = [];

    _self.$selector.on('touchstart',function(e){
        if(_self._disabeld) {
            return
        }
        currentY=e.originalEvent.changedTouches[0].screenY;
        currentX=e.originalEvent.changedTouches[0].screenX;
    });

    _self.$selector.on('mousewheel',function(e){
        if(_self._disabeld) {
            return
        }

        if(e.originalEvent.deltaY < 10){
            e.delta = 1;
            e.direction = "up";
        } else {
            e.delta = -1;
            e.direction = "down";
        }

        _self._events.forEach(function(fn){
            if(typeof fn === 'function'){
                fn(e)
            }
        })
    })

    _self.$selector.on('touchmove',function(e){
        if(_self._disabeld) {
            return
        }

        moveY=e.originalEvent.changedTouches[0].screenY;
        if(currentY === -1) currentY = moveY

        console.log("UIComponent.common.scrollManager -> direction", direction)
        if(currentY > moveY && direction === 'vertical'){
            e.delta = 1;
            e.scroll = "down";
        } else if(currentY < moveY && direction === 'vertical'){
            e.delta = -1;
            e.scroll = "up";
        }

        if(!direction){
            moveX=e.originalEvent.changedTouches[0].screenX;
            if(currentX === -1) currentX = moveX

            const absX = Math.abs(Math.abs(currentX) - Math.abs(moveX))
            const absY = Math.abs(Math.abs(currentY) - Math.abs(moveY))

            if(absX > 0 || absY > 1){
                direction = absX >= absY ? 'horizontal' : 'vertical'
            }
        }
        currentY = moveY;

        _self._events.forEach(function(fn){
            if(typeof fn === 'function'){
                fn(e)
            }
        })
    });

    _self.$selector.on('touchend',function(e){
        direction = undefined
    })
}
UIComponent.common.scrollManager.prototype.disable = function(){
    this._disabeld = true;
    this.$selector.addClass('hidden')
}
UIComponent.common.scrollManager.prototype.enable = function(){
    this._disabeld = false
    this.$selector.removeClass('hidden')
}
UIComponent.common.scrollManager.prototype.addScrollEventListener = function(fn){
    this._events.push(fn)
}
/* UIComponent.common.scrollManager end*/

/* UIComponent.common end */


/* UIComponent.mobile start */
UIComponent.mobile = {};

/* UIComponent.mobile.slick start */
UIComponent.mobile.slick = function(prop){
    var _self = this;
    var _selector = prop['selector'];
    /*** type */
    /* centerauto : Auto, Total Count */
    /* noncount : Non count, center */
    /* leftalign : Non count, left */
    /* countauto : Auto, Current Count/Total Count */
    /* totalcurrent : Current Count/Total Count */
    /* leftright : 좌/우버튼, Dot Paging */
    /* dotpaging : Dot Paging */
    var _type = prop['type'];
    var _footerSelector = prop['footer']
    
    //public properties
    _self._slick;
    _self._selector;
    _self.$footerSelector = $(_footerSelector);

    
    if( $(_selector).find(".slick-slide").length == 1 ) {
        //$(_selector).off("init reInit afterChange");
        $(_selector).slick("unslick");
    }

    function init(){
        addOn(_type)
        setSlick(_type)
    }

    function addOn(option){
        var addOnFunc = _self.slickAddOns[option]
        if(typeof addOnFunc === 'function'){
            addOnFunc()
        }
    }

    function setSlick(option){
        _self._slick = $(_selector).slick(_self.slickOptions[option || 'default']); 
    }
    init()
};

UIComponent.mobile.slick.prototype.slickOptions = {
    centerauto : {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    },
    noncount : {
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    },
    leftalign : {
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
    },
    countauto : {
        dots: false,
        arrows: false,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    },
    totalcurrent : {
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    },
    leftright : {
        dots: true,
        arrows: true,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    },
    dotpaging : {
        dots: true,
        arrows: false,
        autoplay: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    },
    default : {
        speed: 500,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
    }
}
UIComponent.mobile.slick.prototype.slickAddOns = {
    centerauto : function(){
        $(this._selector).on("init reInit",function(e,slick){
            try {
                this.$footerSelector.find('strong').html(slick.$slides.length);
            } catch(m){
                console.log(m);
            }
        });
    },
    countauto : function(){
        $(this._selector).on("init reInit afterChange",function (event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            try {
                this.$footerSelector.html('<em>' + i + '</em>' + '/' + '<strong>' + slick.$slides.length + '</strong>');
            } catch(m){
                console.log(m);
            }
            
        });
    },
    totalcurrent : function(){
        $(this._selector).on("init reInit afterChange",function (event, slick, currentSlide, nextSlide){
            var i = (currentSlide ? currentSlide : 0) + 1;
            try {
                this.$footerSelector.html('<span>전체</span><em>' + i + '</em>' + '/' + '<strong>' + slick.$slides.length + '</strong>');
            } catch(m){
                console.log(m);
            }
            
        });
    }
}
UIComponent.mobile.slick.prototype.moveToByIndex = function(index){
    this._slick.slickGoTo(index)
}

/* UIComponent.mobile.swiper start */
UIComponent.mobile.swiper = function(prop){

}
/* UIComponent.mobile.swiper end */


/* UIComponent.mobile.slick end */

/* UIComponent.mobile.tabmenu start */
UIComponent.mobile.tabmenu = function(prop){
    console.log("UIComponent.mobile.tabmenu");

    var _self = this;
    var _selector = prop['selector'];
    var $selector = $(_selector);
    // var _id = $(_selector).data('id');

    /*** option */
    /* scroll : boolean, default false */
    /* name : 탭메뉴 명 */
    /* index : 탭메뉴 첫 활성화 index */
    var _scroll = prop['scroll']||false;
    
    var _menu = $selector.find('.tabmenu > li > a');
    var _contents = [];
    var _startIndex = prop['index'];

    function init(){
        setContents();
        delegateClick();
        _self.setIndex(_startIndex);

        if(_scroll){
            $selector.find('.tabmenu').addClass("scroll");
        }

        $selector.click(function(e){
            e.stopPropagation();
            e.preventDefault();
        })
    };

    function getTotal(){
        return $selector.find('.tabmenu > li > a').length //dynamic
    }

    function delegateClick(){
        $selector.on('click', '.tabmenu > li > a', function(e){//dynamic
            e.stopPropagation();
            e.preventDefault();
            onClickButtonHandler(e, this);
        })
    };

    function setContents(){
        _contents = $selector.find('.tabcnt');
    };

    function view(index){
        _menu.closest('li')
            .removeClass('selected')
            .attr('aria-selected' , false)
            .eq(index)
            .addClass('selected')
            .attr('aria-selected' , true);
        _contents
            .removeClass('selected')
            .attr('aria-selected' , false)
            .eq(index)
            .addClass('selected')
            .attr('aria-selected' , true);
    };

    /* handler */
    function onClickButtonHandler(e,target){
        console.log("onClickButtonHandler -> e", e)
        var index = $(target).data('index');
        if(typeof _beforeCallback === 'function') _beforeCallback(e, _self)
        _self.setIndex(index);
        if(typeof _afterCallback === 'function') _afterCallback(e, _self)
    }

    /* property */
    _self.index = 0;
    _self.name = prop['name'];
    
    /* method */
    _self.setIndex = function(index){
        if(index > getTotal() - 1){
            return;
        }
        _self.index = index
        view(index);
    };

    //private properties
    var _readyCallback = null;
    var _beforeCallback = null;
    var _afterCallback = null;

    _self.handle = function(eventName, callback){
        switch(eventName){
            case 'ready' :
                if(typeof callback === 'function'){
                    _readyCallback = callback
                }
                typeof _readyCallback === 'function' && callback(_self, _self.index)
                break;
            case 'before' :
                if(typeof callback === 'function'){
                    _beforeCallback = callback
                }
                break;
            case 'after' :
                if(typeof callback === 'function'){
                    _afterCallback = callback
                }
                break;
        }
        return _self
    }

    init();

    return {
        handle : _self.handle
    }
};

/* UIComponent.mobile.tabmenu end */

/* UIComponent.mobile.floatingmenu start */
UIComponent.mobile.floatingmenu = function(prop){
    var _self = this;
    var _selector = prop['selector'];
    var _option = prop['option'];
    var _setTimeout = null;
    var _setTimer = (_option != undefined && _option != null)?_option.setTimer || 5000 : 5000;
    var $dom = $(_selector)

    function init(){
        setTimeoutEvent();
        setButtonEvent();
    }

    function setTimeoutEvent(){
        if(_setTimeout != null){
            clearTimeout(_setTimeout);
        }
        _setTimeout = setTimeout(function(){
            console.log("setTimeout");
            _self.hide();
        },_setTimer);
    }

    function setButtonEvent(){
        $dom.find('.font-resize').on("click.floatingmenu",function(e){
            setTimeoutEvent();
        });

        $dom.find('.btn-return').on("click.floatingmenu",function(e){
            setTimeoutEvent();
        });

        $dom.find('.btn-topmove').on("click.floatingmenu",function(e){
            setTimeoutEvent();
        });
    }

    /* property start */
    _self.visibility = true;
    _self.name = "floatingmenu";

    /* method start */
    _self.show = function(){
        _self.visible = true;
        $dom.css("display","block");
        $dom.find('.font-resize').fadeIn('slow');
        $dom.find('.btn-return').fadeIn('slow');
        $dom.find('.btn-topmove').fadeIn('slow');
    }

    _self.hide = function(){
        _self.visible = false;
        $dom.find('.font-resize').fadeOut('slow');
        $dom.find('.btn-return').fadeOut('slow');
        $dom.find('.btn-topmove').fadeOut('slow');
    }

    _self.up = function(){
        _self.show();
        setTimeoutEvent();

        if( !$dom.hasClass("up") ){
            $dom.addClass("up");
            $dom.removeClass("down");
        }
    }

    _self.down = function(){
        _self.show();
        setTimeoutEvent();

        if( !$dom.hasClass("down") ){
            $dom.removeClass("up");
            $dom.addClass("down");
        }
    }

    init();
    return {
        up : _self.up,
        down : _self.down,
    }
};
/* UIComponent.mobile.floatingmenu end */

/* UIComponent.mobile.navTabBar start */
UIComponent.mobile.navTabBar = function(prop){
    var _self = this;
    var _selector = prop['selector'];
    var _option = prop['option'];
    var $dom = $(_selector)

    function init(){
        addEventHandler()
    }

    function addEventHandler(){
        $dom.on('click', 'li a', function(e){
            var href = $(this).closest('a').attr('href')
            if(href === 'javascript:;' || href === '#' || !href){
                e.preventDefault()
                if(typeof clickEventHandler === 'function'){
                    clickEventHandler(e)
                }
            }
        })
    }

    init();

    //private properties
    var clickEventHandler = null

    _self.up = function(){
        if(!$($dom).hasClass("fixed")){
            $($dom).addClass("fixed");
        }
    }

    _self.down = function(){
        $($dom).removeClass("fixed");
    }

    _self.handle = function(eventName, callback){
        switch(eventName){
            case 'click' :
                if(typeof callback === 'function'){
                    clickEventHandler = callback
                }
                break; 
        }
    }

    return {
        up : _self.up,
        down : _self.down,
        handle : _self.handle
    }
};
/* UIComponent.mobile.navTabBar end */

/* UIComponent.mobile end */

/* UIComponent end ********************************************************************/


$(document).ready(function(){
    var windowScroll = new UIComponent.common.scrollManager({selector : 'html, body'});

    var floatingMenu = new UIComponent.mobile.floatingmenu({
        'selector': '.floating-menu',
        'option':{
            'setTimer':5000,        // setTimeout 시간
        }
    });

    var navTabBar = new UIComponent.mobile.navTabBar({
        'selector': '.nav-tabbar'
    })

    navTabBar.handle('click', function(e){
        var $a = $(e.target).closest('a');
        var $li = $a.closest('li')

        if($li.hasClass('menu-cate')){ //전체 카테고리 메뉴 열기
            $(".sidebar-area").addClass("active");
            windowScroll.disable()
        }

        if($li.hasClass('menu-onair')){ //On Air 리스트 열고 닫기
            $a.toggleClass("close");
            var insertTxt = null;
            var closed = $a.hasClass("close");

            if(closed){
                insertTxt = "On Air 닫기";
                windowScroll.disable()
            }else{
                insertTxt = "On Air";
                windowScroll.enable()
            }
            $a.children("span").text(insertTxt);
            $a.next(".onairwrap").toggleClass("active");
        }
    })

    windowScroll.addScrollEventListener(function(e){
        if(e.direction === 'up'){
            floatingMenu.up();
            navTabBar.up();
        } else if(e.direction === 'down'){
            floatingMenu.down();
            navTabBar.down();
        }
    })
    
    /* 임시 처리 */
    $(".sidebar-area .btn-close").click(function(){ //전체 카테고리 메뉴 닫기
        $(".sidebar-area").removeClass("active");
        windowScroll.enable()
    });

   
    $(".recentwrap .btn-close").click(function(){ //최근 본 쇼핑 닫기
        $(".recentwrap").removeClass("active");
    });

    $(".popup-layerwrap button, .popup-layerwrap a").click(function(){ //열려 있는 팝업 닫기 (버튼이나 링크 클릭시 닫힘)
        $(".popup-layerwrap").removeClass("active");
    });
    
    $(".btn-like").on("click",function(){ // 찜하기
        var insertTxt = null;
        $(this).toggleClass("active");
        if($(this).hasClass("active")){
            insertTxt = "찜하기 완료";
        }else{
            insertTxt = "찜하기";
        }
        $(this).children("span").text(insertTxt);
    });

    $(".btn-arrange").on("click",function(){ // 리스트 정렬
        if($(this).hasClass("col1")){
            $(this).parents(".arrange").addClass("arr2").removeClass("arr1");
            $(".itemlist .pdwrap").removeClass("pdgrid").addClass("pdlist");
        }else if($(this).hasClass("col2")){
            $(this).parents(".arrange").addClass("arr1").removeClass("arr2");
            $(".itemlist .pdwrap").removeClass("pdlist").addClass("pdgrid");
        }
    });

    $(".footer-company").on("click",function(){
        $(this).toggleClass("active");
        $(this).next(".footer-info").toggleClass("active");
    });

    $(".menu-recent").click(function(){ //최근 본 쇼핑 열기
        $(".recentwrap").addClass("active");
        windowScroll.disable()
    });

    $(".recentwrap .btn-close").click(function(){ //최근 본 쇼핑 닫기
        $(".recentwrap").removeClass("active");
        windowScroll.enable()
    });

    accstyleAction();
    keyboardAction();
    /* //임시 처리 */

});


/* Bottom Tab Bar Navigation 
function navBarFixed() { 
    var lastScrollTop = 0;
    var modeType;
    $(document).width() > $(document).height() ? modeType = "portrait" : modeType = "landscape";
    $(window).scroll(function(e){
        var scTop = $(this).scrollTop();
        var scMode = $(document).width() > $(document).height();
        scMode ? sModeType = "portrait" : sModeType = "landscape";
        if(sModeType!=modeType) { // Mode Check
            modeType = sModeType;
            return false;
        }
        if(scTop - lastScrollTop > 150) return false;
        scTop < lastScrollTop ? $('.nav-tabbar').addClass('fixed') : $('.nav-tabbar').removeClass('fixed');
        lastScrollTop = scTop;
    });
};
*/
/* Accordian Style Type1 */
function accstyleAction(){
    $('.accstyle').each(function (i, e) {
        var accItem = $(e).find('.accitem');
        var accTrigger = $(e).find('h3>.accordion-trigger');
        var accPanel = $(e).find('.accordion-panel');
        accTrigger.on('click touchstart', function () {
            $(this).parent().parent().addClass('selected').siblings().removeClass('selected');
            return false;
        });
    });
}
/* Portrait & Landscape Check */
function modeOrientation(){
    $(window).on("orientationchange", function(event){
        if(window.matchMedia("(orientation: portrait)").matches){
            // 세로 모드 (평소 사용하는 각도)
        }else if(window.matchMedia("(orientation: landscape)").matches){
            // 가로 모드 (동영상 볼때 사용하는 각도)
        }
    });
};
/* keyboard open/close */
function keyboardAction(){
    $(".btn-keyborad").each(function(i, e){
        var keyBoard = $(e);
        keyBoard.on("click", function(){
            $(".pckeyboard").toggle();
        })
    })
}